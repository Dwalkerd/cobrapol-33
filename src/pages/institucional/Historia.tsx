import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Historia = () => {
  const marcos = [
    {
      ano: "1985",
      titulo: "Fundação do Cobrapol",
      descricao: "Criação da confederação com o objetivo de unir os sindicatos de policiais de todo o Brasil."
    },
    {
      ano: "1990",
      titulo: "Primeiro Congresso Nacional",
      descricao: "Realização do primeiro congresso com representantes de todos os estados brasileiros."
    },
    {
      ano: "1995",
      titulo: "Conquista de Direitos",
      descricao: "Importantes conquistas trabalhistas para a categoria policial em âmbito nacional."
    },
    {
      ano: "2000",
      titulo: "Expansão Nacional",
      descricao: "Adesão de novos sindicatos estaduais, fortalecendo a representação nacional."
    },
    {
      ano: "2010",
      titulo: "Modernização",
      descricao: "Implementação de sistemas digitais e modernização dos processos internos."
    },
    {
      ano: "2020",
      titulo: "Transformação Digital",
      descricao: "Adaptação aos novos tempos com serviços online e atendimento remoto."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Nossa História</h1>
        <p className="text-muted-foreground text-lg">
          Conheça a trajetória do Cobrapol desde sua fundação até os dias atuais.
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
              Ao longo de quase quatro décadas, o Cobrapol tem sido uma voz forte na defesa dos direitos dos 
              policiais brasileiros. Nossa história é marcada por conquistas importantes e pela constante 
              evolução para melhor servir nossa categoria.
            </p>
            <p className="text-muted-foreground">
              Continuamos trabalhando para um futuro onde os policiais brasileiros tenham seus direitos 
              respeitados e condições dignas de trabalho, sempre com transparência e dedicação.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Historia;