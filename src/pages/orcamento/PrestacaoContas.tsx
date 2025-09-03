import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrestacaoContas = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Prestação de Contas
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Prestação de
            <span className="text-gold"> Contas</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparência total na aplicação dos recursos. Acesse os demonstrativos financeiros, 
            pareceres de auditoria e relatórios de execução orçamentária.
          </p>
        </div>

        <Card className="border-gold/20">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-gold/10 rounded-full w-fit">
              <CheckCircle className="h-8 w-8 text-gold" />
            </div>
            <CardTitle className="text-2xl text-gold">Status das Prestações de Contas</CardTitle>
            <CardDescription className="text-lg">
              Situação atual dos exercícios financeiros
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-muted-foreground">
                Informações detalhadas sobre prestação de contas serão disponibilizadas em breve.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default PrestacaoContas;