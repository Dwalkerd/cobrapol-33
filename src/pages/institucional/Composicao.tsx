import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Crown, CheckCircle, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Composicao = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Composição da Cobrapol
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Estrutura de
            <span className="text-gold"> Governança</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça a composição da Diretoria Executiva, Conselho Fiscal e Conselho Nacional de Entidades da Cobrapol.
          </p>
        </div>

        {/* Diretoria Executiva */}
        <div className="mb-12">
          <Card className="border-gold/20">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-gold/10 rounded-full w-fit">
                <Crown className="h-8 w-8 text-gold" />
              </div>
              <CardTitle className="text-2xl text-gold">Diretoria Executiva</CardTitle>
              <CardDescription className="text-lg">
                Órgão executivo responsável pela administração e representação da Confederação
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-gold/10">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg text-foreground mb-2">Presidente</h3>
                    <p className="text-muted-foreground mb-2">A definir</p>
                    <Badge variant="outline" className="text-xs">2023-2027</Badge>
                  </CardContent>
                </Card>
                <Card className="border-gold/10">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg text-foreground mb-2">Vice-Presidente</h3>
                    <p className="text-muted-foreground mb-2">A definir</p>
                    <Badge variant="outline" className="text-xs">2023-2027</Badge>
                  </CardContent>
                </Card>
                <Card className="border-gold/10">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg text-foreground mb-2">Secretário-Geral</h3>
                    <p className="text-muted-foreground mb-2">A definir</p>
                    <Badge variant="outline" className="text-xs">2023-2027</Badge>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            Informações completas sobre a composição serão atualizadas em breve.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Composicao;