import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users, Scale } from "lucide-react";

const Historia = () => {
  const timeline = [
    {
      year: "1993",
      title: "Fundação do Cobrapol",
      description: "Criação do sindicato com o objetivo de unir e fortalecer a categoria policial em todo o Brasil.",
      icon: Users,
      achievements: ["Primeira assembleia com 500 policiais", "Estatuto fundacional aprovado", "Primeiros convênios firmados"]
    },
    {
      year: "1995-2000",
      title: "Primeiras Conquistas",
      description: "Período de consolidação e primeiras vitórias importantes para a categoria.",
      icon: Trophy,
      achievements: ["Lei do adicional de insalubridade", "Criação do fundo de assistência", "Primeiro acordo coletivo"]
    },
    {
      year: "2001-2005",
      title: "Expansão Nacional",
      description: "Expansão da representação para todos os estados brasileiros.",
      icon: Scale,
      achievements: ["Escritórios em 15 estados", "5.000 associados", "Departamento jurídico estruturado"]
    },
    {
      year: "2006-2010",
      title: "Conquistas Jurídicas",
      description: "Período de grandes vitórias no Supremo Tribunal Federal e tribunais superiores.",
      icon: Scale,
      achievements: ["Aposentadoria especial regulamentada", "Equiparação salarial conquistada", "10.000 associados"]
    },
    {
      year: "2011-2015",
      title: "Modernização",
      description: "Implementação de tecnologias e ampliação dos serviços oferecidos.",
      icon: Users,
      achievements: ["Sistema online de atendimento", "Aplicativo mobile", "Novo estatuto aprovado"]
    },
    {
      year: "2016-2020",
      title: "Fortalecimento",
      description: "Consolidação como maior sindicato policial do país.",
      icon: Trophy,
      achievements: ["15.000 associados", "Sede própria inaugurada", "Convênios nacionais"]
    },
    {
      year: "2021-Presente",
      title: "Inovação e Futuro",
      description: "Foco em inovação digital e expansão dos serviços de assistência.",
      icon: Users,
      achievements: ["Atendimento 24/7", "Plataforma digital completa", "Mais de 500 vitórias judiciais"]
    }
  ];

  const statistics = [
    { number: "30+", label: "Anos de História", description: "Três décadas defendendo policiais" },
    { number: "15.000+", label: "Associados", description: "Policiais de todo o Brasil" },
    { number: "500+", label: "Vitórias Judiciais", description: "Processos ganhos para a categoria" },
    { number: "27", label: "Estados", description: "Representação em todo território nacional" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Nossa Trajetória
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            História do
            <span className="text-gold"> Cobrapol</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 30 anos de luta, conquistas e dedicação aos policiais brasileiros. 
            Conheça nossa trajetória de sucesso e crescimento.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <Card key={index} className="text-center border-gold/20 hover:border-gold/40 transition-colors">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Linha do Tempo
            </h2>
            <p className="text-muted-foreground">
              As principais conquistas e marcos da nossa história
            </p>
          </div>

          {timeline.map((item, index) => (
            <Card key={index} className="border-gold/20 hover:border-gold/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                      <item.icon className="h-8 w-8 text-gold" />
                    </div>
                    <div className="text-2xl font-bold text-gold">{item.year}</div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      {item.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-foreground to-gold-dark rounded-3xl p-8 lg:p-12 text-background text-center">
          <Calendar className="h-16 w-16 text-gold mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Faça Parte da Nossa História
          </h3>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de policiais que confiam no Cobrapol para defender 
            seus direitos e garantir um futuro melhor para a categoria.
          </p>
          <button className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-4 rounded-xl transition-colors">
            Torne-se Associado
          </button>
        </div>
      </div>
    </div>
  );
};

export default Historia;