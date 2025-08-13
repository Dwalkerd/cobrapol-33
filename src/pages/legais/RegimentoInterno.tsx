import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Settings, Users, Gavel, Clock } from "lucide-react";

const RegimentoInterno = () => {
  const procedures = [
    {
      title: "Assembleias Gerais",
      description: "Normas para convocação, quórum e deliberações",
      icon: Users
    },
    {
      title: "Processos Eleitorais",
      description: "Regras para eleições dos órgãos dirigentes",
      icon: Gavel
    },
    {
      title: "Funcionamento dos Órgãos",
      description: "Procedimentos internos de cada órgão",
      icon: Settings
    },
    {
      title: "Prazos e Cronogramas",
      description: "Calendário de atividades obrigatórias",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Settings className="h-16 w-16 mx-auto mb-6 text-gold" />
            <h1 className="text-4xl font-bold mb-4">Regimento Interno</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Normas complementares que regulamentam o funcionamento interno do COBRAPOL
            </p>
          </div>
        </section>

        {/* Document Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    Sobre o Regimento Interno
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    O Regimento Interno do COBRAPOL é um documento complementar ao Estatuto Social, 
                    que estabelece normas detalhadas para o funcionamento administrativo, operacional 
                    e disciplinar da entidade. É aprovado pela Diretoria e pode ser alterado conforme 
                    necessário para melhor funcionamento da organização.
                  </p>
                  
                  <div className="flex justify-center">
                    <Button className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download do Regimento Completo (PDF)
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Main Procedures */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {procedures.map((procedure, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <procedure.icon className="h-6 w-6 text-primary" />
                        {procedure.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{procedure.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Detailed Content */}
              <Tabs defaultValue="administration" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="administration">Administração</TabsTrigger>
                  <TabsTrigger value="assemblies">Assembleias</TabsTrigger>
                  <TabsTrigger value="elections">Eleições</TabsTrigger>
                  <TabsTrigger value="discipline">Disciplina</TabsTrigger>
                </TabsList>

                <TabsContent value="administration" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Funcionamento Administrativo</CardTitle>
                      <CardDescription>
                        Normas para o dia a dia administrativo da entidade
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Horário de Funcionamento</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Segunda a Sexta-feira: 8h às 18h</li>
                          <li>Plantão de emergência: 24h (apenas para filiados)</li>
                          <li>Atendimento ao público: agendamento obrigatório</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Estrutura de Atendimento</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Recepção e triagem inicial</li>
                          <li>Atendimento jurídico especializado</li>
                          <li>Orientação previdenciária</li>
                          <li>Suporte administrativo</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Documentação Necessária</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Documento de identidade com foto</li>
                          <li>Comprovante de filiação (para serviços exclusivos)</li>
                          <li>Documentos específicos conforme o serviço solicitado</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="assemblies" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Normas para Assembleias</CardTitle>
                      <CardDescription>
                        Procedimentos para convocação e realização de assembleias
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Assembleia Geral Ordinária</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Realizada anualmente até 31 de março</li>
                          <li>Convocação com 30 dias de antecedência</li>
                          <li>Pauta: prestação de contas do exercício anterior</li>
                          <li>Quórum mínimo: 10% dos filiados em primeira convocação</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Assembleia Geral Extraordinária</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Convocação com 15 dias de antecedência</li>
                          <li>Pode ser convocada pela Diretoria ou por 20% dos filiados</li>
                          <li>Pauta específica informada na convocação</li>
                          <li>Deliberações por maioria simples dos presentes</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Procedimentos de Votação</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Votação aberta como regra geral</li>
                          <li>Votação secreta quando solicitada por 10% dos presentes</li>
                          <li>Registro em ata de todas as deliberações</li>
                          <li>Direito de manifestação garantido a todos os filiados</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="elections" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Processo Eleitoral</CardTitle>
                      <CardDescription>
                        Regras para eleições dos órgãos dirigentes
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Cronograma Eleitoral</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Eleições realizadas a cada 4 anos</li>
                          <li>Edital de convocação 90 dias antes</li>
                          <li>Prazo para registro de chapas: 30 dias</li>
                          <li>Campanha eleitoral: 15 dias</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Condições de Elegibilidade</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Ser filiado há pelo menos 2 anos</li>
                          <li>Estar em dia com as contribuições</li>
                          <li>Não ter sofrido penalidades disciplinares</li>
                          <li>Apresentar certidões negativas</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Comissão Eleitoral</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Composta por 3 membros efetivos e 3 suplentes</li>
                          <li>Eleita em Assembleia Geral</li>
                          <li>Responsável por todo o processo eleitoral</li>
                          <li>Decisões por maioria absoluta</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="discipline" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Regime Disciplinar</CardTitle>
                      <CardDescription>
                        Normas disciplinares e procedimentos de apuração
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Penalidades Aplicáveis</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Advertência verbal</li>
                          <li>Advertência por escrito</li>
                          <li>Suspensão temporária dos direitos</li>
                          <li>Exclusão do quadro de filiados</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Procedimento de Apuração</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Instauração de sindicância ou processo administrativo</li>
                          <li>Garantia de ampla defesa e contraditório</li>
                          <li>Prazo de 30 dias para conclusão</li>
                          <li>Direito de recurso à Assembleia Geral</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Comissão Disciplinar</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Composta por 3 membros da Diretoria</li>
                          <li>Competência para instaurar processos</li>
                          <li>Propor penalidades à Diretoria</li>
                          <li>Zelar pelo cumprimento das normas</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Recent Updates */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Atualizações Recentes</CardTitle>
                  <CardDescription>
                    Últimas alterações no Regimento Interno
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">Janeiro 2024</h4>
                      <p className="text-sm text-muted-foreground">
                        Inclusão de normas para atendimento digital e videoconferências em assembleias
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">Dezembro 2023</h4>
                      <p className="text-sm text-muted-foreground">
                        Adequação às normas da Lei Geral de Proteção de Dados (LGPD)
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">Novembro 2023</h4>
                      <p className="text-sm text-muted-foreground">
                        Atualização dos procedimentos eleitorais conforme legislação vigente
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="mt-8 bg-primary text-white">
                <CardHeader>
                  <CardTitle>Dúvidas sobre o Regimento?</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Entre em contato com nossa Secretaria Geral
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <h5 className="font-semibold mb-2">Telefone</h5>
                      <p className="text-sm">(11) 1234-5678</p>
                      <p className="text-xs text-primary-foreground/70">Ramal 102</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">E-mail</h5>
                      <p className="text-sm">secretaria@cobrapol.org.br</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Atendimento</h5>
                      <p className="text-sm">Segunda a Sexta<br/>9h às 17h</p>
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

export default RegimentoInterno;