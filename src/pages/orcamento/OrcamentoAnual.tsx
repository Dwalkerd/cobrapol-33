import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OrcamentoAnual = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Orçamento 2024
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Orçamento
            <span className="text-gold"> Anual</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparência na gestão dos recursos da Confederação. Conheça como os recursos são aplicados 
            em benefício dos policiais civis brasileiros.
          </p>
        </div>

        <Card className="border-gold/20">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-gold/10 rounded-full w-fit">
              <Calculator className="h-8 w-8 text-gold" />
            </div>
            <CardTitle className="text-2xl text-gold">Resumo Executivo 2024</CardTitle>
            <CardDescription className="text-lg">
              Principais números do orçamento aprovado para o exercício
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">R$ 2.500.000,00</div>
                <p className="text-muted-foreground">Receitas Previstas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">R$ 2.400.000,00</div>
                <p className="text-muted-foreground">Despesas Orçadas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">R$ 100.000,00</div>
                <p className="text-muted-foreground">Superávit Previsto</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default OrcamentoAnual;