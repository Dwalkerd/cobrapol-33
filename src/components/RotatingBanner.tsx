import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useNoticiasDestaque } from '@/hooks/useNoticiasDestaque';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const RotatingBanner = () => {
  const { data: noticias, isLoading } = useNoticiasDestaque(4);

  const slides = noticias?.map((noticia: any) => ({
    type: 'news',
    title: noticia.titulo,
    description: noticia.resumo,
    date: format(new Date(noticia.data_publicacao), "dd 'de' MMMM, yyyy", { locale: ptBR }),
    category: noticia.categoria,
    link: `/publicacoes/noticia/${noticia.slug}`,
    image: noticia.imagem_destaque || '/lovable-uploads/ec42e553-3cfd-4344-acb3-edcaec2e378d.png'
  })) || [];


  if (isLoading) {
    return (
      <div className="relative h-[600px] bg-gradient-to-r from-cobrapol-darkBlue to-cobrapol-blue flex items-center justify-center">
        <div className="text-white text-xl">Carregando destaques...</div>
      </div>
    );
  }

  if (!slides || slides.length === 0) {
    return (
      <div className="relative h-[600px] bg-gradient-to-r from-cobrapol-darkBlue to-cobrapol-blue flex items-center justify-center">
        <div className="text-white text-xl">Nenhuma notícia em destaque no momento</div>
      </div>
    );
  }

  return (
    <section className="relative h-[600px] overflow-hidden">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 6000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-[600px]">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50"></div>
              </div>

              {/* Content */}
              <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                <div className="max-w-2xl text-background">
                  <div className="mb-4">
                    <Badge variant="outline" className="bg-gold/20 text-gold border-gold/40 mb-4">
                      {slide.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-background/70 mb-4">
                      <Calendar className="h-4 w-4" />
                      {slide.date}
                    </div>
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  
                  <p className="text-xl text-background/90 mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to={slide.link}>
                      <Button 
                        size="lg" 
                        className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 gap-2"
                      >
                        Saiba Mais
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/20 hover:bg-background/30 backdrop-blur-sm border-0" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/20 hover:bg-background/30 backdrop-blur-sm border-0" />
      </Carousel>
    </section>
  );
};

export default RotatingBanner;