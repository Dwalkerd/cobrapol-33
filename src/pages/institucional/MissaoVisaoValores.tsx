import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Shield, Handshake, Scale, Users, Trophy } from "lucide-react";

const MissaoVisaoValores = () => {
  const principios = [
    {
      icon: Target,
      title: "Missão",
      description: "Defender os direitos e interesses dos policiais brasileiros, promovendo melhores condições de trabalho, valorização profissional e bem-estar da categoria através de ações sindicais efetivas e transparentes.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser reconhecido como o principal sindicato policial do Brasil, referência em defesa dos direitos da categoria e na promoção da segurança pública de qualidade para toda a sociedade brasileira.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Ética, transparência, união, justiça, comprometimento, responsabilidade social, respeito, solidariedade e dedicação integral ao bem-estar de nossos associados e suas famílias.",
      color: "from-gold to-gold-dark"
    }
  ];

  const valores = [
    {
      icon: Shield,
      title: "Ética",
      description: "Pautamos todas as nossas ações em princípios éticos sólidos, com integridade e honestidade em todas as relações."
    },
    {
      icon: Scale,
      title: "Transparência",
      description: "Mantemos total transparência em nossas ações, decisões e uso dos recursos, prestando contas aos associados."
    },
    {
      icon: Users,
      title: "União",
      description: "Promovemos a união da categoria policial, fortalecendo os laços de solidariedade e cooperação mútua."
    },
    {
      icon: Handshake,
      title: "Justiça",
      description: "Lutamos incansavelmente por justiça e equidade, defendendo os direitos constitucionais dos policiais."
    },
    {
      icon: Trophy,
      title: "Comprometimento",
      description: "Nosso comprometimento é integral com a defesa dos interesses da categoria e o bem-estar dos associados."
    },
    {
      icon: Heart,
      title: "Responsabilidade Social",
      description: "Reconhecemos nosso papel na sociedade e trabalhamos para uma segurança pública mais eficiente e humana."
    }
  ];

  const objetivos = [
    "Defender os direitos trabalhistas e previdenciários dos policiais",
    "Promover melhorias nas condições de trabalho e segurança",
    "Negociar reajustes salariais e benefícios para a categoria",
    "Oferecer assistência jurídica especializada aos associados",
    "Fortalecer a união e representatividade da categoria policial",
    "Contribuir para a valorização profissional dos policiais",
    "Promover a capacitação e desenvolvimento profissional",
    "Estabelecer parcerias e convênios benéficos aos associados"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Nossos Princípios
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Missão, Visão e
            <span className="text-gold"> Valores</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os princípios que norteiam nossas ações e nosso compromisso 
            com a defesa dos direitos dos policiais brasileiros.
          </p>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {principios.map((principio, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-gold/20 hover:border-gold/40 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${principio.color}`}></div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${principio.color} p-4 rounded-full mr-4`}>
                    <principio.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{principio.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {principio.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Valores Detalhados */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Nossos Valores em Detalhes
            </h2>
            <p className="text-muted-foreground">
              Os valores que orientam nossa conduta e definem nossa identidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gold/20 hover:border-gold/40">
                <CardContent className="p-6">
                  <div className="bg-gold/10 p-4 rounded-lg w-fit mb-4 group-hover:bg-gold/20 transition-colors">
                    <valor.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-gold transition-colors">
                    {valor.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {valor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Objetivos */}
        <Card className="border-gold/20">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Nossos Objetivos
              </h2>
              <p className="text-muted-foreground">
                As metas que nos guiam na busca por uma categoria policial mais forte e valorizada
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {objetivos.map((objetivo, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-gold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-foreground text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{objetivo}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-foreground to-gold-dark rounded-3xl p-8 lg:p-12 text-background text-center">
          <Shield className="h-16 w-16 text-gold mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Juntos Somos Mais Fortes
          </h3>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Nossos valores e princípios orientam cada ação em defesa dos policiais brasileiros. 
            Faça parte desta luta e ajude a construir um futuro melhor para a categoria.
          </p>
          <button className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-4 rounded-xl transition-colors">
            Conheça Nossos Serviços
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissaoVisaoValores;