import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Globe, Search } from "lucide-react";

const Sindicatos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("todos");

  const sindicatos = [
    {
      name: "Sindicato dos Policiais do Acre",
      state: "Acre",
      region: "Norte",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bandeira_do_Acre.svg/200px-Bandeira_do_Acre.svg.png",
      contact: {
        phone: "(68) 3223-4567",
        email: "contato@sinpolac.com.br",
        address: "Rua Benjamin Constant, 123 - Centro, Rio Branco - AC",
        website: "www.sinpolac.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais de Alagoas",
      state: "Alagoas",
      region: "Nordeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bandeira_de_Alagoas.svg/200px-Bandeira_de_Alagoas.svg.png",
      contact: {
        phone: "(82) 3336-7890",
        email: "contato@sinpolal.com.br",
        address: "Av. Fernandes Lima, 456 - Farol, Maceió - AL",
        website: "www.sinpolal.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais do Amapá",
      state: "Amapá",
      region: "Norte",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bandeira_do_Amap%C3%A1.svg/200px-Bandeira_do_Amap%C3%A1.svg.png",
      contact: {
        phone: "(96) 3217-5432",
        email: "contato@sinpolap.com.br",
        address: "Rua Cândido Mendes, 789 - Centro, Macapá - AP",
        website: "www.sinpolap.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais do Amazonas",
      state: "Amazonas",
      region: "Norte",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bandeira_do_Amazonas.svg/200px-Bandeira_do_Amazonas.svg.png",
      contact: {
        phone: "(92) 3234-5678",
        email: "contato@sinpolam.com.br",
        address: "Av. Eduardo Ribeiro, 321 - Centro, Manaus - AM",
        website: "www.sinpolam.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais da Bahia",
      state: "Bahia",
      region: "Nordeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Bandeira_da_Bahia.svg/200px-Bandeira_da_Bahia.svg.png",
      contact: {
        phone: "(71) 3245-6789",
        email: "contato@sinpolba.com.br",
        address: "Rua Chile, 654 - Centro, Salvador - BA",
        website: "www.sinpolba.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais do Ceará",
      state: "Ceará",
      region: "Nordeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Bandeira_do_Cear%C3%A1.svg/200px-Bandeira_do_Cear%C3%A1.svg.png",
      contact: {
        phone: "(85) 3256-7890",
        email: "contato@sinpolce.com.br",
        address: "Av. Monsenhor Tabosa, 987 - Iracema, Fortaleza - CE",
        website: "www.sinpolce.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais do Distrito Federal",
      state: "Distrito Federal",
      region: "Centro-Oeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bandeira_do_Distrito_Federal_%28Brasil%29.svg/200px-Bandeira_do_Distrito_Federal_%28Brasil%29.svg.png",
      contact: {
        phone: "(61) 3267-8901",
        email: "contato@sinpoldf.com.br",
        address: "SCS Quadra 02, Bloco C - Asa Sul, Brasília - DF",
        website: "www.sinpoldf.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais do Espírito Santo",
      state: "Espírito Santo",
      region: "Sudeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg/200px-Bandeira_do_Esp%C3%ADrito_Santo.svg.png",
      contact: {
        phone: "(27) 3278-9012",
        email: "contato@sinpoles.com.br",
        address: "Av. Princesa Isabel, 234 - Centro, Vitória - ES",
        website: "www.sinpoles.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais de Goiás",
      state: "Goiás",
      region: "Centro-Oeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_Goi%C3%A1s.svg/200px-Flag_of_Goi%C3%A1s.svg.png",
      contact: {
        phone: "(62) 3289-0123",
        email: "contato@sinpolgo.com.br",
        address: "Rua 84, 567 - Setor Sul, Goiânia - GO",
        website: "www.sinpolgo.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais do Maranhão",
      state: "Maranhão",
      region: "Nordeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bandeira_do_Maranh%C3%A3o.svg/200px-Bandeira_do_Maranh%C3%A3o.svg.png",
      contact: {
        phone: "(98) 3290-1234",
        email: "contato@sinpolma.com.br",
        address: "Av. Getúlio Vargas, 890 - Centro, São Luís - MA",
        website: "www.sinpolma.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais do Mato Grosso",
      state: "Mato Grosso",
      region: "Centro-Oeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Bandeira_de_Mato_Grosso.svg/200px-Bandeira_de_Mato_Grosso.svg.png",
      contact: {
        phone: "(65) 3201-2345",
        email: "contato@sinpolmt.com.br",
        address: "Av. Isaac Póvoas, 123 - Centro Norte, Cuiabá - MT",
        website: "www.sinpolmt.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais do Mato Grosso do Sul",
      state: "Mato Grosso do Sul",
      region: "Centro-Oeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bandeira_de_Mato_Grosso_do_Sul.svg/200px-Bandeira_de_Mato_Grosso_do_Sul.svg.png",
      contact: {
        phone: "(67) 3212-3456",
        email: "contato@sinpolms.com.br",
        address: "Rua 13 de Maio, 456 - Centro, Campo Grande - MS",
        website: "www.sinpolms.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais de Minas Gerais",
      state: "Minas Gerais",
      region: "Sudeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bandeira_de_Minas_Gerais.svg/200px-Bandeira_de_Minas_Gerais.svg.png",
      contact: {
        phone: "(31) 3223-4567",
        email: "contato@sinpolmg.com.br",
        address: "Av. Afonso Pena, 789 - Centro, Belo Horizonte - MG",
        website: "www.sinpolmg.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais do Pará",
      state: "Pará",
      region: "Norte",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bandeira_do_Par%C3%A1.svg/200px-Bandeira_do_Par%C3%A1.svg.png",
      contact: {
        phone: "(91) 3234-5678",
        email: "contato@sinpolpa.com.br",
        address: "Av. Presidente Vargas, 321 - Campina, Belém - PA",
        website: "www.sinpolpa.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais da Paraíba",
      state: "Paraíba",
      region: "Nordeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bandeira_da_Para%C3%ADba.svg/200px-Bandeira_da_Para%C3%ADba.svg.png",
      contact: {
        phone: "(83) 3245-6789",
        email: "contato@sinpolpb.com.br",
        address: "Rua Duque de Caxias, 654 - Centro, João Pessoa - PB",
        website: "www.sinpolpb.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais do Paraná",
      state: "Paraná",
      region: "Sul",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bandeira_do_Paran%C3%A1.svg/200px-Bandeira_do_Paran%C3%A1.svg.png",
      contact: {
        phone: "(41) 3256-7890",
        email: "contato@sinpolpr.com.br",
        address: "Rua XV de Novembro, 987 - Centro, Curitiba - PR",
        website: "www.sinpolpr.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais de Pernambuco",
      state: "Pernambuco",
      region: "Nordeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bandeira_de_Pernambuco.svg/200px-Bandeira_de_Pernambuco.svg.png",
      contact: {
        phone: "(81) 3267-8901",
        email: "contato@sinpolpe.com.br",
        address: "Av. Conde da Boa Vista, 234 - Boa Vista, Recife - PE",
        website: "www.sinpolpe.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais do Piauí",
      state: "Piauí",
      region: "Nordeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bandeira_do_Piau%C3%AD.svg/200px-Bandeira_do_Piau%C3%AD.svg.png",
      contact: {
        phone: "(86) 3278-9012",
        email: "contato@sinpolpi.com.br",
        address: "Rua Álvaro Mendes, 567 - Centro, Teresina - PI",
        website: "www.sinpolpi.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais do Rio de Janeiro",
      state: "Rio de Janeiro",
      region: "Sudeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg/200px-Bandeira_do_estado_do_Rio_de_Janeiro.svg.png",
      contact: {
        phone: "(21) 3289-0123",
        email: "contato@sinpolrj.com.br",
        address: "Av. Rio Branco, 890 - Centro, Rio de Janeiro - RJ",
        website: "www.sinpolrj.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais do Rio Grande do Norte",
      state: "Rio Grande do Norte",
      region: "Nordeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bandeira_do_Rio_Grande_do_Norte.svg/200px-Bandeira_do_Rio_Grande_do_Norte.svg.png",
      contact: {
        phone: "(84) 3290-1234",
        email: "contato@sinpolrn.com.br",
        address: "Av. Deodoro da Fonseca, 123 - Centro, Natal - RN",
        website: "www.sinpolrn.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais do Rio Grande do Sul",
      state: "Rio Grande do Sul",
      region: "Sul",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bandeira_do_Rio_Grande_do_Sul.svg/200px-Bandeira_do_Rio_Grande_do_Sul.svg.png",
      contact: {
        phone: "(51) 3201-2345",
        email: "contato@sinpolrs.com.br",
        address: "Rua dos Andradas, 456 - Centro Histórico, Porto Alegre - RS",
        website: "www.sinpolrs.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais de Rondônia",
      state: "Rondônia",
      region: "Norte",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bandeira_de_Rond%C3%B4nia.svg/200px-Bandeira_de_Rond%C3%B4nia.svg.png",
      contact: {
        phone: "(69) 3212-3456",
        email: "contato@sinpolro.com.br",
        address: "Av. Presidente Dutra, 789 - Centro, Porto Velho - RO",
        website: "www.sinpolro.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais de Roraima",
      state: "Roraima",
      region: "Norte",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Bandeira_de_Roraima.svg/200px-Bandeira_de_Roraima.svg.png",
      contact: {
        phone: "(95) 3223-4567",
        email: "contato@sinpolrr.com.br",
        address: "Av. Capitão Ene Garcês, 321 - Centro, Boa Vista - RR",
        website: "www.sinpolrr.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais de Santa Catarina",
      state: "Santa Catarina",
      region: "Sul",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bandeira_de_Santa_Catarina.svg/200px-Bandeira_de_Santa_Catarina.svg.png",
      contact: {
        phone: "(48) 3234-5678",
        email: "contato@sinpolsc.com.br",
        address: "Rua Felipe Schmidt, 654 - Centro, Florianópolis - SC",
        website: "www.sinpolsc.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais de São Paulo",
      state: "São Paulo",
      region: "Sudeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg/200px-Bandeira_do_estado_de_S%C3%A3o_Paulo.svg.png",
      contact: {
        phone: "(11) 3245-6789",
        email: "contato@sinpolsp.com.br",
        address: "Av. Paulista, 987 - Bela Vista, São Paulo - SP",
        website: "www.sinpolsp.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais de Sergipe",
      state: "Sergipe",
      region: "Nordeste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bandeira_de_Sergipe.svg/200px-Bandeira_de_Sergipe.svg.png",
      contact: {
        phone: "(79) 3256-7890",
        email: "contato@sinpolse.com.br",
        address: "Rua João Pessoa, 234 - Centro, Aracaju - SE",
        website: "www.sinpolse.com.br"
      }
    },
    {
      name: "Sindicato dos Policiais do Tocantins",
      state: "Tocantins",
      region: "Norte",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandeira_do_Tocantins.svg/200px-Bandeira_do_Tocantins.svg.png",
      contact: {
        phone: "(63) 3267-8901",
        email: "contato@sinpolto.com.br",
        address: "Av. Teotônio Segurado, 567 - Centro, Palmas - TO",
        website: "www.sinpolto.com.br"
      }
    }
  ];

  const regions = [
    { value: "todos", label: "Todas as Regiões" },
    { value: "Norte", label: "Norte" },
    { value: "Nordeste", label: "Nordeste" },
    { value: "Centro-Oeste", label: "Centro-Oeste" },
    { value: "Sudeste", label: "Sudeste" },
    { value: "Sul", label: "Sul" }
  ];

  const filteredSindicatos = sindicatos.filter(sindicato => {
    const matchesSearch = sindicato.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sindicato.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "todos" || sindicato.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Rede Nacional
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Sindicatos
            <span className="text-gold"> Estaduais</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os sindicatos de policiais em todos os estados do Brasil. 
            Nossa rede nacional trabalha unida pela defesa dos direitos da categoria.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar por estado ou nome..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Filtrar por região" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((region) => (
                <SelectItem key={region.value} value={region.value}>
                  {region.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results count */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Mostrando {filteredSindicatos.length} sindicatos
          </p>
        </div>

        {/* Sindicatos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSindicatos.map((sindicato, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gold/20 hover:border-gold/40">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={sindicato.flag}
                    alt={`Bandeira de ${sindicato.state}`}
                    className="w-16 h-12 object-cover rounded border border-gold/20"
                  />
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2 border-gold text-gold">
                      {sindicato.region}
                    </Badge>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-gold transition-colors">
                      {sindicato.state}
                    </h3>
                  </div>
                </div>
                
                <h4 className="font-semibold text-foreground mb-4">
                  {sindicato.name}
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 text-gold" />
                    <span>{sindicato.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 text-gold" />
                    <span>{sindicato.contact.email}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{sindicato.contact.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4 text-gold" />
                    <span>{sindicato.contact.website}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gold/20">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-gold hover:text-gold-dark hover:bg-gold/10"
                  >
                    Entrar em Contato
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty state */}
        {filteredSindicatos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Nenhum sindicato encontrado com os filtros aplicados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sindicatos;