import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NoticiaDetalhes = () => {
  const { id } = useParams();

  // Dados da notícia - normalmente viriam de uma API
  const noticia = {
    id: "1",
    titulo: "Nova Conquista: Aumento Salarial Aprovado",
    resumo: "Após intensas negociações, foi aprovado reajuste salarial para a categoria policial.",
    conteudo: `
      <p>Após meses de intensas negociações com representantes do governo federal e estaduais, a COBRAPOL conquistou uma importante vitória para a categoria policial civil: a aprovação de um reajuste salarial significativo que beneficiará milhares de profissionais em todo o país.</p>
      
      <h3>Detalhes do Acordo</h3>
      <p>O acordo estabelece um reajuste escalonado que será implementado em três etapas ao longo dos próximos 18 meses. Na primeira fase, que entra em vigor no próximo mês, os policiais civis receberão um aumento de 8% em seus vencimentos básicos.</p>
      
      <p>A segunda etapa, prevista para seis meses depois, contempla um adicional de 5%, enquanto a terceira e última fase, após um ano, inclui mais 3% de reajuste, totalizando um aumento acumulado de aproximadamente 16,8%.</p>
      
      <h3>Impacto na Categoria</h3>
      <p>Este reajuste representa não apenas uma melhoria na remuneração, mas também o reconhecimento da importância do trabalho desenvolvido pelos policiais civis. A medida beneficiará diretamente mais de 150 mil profissionais em todo o território nacional.</p>
      
      <p>Além do reajuste salarial, o acordo também prevê melhorias nos benefícios, incluindo ampliação da cobertura do plano de saúde e revisão dos critérios de aposentadoria.</p>
      
      <h3>Próximos Passos</h3>
      <p>A COBRAPOL continua trabalhando em outras pautas importantes para a categoria, incluindo a aprovação da Lei Orgânica Nacional das Polícias Civis e a implementação de programas de valorização profissional.</p>
    `,
    data: "15/01/2024",
    autor: "Redação Cobrapol",
    categoria: "Conquistas",
    visualizacoes: "2.341",
    imagem: "/lovable-uploads/ec42e553-3cfd-4344-acb3-edcaec2e378d.png"
  };

  const noticiasRelacionadas = [
    {
      id: "2",
      titulo: "Novo Acordo Coletivo Assinado",
      resumo: "Acordo garante melhores condições de trabalho para policiais.",
      data: "03/01/2024",
      categoria: "Conquistas",
      imagem: "/lovable-uploads/ec42e553-3cfd-4344-acb3-edcaec2e378d.png"
    },
    {
      id: "3",
      titulo: "Plano de Saúde: Novas Coberturas",
      resumo: "Ampliação da cobertura do plano de saúde para familiares.",
      data: "10/01/2024",
      categoria: "Benefícios",
      imagem: "/lovable-uploads/ec42e553-3cfd-4344-acb3-edcaec2e378d.png"
    },
    {
      id: "4",
      titulo: "Capacitação Profissional: Novos Cursos",
      resumo: "Lançamento de programa de capacitação em segurança pública.",
      data: "08/01/2024",
      categoria: "Capacitação",
      imagem: "/lovable-uploads/ec42e553-3cfd-4344-acb3-edcaec2e378d.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Navegação */}
        <div className="mb-6">
          <Link to="/publicacoes/noticias">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para Notícias
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Conteúdo principal */}
          <div className="lg:col-span-2">
            <article>
              {/* Cabeçalho */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20">
                    {noticia.categoria}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {noticia.data}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {noticia.autor}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {noticia.visualizacoes} visualizações
                    </div>
                  </div>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {noticia.titulo}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  {noticia.resumo}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Compartilhar
                  </Button>
                </div>
              </div>

              {/* Imagem */}
              <div className="mb-8">
                <img 
                  src={noticia.imagem} 
                  alt={noticia.titulo}
                  className="w-full h-64 lg:h-96 object-cover rounded-lg"
                />
              </div>

              {/* Conteúdo */}
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: noticia.conteudo }} />
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Notícias Relacionadas */}
            <Card>
              <CardHeader>
                <CardTitle>Notícias Relacionadas</CardTitle>
                <CardDescription>
                  Outras notícias que podem interessar você
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {noticiasRelacionadas.map((noticiaRelacionada) => (
                  <Link 
                    key={noticiaRelacionada.id}
                    to={`/publicacoes/noticia/${noticiaRelacionada.id}`}
                    className="block"
                  >
                    <Card className="hover:shadow-md transition-shadow border-gold/20">
                      <CardContent className="p-4">
                        <div className="flex gap-3">
                          <img 
                            src={noticiaRelacionada.imagem} 
                            alt={noticiaRelacionada.titulo}
                            className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <Badge 
                              variant="outline" 
                              className="bg-gold/10 text-gold border-gold/20 mb-2 text-xs"
                            >
                              {noticiaRelacionada.categoria}
                            </Badge>
                            <h4 className="font-medium text-sm text-foreground line-clamp-2 mb-1">
                              {noticiaRelacionada.titulo}
                            </h4>
                            <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                              {noticiaRelacionada.resumo}
                            </p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {noticiaRelacionada.data}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle>Newsletter</CardTitle>
                <CardDescription>
                  Receba as principais notícias no seu email
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full p-2 border border-gold/20 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                  <Button className="w-full bg-gold hover:bg-gold-dark text-foreground">
                    Assinar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoticiaDetalhes;