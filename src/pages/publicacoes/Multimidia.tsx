import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Play, Download, Eye, Calendar, Search, Video, Camera, FileText } from "lucide-react";

const Multimidia = () => {
  const mediaItems = [
    {
      type: "video",
      title: "Assembleia Geral 2024 - Principais Decisões",
      description: "Resumo das principais decisões tomadas na assembleia geral ordinária de 2024.",
      date: "15 Jan 2024",
      duration: "12:45",
      views: "1.2K",
      thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop"
    },
    {
      type: "video",
      title: "Entrevista: Novo Acordo Salarial",
      description: "Presidente explica os detalhes do novo acordo salarial conquistado para a categoria.",
      date: "12 Jan 2024",
      duration: "8:30",
      views: "2.1K",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=400&fit=crop"
    },
    {
      type: "gallery",
      title: "Manifestação pelo Reconhecimento da Categoria",
      description: "Fotos da manifestação nacional pelos direitos dos policiais brasileiros.",
      date: "10 Jan 2024",
      images: 45,
      views: "890",
      thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=400&fit=crop"
    },
    {
      type: "document",
      title: "Relatório Anual de Atividades 2023",
      description: "Documento completo com todas as atividades e conquistas do sindicato em 2023.",
      date: "8 Jan 2024",
      pages: 34,
      downloads: "567",
      thumbnail: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&h=400&fit=crop"
    },
    {
      type: "video",
      title: "Curso: Direitos Previdenciários do Policial",
      description: "Aula completa sobre os direitos previdenciários específicos da categoria policial.",
      date: "5 Jan 2024",
      duration: "45:20",
      views: "3.5K",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
    },
    {
      type: "gallery",
      title: "Inauguração da Nova Sede",
      description: "Registro fotográfico da cerimônia de inauguração da nova sede do sindicato.",
      date: "3 Jan 2024",
      images: 62,
      views: "1.8K",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop"
    },
    {
      type: "document",
      title: "Guia de Direitos do Policial 2024",
      description: "Manual atualizado com todos os direitos e benefícios disponíveis para a categoria.",
      date: "1 Jan 2024",
      pages: 28,
      downloads: "1.2K",
      thumbnail: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=400&fit=crop"
    },
    {
      type: "video",
      title: "Palestra: Saúde Mental do Policial",
      description: "Palestra sobre a importância do cuidado com a saúde mental dos profissionais de segurança.",
      date: "28 Dez 2023",
      duration: "1:15:30",
      views: "4.2K",
      thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop"
    },
    {
      type: "gallery",
      title: "Confraternização de Fim de Ano",
      description: "Momentos especiais da confraternização de encerramento do ano com associados.",
      date: "25 Dez 2023",
      images: 38,
      views: "956",
      thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=400&fit=crop"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return Video;
      case "gallery":
        return Camera;
      case "document":
        return FileText;
      default:
        return Video;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "bg-red-500/10 text-red-700 border-red-500/20";
      case "gallery":
        return "bg-blue-500/10 text-blue-700 border-blue-500/20";
      case "document":
        return "bg-green-500/10 text-green-700 border-green-500/20";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-500/20";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "video":
        return "Vídeo";
      case "gallery":
        return "Galeria";
      case "document":
        return "Documento";
      default:
        return "Mídia";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Multimídia
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Galeria
            <span className="text-gold"> Multimídia</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vídeos, fotos, documentos e materiais informativos sobre as atividades 
            e conquistas do sindicato.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-md mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar conteúdo..."
              className="pl-10"
            />
          </div>
          <Button className="bg-gold hover:bg-gold-dark text-foreground">
            Buscar
          </Button>
        </div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => {
            const TypeIcon = getTypeIcon(item.type);
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gold/20 hover:border-gold/40 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getTypeColor(item.type)}>
                      <TypeIcon className="h-3 w-3 mr-1" />
                      {getTypeLabel(item.type)}
                    </Badge>
                  </div>
                  
                  {/* Overlay based on type */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.type === "video" && (
                      <Play className="h-16 w-16 text-white" />
                    )}
                    {item.type === "gallery" && (
                      <Camera className="h-16 w-16 text-white" />
                    )}
                    {item.type === "document" && (
                      <Download className="h-16 w-16 text-white" />
                    )}
                  </div>
                  
                  {/* Media info overlay */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {item.type === "video" && item.duration}
                    {item.type === "gallery" && `${item.images} fotos`}
                    {item.type === "document" && `${item.pages} páginas`}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Eye className="h-4 w-4" />
                      <span>
                        {item.type === "video" || item.type === "gallery" ? item.views : item.downloads}
                        {item.type === "document" ? " downloads" : " views"}
                      </span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-gold hover:text-gold-dark p-0 h-auto">
                    {item.type === "video" && "Assistir"}
                    {item.type === "gallery" && "Ver Galeria"}
                    {item.type === "document" && "Baixar"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-foreground">
            Carregar Mais Conteúdo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Multimidia;