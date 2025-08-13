import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Scale, FileText, Phone, Mail, MapPin, Clock } from "lucide-react";

const Representacao = () => {
  const services = [
    {
      icon: Scale,
      title: "Assessoria Jurídica",
      description: "Orientação e representação em processos administrativos e judiciais"
    },
    {
      icon: FileText,
      title: "Defesa Disciplinar",
      description: "Acompanhamento em sindicâncias e processos administrativos"
    },
    {
      icon: Users,
      title: "Negociação Coletiva",
      description: "Representação em acordos e convenções coletivas de trabalho"
    },
    {
      icon: Phone,
      title: "Atendimento Emergencial",
      description: "Suporte 24h para situações urgentes de nossos filiados"
    }
  ];

  const regionalOffices = [
    {
      region: "São Paulo",
      address: "Av. Paulista, 1000 - Centro, São Paulo/SP",
      phone: "(11) 1234-5678",
      email: "saopaulo@cobrapol.org.br",
      hours: "Segunda a Sexta: 8h às 18h"
    },
    {
      region: "Rio de Janeiro",
      address: "Rua da Carioca, 500 - Centro, Rio de Janeiro/RJ",
      phone: "(21) 1234-5678",
      email: "rj@cobrapol.org.br",
      hours: "Segunda a Sexta: 8h às 17h"
    },
    {
      region: "Minas Gerais",
      address: "Av. Afonso Pena, 750 - Centro, Belo Horizonte/MG",
      phone: "(31) 1234-5678",
      email: "mg@cobrapol.org.br",
      hours: "Segunda a Sexta: 8h às 17h"
    },
    {
      region: "Rio Grande do Sul",
      address: "Rua dos Andradas, 300 - Centro, Porto Alegre/RS",
      phone: "(51) 1234-5678",
      email: "rs@cobrapol.org.br",
      hours: "Segunda a Sexta: 8h às 17h"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-gold" />
            <h1 className="text-4xl font-bold mb-4">Representação Sindical</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Defendemos seus direitos com competência e dedicação em todo território nacional
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nossos Serviços de Representação</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Oferecemos representação completa e especializada para todos os nossos filiados
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Como Atuamos</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Representação Individual</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Acompanhamos cada filiado em suas demandas específicas:</p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Processos administrativos disciplinares</li>
                      <li>Recursos contra punições</li>
                      <li>Licenças e benefícios</li>
                      <li>Progressão de carreira</li>
                      <li>Aposentadoria e pensões</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Representação Coletiva</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Defendemos os interesses da categoria:</p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Negociação de salários e benefícios</li>
                      <li>Melhoria das condições de trabalho</li>
                      <li>Participação em audiências públicas</li>
                      <li>Proposição de projetos de lei</li>
                      <li>Acordos coletivos de trabalho</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Offices */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Escritórios Regionais</h2>
              <p className="text-muted-foreground">
                Presença em todo o Brasil para melhor atender nossos filiados
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regionalOffices.map((office, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{office.region}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Precisa de Representação?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Nossa equipe jurídica está pronta para defender seus direitos. Entre em contato conosco.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Agendar Consulta
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Falar com Advogado
              </Button>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-12 bg-red-50 border-l-4 border-red-500">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-xl font-bold text-red-800 mb-2">Atendimento de Emergência</h3>
              <p className="text-red-700 mb-4">
                Para situações urgentes, nosso plantão está disponível 24 horas
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-red-800 font-medium">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>0800 123 4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>emergencia@cobrapol.org.br</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Representacao;