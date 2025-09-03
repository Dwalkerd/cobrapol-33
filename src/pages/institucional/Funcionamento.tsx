import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Vote, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Funcionamento = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Funcionamento Institucional
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Como
            <span className="text-gold"> Funcionamos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entenda os processos decisórios, fluxos de funcionamento e mecanismos de participação da Cobrapol.
          </p>
        </div>

        {/* Congresso Nacional */}
        <div className="mb-16">
          <Card className="border-gold/20">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-gold/10 rounded-full w-fit">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <CardTitle className="text-2xl text-gold">Congresso Nacional</CardTitle>
              <CardDescription className="text-lg">
                Órgão máximo de deliberação da Confederação
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Competências:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span className="text-muted-foreground">Eleger a Diretoria Executiva</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span className="text-muted-foreground">Aprovar o Estatuto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span className="text-muted-foreground">Definir diretrizes políticas</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Periodicidade:</h4>
                  <p className="text-muted-foreground">Realizado a cada 4 anos com delegados de todas as federações filiadas.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            Informações detalhadas sobre funcionamento serão atualizadas em breve.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Funcionamento;