import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RichTextEditor } from '@/components/ui/rich-text-editor';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Upload, X } from 'lucide-react';

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export default function NoticiaForm() {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [slug, setSlug] = useState('');
  const [slugManual, setSlugManual] = useState(false);
  const [resumo, setResumo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [autor, setAutor] = useState('');
  const [categoria, setCategoria] = useState('geral');
  const [destaque, setDestaque] = useState(false);
  const [status, setStatus] = useState('rascunho');
  const [imagemDestaque, setImagemDestaque] = useState('');
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState('');

  // Load existing news for editing
  const { data: noticia } = useQuery({
    queryKey: ['admin-noticia', id],
    queryFn: async () => {
      if (!id) return null;
      const { data, error } = await supabase
        .from('noticias_cobrapol')
        .select('*')
        .eq('id', parseInt(id))
        .single();
      if (error) throw error;
      return data;
    },
    enabled: isEditing,
  });

  useEffect(() => {
    if (noticia) {
      setTitulo(noticia.titulo);
      setSlug(noticia.slug);
      setSlugManual(true);
      setResumo(noticia.resumo || '');
      setConteudo(noticia.conteudo || '');
      setAutor(noticia.autor || '');
      setCategoria(noticia.categoria || 'geral');
      setDestaque(noticia.destaque || false);
      setStatus(noticia.status || 'rascunho');
      setImagemDestaque(noticia.imagem_destaque || '');
      setImagePreview(noticia.imagem_destaque || '');
    }
  }, [noticia]);

  // Auto-generate slug from title
  useEffect(() => {
    if (!slugManual && titulo) {
      setSlug(generateSlug(titulo));
    }
  }, [titulo, slugManual]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file
    if (!file.type.startsWith('image/')) {
      toast({ title: 'Arquivo inválido', description: 'Selecione uma imagem.', variant: 'destructive' });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast({ title: 'Arquivo muito grande', description: 'Máximo de 5MB.', variant: 'destructive' });
      return;
    }

    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('noticias-imagens')
      .upload(fileName, file);

    if (uploadError) {
      toast({ title: 'Erro no upload', description: uploadError.message, variant: 'destructive' });
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from('noticias-imagens')
      .getPublicUrl(fileName);

    setImagemDestaque(urlData.publicUrl);
    setImagePreview(urlData.publicUrl);
    setUploading(false);
    toast({ title: 'Imagem enviada com sucesso' });
  };

  const saveMutation = useMutation({
    mutationFn: async () => {
      const payload = {
        titulo,
        slug,
        resumo: resumo || null,
        conteudo: conteudo || null,
        autor: autor || null,
        categoria,
        destaque,
        status,
        imagem_destaque: imagemDestaque || null,
        data_publicacao: status === 'publicado' ? new Date().toISOString() : null,
      };

      if (isEditing && id) {
        const { error } = await supabase
          .from('noticias_cobrapol')
          .update(payload)
          .eq('id', parseInt(id));
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('noticias_cobrapol')
          .insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      toast({ title: isEditing ? 'Notícia atualizada!' : 'Notícia criada!' });
      navigate('/painel-editorial');
    },
    onError: (error: any) => {
      toast({ title: 'Erro ao salvar', description: error.message, variant: 'destructive' });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo || !slug) {
      toast({ title: 'Preencha o título', variant: 'destructive' });
      return;
    }
    saveMutation.mutate();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4 flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/painel-editorial')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-xl font-bold text-foreground">
          {isEditing ? 'Editar Notícia' : 'Nova Notícia'}
        </h1>
      </header>

      <main className="p-6 max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="titulo">Título *</Label>
            <Input
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Título da notícia"
              required
            />
          </div>

          {/* Slug */}
          <div className="space-y-2">
            <Label htmlFor="slug">Slug (URL)</Label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => { setSlug(e.target.value); setSlugManual(true); }}
              placeholder="titulo-da-noticia"
            />
            <p className="text-xs text-muted-foreground">Gerado automaticamente a partir do título. Edite se necessário.</p>
          </div>

          {/* Featured Image */}
          <div className="space-y-2">
            <Label>Imagem de Destaque</Label>
            <div className="flex items-start gap-4">
              {imagePreview ? (
                <div className="relative">
                  <img src={imagePreview} alt="Preview" className="h-32 w-48 object-cover rounded-md border border-border" />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2 h-6 w-6"
                    onClick={() => { setImagemDestaque(''); setImagePreview(''); }}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center h-32 w-48 border-2 border-dashed border-border rounded-md cursor-pointer hover:border-primary transition-colors">
                  <Upload className="h-6 w-6 text-muted-foreground mb-2" />
                  <span className="text-xs text-muted-foreground">
                    {uploading ? 'Enviando...' : 'Clique para enviar'}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    disabled={uploading}
                  />
                </label>
              )}
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <Label htmlFor="resumo">Resumo</Label>
            <Textarea
              id="resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
              placeholder="Breve resumo da notícia (aparece nos cards)"
              rows={3}
            />
          </div>

          {/* Content - Rich Text */}
          <div className="space-y-2">
            <Label>Conteúdo</Label>
            <RichTextEditor content={conteudo} onChange={setConteudo} />
          </div>

          {/* Author & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="autor">Autor</Label>
              <Input
                id="autor"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
                placeholder="Nome do autor"
              />
            </div>
            <div className="space-y-2">
              <Label>Categoria</Label>
              <Select value={categoria} onValueChange={setCategoria}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="geral">Geral</SelectItem>
                  <SelectItem value="institucional">Institucional</SelectItem>
                  <SelectItem value="legislacao">Legislação</SelectItem>
                  <SelectItem value="eventos">Eventos</SelectItem>
                  <SelectItem value="seguranca">Segurança</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Featured & Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Switch id="destaque" checked={destaque} onCheckedChange={setDestaque} />
              <Label htmlFor="destaque">Notícia em Destaque</Label>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rascunho">Rascunho</SelectItem>
                  <SelectItem value="publicado">Publicado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-4 border-t border-border">
            <Button type="submit" disabled={saveMutation.isPending}>
              {saveMutation.isPending ? 'Salvando...' : isEditing ? 'Salvar Alterações' : 'Criar Notícia'}
            </Button>
            <Button type="button" variant="outline" onClick={() => navigate('/painel-editorial')}>
              Cancelar
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
