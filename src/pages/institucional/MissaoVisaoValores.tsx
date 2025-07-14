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
              Defender os direitos e interesses dos policiais brasileiros, promovendo a valorização 
              profissional e melhores condições de trabalho através da união e representação sindical.
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
              Ser reconhecida como a principal entidade representativa dos policiais brasileiros, 
              promovendo a dignidade profissional e contribuindo para uma sociedade mais justa e segura.
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
                <h4 className="font-semibold text-foreground">Transparência</h4>
                <p className="text-sm text-muted-foreground">Atuação clara e honesta</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground">Solidariedade</h4>
                <p className="text-sm text-muted-foreground">Unidos pela categoria</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground">Justiça</h4>
                <p className="text-sm text-muted-foreground">Defesa dos direitos</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground">Ética</h4>
                <p className="text-sm text-muted-foreground">Conduta exemplar</p>
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
                <span className="text-muted-foreground">Defesa intransigente dos direitos dos policiais</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">•</span>
                <span className="text-muted-foreground">Promoção da valorização profissional</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">•</span>
                <span className="text-muted-foreground">Transparência em todas as ações</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">•</span>
                <span className="text-muted-foreground">Fortalecimento da unidade sindical</span>
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
                <span className="text-muted-foreground">Melhoria das condições de trabalho</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">•</span>
                <span className="text-muted-foreground">Ampliação dos benefícios sociais</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">•</span>
                <span className="text-muted-foreground">Fortalecimento da representação política</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">•</span>
                <span className="text-muted-foreground">Modernização dos processos internos</span>
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