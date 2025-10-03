import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNoticiasComFiltros, useCategorias } from '@/hooks/useNoticiasAvancado';
import { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Search } from 'lucide-react';

const Noticias = () => {
  const [filtros, setFiltros] = useState({
    categoria: 'todas',
    busca: '',
    page: 1
  });

  const { data, isLoading } = useNoticiasComFiltros(filtros);
  const { data: categorias } = useCategorias();

  // Separar notícias para o layout
  const noticiaPrincipal = data?.noticias[0];
  const noticiasSecundarias = data?.noticias.slice(1, 3) || [];
  const noticiasGrid = data?.noticias.slice(3) || [];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Notícias</h1>
          <p className="text-muted-foreground text-lg">
            Fique por dentro das últimas notícias e acontecimentos do Cobrapol.
          </p>
        </div>

        {/* Busca */}
        <div className="mb-6">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar notícias..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              value={filtros.busca}
              onChange={(e) => setFiltros({ ...filtros, busca: e.target.value, page: 1 })}
            />
          </div>
        </div>

        {/* Filtros por categoria */}
        <div className="flex gap-2 flex-wrap mb-8">
          <button
            onClick={() => setFiltros({ ...filtros, categoria: 'todas', page: 1 })}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filtros.categoria === 'todas' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            Todas
          </button>
          {categorias?.map((cat: string) => (
            <button
              key={cat}
              onClick={() => setFiltros({ ...filtros, categoria: cat, page: 1 })}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filtros.categoria === cat 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured News Section */}
            {isLoading ? (
              <div className="text-center py-12">
                <div className="text-xl text-muted-foreground">Carregando notícias...</div>
              </div>
            ) : !data || data.noticias.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-xl text-muted-foreground">Nenhuma notícia encontrada.</div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Main Featured News */}
                  {noticiaPrincipal && (
                    <Link to={`/publicacoes/noticia/${(noticiaPrincipal as any).slug}`} className="md:col-span-1">
                      <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white overflow-hidden h-full">
                        <div className="relative aspect-video overflow-hidden">
                          <img 
                            src={(noticiaPrincipal as any).imagem_destaque || "https://images.unsplash.com/photo-1589391886645-d51941baf7fb"}
                            alt={(noticiaPrincipal as any).titulo}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-6">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-3">
                            {(noticiaPrincipal as any).categoria}
                          </span>
                          <h2 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {(noticiaPrincipal as any).titulo}
                          </h2>
                          <p className="text-muted-foreground line-clamp-3 mb-4">
                            {(noticiaPrincipal as any).resumo}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            {format(new Date((noticiaPrincipal as any).data_publicacao), "dd 'de' MMMM, yyyy", { locale: ptBR })}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  )}

                  {/* Secondary News */}
                  <div className="space-y-4">
                    {noticiasSecundarias.map((noticia: any) => (
                      <Link key={noticia.id} to={`/publicacoes/noticia/${noticia.slug}`}>
                        <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white overflow-hidden">
                          <div className="flex gap-4 p-4">
                            <div className="w-24 h-16 flex-shrink-0 overflow-hidden rounded">
                              <img 
                                src={noticia.imagem_destaque || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"}
                                alt={noticia.titulo}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded text-xs mb-2">
                                {noticia.categoria}
                              </span>
                              <h3 className="font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                                {noticia.titulo}
                              </h3>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                {format(new Date(noticia.data_publicacao), "dd 'de' MMM", { locale: ptBR })}
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* AO VIVO Section */}
                <div className="mb-8">
                  <Card className="bg-primary text-primary-foreground overflow-hidden">
                    <div className="flex items-center gap-4 p-4">
                      <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        AO VIVO
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Ao vivo: Comissão de Direitos Humanos</h3>
                        <p className="text-sm opacity-80">Regulamentação da Psicologia Jurídica</p>
                      </div>
                      <Play className="h-8 w-8" />
                    </div>
                  </Card>
                </div>

                {/* More News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {noticiasGrid.map((noticia: any) => (
                    <Link key={noticia.id} to={`/publicacoes/noticia/${noticia.slug}`}>
                      <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white overflow-hidden h-full">
                        <div className="relative aspect-video overflow-hidden">
                          <img 
                            src={noticia.imagem_destaque || "https://images.unsplash.com/photo-1585829365295-ab7cd400c167"}
                            alt={noticia.titulo}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-4">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs mb-3">
                            {noticia.categoria}
                          </span>
                          <h3 className="font-semibold text-sm text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {noticia.titulo}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                            {noticia.resumo}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{format(new Date(noticia.data_publicacao), "dd/MM/yyyy")}</span>
                            {noticia.autor && <span className="truncate ml-2">Por {noticia.autor}</span>}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>

                {/* Paginação */}
                {data && data.totalPaginas > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12 mb-8">
                    <button
                      onClick={() => {
                        setFiltros({ ...filtros, page: filtros.page - 1 });
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      disabled={filtros.page === 1}
                      className="px-6 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
                    >
                      Anterior
                    </button>
                    
                    <div className="flex gap-2">
                      {Array.from({ length: Math.min(data.totalPaginas, 5) }, (_, i) => {
                        const page = i + 1;
                        return (
                          <button
                            key={page}
                            onClick={() => {
                              setFiltros({ ...filtros, page });
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`w-10 h-10 rounded-lg ${
                              filtros.page === page 
                                ? 'bg-primary text-primary-foreground' 
                                : 'border hover:bg-muted'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      })}
                    </div>
                    
                    <button
                      onClick={() => {
                        setFiltros({ ...filtros, page: filtros.page + 1 });
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      disabled={filtros.page === data.totalPaginas}
                      className="px-6 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
                    >
                      Próximo
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Agência Senado */}
            <Card className="mb-6 bg-primary text-primary-foreground">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold mb-1">28</div>
                <div className="text-sm">anos</div>
                <div className="text-lg font-semibold mt-2">agência senado</div>
                <div className="text-xs opacity-80">O Legislativo conectado com você</div>
              </CardContent>
            </Card>

            {/* Senado Multimídia */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">senado multimídia</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="aspect-video bg-muted rounded overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop"
                    alt="Senado Multimídia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Assista, recorte, baixe e compartilhe
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Noticias;
