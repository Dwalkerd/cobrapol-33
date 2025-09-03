import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RelatoriosFinanceiros = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Relatórios Financeiros
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Relatórios
            <span className="text-gold"> Financeiros</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a evolução financeira da Confederação através de relatórios detalhados, 
            indicadores de performance e análises comparativas.
          </p>
        </div>

        <Card className="border-gold/20">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-gold/10 rounded-full w-fit">
              <BarChart className="h-8 w-8 text-gold" />
            </div>
            <CardTitle className="text-2xl text-gold">Relatórios Disponíveis</CardTitle>
            <CardDescription className="text-lg">
              Acompanhamento da evolução financeira
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-muted-foreground">
                Relatórios financeiros detalhados serão disponibilizados em breve.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default RelatoriosFinanceiros;