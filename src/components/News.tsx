import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Newspaper } from "lucide-react";
import { useNoticiasRecentes } from '@/hooks/useNoticiasRecentes';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link } from "react-router-dom";

const News = () => {
  const { data: todasNoticias, isLoading } = useNoticiasRecentes(12);

  const noticias = todasNoticias?.filter((n: any) => n.categoria !== 'Serviços' && n.categoria !== 'Comunicado') || [];
  const comunicados = todasNoticias?.filter((n: any) => n.categoria === 'Serviços' || n.categoria === 'Comunicado') || [];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Conquista":
        return "bg-emerald-600/15 text-emerald-700 border-emerald-600/30 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/40";
      case "Jurídico":
        return "bg-primary/15 text-primary border-primary/30 dark:bg-primary/20 dark:text-primary-foreground dark:border-primary/40";
      case "Evento":
        return "bg-purple-600/15 text-purple-700 border-purple-600/30 dark:bg-purple-500/20 dark:text-purple-400 dark:border-purple-500/40";
      case "Benefício":
        return "bg-gold/15 text-gold-dark border-gold/30 dark:bg-gold/20 dark:text-gold dark:border-gold/40";
      case "Blog":
        return "bg-orange-600/15 text-orange-700 border-orange-600/30 dark:bg-orange-500/20 dark:text-orange-400 dark:border-orange-500/40";
      case "Atualização":
        return "bg-cyan-600/15 text-cyan-700 border-cyan-600/30 dark:bg-cyan-500/20 dark:text-cyan-400 dark:border-cyan-500/40";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center text-xl">Carregando notícias...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="noticias" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Main Featured News */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {noticias.slice(0, 3).map((noticia: any) => (
            <Link key={noticia.id} to={`/publicacoes/noticia/${noticia.slug}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white overflow-hidden cursor-pointer h-full">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={noticia.imagem_destaque || "https://images.unsplash.com/photo-1589391886645-d51941baf7fb"}
                    alt={noticia.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(noticia.categoria)}`}>
                    {noticia.categoria}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {noticia.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {noticia.resumo}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {format(new Date(noticia.data_publicacao), "dd 'de' MMMM, yyyy", { locale: ptBR })}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Secondary News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {comunicados.slice(0, 3).map((comunicado: any) => (
            <Link key={comunicado.id} to={`/publicacoes/noticia/${comunicado.slug}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white overflow-hidden cursor-pointer h-full">
                <div className="flex gap-4 p-4">
                  <div className="w-24 h-16 flex-shrink-0 overflow-hidden rounded">
                    <img 
                      src={comunicado.imagem_destaque || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"}
                      alt={comunicado.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge className={`mb-2 ${getCategoryColor(comunicado.categoria)}`}>
                      {comunicado.categoria}
                    </Badge>
                    <h4 className="font-medium text-sm text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {comunicado.titulo}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 mt-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      {format(new Date(comunicado.data_publicacao), "dd 'de' MMM", { locale: ptBR })}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* More News Button */}
        <div className="text-center mb-16">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.location.href = '/publicacoes/noticias'}
          >
            Mais notícias <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-foreground to-gold-dark rounded-3xl p-8 lg:p-12 text-background text-center">
          <Newspaper className="h-16 w-16 text-gold mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Receba as Últimas Notícias
          </h3>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Inscreva-se em nossa newsletter e seja o primeiro a saber sobre 
            conquistas, benefícios e eventos importantes do sindicato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-xl text-foreground bg-background/90 border-0 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <Button 
              className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8"
            >
              Inscrever-se
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
