import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Phone, Mail, Globe, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Federacoes = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const federacoes = [
    {
      id: 1,
      nome: "Federação Centro-Oeste",
      sigla: "FEPOL-CO",
      estados: ["DF", "GO", "MT", "MS"],
      presidente: "A definir",
      telefone: "(61) 3321-0000",
      email: "contato@fepolco.org.br",
      site: "www.fepolco.org.br",
      endereco: {
        rua: "Rua das Federações, 100",
        bairro: "Asa Norte",
        cidade: "Brasília",
        cep: "70000-000"
      },
      funcionamento: "Segunda a Sexta: 8h às 18h",
      descricao: "Representa os sindicatos de policiais civis da região Centro-Oeste do Brasil."
    },
    {
      id: 2,
      nome: "Federação Nordeste",
      sigla: "FEPOL-NE", 
      estados: ["AL", "BA", "CE", "MA", "PB", "PE", "PI", "RN", "SE"],
      presidente: "A definir",
      telefone: "(85) 3321-0000",
      email: "contato@fepolne.org.br",
      site: "www.fepolne.org.br",
      endereco: {
        rua: "Avenida Nordeste, 200",
        bairro: "Centro",
        cidade: "Fortaleza",
        cep: "60000-000"
      },
      funcionamento: "Segunda a Sexta: 8h às 17h",
      descricao: "Representa os sindicatos de policiais civis da região Nordeste do Brasil."
    },
    {
      id: 3,
      nome: "Federação Norte",
      sigla: "FEPOL-N",
      estados: ["AC", "AP", "AM", "PA", "RO", "RR", "TO"],
      presidente: "A definir",
      telefone: "(91) 3321-0000",
      email: "contato@fepoln.org.br",
      site: "www.fepoln.org.br",
      endereco: {
        rua: "Rua Norte, 300",
        bairro: "Batista Campos",
        cidade: "Belém",
        cep: "66000-000"
      },
      funcionamento: "Segunda a Sexta: 8h às 17h",
      descricao: "Representa os sindicatos de policiais civis da região Norte do Brasil."
    },
    {
      id: 4,
      nome: "Federação Sudeste",
      sigla: "FEPOL-SE",
      estados: ["ES", "MG", "RJ", "SP"],
      presidente: "A definir",
      telefone: "(11) 3321-0000",
      email: "contato@fepolse.org.br",
      site: "www.fepolse.org.br",
      endereco: {
        rua: "Avenida Paulista, 1000",
        bairro: "Bela Vista",
        cidade: "São Paulo",
        cep: "01000-000"
      },
      funcionamento: "Segunda a Sexta: 9h às 18h",
      descricao: "Representa os sindicatos de policiais civis da região Sudeste do Brasil."
    },
    {
      id: 5,
      nome: "Federação Sul",
      sigla: "FEPOL-S",
      estados: ["PR", "RS", "SC"],
      presidente: "A definir",
      telefone: "(51) 3321-0000",
      email: "contato@fepols.org.br",
      site: "www.fepols.org.br",
      endereco: {
        rua: "Rua do Sul, 500",
        bairro: "Centro Histórico",
        cidade: "Porto Alegre",
        cep: "90000-000"
      },
      funcionamento: "Segunda a Sexta: 8h às 17h",
      descricao: "Representa os sindicatos de policiais civis da região Sul do Brasil."
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Entidades Filiadas
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Federações
            <span className="text-gold"> Regionais</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça as cinco federações regionais que compõem a estrutura organizacional da Cobrapol em todo o território nacional.
          </p>
        </div>

        <div className="grid gap-6">
          {federacoes.map((federacao) => (
            <Card key={federacao.id} className="border-gold/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-gold/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">
                        {federacao.nome}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {federacao.sigla} • {federacao.estados.join(", ")}
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => toggleExpanded(federacao.id)}
                    className="flex items-center gap-2"
                  >
                    Mais informações
                    {expandedCard === federacao.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gold" />
                    <span className="text-sm text-muted-foreground">{federacao.telefone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gold" />
                    <span className="text-sm text-muted-foreground">{federacao.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-gold" />
                    <span className="text-sm text-muted-foreground">{federacao.site}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gold" />
                    <span className="text-sm text-muted-foreground">{federacao.estados.length} estados</span>
                  </div>
                </div>

                {expandedCard === federacao.id && (
                  <div className="mt-6 pt-6 border-t border-gold/20">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Informações Detalhadas</h4>
                        <div className="space-y-2">
                          <div>
                            <span className="font-medium text-foreground">Presidente: </span>
                            <span className="text-muted-foreground">{federacao.presidente}</span>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Funcionamento: </span>
                            <span className="text-muted-foreground">{federacao.funcionamento}</span>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Descrição: </span>
                            <span className="text-muted-foreground">{federacao.descricao}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Endereço Completo</h4>
                        <div className="text-muted-foreground">
                          <p>{federacao.endereco.rua}</p>
                          <p>{federacao.endereco.bairro}</p>
                          <p>{federacao.endereco.cidade} - CEP: {federacao.endereco.cep}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="border-gold/20 bg-gradient-to-r from-gold/5 to-gold/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Representação Nacional
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Essas cinco federações regionais garantem que a voz dos policiais civis seja ouvida 
                em todo o território nacional, promovendo união e fortalecendo nossa categoria.
              </p>
              <Button className="bg-gold hover:bg-gold-dark text-foreground">
                <Users className="h-4 w-4 mr-2" />
                Conheça os Sindicatos Filiados
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Federacoes;