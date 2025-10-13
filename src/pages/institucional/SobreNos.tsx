import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Users, Scale, Award, Target, Heart, Handshake, Trophy } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-police.jpg";
const SobreNos = () => {
  const marcos = [{
    ano: "1991",
    titulo: "Fundação da COBRAPOL",
    descricao: "Fundada em 9 de outubro de 1991 pela iniciativa de sindicalistas estaduais para dar voz unificada aos policiais civis em todo o Brasil."
  }, {
    ano: "1993",
    titulo: "Registro como Confederação",
    descricao: "Formalização junto ao Ministério do Trabalho e Emprego como confederação sindical com CNPJ 37.050.804/0001-05."
  }, {
    ano: "1995",
    titulo: "Primeiros Congressos Nacionais",
    descricao: "Estabelecimento dos congressos nacionais como órgão máximo deliberativo, reunindo delegados de todos os estados."
  }, {
    ano: "2000",
    titulo: "Expansão das Federações",
    descricao: "Organização das federações regionais (Norte, Nordeste, Sudeste, Sul e Centro-Oeste) fortalecendo a representação nacional."
  }, {
    ano: "2007",
    titulo: "Lei Orgânica Nacional",
    descricao: "Início da articulação política para aprovação da Lei Orgânica Nacional das Polícias Civis (PL 1.949/2007)."
  }, {
    ano: "2018",
    titulo: "Atuação no STF",
    descricao: "Participação como amicus curiae em processos no Supremo Tribunal Federal defendendo direitos previdenciários da categoria."
  }, {
    ano: "2020",
    titulo: "Saúde Mental",
    descricao: "Implementação de protocolos de atendimento e prevenção ao adoecimento mental dos policiais civis."
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroImage} alt="Policiais brasileiros unidos" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60"></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--gold))_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 text-background">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Sobre
                  <span className="block text-transparent bg-gradient-to-r from-gold-light to-gold bg-clip-text">
                    Nós
                  </span>
                </h1>
                <p className="text-xl text-background/90 max-w-lg">Há mais de 30 anos defendendo os direitos e prerrogativas de quem protege o Brasil. Conheça a história, missão e valores da COBRAPOL.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8">
                  Torne-se Associado
                </Button>
                <Button variant="outline" size="lg" className="border-background text-foreground bg-background hover:bg-background/90 hover:text-foreground">
                  Conheça Nossa Diretoria
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">1991</div>
                  <div className="text-sm text-background/70">Fundação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">34</div>
                  <div className="text-sm text-background/70">Anos de História</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">27</div>
                  <div className="text-sm text-background/70">Estados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">STF</div>
                  <div className="text-sm text-background/70">Atuação</div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-background/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 text-center">
                    <Shield className="h-12 w-12 text-gold mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2 text-background">Defesa Jurídica</h3>
                    <p className="text-sm text-background/70">Atuação no STF e tribunais</p>
                  </div>
                  <div className="bg-background/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 text-center">
                    <Scale className="h-12 w-12 text-gold mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2 text-background">Lei Orgânica</h3>
                    <p className="text-sm text-background/70">Articulação política nacional</p>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-background/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 text-center">
                    <Users className="h-12 w-12 text-gold mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2 text-background">MAIS DE 30 ANOS DE ATUAÇÃO</h3>
                    <p className="text-sm text-background/70">Organização regional</p>
                  </div>
                  <div className="bg-background/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 text-center">
                    <Award className="h-12 w-12 text-gold mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2 text-background">Conquistas</h3>
                    <p className="text-sm text-background/70">Direitos garantidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a COBRAPOL */}
      <div className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-gold text-gold">Representar e fortalecer os policiais civis do Brasil, promovendo a valorização da carreira, a defesa dos direitos trabalhistas e previdenciários e a construção de uma segurança pública cidadã, moderna e eficiente.
          </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              A COBRAPOL: Mais de
              <span className="text-gold"> 30 Anos de Atuação</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">A Confederação Brasileira de Trabalhadores Policiais Civis (COBRAPOL) foi fundada em 9 de outubro de 1991 e é hoje a maior entidade representativa dos policiais civis do Brasil. Há 34 anos, nasceu com o propósito de unificar sindicatos e federações estaduais e, desde então, atua em âmbito nacional na defesa dos direitos, garantias e interesses da categoria, promovendo a valorização profissional, a justiça social e o fortalecimento das instituições policiais.</p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-6 leading-relaxed">
              Ao longo de sua história, a Cobrapol se consolidou como uma voz ativa e legítima nos debates sobre segurança pública, dialogando com os poderes Executivo, Legislativo e Judiciário. Mais do que representar, a entidade mobiliza, articula e transforma, garantindo que os policiais civis de todo o país tenham protagonismo nas decisões que impactam sua carreira e a sociedade.
            </p>
          </div>

          {/* Missão, Visão e Valores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-gold/20 hover:border-gold/40">
              <CardContent className="p-8">
                <div className="bg-gold p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">Representar e fortalecer os policiais civis do Brasil, promovendo a valorização da carreira, a defesa dos direitos trabalhistas e previdenciários, e a construção de uma segurança pública cidadã, moderna e eficiente.</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-gold/20 hover:border-gold/40">
              <CardContent className="p-8">
                <div className="bg-gold p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Valores</h3>
                <p className="text-muted-foreground leading-relaxed">Unidade – União da categoria em todo o território nacional. Compromisso – Dedicação na defesa dos policiais civis e da sociedade. Transparência – Gestão ética e responsável. Respeito – Valorização da diversidade e dignidade humana. Justiça – Igualdade de direitos e melhores condições de trabalho.</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-gold/20 hover:border-gold/40">
              <CardContent className="p-8">
                <div className="bg-gold p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Handshake className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">Ser a principal referência nacional na defesa e valorização dos policiais civis, fortalecendo o sindicalismo e contribuindo para uma segurança pública de qualidade, baseada em justiça, respeito e compromisso social.</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-gold/20 hover:border-gold/40">
              <CardContent className="p-8">
                <div className="bg-gold p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Trophy className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Por que se Filiar?</h3>
                <p className="text-muted-foreground leading-relaxed">Filiar-se à Cobrapol é unir forças em uma luta coletiva que transcende fronteiras estaduais. Ganha representatividade nacional, fortalece a defesa de direitos e contribui para um movimento sindical forte que propõe soluções e transforma realidades.</p>
              </CardContent>
            </Card>
          </div>

          {/* Estatísticas e Trajetória */}
          <div className="bg-card rounded-3xl p-8 lg:p-12 border border-gold/20 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  Nossa Trajetória de Lutas e Conquistas
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-gold rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">1991 - Fundação</h4>
                      <p className="text-muted-foreground">Fundação em 9 de outubro pela iniciativa de sindicalistas para unir os policiais civis do Brasil.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-gold rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">1993-2000 - Expansão</h4>
                      <p className="text-muted-foreground">Registro como confederação e organização das federações regionais.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-gold rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">2007-2018 - Articulação</h4>
                      <p className="text-muted-foreground">Lei Orgânica Nacional e atuação como amicus curiae no STF.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-gold rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">2020-Presente - Inovação</h4>
                      <p className="text-muted-foreground">Programas de saúde mental e modernização da representação sindical.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gold/10 to-gold-dark/10 rounded-2xl p-8 text-center">
                <div className="text-6xl font-bold text-gold mb-4">27</div>
                <p className="text-xl font-semibold text-foreground mb-2">Estados Representados</p>
                <p className="text-muted-foreground mb-6">
                  Sindicatos filiados em todos os estados brasileiros através de 5 federações regionais.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-gold">5</div>
                    <div className="text-muted-foreground">Federações</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gold">STF</div>
                    <div className="text-muted-foreground">Atuação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* História Timeline */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Nossa História Detalhada</h2>
          <p className="text-muted-foreground text-lg">
            Conheça os marcos históricos que definiram nossa trajetória ao longo de mais de três décadas.
          </p>
        </div>

        <div className="space-y-6">
          {marcos.map((marco, index) => <Card key={index} className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20">
                    {marco.ano}
                  </Badge>
                  <span>{marco.titulo}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{marco.descricao}</p>
              </CardContent>
            </Card>)}
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Legado e Futuro</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A Cobrapol também lidera grandes mobilizações nacionais em defesa da categoria, como nas discussões sobre a Reforma da Previdência, na articulação para a aprovação da Lei Orgânica Nacional das Polícias Civis e na luta pela PEC da Segurança Pública. Essas batalhas simbolizam o compromisso da entidade em garantir não apenas melhores condições de trabalho e valorização salarial, mas também a preservação de direitos históricos que asseguram dignidade e justiça aos policiais civis de todo o Brasil.
              </p>
              <p className="text-muted-foreground">
                A Cobrapol é mais do que uma confederação: é a voz, a força e a união dos policiais civis de todo o Brasil. Filiar-se à Cobrapol significa integrar uma rede articulada de sindicatos que compartilham experiências, estratégias e conquistas, tendo acesso a suporte político e institucional em pautas locais e nacionais.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>;
};
export default SobreNos;