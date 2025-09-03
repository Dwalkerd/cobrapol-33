import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Scale, Users, Calendar } from "lucide-react";

const Estatuto = () => {
  const chapters = [
    {
      title: "Capítulo I - Da Denominação, Sede e Fins",
      articles: "Art. 1º ao 5º",
      description: "Definição da entidade, sede social e objetivos institucionais"
    },
    {
      title: "Capítulo II - Dos Associados",
      articles: "Art. 6º ao 15º",
      description: "Condições de filiação, direitos e deveres dos associados"
    },
    {
      title: "Capítulo III - Da Organização e Administração",
      articles: "Art. 16º ao 35º",
      description: "Estrutura organizacional e órgãos de administração"
    },
    {
      title: "Capítulo IV - Do Patrimônio e Receitas",
      articles: "Art. 36º ao 42º",
      description: "Gestão patrimonial e fontes de receita da entidade"
    },
    {
      title: "Capítulo V - Das Disposições Gerais",
      articles: "Art. 43º ao 50º",
      description: "Normas complementares e disposições finais"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Scale className="h-16 w-16 mx-auto mb-6 text-gold" />
            <h1 className="text-4xl font-bold mb-4">Estatuto Social</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Documento fundamental que rege a organização e funcionamento do COBRAPOL
            </p>
          </div>
        </section>

        {/* Document Info */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    Informações do Documento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Calendar className="h-8 w-8 mx-auto text-primary mb-2" />
                      <h4 className="font-semibold">Última Revisão</h4>
                      <p className="text-sm text-muted-foreground">15 de janeiro de 2024</p>
                    </div>
                    <div className="text-center">
                      <Users className="h-8 w-8 mx-auto text-primary mb-2" />
                      <h4 className="font-semibold">Aprovado em</h4>
                      <p className="text-sm text-muted-foreground">Assembleia Geral</p>
                    </div>
                    <div className="text-center">
                      <FileText className="h-8 w-8 mx-auto text-primary mb-2" />
                      <h4 className="font-semibold">Registro</h4>
                      <p className="text-sm text-muted-foreground">Cartório competente</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <Button className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download do Estatuto Completo (PDF)
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Chapters Overview */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-center mb-8">Estrutura do Estatuto</h2>
                
                {chapters.map((chapter, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{chapter.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {chapter.articles}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{chapter.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Key Highlights */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Principais Destaques</CardTitle>
                  <CardDescription>
                    Aspectos fundamentais do nosso Estatuto Social
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Objetivos Institucionais</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        <li>Defender os direitos e interesses dos policiais</li>
                        <li>Promover a valorização profissional da categoria</li>
                        <li>Representar a categoria em negociações coletivas</li>
                        <li>Prestar assistência jurídica aos filiados</li>
                        <li>Desenvolver ações de capacitação profissional</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Estrutura Organizacional</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        <li>Assembleia Geral (órgão máximo)</li>
                        <li>Diretoria Executiva</li>
                        <li>Conselho Fiscal</li>
                        <li>Conselho Deliberativo</li>
                        <li>Comissões Especializadas</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rights and Duties */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Direitos dos Filiados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Participar das Assembleias Gerais</li>
                      <li>Votar e ser votado para cargos eletivos</li>
                      <li>Utilizar os serviços oferecidos pela entidade</li>
                      <li>Fiscalizar a administração</li>
                      <li>Apresentar propostas e sugestões</li>
                      <li>Receber assistência jurídica</li>
                      <li>Participar de cursos e eventos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Deveres dos Filiados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Cumprir as disposições estatutárias</li>
                      <li>Pagar pontualmente as contribuições</li>
                      <li>Zelar pelo patrimônio da entidade</li>
                      <li>Participar das atividades sindicais</li>
                      <li>Respeitar as decisões dos órgãos dirigentes</li>
                      <li>Defender os interesses da categoria</li>
                      <li>Manter atualizados os dados cadastrais</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Legal Information */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Informações Legais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Dados da Entidade</h4>
                      <ul className="space-y-1 text-sm">
                        <li><strong>Razão Social:</strong> COBRAPOL - Confederação Brasileira dos Policiais</li>
                        <li><strong>CNPJ:</strong> 12.345.678/0001-90</li>
                        <li><strong>Fundação:</strong> 1993</li>
                        <li><strong>Natureza Jurídica:</strong> Entidade Sindical</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Sede Social</h4>
                      <ul className="space-y-1 text-sm">
                        <li><strong>Endereço:</strong> SCS Quadra 01 Bloco G Sala 201</li>
                        <li><strong>Edifício:</strong> Baracat - Asa Sul</li>
                        <li><strong>Cidade:</strong> Brasília/DF</li>
                        <li><strong>CEP:</strong> 70309-900</li>
                        <li><strong>CNPJ:</strong> 37.050.804/0001-05</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact for Questions */}
              <Card className="mt-8 bg-primary text-white">
                <CardHeader>
                  <CardTitle>Dúvidas sobre o Estatuto?</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Nossa equipe jurídica está disponível para esclarecimentos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <h5 className="font-semibold mb-2">Telefone</h5>
                      <p className="text-sm">(11) 1234-5678</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">E-mail</h5>
                      <p className="text-sm">juridico@cobrapol.org.br</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Atendimento</h5>
                      <p className="text-sm">Segunda a Sexta<br/>8h às 18h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Estatuto;