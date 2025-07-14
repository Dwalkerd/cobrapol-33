import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Download, Calendar, Eye } from "lucide-react";

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Multimídia</h1>
        <p className="text-muted-foreground text-lg">
          Acesse vídeos, podcasts, fotos e outros conteúdos multimídia do Cobrapol.
        </p>
      </div>

      {/* Vídeos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Vídeos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="border-gold/20 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted rounded-t-lg relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-12 w-12 text-gold" />
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
              <div className="aspect-video bg-muted rounded-t-lg relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-12 w-12 text-gold" />
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
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Galeria de Fotos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fotos.map((foto, index) => (
            <Card key={index} className="border-gold/20 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted rounded-t-lg"></div>
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
    </div>
  );
};

export default Multimidia;