import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, UserCheck, FileText, CreditCard, Phone, Mail, Shield } from "lucide-react";

const AreaAssociado = () => {
  const services = [
    {
      icon: Shield,
      title: "Proteção Jurídica",
      description: "Acesso completo ao departamento jurídico especializado"
    },
    {
      icon: FileText,
      title: "Documentos",
      description: "Consulte e baixe documentos importantes do sindicato"
    },
    {
      icon: CreditCard,
      title: "Benefícios",
      description: "Acesse todos os convênios e benefícios exclusivos"
    },
    {
      icon: UserCheck,
      title: "Dados Pessoais",
      description: "Mantenha seus dados sempre atualizados"
    }
  ];

  const benefits = [
    "Assistência jurídica 24/7",
    "Desconto em convênios médicos",
    "Consultoria previdenciária",
    "Cursos e capacitações",
    "Atendimento psicológico",
    "Seguro de vida em grupo",
    "Empréstimos com juros especiais",
    "Cartão de crédito sem anuidade"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Área Restrita
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Área do
            <span className="text-gold"> Associado</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acesso exclusivo para associados do Cobrapol. Faça login para acessar 
            seus benefícios, documentos e serviços especializados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Login Form */}
          <Card className="border-gold/20">
            <CardHeader className="text-center">
              <div className="bg-gold/10 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Lock className="h-8 w-8 text-gold mx-auto" />
              </div>
              <CardTitle className="text-2xl text-gold">Fazer Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">CPF ou Matrícula</label>
                <input 
                  type="text"
                  placeholder="Digite seu CPF ou número de matrícula"
                  className="w-full px-4 py-3 rounded-lg border border-gold/20 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Senha</label>
                <input 
                  type="password"
                  placeholder="Digite sua senha"
                  className="w-full px-4 py-3 rounded-lg border border-gold/20 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-muted-foreground">Lembrar de mim</span>
                </label>
                <a href="#" className="text-sm text-gold hover:text-gold-dark">
                  Esqueci minha senha
                </a>
              </div>
              <Button className="w-full bg-gold hover:bg-gold-dark text-foreground">
                Entrar na Área do Associado
              </Button>
              
              <div className="text-center pt-4 border-t border-gold/20">
                <p className="text-sm text-muted-foreground mb-2">
                  Ainda não é associado?
                </p>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-foreground">
                  Tornar-se Associado
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Services and Benefits */}
          <div className="space-y-8">
            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Serviços Disponíveis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="text-center p-4 rounded-lg hover:bg-gold/10 transition-colors">
                      <div className="bg-gold/10 rounded-full p-3 w-fit mx-auto mb-3">
                        <service.icon className="h-6 w-6 text-gold" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                      <p className="text-xs text-muted-foreground">{service.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Benefícios Exclusivos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-4 text-foreground">
                    Precisa de Ajuda?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 text-gold" />
                      <span>Suporte: (11) 99999-0000</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 text-gold" />
                      <span>suporte@cobrapol.com.br</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaAssociado;