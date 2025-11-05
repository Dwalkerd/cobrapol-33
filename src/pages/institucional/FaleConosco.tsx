import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Building, Users } from "lucide-react";

const FaleConosco = () => {
  const contactInfo = [
    {
      icon: Building,
      title: "Sede Nacional",
      details: ["CNPJ: 37.050.804/0001-05", "Confederação registrada no MTE"],
      highlight: "Oficial",
    },
    {
      icon: Phone,
      title: "Telefones",
      details: ["Central de Atendimento", "WhatsApp Institucional"],
      highlight: "24 horas",
    },
    {
      icon: Mail,
      title: "E-mails Oficiais",
      details: ["cobrapol@cobrapol.org.br", "juridico@cobrapol.org.br"],
      highlight: null,
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      details: ["Segunda à Sexta: 9h às 18h", "Plantão 24h: Emergências"],
      highlight: null,
    },
  ];

  const departments = [
    { name: "Pesquisa Jurídica", phone: "Consulte o site", email: "juridico@cobrapol.org.br" },
    { name: "Saúde Ocupacional", phone: "Consulte o site", email: "saude@cobrapol.org.br" },
    { name: "Comunicação Social", phone: "Consulte o site", email: "comunicacao@cobrapol.org.br" },
    { name: "Mulheres Policiais", phone: "Consulte o site", email: "mulheres@cobrapol.org.br" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-gold text-gold">
              Entre em Contato
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Fale
              <span className="text-gold"> Conosco</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos sempre disponíveis para atender nossos associados e esclarecer dúvidas. Entre em contato através
              dos canais abaixo.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="relative group hover:shadow-lg transition-all duration-300 border-gold/20 hover:border-gold/40"
                >
                  {info.highlight && (
                    <Badge className="absolute -top-3 left-6 bg-gold text-foreground">{info.highlight}</Badge>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gold p-3 rounded-xl group-hover:scale-110 transition-transform">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Actions */}
              <Card className="border-gold/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <MessageCircle className="h-5 w-5 text-gold" />
                    Atendimento Rápido
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-foreground"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    E-mail
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-gold/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Envie sua Mensagem</CardTitle>
                  <p className="text-muted-foreground">
                    Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Nome Completo *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Telefone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">E-mail *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Assunto</label>
                    <select className="w-full px-4 py-3 border border-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent">
                      <option>Selecione um assunto</option>
                      <option>Associação</option>
                      <option>Jurídico</option>
                      <option>Benefícios</option>
                      <option>Eventos</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Mensagem *</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                      placeholder="Descreva sua solicitação ou dúvida..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gold hover:bg-gold-dark text-foreground font-semibold py-3" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Departments */}
          <div className="bg-gradient-to-r from-secondary/50 to-secondary/30 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Contatos por Departamento</h3>
            <div className="text-center mb-8">
              <p className="text-muted-foreground mb-4">
                Siga nossas redes sociais oficiais para ficar por dentro das últimas novidades
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://instagram.com/cobrapolbr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 transition-colors"
                >
                  @cobrapolbr
                </a>
                <a
                  href="https://facebook.com/cobrapolbr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Cobrapol Br
                </a>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="bg-background rounded-2xl p-6 text-center border border-gold/20">
                  <Users className="h-8 w-8 text-gold mx-auto mb-4" />
                  <h4 className="font-bold text-foreground mb-3">{dept.name}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{dept.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span className="text-xs">{dept.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FaleConosco;
