import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar, Eye, FileText } from "lucide-react";

const RevistasCobrapol = () => {
  const revistas = [
    {
      id: 1,
      titulo: "Revista Cobrapol - Edição 23",
      descricao: "Especial sobre modernização da Polícia Civil e novas tecnologias de investigação.",
      dataPublicacao: "Dezembro 2024",
      capa: "/lovable-uploads/ec42e553-3cfd-4344-acb3-edcaec2e378d.png",
      downloadUrl: "#",
      visualizarUrl: "#",
      destaque: true
    },
    {
      id: 2,
      titulo: "Revista Cobrapol - Edição 22",
      descricao: "Direitos trabalhistas da categoria e conquistas sindicais do ano.",
      dataPublicacao: "Setembro 2024",
      capa: "/lovable-uploads/18bd6ef1-312b-49a8-8679-fb0436eb8e48.png",
      downloadUrl: "#",
      visualizarUrl: "#",
      destaque: true
    },
    {
      id: 3,
      titulo: "Revista Cobrapol - Edição 21",
      descricao: "Formação continuada e capacitação profissional para policiais civis.",
      dataPublicacao: "Junho 2024",
      capa: "/lovable-uploads/ec42e553-3cfd-4344-acb3-edcaec2e378d.png",
      downloadUrl: "#",
      visualizarUrl: "#"
    },
    {
      id: 4,
      titulo: "Revista Cobrapol - Edição 20",
      descricao: "Saúde mental no trabalho policial e programas de apoio.",
      dataPublicacao: "Março 2024",
      capa: "/lovable-uploads/18bd6ef1-312b-49a8-8679-fb0436eb8e48.png",
      downloadUrl: "#",
      visualizarUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Revistas Cobrapol</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça nossa revista institucional com conteúdo especializado sobre a Polícia Civil, 
              direitos da categoria e assuntos relevantes para os profissionais de segurança pública.
            </p>
          </div>

          {/* Edições em Destaque */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Edições em Destaque - Download Disponível
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {revistas.filter(revista => revista.destaque).map((revista) => (
                <Card key={revista.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <div className="flex">
                    <div className="w-32 flex-shrink-0">
                      <img 
                        src={revista.capa} 
                        alt={`Capa da ${revista.titulo}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4" />
                          {revista.dataPublicacao}
                        </div>
                        <CardTitle className="text-lg text-primary">{revista.titulo}</CardTitle>
                        <CardDescription className="text-sm">{revista.descricao}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            className="flex items-center gap-2"
                            onClick={() => window.open(revista.downloadUrl, '_blank')}
                          >
                            <Download className="h-4 w-4" />
                            Download PDF
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center gap-2"
                            onClick={() => window.open(revista.visualizarUrl, '_blank')}
                          >
                            <Eye className="h-4 w-4" />
                            Visualizar
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Todas as Edições */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Todas as Edições</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {revistas.map((revista) => (
                <Card key={revista.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[3/4] relative">
                    <img 
                      src={revista.capa} 
                      alt={`Capa da ${revista.titulo}`}
                      className="w-full h-full object-cover"
                    />
                    {revista.destaque && (
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                        Download
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      {revista.dataPublicacao}
                    </div>
                    <CardTitle className="text-lg">{revista.titulo}</CardTitle>
                    <CardDescription className="text-sm">{revista.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex gap-2">
                      {revista.destaque ? (
                        <>
                          <Button 
                            size="sm" 
                            variant="default"
                            className="flex items-center gap-2 flex-1"
                            onClick={() => window.open(revista.downloadUrl, '_blank')}
                          >
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center gap-2"
                            onClick={() => window.open(revista.visualizarUrl, '_blank')}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex items-center gap-2 w-full"
                          disabled
                        >
                          <Eye className="h-4 w-4" />
                          Em breve
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Informações Adicionais */}
          <section className="mt-12 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sobre as Revistas Cobrapol</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Periodicidade</h3>
                <p>As revistas são publicadas trimestralmente, sempre trazendo conteúdo atual e relevante para a categoria.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Conteúdo</h3>
                <p>Artigos técnicos, entrevistas, análises jurídicas e informações sobre direitos e benefícios dos policiais civis.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Acesso</h3>
                <p>As edições mais recentes estão disponíveis para download gratuito em formato PDF.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Distribuição</h3>
                <p>Além do acesso digital, as revistas são distribuídas fisicamente em eventos e nas sedes sindicais.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RevistasCobrapol;