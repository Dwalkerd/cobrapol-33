import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Eye, FileText, DollarSign, Users, Download, Calendar } from "lucide-react";

const Transparencia = () => {
  const financialReports = [
    {
      title: "Relatório Anual 2023",
      description: "Balanço patrimonial e demonstrativo de resultados",
      date: "31/12/2023",
      type: "PDF",
      size: "2.5 MB"
    },
    {
      title: "Prestação de Contas - 4º Trimestre 2023",
      description: "Receitas e despesas do último trimestre",
      date: "31/12/2023",
      type: "PDF",
      size: "1.8 MB"
    },
    {
      title: "Demonstrativo de Contribuições 2023",
      description: "Relatório detalhado das contribuições recebidas",
      date: "31/12/2023",
      type: "Excel",
      size: "3.2 MB"
    }
  ];

  const administrativeActs = [
    {
      title: "Ata da Assembleia Geral - Janeiro 2024",
      description: "Deliberações sobre orçamento anual e eleições",
      date: "15/01/2024",
      type: "PDF",
      size: "1.2 MB"
    },
    {
      title: "Edital de Licitação - Serviços Gráficos",
      description: "Processo licitatório para impressão de materiais",
      date: "10/01/2024",
      type: "PDF",
      size: "856 KB"
    },
    {
      title: "Resolução nº 001/2024",
      description: "Normas internas de funcionamento da entidade",
      date: "05/01/2024",
      type: "PDF",
      size: "654 KB"
    }
  ];

  const statistics = [
    { label: "Filiados Ativos", value: "12.847", icon: Users },
    { label: "Receita Anual 2023", value: "R$ 2.8M", icon: DollarSign },
    { label: "Processos Atendidos", value: "3.426", icon: FileText },
    { label: "Taxa de Transparência", value: "100%", icon: Eye }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Eye className="h-16 w-16 mx-auto mb-6 text-gold" />
            <h1 className="text-4xl font-bold mb-4">Portal da Transparência</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Acesso completo às informações financeiras, administrativas e de gestão do COBRAPOL
            </p>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="pb-2">
                    <stat.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                    <CardDescription>{stat.label}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="financial" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="financial">Relatórios Financeiros</TabsTrigger>
                <TabsTrigger value="administrative">Atos Administrativos</TabsTrigger>
                <TabsTrigger value="governance">Governança</TabsTrigger>
              </TabsList>

              <TabsContent value="financial" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Relatórios Financeiros</CardTitle>
                    <CardDescription>
                      Demonstrativos financeiros, balanços e prestações de contas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {financialReports.map((report, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium">{report.title}</h4>
                            <p className="text-sm text-muted-foreground">{report.description}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {report.date}
                              </span>
                              <span>{report.type}</span>
                              <span>{report.size}</span>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="administrative" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Atos Administrativos</CardTitle>
                    <CardDescription>
                      Atas, editais, resoluções e outros documentos oficiais
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {administrativeActs.map((act, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium">{act.title}</h4>
                            <p className="text-sm text-muted-foreground">{act.description}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {act.date}
                              </span>
                              <span>{act.type}</span>
                              <span>{act.size}</span>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="governance" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Estrutura Organizacional</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Diretoria Executiva</h4>
                        <p className="text-sm text-muted-foreground">
                          Presidente, Vice-Presidente, Secretário Geral e Tesoureiro
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Conselho Fiscal</h4>
                        <p className="text-sm text-muted-foreground">
                          3 membros efetivos e 3 suplentes
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Conselho Deliberativo</h4>
                        <p className="text-sm text-muted-foreground">
                          Representantes regionais eleitos
                        </p>
                      </div>
                      <Button variant="outline" className="w-full">
                        Ver Organograma Completo
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Canais de Comunicação</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Ouvidoria</h4>
                        <p className="text-sm text-muted-foreground">
                          Canal para denúncias, sugestões e reclamações
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">E-mail Institucional</h4>
                        <p className="text-sm text-muted-foreground">
                          transparencia@cobrapol.org.br
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Atendimento Presencial</h4>
                        <p className="text-sm text-muted-foreground">
                          Segunda a Sexta, 8h às 17h
                        </p>
                      </div>
                      <Button variant="outline" className="w-full">
                        Falar com a Ouvidoria
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Legal Framework */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Marco Legal</h2>
              <p className="text-muted-foreground mb-8">
                Nosso compromisso com a transparência é respaldado por legislação específica
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Lei nº 12.527/2011</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Lei de Acesso à Informação que garante o direito fundamental de acesso às informações públicas
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Código Civil</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Regulamentação das obrigações de transparência para entidades sindicais
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Estatuto Social</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Normas internas que garantem a transparência na gestão sindical
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Transparencia;