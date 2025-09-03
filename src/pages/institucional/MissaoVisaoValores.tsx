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
              Representar e fortalecer os policiais civis do Brasil, promovendo a valorização da carreira, 
              a defesa dos direitos trabalhistas e previdenciários, e a construção de uma segurança pública 
              cidadã, moderna e eficiente.
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
              Ser a principal referência nacional na defesa e valorização dos policiais civis, 
              fortalecendo o sindicalismo e contribuindo para uma segurança pública de qualidade, 
              baseada em justiça, respeito e compromisso social.
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
                <h4 className="font-semibold text-foreground">Unidade</h4>
                <p className="text-sm text-muted-foreground">Acreditamos na força da coletividade e na união da categoria em todo o território nacional</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground">Compromisso</h4>
                <p className="text-sm text-muted-foreground">Atuamos com seriedade e dedicação na defesa dos policiais civis e da sociedade</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground">Transparência</h4>
                <p className="text-sm text-muted-foreground">Priorizamos uma gestão ética e responsável em todas as ações</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground">Respeito</h4>
                <p className="text-sm text-muted-foreground">Valorizamos a diversidade, o diálogo e a dignidade humana</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground">Justiça</h4>
                <p className="text-sm text-muted-foreground">Lutamos pela igualdade de direitos, reconhecimento profissional e melhores condições de trabalho</p>
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