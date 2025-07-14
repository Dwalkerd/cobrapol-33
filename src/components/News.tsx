import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Newspaper } from "lucide-react";

const News = () => {
  const noticias = [
    {
      category: "Conquista",
      title: "Novo Acordo Salarial Aprovado para 2024",
      excerpt: "Após intensas negociações, conseguimos um reajuste de 8.5% nos salários dos policiais, além de melhorias nos benefícios.",
      date: "15 Jan 2024",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop"
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
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop"
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
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop"
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
        return "bg-green-500/10 text-green-700 border-green-500/20";
      case "Jurídico":
        return "bg-blue-500/10 text-blue-700 border-blue-500/20";
      case "Evento":
        return "bg-purple-500/10 text-purple-700 border-purple-500/20";
      case "Benefício":
        return "bg-gold/10 text-gold-dark border-gold/20";
      case "Blog":
        return "bg-orange-500/10 text-orange-700 border-orange-500/20";
      case "Atualização":
        return "bg-cyan-500/10 text-cyan-700 border-cyan-500/20";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-500/20";
    }
  };

  return (
    <section id="noticias" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Notícias Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Últimas Notícias
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Notícias
            <span className="text-gold"> Recentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fique por dentro das últimas conquistas, benefícios e atualizações importantes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {noticias.map((article, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gold/20 hover:border-gold/40 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-3 group-hover:text-gold transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gold hover:text-gold-dark p-0 h-auto">
                    Ler mais <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comunicados Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-500 text-blue-700">
            Comunicados Oficiais
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Comunicados
            <span className="text-blue-600"> Importantes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Informações oficiais e atualizações importantes para todos os associados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {comunicados.map((article, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-blue-500/20 hover:border-blue-500/40 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-500/10 text-blue-700 border-blue-500/20">
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0 h-auto">
                    Ler mais <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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
