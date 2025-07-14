import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Noticias = () => {
  const noticias = [
    {
      titulo: "Nova Conquista: Aumento Salarial Aprovado",
      resumo: "Após intensas negociações, foi aprovado reajuste salarial para a categoria policial.",
      data: "15/01/2024",
      autor: "Redação Cobrapol",
      categoria: "Conquistas",
      imagem: "/api/placeholder/400/200"
    },
    {
      titulo: "Congresso Nacional de Policiais 2024",
      resumo: "Evento reunirá representantes de todos os estados para discutir pautas importantes.",
      data: "12/01/2024",
      autor: "Comissão Organizadora",
      categoria: "Eventos",
      imagem: "/api/placeholder/400/200"
    },
    {
      titulo: "Plano de Saúde: Novas Coberturas",
      resumo: "Ampliação da cobertura do plano de saúde para familiares dos associados.",
      data: "10/01/2024",
      autor: "Departamento de Benefícios",
      categoria: "Benefícios",
      imagem: "/api/placeholder/400/200"
    },
    {
      titulo: "Capacitação Profissional: Novos Cursos",
      resumo: "Lançamento de programa de capacitação com foco em segurança pública moderna.",
      data: "08/01/2024",
      autor: "Área de Educação",
      categoria: "Capacitação",
      imagem: "/api/placeholder/400/200"
    },
    {
      titulo: "Reunião com Ministério da Justiça",
      resumo: "Diretoria se reuniu com representantes do governo para discutir melhorias.",
      data: "05/01/2024",
      autor: "Diretoria Executiva",
      categoria: "Institucional",
      imagem: "/api/placeholder/400/200"
    },
    {
      titulo: "Novo Acordo Coletivo Assinado",
      resumo: "Acordo garante melhores condições de trabalho para policiais de todo o país.",
      data: "03/01/2024",
      autor: "Departamento Jurídico",
      categoria: "Conquistas",
      imagem: "/api/placeholder/400/200"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Notícias</h1>
        <p className="text-muted-foreground text-lg">
          Fique por dentro das últimas notícias e acontecimentos do Cobrapol.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {noticias.map((noticia, index) => (
          <Card key={index} className="border-gold/20 hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted rounded-t-lg"></div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20">
                  {noticia.categoria}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {noticia.data}
                </div>
              </div>
              <CardTitle className="text-lg">{noticia.titulo}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{noticia.resumo}</p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                {noticia.autor}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Newsletter</CardTitle>
            <CardDescription>
              Receba as principais notícias diretamente no seu email
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 p-2 border border-gold/20 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gold hover:bg-gold-dark text-white rounded-md transition-colors">
                Assinar
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Noticias;