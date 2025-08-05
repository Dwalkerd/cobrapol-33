import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Play, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import newsImage from "@/assets/news-policia-reuniao.jpg";

const Noticias = () => {
  const noticiaDestaque = {
    id: "destaque",
    titulo: "Senado pode votar ações de atenção ao parto prematuro",
    resumo: "Projeto visa criar políticas públicas específicas para reduzir os índices de nascimentos prematuros no país e melhorar o atendimento médico.",
    data: "15/01/2024",
    autor: "Redação Cobrapol",
    categoria: "Conquistas",
    imagem: newsImage
  };

  const noticiasSecundarias = [
    {
      id: "1",
      titulo: "Senado analisa indicações com foco em Judiciário e saúde",
      resumo: "Comissões do Senado avaliam nomeações para diversos órgãos federais.",
      data: "14/01/2024",
      autor: "Redação",
      categoria: "Institucional",
      imagem: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&h=400&fit=crop"
    },
    {
      id: "2",
      titulo: "Isenção de IR até dois salários mínimos vai a Plenário",
      resumo: "Proposta de alteração na tabela do Imposto de Renda será votada.",
      data: "13/01/2024",
      autor: "Redação",
      categoria: "Benefícios",
      imagem: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
    }
  ];

  const ultimasNoticias = [
    "Congresso Nacional celebra os 90 anos do programa 'A Voz do Brasil'",
    "19 de agosto é o Dia da Luta da População em Situação de Rua",
    "Oposição anuncia obstrução na tentativa de aprovar um 'pacote da paz'",
    "Carnaval de Salvador vai a sanção como patrimônio da cultura brasileira",
    "Isenção de IR até dois salários mínimos vai a Plenário"
  ];

  const maisVistas = [
    "Novo acordo salarial para policiais aprovado",
    "Benefícios médicos ampliados para familiares",
    "Capacitação profissional: novos cursos disponíveis",
    "Reunião com Ministério da Justiça define pautas",
    "Acordo coletivo garante melhores condições"
  ];

  const outrasNoticias = [
    {
      id: "3",
      titulo: "Plano de Saúde: Novas Coberturas",
      resumo: "Ampliação da cobertura do plano de saúde para familiares dos associados.",
      data: "10/01/2024",
      categoria: "Benefícios",
      imagem: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop"
    },
    {
      id: "4",
      titulo: "Capacitação Profissional: Novos Cursos",
      resumo: "Lançamento de programa de capacitação com foco em segurança pública moderna.",
      data: "08/01/2024",
      categoria: "Capacitação",
      imagem: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop"
    },
    {
      id: "5",
      titulo: "Reunião com Ministério da Justiça",
      resumo: "Diretoria se reuniu com representantes do governo para discutir melhorias.",
      data: "05/01/2024",
      categoria: "Institucional",
      imagem: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
    },
    {
      id: "6",
      titulo: "Novo Acordo Coletivo Assinado",
      resumo: "Acordo garante melhores condições de trabalho para policiais de todo o país.",
      data: "03/01/2024",
      categoria: "Conquistas",
      imagem: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop"
    },
    {
      id: "7",
      titulo: "Benefícios Odontológicos Ampliados",
      resumo: "Nova parceria oferece atendimento odontológico completo para associados.",
      data: "01/01/2024",
      categoria: "Benefícios",
      imagem: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop"
    },
    {
      id: "8",
      titulo: "Congresso Nacional de Segurança",
      resumo: "Evento nacional discutirá o futuro da segurança pública no Brasil.",
      data: "28/12/2023",
      categoria: "Eventos",
      imagem: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Notícias</h1>
          <p className="text-muted-foreground text-lg">
            Fique por dentro das últimas notícias e acontecimentos do Cobrapol.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured News Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Main Featured News */}
              <Link to={`/publicacoes/noticia/${noticiaDestaque.id}`} className="md:col-span-1">
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white overflow-hidden h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={noticiaDestaque.imagem}
                      alt={noticiaDestaque.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h2 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {noticiaDestaque.titulo}
                    </h2>
                    <p className="text-muted-foreground line-clamp-3 mb-4">
                      {noticiaDestaque.resumo}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {noticiaDestaque.data}
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Secondary News */}
              <div className="space-y-4">
                {noticiasSecundarias.map((noticia) => (
                  <Link key={noticia.id} to={`/publicacoes/noticia/${noticia.id}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white overflow-hidden">
                      <div className="flex gap-4 p-4">
                        <div className="w-24 h-16 flex-shrink-0 overflow-hidden rounded">
                          <img 
                            src={noticia.imagem}
                            alt={noticia.titulo}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                            {noticia.titulo}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {noticia.data}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* AO VIVO Section */}
            <div className="mb-8">
              <Card className="bg-primary text-primary-foreground overflow-hidden">
                <div className="flex items-center gap-4 p-4">
                  <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    AO VIVO
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Ao vivo: Comissão de Direitos Humanos</h3>
                    <p className="text-sm opacity-80">Regulamentação da Psicologia Jurídica</p>
                  </div>
                  <Play className="h-8 w-8" />
                </div>
              </Card>
            </div>

            {/* More News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outrasNoticias.map((noticia) => (
                <Link key={noticia.id} to={`/publicacoes/noticia/${noticia.id}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white overflow-hidden h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={noticia.imagem}
                        alt={noticia.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-sm text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {noticia.titulo}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                        {noticia.resumo}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {noticia.data}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Agência Senado */}
            <Card className="mb-6 bg-primary text-primary-foreground">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold mb-1">28</div>
                <div className="text-sm">anos</div>
                <div className="text-lg font-semibold mt-2">agência senado</div>
                <div className="text-xs opacity-80">O Legislativo conectado com você</div>
              </CardContent>
            </Card>

            {/* Últimas / Mais vistas */}
            <Card className="mb-6">
              <CardHeader className="pb-3">
                <div className="flex gap-4">
                  <button className="text-primary font-semibold border-b-2 border-primary pb-1">
                    Últimas
                  </button>
                  <button className="text-muted-foreground hover:text-foreground">
                    Mais vistas
                  </button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {ultimasNoticias.map((titulo, index) => (
                    <div key={index} className="text-sm hover:text-primary cursor-pointer transition-colors">
                      {titulo}
                    </div>
                  ))}
                  <div className="text-right">
                    <button className="text-primary text-sm hover:underline">
                      Veja mais →
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Senado Multimídia */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">senado multimídia</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="aspect-video bg-muted rounded overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop"
                    alt="Senado Multimídia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Assista, recorte, baixe e compartilhe
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Noticias;