import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Handshake, Trophy } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Defender os direitos e interesses dos policiais, promovendo melhores condições de trabalho e valorização profissional."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Ética, transparência, união, justiça e comprometimento com o bem-estar de nossos associados."
    },
    {
      icon: Handshake,
      title: "Compromisso",
      description: "Estar sempre ao lado dos policiais, oferecendo suporte jurídico, social e profissional quando necessário."
    },
    {
      icon: Trophy,
      title: "Conquistas",
      description: "Mais de 500 vitórias judiciais, melhorias salariais e benefícios conquistados para a categoria."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Sobre o Cobrapol
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Defendendo Policiais há
            <span className="text-gold"> 30 Anos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos o maior sindicato de policiais do país, com uma trajetória sólida na defesa 
            dos direitos da categoria. Nossa história é marcada por conquistas importantes e 
            pelo comprometimento inabalável com nossos associados.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 border border-gold/20 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              O Que Fazemos
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nosso trabalho é abrangente e focado no bem-estar e na proteção dos direitos 
              dos policiais brasileiros. Confira nossas principais áreas de atuação:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold/10 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Target className="h-8 w-8 text-gold mx-auto" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Defesa Jurídica</h4>
              <p className="text-muted-foreground">
                Prestamos assistência jurídica especializada, defendendo policiais em processos 
                administrativos e judiciais, garantindo seus direitos constitucionais.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/10 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Handshake className="h-8 w-8 text-gold mx-auto" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Negociações</h4>
              <p className="text-muted-foreground">
                Negociamos melhorias salariais, benefícios e condições de trabalho junto aos 
                órgãos competentes, sempre em busca do melhor para a categoria.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/10 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Heart className="h-8 w-8 text-gold mx-auto" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Apoio Social</h4>
              <p className="text-muted-foreground">
                Oferecemos suporte psicológico, social e familiar aos associados, 
                além de programas de assistência em situações emergenciais.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/10 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Trophy className="h-8 w-8 text-gold mx-auto" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Conquistas</h4>
              <p className="text-muted-foreground">
                Trabalhamos incansavelmente para conquistar direitos, melhorias e reconhecimento 
                profissional para todos os policiais brasileiros.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/10 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Target className="h-8 w-8 text-gold mx-auto" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Capacitação</h4>
              <p className="text-muted-foreground">
                Promovemos cursos, treinamentos e programas de capacitação para o desenvolvimento 
                profissional contínuo dos associados.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/10 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Heart className="h-8 w-8 text-gold mx-auto" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Benefícios</h4>
              <p className="text-muted-foreground">
                Estabelecemos parcerias e convênios exclusivos, oferecendo descontos e 
                benefícios especiais para associados e suas famílias.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-gold/20 hover:border-gold/40">
              <CardContent className="p-8">
                <div className="bg-gold p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 lg:p-12 border border-gold/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Nossa História de Lutas e Conquistas
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-gold rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">1993 - Fundação</h4>
                    <p className="text-muted-foreground">Criação do sindicato com o objetivo de unir e fortalecer a categoria policial.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-gold rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">2000-2010 - Expansão</h4>
                    <p className="text-muted-foreground">Crescimento significativo do número de associados e conquista de benefícios importantes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-gold rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">2011-2020 - Modernização</h4>
                    <p className="text-muted-foreground">Implementação de tecnologias e ampliação dos serviços oferecidos aos associados.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-gold rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">2021-Presente - Inovação</h4>
                    <p className="text-muted-foreground">Foco em inovação digital e expansão dos serviços de assistência aos policiais.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gold/10 to-gold-dark/10 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold text-gold mb-4">15,000+</div>
              <p className="text-xl font-semibold text-foreground mb-2">Associados Ativos</p>
              <p className="text-muted-foreground mb-6">
                Policiais de todo o país confiam em nosso trabalho e apoio constante.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold text-gold">98%</div>
                  <div className="text-muted-foreground">Satisfação</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gold">24/7</div>
                  <div className="text-muted-foreground">Atendimento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;