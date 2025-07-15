import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Download, Calendar, Eye, FileImage, Palette } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Multimidia = () => {
  const videos = [
    {
      titulo: "Congresso Nacional 2024 - Abertura",
      descricao: "Cerimônia de abertura do Congresso Nacional de Policiais",
      data: "15/01/2024",
      duracao: "45:30",
      visualizacoes: "2.3k",
      tipo: "Evento"
    },
    {
      titulo: "Entrevista: Presidente do Cobrapol",
      descricao: "Entrevista exclusiva sobre as conquistas e desafios da categoria",
      data: "12/01/2024",
      duracao: "28:15",
      visualizacoes: "1.8k",
      tipo: "Entrevista"
    },
    {
      titulo: "Capacitação: Direitos Trabalhistas",
      descricao: "Workshop sobre direitos trabalhistas para policiais",
      data: "10/01/2024",
      duracao: "1:15:20",
      visualizacoes: "5.2k",
      tipo: "Capacitação"
    }
  ];

  const podcasts = [
    {
      titulo: "Policial em Pauta #15",
      descricao: "Discussão sobre as novas regulamentações da profissão",
      data: "14/01/2024",
      duracao: "52:30",
      downloads: "890",
      tipo: "Podcast"
    },
    {
      titulo: "Policial em Pauta #14",
      descricao: "Entrevista com especialista em segurança pública",
      data: "07/01/2024",
      duracao: "41:15",
      downloads: "1.2k",
      tipo: "Podcast"
    }
  ];

  const fotos = [
    {
      titulo: "Posse da Nova Diretoria",
      descricao: "Cerimônia de posse da diretoria executiva 2024-2027",
      data: "03/01/2024",
      quantidade: "45 fotos",
      tipo: "Evento"
    },
    {
      titulo: "Reunião com Governadores",
      descricao: "Encontro com representantes dos governos estaduais",
      data: "28/12/2023",
      quantidade: "32 fotos",
      tipo: "Reunião"
    }
  ];

  const identidadeVisual = [
    {
      titulo: "Logo Cobrapol - Versão Principal",
      descricao: "Logo oficial do Cobrapol em alta resolução para uso institucional",
      tipo: "Logo",
      formato: "PNG, SVG, PDF",
      tamanho: "2.5 MB"
    },
    {
      titulo: "Logo Cobrapol - Versão Monocromática",
      descricao: "Versão em preto e branco para aplicações especiais",
      tipo: "Logo",
      formato: "PNG, SVG",
      tamanho: "1.8 MB"
    },
    {
      titulo: "Manual de Identidade Visual",
      descricao: "Guia completo com diretrizes de uso da marca",
      tipo: "Manual",
      formato: "PDF",
      tamanho: "12.3 MB"
    },
    {
      titulo: "Paleta de Cores Institucional",
      descricao: "Cores oficiais da marca em diferentes formatos",
      tipo: "Paleta",
      formato: "ASE, ACO, PDF",
      tamanho: "850 KB"
    },
    {
      titulo: "Tipografia Institucional",
      descricao: "Fontes oficiais utilizadas na comunicação",
      tipo: "Fonte",
      formato: "TTF, OTF",
      tamanho: "3.2 MB"
    },
    {
      titulo: "Templates de Apresentação",
      descricao: "Modelos para apresentações institucionais",
      tipo: "Template",
      formato: "PPTX, PDF",
      tamanho: "8.7 MB"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Multimídia</h1>
        <p className="text-muted-foreground text-lg">
          Acesse vídeos, podcasts, fotos, logos e outros conteúdos multimídia do Cobrapol.
        </p>
      </div>

      {/* Vídeos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Vídeos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="border-gold/20 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
                <img 
                  src="/lovable-uploads/ec42e553-3cfd-4344-acb3-edcaec2e378d.png" 
                  alt={video.titulo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <Badge className="absolute top-2 right-2 bg-black/70 text-white">
                  {video.duracao}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20">
                    {video.tipo}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {video.data}
                  </div>
                </div>
                <CardTitle className="text-lg">{video.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{video.descricao}</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Eye className="h-4 w-4" />
                  {video.visualizacoes} visualizações
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Podcasts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Podcasts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {podcasts.map((podcast, index) => (
            <Card key={index} className="border-gold/20 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
                <img 
                  src="/lovable-uploads/ec42e553-3cfd-4344-acb3-edcaec2e378d.png" 
                  alt={podcast.titulo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <Badge className="absolute top-2 right-2 bg-black/70 text-white">
                  {podcast.duracao}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20">
                    {podcast.tipo}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {podcast.data}
                  </div>
                </div>
                <CardTitle className="text-lg">{podcast.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{podcast.descricao}</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Download className="h-4 w-4" />
                  {podcast.downloads} downloads
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Fotos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Galeria de Fotos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fotos.map((foto, index) => (
            <Card key={index} className="border-gold/20 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/ec42e553-3cfd-4344-acb3-edcaec2e378d.png" 
                  alt={foto.titulo}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20">
                    {foto.tipo}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {foto.data}
                  </div>
                </div>
                <CardTitle className="text-lg">{foto.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{foto.descricao}</p>
                <p className="text-sm text-muted-foreground font-medium">{foto.quantidade}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Identidade Visual */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Identidade Visual e Downloads</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {identidadeVisual.map((item, index) => (
            <Card key={index} className="border-gold/20 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-gold/10 to-gold/5 rounded-t-lg relative overflow-hidden flex items-center justify-center">
                {item.tipo === "Logo" && <FileImage className="h-16 w-16 text-gold/60" />}
                {item.tipo === "Manual" && <FileImage className="h-16 w-16 text-gold/60" />}
                {item.tipo === "Paleta" && <Palette className="h-16 w-16 text-gold/60" />}
                {item.tipo === "Fonte" && <FileImage className="h-16 w-16 text-gold/60" />}
                {item.tipo === "Template" && <FileImage className="h-16 w-16 text-gold/60" />}
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20">
                    {item.tipo}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{item.tamanho}</span>
                </div>
                <CardTitle className="text-lg">{item.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.descricao}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.formato}</span>
                  <Button size="sm" className="bg-gold hover:bg-gold-dark">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Multimidia;