import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const artigos = [
    {
      titulo: "A Importância da Valorização Profissional dos Policiais",
      resumo: "Reflexões sobre como a valorização impacta na qualidade dos serviços de segurança pública.",
      data: "14/01/2024",
      autor: "Dr. João Silva",
      categoria: "Opinião",
      tempoLeitura: "8 min",
      imagem: "/api/placeholder/400/200"
    },
    {
      titulo: "Direitos Trabalhistas: O Que Todo Policial Deve Saber",
      resumo: "Guia completo sobre os direitos garantidos por lei aos profissionais da segurança pública.",
      data: "11/01/2024",
      autor: "Dra. Maria Santos",
      categoria: "Direitos",
      tempoLeitura: "12 min",
      imagem: "/api/placeholder/400/200"
    },
    {
      titulo: "Inovação na Segurança Pública: Tecnologia e Eficiência",
      resumo: "Como as novas tecnologias estão transformando o trabalho policial no Brasil.",
      data: "09/01/2024",
      autor: "Carlos Oliveira",
      categoria: "Tecnologia",
      tempoLeitura: "6 min",
      imagem: "/api/placeholder/400/200"
    },
    {
      titulo: "Saúde Mental dos Policiais: Uma Questão de Prioridade",
      resumo: "A importância do cuidado com a saúde mental dos profissionais da segurança.",
      data: "07/01/2024",
      autor: "Psic. Ana Rodrigues",
      categoria: "Saúde",
      tempoLeitura: "10 min",
      imagem: "/api/placeholder/400/200"
    },
    {
      titulo: "Histórico das Conquistas Sindicais na Polícia",
      resumo: "Um olhar sobre as principais vitórias do movimento sindical policial brasileiro.",
      data: "04/01/2024",
      autor: "Prof. Pedro Costa",
      categoria: "História",
      tempoLeitura: "15 min",
      imagem: "/api/placeholder/400/200"
    },
    {
      titulo: "Capacitação Continuada: Investindo no Futuro",
      resumo: "Por que a educação continuada é fundamental para a carreira policial.",
      data: "02/01/2024",
      autor: "Coord. Lucia Fernandes",
      categoria: "Educação",
      tempoLeitura: "7 min",
      imagem: "/api/placeholder/400/200"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Artigos e Blog</h1>
        <p className="text-muted-foreground text-lg">
          Artigos especializados, análises e reflexões sobre segurança pública e direitos dos policiais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {artigos.map((artigo, index) => (
          <Card key={index} className="border-gold/20 hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
              <img 
                src="/lovable-uploads/ec42e553-3cfd-4344-acb3-edcaec2e378d.png" 
                alt={artigo.titulo}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20">
                  {artigo.categoria}
                </Badge>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {artigo.tempoLeitura}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {artigo.data}
                  </div>
                </div>
              </div>
              <CardTitle className="text-lg">{artigo.titulo}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{artigo.resumo}</p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                {artigo.autor}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Contribua com o Blog</CardTitle>
            <CardDescription>
              Tem algo interessante para compartilhar? Envie sua proposta de artigo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Aceitamos artigos sobre temas relacionados à segurança pública, direitos trabalhistas, 
              tecnologia, saúde e bem-estar dos policiais.
            </p>
            <button className="px-6 py-2 bg-gold hover:bg-gold-dark text-white rounded-md transition-colors">
              Enviar Proposta
            </button>
          </CardContent>
        </Card>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;