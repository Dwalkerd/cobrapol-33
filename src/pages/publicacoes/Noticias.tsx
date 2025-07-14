import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";

const Noticias = () => {
  const news = [
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
      category: "Evento",
      title: "Assembleia Geral Extraordinária - Convocação",
      excerpt: "Todos os associados estão convocados para a assembleia que discutirá as novas propostas de benefícios e melhorias.",
      date: "8 Jan 2024",
      readTime: "2 min",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop"
    },
    {
      category: "Benefício",
      title: "Novo Convênio Médico com Desconto Especial",
      excerpt: "Firmamos parceria com a rede hospitalar MedSaúde, oferecendo 40% de desconto para associados e familiares.",
      date: "5 Jan 2024",
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
    },
    {
      category: "Conquista",
      title: "Equiparação Salarial entre Estados Aprovada",
      excerpt: "Conseguimos a aprovação da equiparação salarial entre policiais de diferentes estados, garantindo mais justiça.",
      date: "1 Jan 2024",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop"
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
      case "Atualização":
        return "bg-cyan-500/10 text-cyan-700 border-cyan-500/20";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Notícias
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Últimas
            <span className="text-gold"> Notícias</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantenha-se informado sobre as últimas conquistas, eventos e 
            novidades importantes para a categoria policial.
          </p>
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-md mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar notícias..."
              className="pl-10"
            />
          </div>
          <Button className="bg-gold hover:bg-gold-dark text-foreground">
            Buscar
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
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
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gold hover:text-gold-dark p-0 h-auto">
                    Ler mais <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-foreground">
            Carregar Mais Notícias
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Noticias;