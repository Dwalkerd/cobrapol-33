import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Calendar, Filter, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Diretoria = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCargo, setFilterCargo] = useState("all");
  const [filterMandato, setFilterMandato] = useState("2024-2027"); // Mandato atual por padrão

  const diretores = [
    // Mandato 2024-2027
    {
      nome: "José Carlos Silva",
      cargo: "Presidente",
      mandato: "2024-2027",
      area: "Administração Geral",
      email: "presidente@cobrapol.org.br",
      telefone: "(11) 1234-5678",
      foto: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop"
    },
    {
      nome: "Maria Santos Oliveira",
      cargo: "Vice-Presidente",
      mandato: "2024-2027",
      area: "Assuntos Jurídicos",
      email: "vice@cobrapol.org.br",
      telefone: "(11) 1234-5679",
      foto: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=400&fit=crop"
    },
    {
      nome: "Carlos Eduardo Pereira",
      cargo: "Secretário Geral",
      mandato: "2024-2027",
      area: "Documentação e Arquivo",
      email: "secretario@cobrapol.org.br",
      telefone: "(11) 1234-5680",
      foto: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop"
    },
    {
      nome: "Ana Rodrigues Costa",
      cargo: "Tesoureira",
      mandato: "2024-2027",
      area: "Finanças e Contabilidade",
      email: "tesoureira@cobrapol.org.br",
      telefone: "(11) 1234-5681",
      foto: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop"
    },
    {
      nome: "Roberto Almeida",
      cargo: "Diretor Jurídico",
      mandato: "2024-2027",
      area: "Departamento Jurídico",
      email: "juridico@cobrapol.org.br",
      telefone: "(11) 1234-5682",
      foto: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop"
    },
    {
      nome: "Luciana Ferreira",
      cargo: "Diretor de Comunicação",
      mandato: "2024-2027",
      area: "Comunicação e Marketing",
      email: "comunicacao@cobrapol.org.br",
      telefone: "(11) 1234-5683",
      foto: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=400&fit=crop"
    },
    {
      nome: "Pedro Henrique Lima",
      cargo: "Diretor de Formação",
      mandato: "2024-2027",
      area: "Educação e Capacitação",
      email: "formacao@cobrapol.org.br",
      telefone: "(11) 1234-5684",
      foto: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop"
    },
    {
      nome: "Fernanda Martins",
      cargo: "Diretor de Benefícios",
      mandato: "2024-2027",
      area: "Benefícios e Assistência",
      email: "beneficios@cobrapol.org.br",
      telefone: "(11) 1234-5685",
      foto: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop"
    },
    {
      nome: "Marcos Antonio Silva",
      cargo: "Diretor Regional SP",
      mandato: "2024-2027",
      area: "Região Metropolitana de São Paulo",
      email: "sp@cobrapol.org.br",
      telefone: "(11) 1234-5686",
      foto: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop"
    },
    {
      nome: "Juliana Campos",
      cargo: "Diretor Regional RJ",
      mandato: "2024-2027",
      area: "Estado do Rio de Janeiro",
      email: "rj@cobrapol.org.br",
      telefone: "(21) 1234-5687",
      foto: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=400&fit=crop"
    },
    
    // Mandato 2021-2024
    {
      nome: "Antonio Souza",
      cargo: "Presidente",
      mandato: "2021-2024",
      area: "Administração Geral",
      email: "ex-presidente@cobrapol.org.br",
      telefone: "(11) 1234-5600",
      foto: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop"
    },
    {
      nome: "Beatriz Rocha",
      cargo: "Vice-Presidente",
      mandato: "2021-2024",
      area: "Assuntos Jurídicos",
      email: "ex-vice@cobrapol.org.br",
      telefone: "(11) 1234-5601",
      foto: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop"
    },
    {
      nome: "Ricardo Barbosa",
      cargo: "Secretário Geral",
      mandato: "2021-2024",
      area: "Documentação e Arquivo",
      email: "ex-secretario@cobrapol.org.br",
      telefone: "(11) 1234-5602",
      foto: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop"
    }
  ];

  const cargos = [...new Set(diretores.map(d => d.cargo))];
  const mandatos = [...new Set(diretores.map(d => d.mandato))];

  const filteredDiretores = diretores.filter(diretor => {
    const matchesSearch = diretor.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         diretor.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         diretor.area.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCargo = filterCargo === "all" || diretor.cargo === filterCargo;
    const matchesMandato = filterMandato === "all" || diretor.mandato === filterMandato;
    
    return matchesSearch && matchesCargo && matchesMandato;
  });

  const groupedByMandato = mandatos.map(mandato => ({
    mandato,
    diretores: filteredDiretores.filter(d => d.mandato === mandato)
  })).filter(group => group.diretores.length > 0);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Diretoria Executiva</h1>
          <p className="text-muted-foreground text-lg">
            Conheça os membros da diretoria executiva atual do Cobrapol. Use os filtros para ver mandatos anteriores.
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gold" />
            <h3 className="text-lg font-semibold">Filtros</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Buscar por nome/cargo</label>
              <Input
                placeholder="Digite o nome ou cargo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-gold/20"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Filtrar por cargo</label>
              <Select value={filterCargo} onValueChange={setFilterCargo}>
                <SelectTrigger className="border-gold/20">
                  <SelectValue placeholder="Todos os cargos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os cargos</SelectItem>
                  {cargos.map(cargo => (
                    <SelectItem key={cargo} value={cargo}>{cargo}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Filtrar por mandato</label>
              <Select value={filterMandato} onValueChange={setFilterMandato}>
                <SelectTrigger className="border-gold/20">
                  <SelectValue placeholder="Mandato Atual" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-2027">Mandato Atual (2024-2027)</SelectItem>
                  <SelectItem value="all">Todos os mandatos</SelectItem>
                  {mandatos.filter(m => m !== "2024-2027").map(mandato => (
                    <SelectItem key={mandato} value={mandato}>Mandato {mandato}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Diretores agrupados por mandato */}
        <div className="space-y-12">
          {groupedByMandato.map((group) => (
            <div key={group.mandato}>
              <div className="flex items-center gap-4 mb-6">
                <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20 text-lg px-4 py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Mandato {group.mandato}
                </Badge>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{group.diretores.length} membros</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.diretores.map((diretor, index) => (
                  <Card key={index} className="border-gold/20 hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                        <img 
                          src={diretor.foto} 
                          alt={diretor.nome}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-lg">{diretor.nome}</CardTitle>
                      <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20 mx-auto w-fit">
                        {diretor.cargo}
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground font-medium">{diretor.area}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-gold" />
                          <a href={`mailto:${diretor.email}`} className="text-muted-foreground hover:text-gold transition-colors">
                            {diretor.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-gold" />
                          <a href={`tel:${diretor.telefone}`} className="text-muted-foreground hover:text-gold transition-colors">
                            {diretor.telefone}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredDiretores.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Nenhum diretor encontrado com os filtros aplicados.
            </p>
            <Button 
              variant="outline" 
              className="mt-4" 
              onClick={() => {
                setSearchTerm("");
                setFilterCargo("all");
                setFilterMandato("2024-2027"); // Volta para o mandato atual
              }}
            >
              Limpar Filtros
            </Button>
          </div>
        )}

        {/* Informações sobre eleições */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gold" />
                Informações sobre Mandatos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mandato Atual</h3>
                  <p className="text-muted-foreground">Janeiro 2024 - Dezembro 2027</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Eleição realizada em dezembro de 2023
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Próximas Eleições</h3>
                  <p className="text-muted-foreground">Dezembro 2027</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Processo eleitoral será iniciado em setembro de 2027
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Diretoria;