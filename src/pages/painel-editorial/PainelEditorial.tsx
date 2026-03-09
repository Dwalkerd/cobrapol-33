import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Plus, Pencil, Trash2, LogOut, Star } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function PainelEditorial() {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  const queryClient = useQueryClient();
  const [filtroStatus, setFiltroStatus] = useState<string>('todos');

  const { data: noticias, isLoading } = useQuery({
    queryKey: ['admin-noticias', filtroStatus],
    queryFn: async () => {
      let query = supabase
        .from('noticias_cobrapol')
        .select('*')
        .order('created_at', { ascending: false });

      if (filtroStatus !== 'todos') {
        query = query.eq('status', filtroStatus);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const { error } = await supabase.from('noticias_cobrapol').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-noticias'] });
      toast({ title: 'Notícia excluída com sucesso' });
    },
    onError: () => {
      toast({ title: 'Erro ao excluir notícia', variant: 'destructive' });
    },
  });

  const handleLogout = async () => {
    await signOut();
    navigate('/painel-editorial/login');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">Painel Editorial</h1>
          <p className="text-sm text-muted-foreground">{user?.email}</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => navigate('/painel-editorial/nova')} size="sm">
            <Plus className="h-4 w-4 mr-1" /> Nova Notícia
          </Button>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-1" /> Sair
          </Button>
        </div>
      </header>

      <main className="p-6 max-w-6xl mx-auto">
        <div className="flex gap-2 mb-4">
          {['todos', 'publicado', 'rascunho'].map(status => (
            <Button
              key={status}
              variant={filtroStatus === status ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFiltroStatus(status)}
            >
              {status === 'todos' ? 'Todos' : status === 'publicado' ? 'Publicados' : 'Rascunhos'}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <p className="text-muted-foreground">Carregando...</p>
        ) : (
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Título</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead className="w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {noticias?.map(noticia => (
                  <TableRow key={noticia.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {noticia.destaque && <Star className="h-4 w-4 text-primary fill-primary" />}
                        {noticia.titulo}
                      </div>
                    </TableCell>
                    <TableCell>{noticia.categoria || '—'}</TableCell>
                    <TableCell>
                      <Badge variant={noticia.status === 'publicado' ? 'default' : 'secondary'}>
                        {noticia.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {noticia.data_publicacao 
                        ? format(new Date(noticia.data_publicacao), "dd/MM/yyyy", { locale: ptBR })
                        : '—'}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => navigate(`/painel-editorial/editar/${noticia.id}`)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Excluir notícia?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Esta ação não pode ser desfeita. A notícia "{noticia.titulo}" será permanentemente excluída.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction onClick={() => deleteMutation.mutate(noticia.id)}>
                                Excluir
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {(!noticias || noticias.length === 0) && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                      Nenhuma notícia encontrada
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
    </div>
  );
}
