import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageSquare, Shield, Phone, Mail, Clock, CheckCircle } from "lucide-react";

const Ouvidoria = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "0800 123 4567",
      description: "Segunda a Sexta, 8h às 18h"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "ouvidoria@cobrapol.org.br",
      description: "Resposta em até 48h"
    },
    {
      icon: Clock,
      title: "Atendimento",
      info: "Presencial",
      description: "Agendamento obrigatório"
    }
  ];

  const guarantees = [
    "Sigilo absoluto da identidade do denunciante",
    "Investigação imparcial e rigorosa",
    "Resposta formal em até 30 dias",
    "Acompanhamento do andamento do processo",
    "Proteção contra retaliações"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <MessageSquare className="h-16 w-16 mx-auto mb-6 text-gold" />
            <h1 className="text-4xl font-bold mb-4">Ouvidoria</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Canal oficial para denúncias, sugestões, reclamações e elogios
            </p>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">O que é a Ouvidoria?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    A Ouvidoria do COBRAPOL é um canal direto de comunicação entre os filiados, 
                    a sociedade e a administração do sindicato, garantindo transparência e 
                    melhoria contínua dos nossos serviços.
                  </p>
                  <p>
                    Nossa missão é receber, analisar e encaminhar denúncias, sugestões, 
                    reclamações e elogios, sempre buscando soluções justas e eficazes.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Nossas Garantias</h3>
                  <ul className="space-y-3">
                    {guarantees.map((guarantee, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{guarantee}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((contact, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <contact.icon className="h-6 w-6 text-primary" />
                        {contact.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium text-lg">{contact.info}</p>
                      <p className="text-sm text-muted-foreground">{contact.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Formulário da Ouvidoria</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo para enviar sua manifestação
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Tipo de Manifestação */}
                  <div className="space-y-3">
                    <Label className="text-base font-medium">Tipo de Manifestação *</Label>
                    <RadioGroup defaultValue="reclamacao" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="denuncia" id="denuncia" />
                        <Label htmlFor="denuncia">Denúncia</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="reclamacao" id="reclamacao" />
                        <Label htmlFor="reclamacao">Reclamação</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sugestao" id="sugestao" />
                        <Label htmlFor="sugestao">Sugestão</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="elogio" id="elogio" />
                        <Label htmlFor="elogio">Elogio</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Identificação */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="anonymous" />
                      <Label htmlFor="anonymous" className="text-sm">
                        Manifestação anônima (não precisa se identificar)
                      </Label>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input id="nome" placeholder="Seu nome completo" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cpf">CPF/Matrícula</Label>
                        <Input id="cpf" placeholder="000.000.000-00" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" type="email" placeholder="seu@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input id="telefone" placeholder="(11) 99999-9999" />
                      </div>
                    </div>
                  </div>

                  {/* Detalhes da Manifestação */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="assunto">Assunto *</Label>
                      <Input id="assunto" placeholder="Resumo da sua manifestação" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="setor">Setor/Área Relacionada</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o setor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="juridico">Jurídico</SelectItem>
                          <SelectItem value="administrativo">Administrativo</SelectItem>
                          <SelectItem value="financeiro">Financeiro</SelectItem>
                          <SelectItem value="atendimento">Atendimento</SelectItem>
                          <SelectItem value="diretoria">Diretoria</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="descricao">Descrição Detalhada *</Label>
                      <Textarea 
                        id="descricao" 
                        placeholder="Descreva sua manifestação de forma detalhada. Inclua datas, nomes e qualquer informação relevante."
                        rows={6}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="documentos">Anexar Documentos</Label>
                      <Input id="documentos" type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" />
                      <p className="text-xs text-muted-foreground">
                        Formatos aceitos: PDF, JPG, PNG, DOC, DOCX. Tamanho máximo: 10MB por arquivo.
                      </p>
                    </div>
                  </div>

                  {/* Termos */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm">
                        Declaro que as informações fornecidas são verdadeiras *
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="privacy" />
                      <Label htmlFor="privacy" className="text-sm">
                        Autorizo o tratamento dos meus dados pessoais conforme a LGPD *
                      </Label>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-6">
                    <Button type="submit" className="flex-1">
                      Enviar Manifestação
                    </Button>
                    <Button type="button" variant="outline">
                      Limpar Formulário
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Info */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Como Funciona o Processo</h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Recebimento</h3>
                  <p className="text-sm text-muted-foreground">
                    Sua manifestação é registrada e protocolada
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Análise</h3>
                  <p className="text-sm text-muted-foreground">
                    Avaliação preliminar e encaminhamento
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Investigação</h3>
                  <p className="text-sm text-muted-foreground">
                    Apuração dos fatos pelo setor competente
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Resposta</h3>
                  <p className="text-sm text-muted-foreground">
                    Comunicação da solução ou medidas adotadas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ouvidoria;