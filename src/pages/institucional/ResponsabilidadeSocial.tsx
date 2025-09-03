import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Shield, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ResponsabilidadeSocial = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Responsabilidade Social
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Compromisso com a
            <span className="text-gold"> Sociedade</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Cobrapol vai além da representação sindical, desenvolvendo programas e projetos que beneficiam 
            os policiais civis e a sociedade como um todo.
          </p>
        </div>

        {/* Programas Sociais */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Programas Sociais</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-gold/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">Saúde Mental Policial</CardTitle>
                    <CardDescription className="mt-1">Programa de apoio psicológico e prevenção ao adoecimento mental</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span className="text-sm text-muted-foreground">Atendimento psicológico especializado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span className="text-sm text-muted-foreground">Campanhas de conscientização</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span className="text-sm text-muted-foreground">Protocolos de prevenção</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">Educação e Capacitação</CardTitle>
                    <CardDescription className="mt-1">Formação continuada e qualificação profissional</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span className="text-sm text-muted-foreground">Cursos de especialização</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span className="text-sm text-muted-foreground">Seminários e congressos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span className="text-sm text-muted-foreground">Parcerias com universidades</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            Informações detalhadas sobre programas de responsabilidade social serão atualizadas em breve.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResponsabilidadeSocial;