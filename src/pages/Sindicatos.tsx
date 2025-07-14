import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Phone, Mail, MapPin } from "lucide-react";

const Sindicatos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Todas");

  const sindicatos = [
    {
      nome: "Sindicato dos Policiais de São Paulo",
      estado: "São Paulo",
      regiao: "Sudeste",
      telefone: "(11) 3333-4444",
      email: "contato@sinpolsp.org.br",
      endereco: "Rua da Consolação, 1000, São Paulo - SP",
      presidente: "João Silva",
      bandeira: "🏴"
    },
    {
      nome: "Sindicato dos Policiais do Rio de Janeiro",
      estado: "Rio de Janeiro",
      regiao: "Sudeste",
      telefone: "(21) 2222-3333",
      email: "contato@sinpolrj.org.br",
      endereco: "Av. Rio Branco, 500, Rio de Janeiro - RJ",
      presidente: "Maria Santos",
      bandeira: "🏴"
    },
    {
      nome: "Sindicato dos Policiais da Bahia",
      estado: "Bahia",
      regiao: "Nordeste",
      telefone: "(71) 3333-4444",
      email: "contato@sinpolba.org.br",
      endereco: "Rua Chile, 200, Salvador - BA",
      presidente: "Carlos Oliveira",
      bandeira: "🏴"
    },
    {
      nome: "Sindicato dos Policiais do Rio Grande do Sul",
      estado: "Rio Grande do Sul",
      regiao: "Sul",
      telefone: "(51) 3333-4444",
      email: "contato@sinpolrs.org.br",
      endereco: "Rua dos Andradas, 300, Porto Alegre - RS",
      presidente: "Ana Rodrigues",
      bandeira: "🏴"
    },
    {
      nome: "Sindicato dos Policiais de Minas Gerais",
      estado: "Minas Gerais",
      regiao: "Sudeste",
      telefone: "(31) 3333-4444",
      email: "contato@sinpolmg.org.br",
      endereco: "Av. Afonso Pena, 400, Belo Horizonte - MG",
      presidente: "Pedro Costa",
      bandeira: "🏴"
    },
    {
      nome: "Sindicato dos Policiais do Amazonas",
      estado: "Amazonas",
      regiao: "Norte",
      telefone: "(92) 3333-4444",
      email: "contato@sinpolam.org.br",
      endereco: "Rua José Paranaguá, 100, Manaus - AM",
      presidente: "Lucia Fernandes",
      bandeira: "🏴"
    },
    {
      nome: "Sindicato dos Policiais do Distrito Federal",
      estado: "Distrito Federal",
      regiao: "Centro-Oeste",
      telefone: "(61) 3333-4444",
      email: "contato@sinpoldf.org.br",
      endereco: "SCS Quadra 1, Brasília - DF",
      presidente: "Roberto Silva",
      bandeira: "🏴"
    }
  ];

  const regioes = ["Todas", "Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"];

  const filteredSindicatos = sindicatos.filter(sindicato => {
    const matchesSearch = sindicato.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sindicato.estado.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "Todas" || sindicato.regiao === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Sindicatos</h1>
        <p className="text-muted-foreground text-lg">
          Encontre o sindicato dos policiais do seu estado e entre em contato.
        </p>
      </div>

      {/* Filtros */}
      <div className="mb-8 bg-muted/50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Buscar por nome ou estado
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Digite o nome do sindicato ou estado..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Filtrar por região
            </label>
            <div className="flex gap-2 flex-wrap">
              {regioes.map((regiao) => (
                <Button
                  key={regiao}
                  variant={selectedRegion === regiao ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedRegion(regiao)}
                  className={selectedRegion === regiao ? "bg-gold hover:bg-gold-dark" : ""}
                >
                  {regiao}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="mb-4">
        <p className="text-muted-foreground">
          Mostrando {filteredSindicatos.length} sindicatos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSindicatos.map((sindicato, index) => (
          <Card key={index} className="border-gold/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="text-2xl">{sindicato.bandeira}</div>
                <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20">
                  {sindicato.regiao}
                </Badge>
              </div>
              <CardTitle className="text-lg">{sindicato.nome}</CardTitle>
              <CardDescription>{sindicato.estado}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Presidente:</p>
                  <p className="text-sm text-muted-foreground">{sindicato.presidente}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gold" />
                    <span className="text-sm text-muted-foreground">{sindicato.telefone}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gold" />
                    <span className="text-sm text-muted-foreground">{sindicato.email}</span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-gold mt-0.5" />
                    <span className="text-sm text-muted-foreground">{sindicato.endereco}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSindicatos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Nenhum sindicato encontrado com os filtros aplicados.
          </p>
        </div>
      )}
    </div>
  );
};

export default Sindicatos;