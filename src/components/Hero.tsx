import { Button } from "@/components/ui/button";
import { Shield, Users, Scale, Award } from "lucide-react";
import heroImage from "@/assets/hero-police.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Policiais brasileiros unidos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--gold))_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-background">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Defendendo
                <span className="block text-transparent bg-gradient-to-r from-gold-light to-gold bg-clip-text">
                  Nossos Heróis
                </span>
              </h1>
              <p className="text-xl text-background/90 max-w-lg">
                O maior sindicato de policiais do Brasil, defendendo seus direitos há mais de 30 anos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8"
              >
                Torne-se Associado
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-background text-foreground bg-background hover:bg-background/90 hover:text-foreground"
              >
                Conheça Nossos Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">15K+</div>
                <div className="text-sm text-background/70">Associados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">30+</div>
                <div className="text-sm text-background/70">Anos de História</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">500+</div>
                <div className="text-sm text-background/70">Vitórias Judiciais</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">24/7</div>
                <div className="text-sm text-background/70">Suporte</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-background/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 text-center">
                  <Shield className="h-12 w-12 text-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2 text-background">Proteção Legal</h3>
                  <p className="text-sm text-background/70">Assistência jurídica especializada</p>
                </div>
                <div className="bg-background/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 text-center">
                  <Scale className="h-12 w-12 text-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2 text-background">Defesa de Direitos</h3>
                  <p className="text-sm text-background/70">Luta constante por melhores condições</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-background/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 text-center">
                  <Users className="h-12 w-12 text-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2 text-background">União</h3>
                  <p className="text-sm text-background/70">Força através da união</p>
                </div>
                <div className="bg-background/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 text-center">
                  <Award className="h-12 w-12 text-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2 text-background">Reconhecimento</h3>
                  <p className="text-sm text-background/70">Valorização do policial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;