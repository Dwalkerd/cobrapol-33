import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Shield, FileText, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AreaAssociado = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Background with gradient overlay */}
      <div className="flex-1 relative bg-gradient-to-br from-blue-police/10 via-background to-gold/10">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        
        {/* Centered login content */}
        <div className="relative flex items-center justify-center min-h-full px-4 py-12">
          <div className="w-full max-w-md">
            {/* Login Card */}
            <Card className="border-gold/20 shadow-2xl backdrop-blur-sm bg-background/95">
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto p-4 bg-gradient-to-br from-blue-police to-gold rounded-full w-fit">
                  <Lock className="h-10 w-10 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-foreground">Área do Associado</CardTitle>
                  <CardDescription className="mt-2">
                    Entre com suas credenciais para acessar sua área exclusiva
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login">CPF ou Matrícula</Label>
                    <Input
                      id="login"
                      type="text"
                      placeholder="Digite seu CPF ou matrícula"
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Digite sua senha"
                      className="h-12"
                    />
                  </div>
                  
                  <Button className="w-full h-12 bg-gradient-to-r from-blue-police to-gold hover:from-blue-police/90 hover:to-gold/90 text-white font-semibold">
                    Entrar na Área Restrita
                  </Button>
                </form>
                
                <div className="text-center space-y-3 pt-4 border-t border-border/50">
                  <a href="#" className="block text-sm text-gold hover:text-gold/80 hover:underline transition-colors">
                    Esqueci minha senha
                  </a>
                  <a href="#" className="block text-sm text-gold hover:text-gold/80 hover:underline transition-colors">
                    Primeiro acesso? Cadastre-se aqui
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Benefits info */}
            <div className="mt-8 grid grid-cols-1 gap-4">
              <Card className="border-gold/20 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">Benefícios Exclusivos</h3>
                      <p className="text-xs text-muted-foreground">Planos de saúde, assistência jurídica e muito mais</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gold/20 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">Documentos Digitais</h3>
                      <p className="text-xs text-muted-foreground">Carteira de identificação, comprovantes e declarações</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gold/20 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">Serviços Financeiros</h3>
                      <p className="text-xs text-muted-foreground">Empréstimos, cartões e financiamentos especiais</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AreaAssociado;