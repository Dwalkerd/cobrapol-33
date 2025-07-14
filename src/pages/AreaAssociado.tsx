import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, User, Shield, FileText, CreditCard, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AreaAssociado = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Área do Associado</h1>
        <p className="text-muted-foreground text-lg">
          Acesse sua área exclusiva para consultar benefícios, documentos e serviços.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Login */}
        <Card className="border-gold/20">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-gold/10 rounded-full w-fit">
              <Lock className="h-8 w-8 text-gold" />
            </div>
            <CardTitle>Faça seu Login</CardTitle>
            <CardDescription>
              Entre com suas credenciais para acessar sua área exclusiva
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="login">CPF ou Matrícula</Label>
                <Input
                  id="login"
                  type="text"
                  placeholder="Digite seu CPF ou matrícula"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  className="mt-1"
                />
              </div>
              
              <Button className="w-full bg-gold hover:bg-gold-dark">
                Entrar
              </Button>
              
              <div className="text-center space-y-2">
                <a href="#" className="text-sm text-gold hover:underline">
                  Esqueci minha senha
                </a>
                <br />
                <a href="#" className="text-sm text-gold hover:underline">
                  Primeiro acesso
                </a>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Benefícios */}
        <div className="space-y-6">
          <Card className="border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-gold" />
                Benefícios Exclusivos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  <span className="text-sm">Plano de saúde com desconto</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  <span className="text-sm">Assistência jurídica gratuita</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  <span className="text-sm">Cursos de capacitação</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  <span className="text-sm">Convênios com empresas</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-gold" />
                Documentos Digitais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  <span className="text-sm">Carteira de identificação</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  <span className="text-sm">Comprovante de filiação</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  <span className="text-sm">Declaração de imposto de renda</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  <span className="text-sm">Histórico de contribuições</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-gold" />
                Serviços Financeiros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  <span className="text-sm">Empréstimo consignado</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  <span className="text-sm">Cartão de crédito</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  <span className="text-sm">Financiamento imobiliário</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  <span className="text-sm">Seguro de vida</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-gold" />
              Precisa de Ajuda?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                <p className="text-muted-foreground">(11) 1234-5678</p>
                <p className="text-sm text-muted-foreground">Seg-Sex: 9h às 18h</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                <p className="text-muted-foreground">(11) 9 9999-8888</p>
                <p className="text-sm text-muted-foreground">Seg-Sex: 9h às 17h</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">associado@cobrapol.org.br</p>
                <p className="text-sm text-muted-foreground">Resposta em 24h</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default AreaAssociado;