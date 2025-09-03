import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, MapPin, Network } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EstruturaOrganizacional = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Estrutura Organizacional
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Organização
            <span className="text-gold"> Institucional</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça como está estruturada a Confederação Brasileira de Trabalhadores Policiais Civis e seus órgãos componentes.
          </p>
        </div>

        {/* Federações Regionais */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Federações Regionais</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            A Cobrapol está organizada em cinco federações regionais que congregam os sindicatos estaduais de suas respectivas regiões.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-gold/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-3 p-3 bg-gold/10 rounded-full w-fit">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <CardTitle className="text-lg text-foreground">Federação Norte</CardTitle>
                <CardDescription>AC, AP, AM, PA, RO, RR, TO</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-gold/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-3 p-3 bg-gold/10 rounded-full w-fit">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <CardTitle className="text-lg text-foreground">Federação Nordeste</CardTitle>
                <CardDescription>AL, BA, CE, MA, PB, PE, PI, RN, SE</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-gold/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-3 p-3 bg-gold/10 rounded-full w-fit">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <CardTitle className="text-lg text-foreground">Federação Centro-Oeste</CardTitle>
                <CardDescription>DF, GO, MT, MS</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            Estrutura organizacional completa será detalhada em breve.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EstruturaOrganizacional;