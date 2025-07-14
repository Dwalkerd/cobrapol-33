import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const QuickAccess = () => {
  const quickLinks = [
    {
      title: "Área do Associado",
      description: "Acesse seus benefícios e serviços exclusivos",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      link: "/area-associado"
    },
    {
      title: "Assistência Jurídica",
      description: "Solicite apoio legal para suas demandas",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&h=400&fit=crop",
      link: "/assistencia-juridica"
    },
    {
      title: "Sindicatos Filiados",
      description: "Conheça todos os sindicatos parceiros",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop",
      link: "/sindicatos"
    },
    {
      title: "Fale Conosco",
      description: "Entre em contato direto com nossa equipe",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop",
      link: "/institucional/fale-conosco"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Acessos
            <span className="text-gold"> Rápidos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encontre rapidamente o que você precisa através dos nossos serviços principais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((item, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border-gold/20 hover:border-gold/40 h-64"
            >
              <div className="relative h-full">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center text-gold group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">Acessar</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;