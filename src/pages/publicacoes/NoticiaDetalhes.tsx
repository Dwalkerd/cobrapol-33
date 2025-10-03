import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Eye, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNoticiaDetalhes, useNoticiasRelacionadas } from '@/hooks/useNoticiasAvancado';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const NoticiaDetalhes = () => {
  const { slug } = useParams();
  const { data: noticia, isLoading, error } = useNoticiaDetalhes(slug || '');
  const { data: relacionadas } = useNoticiasRelacionadas(
    (noticia as any)?.categoria || '', 
    slug || '', 
    3
  );

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center text-xl text-muted-foreground">Carregando notícia...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !noticia) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Notícia não encontrada</h2>
          <a 
            href="/publicacoes/noticias" 
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para notícias
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Conteúdo principal */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Breadcrumb/Voltar */}
              <div className="p-6 border-b">
                <a 
                  href="/publicacoes/noticias"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para notícias
                </a>
              </div>

              {/* Imagem destaque */}
              {(noticia as any).imagem_destaque && (
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={(noticia as any).imagem_destaque}
                    alt={(noticia as any).titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Conteúdo */}
              <div className="p-8">
                {/* Categoria */}
                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm mb-4">
                  {(noticia as any).categoria}
                </span>

                {/* Título */}
                <h1 className="text-4xl font-bold mb-6 text-foreground">
                  {(noticia as any).titulo}
                </h1>

                {/* Meta informações */}
                <div className="flex flex-wrap gap-6 text-muted-foreground mb-8 pb-6 border-b">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {format(new Date((noticia as any).data_publicacao), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                  </span>
                  {(noticia as any).autor && (
                    <span className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      {(noticia as any).autor}
                    </span>
                  )}
                  <span className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    {(noticia as any).visualizacoes || 0} visualizações
                  </span>
                </div>

                {/* Resumo */}
                {(noticia as any).resumo && (
                  <div className="text-xl text-muted-foreground mb-8 font-medium leading-relaxed">
                    {(noticia as any).resumo}
                  </div>
                )}

                {/* Conteúdo completo */}
                <div className="prose prose-lg max-w-none text-foreground">
                  {(noticia as any).conteudo?.split('\n\n').map((paragrafo: string, index: number) => (
                    <p key={index} className="mb-6 leading-relaxed">
                      {paragrafo}
                    </p>
                  ))}
                </div>

                {/* Compartilhar */}
                <div className="mt-12 pt-8 border-t">
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground font-medium">Compartilhar:</span>
                    <button className="p-2 rounded-full hover:bg-muted transition-colors">
                      <Share2 className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Notícias Relacionadas */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-6">Notícias Relacionadas</h3>
              <div className="space-y-4">
                {relacionadas && relacionadas.length > 0 ? (
                  relacionadas.map((rel: any) => (
                    <a
                      key={rel.id}
                      href={`/publicacoes/noticia/${rel.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-4">
                        {rel.imagem_destaque && (
                          <img
                            src={rel.imagem_destaque}
                            alt={rel.titulo}
                            className="w-24 h-24 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                          />
                        )}
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {rel.titulo}
                          </h4>
                          <span className="text-sm text-muted-foreground">
                            {format(new Date(rel.data_publicacao), "dd/MM/yyyy")}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">Nenhuma notícia relacionada disponível.</p>
                )}
              </div>
            </div>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle>Newsletter</CardTitle>
                <CardDescription>
                  Receba as principais notícias no seu email
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Assinar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoticiaDetalhes;
