import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Historia = () => {
  const marcos = [
    {
      ano: "1991",
      titulo: "Fundação da COBRAPOL",
      descricao: "Fundada em 9 de outubro de 1991 pela iniciativa de sindicalistas estaduais para dar voz unificada aos policiais civis em todo o Brasil."
    },
    {
      ano: "1993",
      titulo: "Registro como Confederação",
      descricao: "Formalização junto ao Ministério do Trabalho e Emprego como confederação sindical com CNPJ 37.050.804/0001-05."
    },
    {
      ano: "1995",
      titulo: "Primeiros Congressos Nacionais",
      descricao: "Estabelecimento dos congressos nacionais como órgão máximo deliberativo, reunindo delegados de todos os estados."
    },
    {
      ano: "2000",
      titulo: "Expansão das Federações",
      descricao: "Organização das federações regionais (Norte, Nordeste, Sudeste, Sul e Centro-Oeste) fortalecendo a representação nacional."
    },
    {
      ano: "2007",
      titulo: "Lei Orgânica Nacional",
      descricao: "Início da articulação política para aprovação da Lei Orgânica Nacional das Polícias Civis (PL 1.949/2007)."
    },
    {
      ano: "2018",
      titulo: "Atuação no STF",
      descricao: "Participação como amicus curiae em processos no Supremo Tribunal Federal defendendo direitos previdenciários da categoria."
    },
    {
      ano: "2020",
      titulo: "Saúde Mental",
      descricao: "Implementação de protocolos de atendimento e prevenção ao adoecimento mental dos policiais civis."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Nossa História</h1>
        <p className="text-muted-foreground text-lg">
          Conheça a trajetória da COBRAPOL desde sua fundação em 1991 até os dias atuais, 
          mais de 30 anos defendendo os direitos dos policiais civis brasileiros.
        </p>
      </div>

      <div className="space-y-6">
        {marcos.map((marco, index) => (
          <Card key={index} className="border-gold/20">
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
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Legado e Futuro</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Ao longo de mais de três décadas, a COBRAPOL tem sido uma voz forte na defesa dos direitos dos 
              policiais civis brasileiros. Nossa história é marcada por conquistas importantes como a participação 
              em processos no STF, a articulação da Lei Orgânica Nacional e programas de saúde mental.
            </p>
            <p className="text-muted-foreground">
              Como confederação registrada junto ao Ministério do Trabalho, continuamos trabalhando para um futuro 
              onde os policiais civis tenham carreiras estruturadas, direitos respeitados e condições dignas de 
              trabalho, sempre com transparência e democracia.
            </p>
          </CardContent>
        </Card>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Historia;