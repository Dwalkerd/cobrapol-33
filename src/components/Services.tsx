import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Scale, 
  Heart, 
  GraduationCap, 
  Briefcase, 
  Phone, 
  FileText,
  Users,
  Shield,
  Stethoscope
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Assistência Jurídica",
      description: "Suporte legal completo em questões trabalhistas, penais e cíveis",
      features: ["Defesa em processos", "Consultoria jurídica", "Acompanhamento processual"],
      highlight: "Mais Popular"
    },
    {
      icon: Heart,
      title: "Assistência Social",
      description: "Apoio social e familiar para momentos de dificuldade",
      features: ["Auxílio emergencial", "Apoio psicológico", "Suporte familiar"],
      highlight: null
    },
    {
      icon: GraduationCap,
      title: "Capacitação",
      description: "Cursos e treinamentos para desenvolvimento profissional",
      features: ["Cursos especializados", "Certificações", "Workshops"],
      highlight: null
    },
    {
      icon: Stethoscope,
      title: "Assistência Médica",
      description: "Planos de saúde diferenciados para policiais e familiares",
      features: ["Consultas médicas", "Exames especializados", "Urgência 24h"],
      highlight: null
    },
    {
      icon: Briefcase,
      title: "Benefícios Trabalhistas",
      description: "Luta constante por melhores condições de trabalho",
      features: ["Negociação salarial", "Melhoria de condições", "Direitos trabalhistas"],
      highlight: null
    },
    {
      icon: Phone,
      title: "Atendimento 24h",
      description: "Suporte imediato em situações de emergência",
      features: ["Plantão jurídico", "Emergências", "Orientação imediata"],
      highlight: "Exclusivo"
    }
  ];

  const benefits = [
    "Desconto em estabelecimentos conveniados",
    "Seguro de vida complementar",
    "Auxílio educacional para filhos",
    "Programa de aposentadoria",
    "Eventos e confraternizações",
    "Biblioteca jurídica digital"
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Nossos Serviços
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Serviços
            <span className="text-gold"> Completos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços pensados especialmente para 
            atender às necessidades dos policiais e suas famílias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 border-gold/20 hover:border-gold/40">
              {service.highlight && (
                <Badge className="absolute -top-3 left-6 bg-gold text-foreground">
                  {service.highlight}
                </Badge>
              )}
              <CardHeader className="pb-4">
                <div className="bg-gold p-4 rounded-2xl w-16 h-16 mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-foreground">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-to-r from-foreground to-gold-dark rounded-3xl p-8 lg:p-12 text-background">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Benefícios Exclusivos para Associados
              </h3>
              <p className="text-xl text-background/80 mb-8">
                Além dos serviços principais, nossos associados têm acesso a uma série 
                de benefícios exclusivos que fazem a diferença no dia a dia.
              </p>
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-foreground font-semibold"
              >
                Torne-se Associado
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-background/10 backdrop-blur-sm rounded-xl p-4">
                  <Users className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;