import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MissaoVisaoValores = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Missão, Visão e Valores</h1>
        <p className="text-muted-foreground text-lg">
          Conheça os pilares que fundamentam a atuação do Cobrapol.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="border-gold/20">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-gold/10 rounded-full w-fit">
              <Target className="h-8 w-8 text-gold" />
            </div>
            <CardTitle className="text-gold">Missão</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center">
              Promover a defesa dos direitos dos trabalhadores da segurança pública, garantindo 
              espaço de negociação coletiva e influenciando políticas que melhorem as condições 
              de trabalho na Polícia Civil.
            </p>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-gold/10 rounded-full w-fit">
              <Eye className="h-8 w-8 text-gold" />
            </div>
            <CardTitle className="text-gold">Visão</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center">
              Tornar-se referência na consolidação de uma Polícia Civil moderna, unificada e 
              valorizada, com carreiras estruturadas de forma clara e igualitária em todo o país.
            </p>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-gold/10 rounded-full w-fit">
              <Heart className="h-8 w-8 text-gold" />
            </div>
            <CardTitle className="text-gold">Valores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-center">
                <h4 className="font-semibold text-foreground">União e Solidariedade</h4>
                <p className="text-sm text-muted-foreground">Atuação conjunta com sindicatos estaduais</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground">Transparência e Democracia</h4>
                <p className="text-sm text-muted-foreground">Decisões em congressos com ampla participação</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground">Compromisso com a Sociedade</h4>
                <p className="text-sm text-muted-foreground">Serviço policial eficiente e humanizado</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Nossos Compromissos</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gold">•</span>
                <span className="text-muted-foreground">Negociação coletiva com governos federal, estaduais e municipais</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">•</span>
                <span className="text-muted-foreground">Formação e capacitação através de congressos e seminários</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">•</span>
                <span className="text-muted-foreground">Articulação política junto ao Legislativo e Executivo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">•</span>
                <span className="text-muted-foreground">Atuação jurídica como amicus curiae no STF</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Objetivos Estratégicos</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gold">•</span>
                <span className="text-muted-foreground">Aprovação da Lei Orgânica Nacional das Polícias Civis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">•</span>
                <span className="text-muted-foreground">Políticas de saúde mental e prevenção ao adoecimento</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">•</span>
                <span className="text-muted-foreground">Paridade previdenciária e revisão de carreiras</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">•</span>
                <span className="text-muted-foreground">Modernização e unificação das estruturas policiais</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default MissaoVisaoValores;