import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserPlus, CheckCircle, FileText, Shield } from "lucide-react";

const Filiacao = () => {
  const benefits = [
    "Assistência jurídica especializada",
    "Representação em processos administrativos",
    "Orientação previdenciária",
    "Convênios médicos e odontológicos",
    "Desconto em cursos e capacitações",
    "Participação em eventos corporativos"
  ];

  const requirements = [
    "Ser servidor público da área de segurança",
    "Estar em exercício ou aposentado",
    "Apresentar documentos pessoais",
    "Comprovante de lotação ou aposentadoria",
    "Não possuir penalidades disciplinares graves"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <UserPlus className="h-16 w-16 mx-auto mb-6 text-gold" />
            <h1 className="text-4xl font-bold mb-4">Filiação ao Sindicato</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Junte-se a milhares de policiais que já garantiram seus direitos conosco
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    Benefícios da Filiação
                  </CardTitle>
                  <CardDescription>
                    Vantagens exclusivas para nossos filiados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-blue-600" />
                    Requisitos para Filiação
                  </CardTitle>
                  <CardDescription>
                    Documentos e critérios necessários
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Formulário de Filiação</CardTitle>
                  <CardDescription>
                    Preencha seus dados para iniciar o processo de filiação
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <Input id="nome" placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cpf">CPF *</Label>
                      <Input id="cpf" placeholder="000.000.000-00" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input id="telefone" placeholder="(11) 99999-9999" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="estado">Estado *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione seu estado" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sp">São Paulo</SelectItem>
                          <SelectItem value="rj">Rio de Janeiro</SelectItem>
                          <SelectItem value="mg">Minas Gerais</SelectItem>
                          <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cargo">Cargo/Função *</Label>
                      <Input id="cargo" placeholder="Ex: Soldado, Cabo, Sargento" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="matricula">Número da Matrícula</Label>
                      <Input id="matricula" placeholder="Sua matrícula funcional" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lotacao">Lotação Atual</Label>
                      <Input id="lotacao" placeholder="Unidade onde trabalha" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="observacoes">Observações</Label>
                    <Textarea 
                      id="observacoes" 
                      placeholder="Informações adicionais que considera relevantes"
                      rows={4}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      Declaro que li e aceito os termos de filiação e autorizo o desconto da mensalidade *
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                      Desejo receber informações e novidades por e-mail
                    </Label>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <Button type="submit" className="flex-1">
                      Enviar Solicitação de Filiação
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

        {/* Contact Info */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Precisa de Ajuda?</h2>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para auxiliar você no processo de filiação
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <span className="font-medium">Telefone:</span>
                <span>(11) 1234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">WhatsApp:</span>
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">E-mail:</span>
                <span>filiacao@cobrapol.org.br</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Filiacao;