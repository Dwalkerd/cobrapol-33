import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2, Clock, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ArtigoDetalhes = () => {
  const { id } = useParams();

  // Dados do artigo - normalmente viriam de uma API
  const artigo = {
    id: "1",
    titulo: "A Importância da Valorização Profissional dos Policiais",
    resumo: "Reflexões sobre como a valorização impacta na qualidade dos serviços de segurança pública.",
    conteudo: `
      <p>A valorização profissional dos policiais civis é um tema fundamental que impacta diretamente na qualidade dos serviços de segurança pública oferecidos à sociedade. Este artigo explora as múltiplas dimensões dessa questão e sua importância para o desenvolvimento de uma polícia mais eficiente e humanizada.</p>
      
      <h3>O Cenário Atual</h3>
      <p>Atualmente, os profissionais da segurança pública enfrentam diversos desafios que afetam sua motivação e desempenho. A falta de reconhecimento adequado, tanto financeiro quanto social, tem sido uma constante preocupação da categoria.</p>
      
      <p>Segundo dados da COBRAPOL, pesquisas recentes indicam que a valorização profissional está diretamente relacionada à melhoria dos índices de segurança pública. Estados que investiram em melhores salários, capacitação e condições de trabalho apresentaram redução significativa nos índices de criminalidade.</p>
      
      <h3>Impactos na Qualidade do Serviço</h3>
      <p>Quando os policiais se sentem valorizados e reconhecidos, diversos aspectos positivos emergem:</p>
      
      <ul>
        <li><strong>Maior engajamento:</strong> Profissionais motivados tendem a ser mais proativos e eficientes em suas atividades</li>
        <li><strong>Redução do estresse:</strong> Melhores condições de trabalho reduzem o estresse ocupacional</li>
        <li><strong>Capacitação continuada:</strong> Investimentos em educação melhoram a qualidade técnica do trabalho</li>
        <li><strong>Retenção de talentos:</strong> Evita a evasão de profissionais experientes para outras áreas</li>
      </ul>
      
      <h3>Estratégias de Valorização</h3>
      <p>A valorização profissional pode ser alcançada através de diversas estratégias integradas:</p>
      
      <h4>1. Remuneração Adequada</h4>
      <p>Salários compatíveis com a responsabilidade e riscos inerentes à profissão são fundamentais. Isso inclui não apenas o salário base, mas também benefícios como plano de saúde, auxílio alimentação e programas de aposentadoria.</p>
      
      <h4>2. Capacitação e Desenvolvimento</h4>
      <p>Investir em programas de capacitação continuada permite que os profissionais se mantenham atualizados com as melhores práticas e tecnologias disponíveis na área de segurança pública.</p>
      
      <h4>3. Reconhecimento Social</h4>
      <p>É importante que a sociedade reconheça o trabalho dos policiais civis e sua importância para a manutenção da ordem e segurança pública.</p>
      
      <h3>Conclusão</h3>
      <p>A valorização profissional dos policiais civis não é apenas uma questão de justiça social, mas uma necessidade estratégica para o desenvolvimento de uma segurança pública mais eficiente e humanizada. Investir nos profissionais da segurança é investir no bem-estar de toda a sociedade.</p>
    `,
    data: "14/01/2024",
    autor: "Dr. João Silva",
    categoria: "Opinião",
    tempoLeitura: "8 min",
    visualizacoes: "1.847",
    imagem: "/lovable-uploads/ec42e553-3cfd-4344-acb3-edcaec2e378d.png"
  };

  const artigosRelacionados = [
    {
      id: "2",
      titulo: "Direitos Trabalhistas: O Que Todo Policial Deve Saber",
      resumo: "Guia completo sobre os direitos garantidos por lei aos profissionais da segurança pública.",
      data: "11/01/2024",
      categoria: "Direitos",
      tempoLeitura: "12 min",
      imagem: "/lovable-uploads/ec42e553-3cfd-4344-acb3-edcaec2e378d.png"
    },
    {
      id: "3",
      titulo: "Saúde Mental dos Policiais: Uma Questão de Prioridade",
      resumo: "A importância do cuidado com a saúde mental dos profissionais da segurança.",
      data: "07/01/2024",
      categoria: "Saúde",
      tempoLeitura: "10 min",
      imagem: "/lovable-uploads/ec42e553-3cfd-4344-acb3-edcaec2e378d.png"
    },
    {
      id: "4",
      titulo: "Histórico das Conquistas Sindicais na Polícia",
      resumo: "Um olhar sobre as principais vitórias do movimento sindical policial brasileiro.",
      data: "04/01/2024",
      categoria: "História",
      tempoLeitura: "15 min",
      imagem: "/lovable-uploads/ec42e553-3cfd-4344-acb3-edcaec2e378d.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Navegação */}
        <div className="mb-6">
          <Link to="/publicacoes/blog">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para Blog
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
                    {artigo.categoria}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {artigo.data}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {artigo.tempoLeitura}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {artigo.visualizacoes} visualizações
                    </div>
                  </div>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {artigo.titulo}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  {artigo.resumo}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Por {artigo.autor}</span>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Compartilhar
                  </Button>
                </div>
              </div>

              {/* Imagem */}
              <div className="mb-8">
                <img 
                  src={artigo.imagem} 
                  alt={artigo.titulo}
                  className="w-full h-64 lg:h-96 object-cover rounded-lg"
                />
              </div>

              {/* Conteúdo */}
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: artigo.conteudo }} />
              </div>

              {/* Autor */}
              <div className="mt-12 p-6 bg-muted/50 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">Sobre o Autor</h4>
                <p className="text-muted-foreground">
                  {artigo.autor} é especialista em segurança pública e colaborador regular do blog da COBRAPOL, 
                  com vasta experiência em análises sobre políticas públicas e direitos dos profissionais da área.
                </p>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Artigos Relacionados */}
            <Card>
              <CardHeader>
                <CardTitle>Artigos Relacionados</CardTitle>
                <CardDescription>
                  Outros artigos que podem interessar você
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {artigosRelacionados.map((artigoRelacionado) => (
                  <Link 
                    key={artigoRelacionado.id}
                    to={`/publicacoes/artigo/${artigoRelacionado.id}`}
                    className="block"
                  >
                    <Card className="hover:shadow-md transition-shadow border-gold/20">
                      <CardContent className="p-4">
                        <div className="flex gap-3">
                          <img 
                            src={artigoRelacionado.imagem} 
                            alt={artigoRelacionado.titulo}
                            className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <Badge 
                              variant="outline" 
                              className="bg-gold/10 text-gold border-gold/20 mb-2 text-xs"
                            >
                              {artigoRelacionado.categoria}
                            </Badge>
                            <h4 className="font-medium text-sm text-foreground line-clamp-2 mb-1">
                              {artigoRelacionado.titulo}
                            </h4>
                            <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                              {artigoRelacionado.resumo}
                            </p>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {artigoRelacionado.data}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {artigoRelacionado.tempoLeitura}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Contribua */}
            <Card>
              <CardHeader>
                <CardTitle>Contribua</CardTitle>
                <CardDescription>
                  Tem uma ideia para artigo?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Contribua com o blog da COBRAPOL enviando sua proposta de artigo.
                </p>
                <Button className="w-full bg-gold hover:bg-gold-dark text-foreground">
                  Enviar Proposta
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtigoDetalhes;