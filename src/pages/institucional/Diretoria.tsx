import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";

const Diretoria = () => {
  const diretoria = [
    {
      name: "João Silva Santos",
      position: "Presidente",
      description: "Policial Civil há 25 anos, especialista em direito sindical e defensor dos direitos da categoria.",
      email: "presidente@cobrapol.com.br",
      phone: "(11) 99999-1111",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Maria Oliveira Lima",
      position: "Vice-Presidente",
      description: "Policial Militar há 20 anos, com vasta experiência em negociações e representação sindical.",
      email: "vice@cobrapol.com.br",
      phone: "(11) 99999-2222",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "Carlos Roberto Mendes",
      position: "Secretário Geral",
      description: "Especialista em gestão administrativa e coordenação de projetos sindicais.",
      email: "secretario@cobrapol.com.br",
      phone: "(11) 99999-3333",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Ana Paula Costa",
      position: "Tesoureira",
      description: "Responsável pela gestão financeira e transparência dos recursos do sindicato.",
      email: "tesoureira@cobrapol.com.br",
      phone: "(11) 99999-4444",
      image: "https://images.unsplash.com/photo-1494790108755-2616b00a583e?w=400&h=400&fit=crop"
    },
    {
      name: "Roberto Fernandes",
      position: "Diretor Jurídico",
      description: "Advogado especializado em direito trabalhista e previdenciário para policiais.",
      email: "juridico@cobrapol.com.br",
      phone: "(11) 99999-5555",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Lucia Pereira",
      position: "Diretora de Comunicação",
      description: "Responsável pela comunicação interna e externa do sindicato.",
      email: "comunicacao@cobrapol.com.br",
      phone: "(11) 99999-6666",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Liderança
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Diretoria
            <span className="text-gold"> Executiva</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os líderes que trabalham incansavelmente pela defesa dos direitos 
            e interesses dos policiais brasileiros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diretoria.map((membro, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gold/20 hover:border-gold/40 overflow-hidden">
              <div className="relative">
                <img 
                  src={membro.image}
                  alt={membro.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gold text-foreground">
                    {membro.position}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-gold transition-colors">
                  {membro.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {membro.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 text-gold" />
                    <span>{membro.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 text-gold" />
                    <span>{membro.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-3xl p-8 lg:p-12 border border-gold/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Missão da Diretoria
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa diretoria trabalha com dedicação integral para garantir que os interesses 
              dos policiais sejam sempre defendidos e que nossos associados recebam o melhor 
              atendimento e suporte possível.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold/10 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <span className="text-2xl font-bold text-gold">24/7</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Disponibilidade</h4>
              <p className="text-muted-foreground text-sm">
                Nossos diretores estão disponíveis para atender emergências e questões urgentes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/10 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <span className="text-2xl font-bold text-gold">100%</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Transparência</h4>
              <p className="text-muted-foreground text-sm">
                Todas as decisões são tomadas com transparência e prestação de contas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/10 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <span className="text-2xl font-bold text-gold">30+</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Experiência</h4>
              <p className="text-muted-foreground text-sm">
                Anos de experiência combinada em defesa dos direitos policiais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diretoria;