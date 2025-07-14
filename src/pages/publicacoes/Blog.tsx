import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowRight, Search, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Como Funciona a Proteção Jurídica para Policiais",
      excerpt: "Entenda todos os detalhes sobre como nosso departamento jurídico trabalha para defender os direitos dos associados em processos administrativos e judiciais.",
      date: "12 Jan 2024",
      readTime: "6 min",
      author: "Dr. Roberto Fernandes",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      category: "Jurídico",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&h=400&fit=crop"
    },
    {
      title: "Direitos do Policial: Guia Completo Atualizado",
      excerpt: "Um guia completo sobre todos os direitos garantidos por lei aos policiais brasileiros e como exercê-los corretamente.",
      date: "6 Jan 2024",
      readTime: "8 min",
      author: "Dra. Ana Paula Costa",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b00a583e?w=100&h=100&fit=crop",
      category: "Educativo",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=400&fit=crop"
    },
    {
      title: "A Importância da União na Categoria Policial",
      excerpt: "Reflexão sobre como a união fortalece a categoria e os resultados positivos que alcançamos trabalhando juntos.",
      date: "1 Jan 2024",
      readTime: "5 min",
      author: "Maria Oliveira Lima",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      category: "Opinião",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop"
    },
    {
      title: "Aposentadoria Especial: Tudo o que Você Precisa Saber",
      excerpt: "Guia completo sobre a aposentadoria especial dos policiais, requisitos, documentação e como dar entrada no processo.",
      date: "28 Dez 2023",
      readTime: "7 min",
      author: "Dr. Roberto Fernandes",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      category: "Previdência",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
    },
    {
      title: "Saúde Mental do Policial: Cuidados Essenciais",
      excerpt: "A importância do cuidado com a saúde mental dos policiais e os recursos disponíveis para apoio psicológico.",
      date: "25 Dez 2023",
      readTime: "6 min",
      author: "Dra. Lucia Pereira",
      authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      category: "Saúde",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop"
    },
    {
      title: "Evolução dos Direitos Sindicais no Brasil",
      excerpt: "Um olhar histórico sobre a evolução dos direitos sindicais e como isso impacta a categoria policial hoje.",
      date: "20 Dez 2023",
      readTime: "9 min",
      author: "João Silva Santos",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      category: "História",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Jurídico":
        return "bg-blue-500/10 text-blue-700 border-blue-500/20";
      case "Educativo":
        return "bg-green-500/10 text-green-700 border-green-500/20";
      case "Opinião":
        return "bg-purple-500/10 text-purple-700 border-purple-500/20";
      case "Previdência":
        return "bg-gold/10 text-gold-dark border-gold/20";
      case "Saúde":
        return "bg-red-500/10 text-red-700 border-red-500/20";
      case "História":
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
            Blog
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Artigos e
            <span className="text-gold"> Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Artigos especializados, análises jurídicas e conteúdos educativos 
            sobre os direitos e a vida profissional dos policiais.
          </p>
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-md mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar artigos..."
              className="pl-10"
            />
          </div>
          <Button className="bg-gold hover:bg-gold-dark text-foreground">
            Buscar
          </Button>
        </div>

        {/* Featured Post */}
        <Card className="mb-12 group hover:shadow-xl transition-all duration-300 border-gold/20 hover:border-gold/40 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img 
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className={getCategoryColor(blogPosts[0].category)}>
                  {blogPosts[0].category}
                </Badge>
              </div>
            </div>
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground group-hover:text-gold transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <Avatar>
                  <AvatarImage src={blogPosts[0].authorImage} />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{blogPosts[0].author}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="bg-gold hover:bg-gold-dark text-foreground">
                Ler Artigo Completo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gold/20 hover:border-gold/40 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={post.authorImage} />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{post.author}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                      <Clock className="h-3 w-3 ml-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gold hover:text-gold-dark p-0 h-auto">
                  Ler mais <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-foreground">
            Carregar Mais Artigos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;