import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useNoticiasDestaque } from '@/hooks/useNoticiasDestaque';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const RotatingBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data: noticias, isLoading } = useNoticiasDestaque(4);

  const slides = noticias?.map((noticia: any) => ({
    type: 'news',
    title: noticia.titulo,
    description: noticia.resumo,
    date: format(new Date(noticia.data_publicacao), "dd 'de' MMMM, yyyy", { locale: ptBR }),
    category: noticia.categoria,
    link: `/publicacoes/noticias/${noticia.slug}`,
    image: noticia.imagem_destaque || '/lovable-uploads/ec42e553-3cfd-4344-acb3-edcaec2e378d.png'
  })) || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
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
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/20 hover:bg-background/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 z-20"
      >
        <ChevronLeft className="h-6 w-6 text-background" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/20 hover:bg-background/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 z-20"
      >
        <ChevronRight className="h-6 w-6 text-background" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-gold scale-125'
                : 'bg-background/50 hover:bg-background/70'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/20 z-20">
        <div 
          className="h-full bg-gold transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};

export default RotatingBanner;