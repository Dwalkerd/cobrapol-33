import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Users, Phone, Mail, Globe, ChevronDown, ChevronUp, Search, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useMemo } from "react";

const SindicatosPage = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("todos");

  // Dados dos sindicatos organizados por UF (ordem alfabética)
  const sindicatos = [
    {
      id: 1,
      uf: "AC",
      nome: "SINPOL-AC",
      denominacao: "Sindicato dos Policiais Civis do Acre",
      regiao: "Norte",
      telefone: "(68) 3321-0000",
      email: "contato@sinpolac.org.br",
      site: "www.sinpolac.org.br",
      presidente: "João Silva",
      endereco: {
        rua: "Rua dos Policiais, 123",
        bairro: "Centro",
        cidade: "Rio Branco",
        cep: "69900-000"
      },
      funcionamento: "Segunda a Sexta: 8h às 17h"
    },
    {
      id: 2,
      uf: "AL",
      nome: "SINPOL-AL",
      denominacao: "Sindicato dos Policiais Civis de Alagoas",
      regiao: "Nordeste",
      telefone: "(82) 3321-0000",
      email: "contato@sinpolal.org.br",
      site: "www.sinpolal.org.br",
      presidente: "Maria Santos",
      endereco: {
        rua: "Avenida Segurança, 456",
        bairro: "Farol",
        cidade: "Maceió",
        cep: "57000-000"
      },
      funcionamento: "Segunda a Sexta: 8h às 17h"
    },
    {
      id: 3,
      uf: "AP",
      nome: "SINPOL-AP",
      denominacao: "Sindicato dos Policiais Civis do Amapá",
      regiao: "Norte",
      telefone: "(96) 3321-0000",
      email: "contato@sinpolap.org.br",
      site: "www.sinpolap.org.br",
      presidente: "Pedro Costa",
      endereco: {
        rua: "Rua da Justiça, 789",
        bairro: "Centro",
        cidade: "Macapá",
        cep: "68900-000"
      },
      funcionamento: "Segunda a Sexta: 8h às 17h"
    },
    {
      id: 4,
      uf: "BA",
      nome: "SINPOL-BA",
      denominacao: "Sindicato dos Policiais Civis da Bahia",
      regiao: "Nordeste",
      telefone: "(71) 3321-0000",
      email: "contato@sinpolba.org.br",
      site: "www.sinpolba.org.br",
      presidente: "Ana Oliveira",
      endereco: {
        rua: "Rua da Polícia, 321",
        bairro: "Pelourinho",
        cidade: "Salvador",
        cep: "40000-000"
      },
      funcionamento: "Segunda a Sexta: 8h às 18h"
    },
    {
      id: 5,
      uf: "SP",
      nome: "SINPOL-SP",
      denominacao: "Sindicato dos Policiais Civis de São Paulo",
      regiao: "Sudeste",
      telefone: "(11) 3321-0000",
      email: "contato@sinpolsp.org.br",
      site: "www.sinpolsp.org.br",
      presidente: "Carlos Ferreira",
      endereco: {
        rua: "Avenida Paulista, 1500",
        bairro: "Bela Vista",
        cidade: "São Paulo",
        cep: "01000-000"
      },
      funcionamento: "Segunda a Sexta: 9h às 18h"
    }
  ];

  const regioes = [
    { value: "todos", label: "Todas as Regiões" },
    { value: "Centro-Oeste", label: "Centro-Oeste" },
    { value: "Nordeste", label: "Nordeste" },
    { value: "Norte", label: "Norte" },
    { value: "Sudeste", label: "Sudeste" },
    { value: "Sul", label: "Sul" }
  ];

  const filteredSindicatos = useMemo(() => {
    return sindicatos.filter(sindicato => {
      const matchesSearch = 
        sindicato.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sindicato.denominacao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sindicato.uf.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRegion = selectedRegion === "todos" || sindicato.regiao === selectedRegion;
      
      return matchesSearch && matchesRegion;
    }).sort((a, b) => a.uf.localeCompare(b.uf));
  }, [searchTerm, selectedRegion]);

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
            Sindicatos
            <span className="text-gold"> Filiados</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça todos os sindicatos de policiais civis filiados à Cobrapol em todo o Brasil.
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8">
          <Card className="border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-gold" />
                Buscar Sindicatos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Buscar por nome ou UF
                  </label>
                  <Input
                    placeholder="Digite o nome do sindicato ou UF..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-gold/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Filtrar por região
                  </label>
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger className="border-gold/20">
                      <SelectValue placeholder="Selecione uma região" />
                    </SelectTrigger>
                    <SelectContent>
                      {regioes.map((regiao) => (
                        <SelectItem key={regiao.value} value={regiao.value}>
                          {regiao.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resultados */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredSindicatos.length} sindicato(s) encontrado(s)
          </p>
        </div>

        {/* Lista de Sindicatos */}
        <div className="grid gap-6">
          {filteredSindicatos.map((sindicato) => (
            <Card key={sindicato.id} className="border-gold/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-gold/10 p-3 rounded-full">
                      <Building className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">
                        {sindicato.uf} • {sindicato.nome}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {sindicato.denominacao}
                      </CardDescription>
                      <Badge variant="outline" className="mt-1">
                        {sindicato.regiao}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => toggleExpanded(sindicato.id)}
                    className="flex items-center gap-2"
                  >
                    Mais informações
                    {expandedCard === sindicato.id ? (
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
                    <span className="text-sm text-muted-foreground">{sindicato.telefone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gold" />
                    <span className="text-sm text-muted-foreground">{sindicato.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-gold" />
                    <span className="text-sm text-muted-foreground">{sindicato.site}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span className="text-sm text-muted-foreground">{sindicato.endereco.cidade}</span>
                  </div>
                </div>

                {expandedCard === sindicato.id && (
                  <div className="mt-6 pt-6 border-t border-gold/20">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Informações Detalhadas</h4>
                        <div className="space-y-2">
                          <div>
                            <span className="font-medium text-foreground">Presidente: </span>
                            <span className="text-muted-foreground">{sindicato.presidente}</span>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Funcionamento: </span>
                            <span className="text-muted-foreground">{sindicato.funcionamento}</span>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Estado: </span>
                            <span className="text-muted-foreground">{sindicato.uf} - {sindicato.regiao}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Endereço Completo</h4>
                        <div className="text-muted-foreground">
                          <p>{sindicato.endereco.rua}</p>
                          <p>{sindicato.endereco.bairro}</p>
                          <p>{sindicato.endereco.cidade} - {sindicato.uf}</p>
                          <p>CEP: {sindicato.endereco.cep}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSindicatos.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gold/10 p-6 rounded-full w-fit mx-auto mb-4">
              <Search className="h-12 w-12 text-gold" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhum sindicato encontrado
            </h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros de busca ou verificar a grafia do termo pesquisado.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Card className="border-gold/20 bg-gradient-to-r from-gold/5 to-gold/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Quer Filiar seu Sindicato?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Faça parte da maior confederação de policiais civis do Brasil. 
                Fortaleça sua representação e conquiste mais direitos para sua categoria.
              </p>
              <Button className="bg-gold hover:bg-gold-dark text-foreground">
                <Users className="h-4 w-4 mr-2" />
                Saiba como se Filiar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SindicatosPage;