import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Diretoria = () => {
  const diretores = [
    {
      nome: "José da Silva",
      cargo: "Presidente",
      area: "Administração Geral",
      email: "presidente@cobrapol.org.br",
      telefone: "(11) 1234-5678"
    },
    {
      nome: "Maria Santos",
      cargo: "Vice-Presidente",
      area: "Assuntos Jurídicos",
      email: "vice@cobrapol.org.br",
      telefone: "(11) 1234-5679"
    },
    {
      nome: "Carlos Oliveira",
      cargo: "Secretário Geral",
      area: "Documentação e Arquivo",
      email: "secretario@cobrapol.org.br",
      telefone: "(11) 1234-5680"
    },
    {
      nome: "Ana Rodrigues",
      cargo: "Tesoureira",
      area: "Finanças e Contabilidade",
      email: "tesoureira@cobrapol.org.br",
      telefone: "(11) 1234-5681"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Diretoria Executiva</h1>
        <p className="text-muted-foreground text-lg">
          Conheça a atual diretoria executiva do Cobrapol e suas respectivas áreas de atuação.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {diretores.map((diretor, index) => (
          <Card key={index} className="border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{diretor.nome}</span>
                <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20">
                  {diretor.cargo}
                </Badge>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {diretor.area}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Email:</strong> {diretor.email}
                </p>
                <p className="text-sm">
                  <strong>Telefone:</strong> {diretor.telefone}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Mandato Atual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Período</h3>
                <p className="text-muted-foreground">Janeiro 2024 - Dezembro 2027</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Próximas Eleições</h3>
                <p className="text-muted-foreground">Dezembro 2027</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Diretoria;