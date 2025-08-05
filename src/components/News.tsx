import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Newspaper } from "lucide-react";
import newsImage from "@/assets/news-policia-reuniao.jpg";

const News = () => {
  const noticias = [
    {
      category: "Conquista",
      title: "Novo Acordo Salarial Aprovado para 2024",
      excerpt: "Após intensas negociações, conseguimos um reajuste de 8.5% nos salários dos policiais, além de melhorias nos benefícios.",
      date: "15 Jan 2024",
      readTime: "3 min",
      image: newsImage
    },
    {
      category: "Jurídico",
      title: "Vitória Importante no STF sobre Direitos Previdenciários",
      excerpt: "O Supremo Tribunal Federal decidiu favoravelmente sobre a aposentadoria especial dos policiais em todo o território nacional.",
      date: "10 Jan 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&h=400&fit=crop"
    },
    {
      category: "Benefício",
      title: "Novo Convênio Médico com Desconto Especial",
      excerpt: "Firmamos parceria com a rede hospitalar MedSaúde, oferecendo 40% de desconto para associados e familiares.",
      date: "5 Jan 2024",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=400&fit=crop"
    }
  ];

  const comunicados = [
    {
      category: "Evento",
      title: "Assembleia Geral Extraordinária - Convocação",
      excerpt: "Todos os associados estão convocados para a assembleia que discutirá as novas propostas de benefícios e melhorias.",
      date: "8 Jan 2024",
      readTime: "2 min",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop"
    },
    {
      category: "Atualização",
      title: "Novos Benefícios Disponíveis para Associados",
      excerpt: "Confira as últimas parcerias firmadas e benefícios exclusivos que foram disponibilizados para todos os associados.",
      date: "9 Jan 2024",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop"
    },
    {
      category: "Atualização",
      title: "Melhorias no Atendimento ao Associado",
      excerpt: "Implementamos um novo sistema de atendimento 24/7 para dar suporte ainda melhor aos nossos associados.",
      date: "3 Jan 2024",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop"
    }
  ];

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

  return (
    <section id="noticias" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Main Featured News */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {noticias.map((article, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {article.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {comunicados.map((article, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="flex gap-4 p-4">
                <div className="w-24 h-16 flex-shrink-0 overflow-hidden rounded">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                </div>
              </div>
            </Card>
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
