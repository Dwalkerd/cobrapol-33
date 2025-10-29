import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Users, Phone, Mail, Globe, ChevronDown, ChevronUp, Search, Building, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useSindicatos } from "@/hooks/useSindicatos";
import { useEstadosDisponiveis, useRegioesMapeadas } from "@/hooks/useSindicatos";

const SindicatosPage = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [busca, setBusca] = useState('');
  const [estadoSelecionado, setEstadoSelecionado] = useState('Todos os Estados');
  const [regiaoSelecionada, setRegiaoSelecionada] = useState('Todas as Regiões');
  
  // Hooks para buscar dados do Supabase
  const { data: sindicatos, isLoading, error } = useSindicatos({
    busca,
    estado: estadoSelecionado,
    regiao: regiaoSelecionada
  });

  useEffect(() => {
    console.log('📱 [SindicatosPage] Dados atualizados:', sindicatos)
    console.log('📱 [SindicatosPage] isLoading:', isLoading)
    console.log('📱 [SindicatosPage] error:', error)
  }, [sindicatos, isLoading, error])

  // Arrays de opções
  const ESTADOS_BRASIL = [
    'Todos os Estados',
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  const REGIOES_BRASIL = [
    'Todas as Regiões',
    'Norte',
    'Nordeste', 
    'Centro-Oeste',
    'Sudeste',
    'Sul'
  ];

  const toggleExpanded = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  // Tratamento de loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gold" />
        <span className="ml-2 text-foreground">Carregando sindicatos...</span>
      </div>
    );
  }

  // Tratamento de error
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Erro ao carregar sindicatos</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gold text-background rounded-lg hover:bg-gold/90"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Campo de Busca */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Buscar por nome ou UF
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Digite o nome do sindicato ou UF..."
                      className="pl-10 border-gold/20"
                      value={busca}
                      onChange={(e) => setBusca(e.target.value)}
                    />
                  </div>
                </div>

                {/* Filtro por Estado */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Filtrar por Estado/UF
                  </label>
                  <select 
                    value={estadoSelecionado}
                    onChange={(e) => setEstadoSelecionado(e.target.value)}
                    className="w-full px-4 py-2 border border-gold/20 rounded-lg bg-background text-foreground"
                  >
                    {ESTADOS_BRASIL.map(estado => (
                      <option key={estado} value={estado}>{estado}</option>
                    ))}
                  </select>
                </div>

                {/* Filtro por Região */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Filtrar por Região
                  </label>
                  <select 
                    value={regiaoSelecionada}
                    onChange={(e) => setRegiaoSelecionada(e.target.value)}
                    className="w-full px-4 py-2 border border-gold/20 rounded-lg bg-background text-foreground"
                  >
                    {REGIOES_BRASIL.map(regiao => (
                      <option key={regiao} value={regiao}>{regiao}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Botão Limpar Filtros */}
              <div className="mt-4 flex justify-end">
                <Button
                  onClick={() => {
                    setBusca('')
                    setEstadoSelecionado('Todos os Estados')
                    setRegiaoSelecionada('Todas as Regiões')
                  }}
                  variant="outline"
                  className="border-gold/20 hover:bg-gold/10"
                >
                  Limpar Filtros
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resultados */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {sindicatos?.length || 0} sindicato(s) encontrado(s)
          </p>
        </div>

        {/* Lista de Sindicatos */}
        <div className="grid gap-6">
          {sindicatos?.map((sindicato: any) => (
            <Card key={sindicato.id} className="border-gold/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-gold/10 p-3 rounded-full">
                      <Building className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">
                        {sindicato.endereco?.[0]?.uf || 'UF'} • {sindicato.nome_fantasia || sindicato.demonicacao}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {sindicato.demonicacao}
                      </CardDescription>
                      <Badge variant="outline" className="mt-1">
                        {sindicato.endereco?.[0]?.uf || 'Sem UF'}
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
                    <span className="text-sm text-muted-foreground">{sindicato.telefone || 'Não informado'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gold" />
                    <span className="text-sm text-muted-foreground">{sindicato.email || 'Não informado'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-gold" />
                    <span className="text-sm text-muted-foreground">{sindicato.website || 'Não informado'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span className="text-sm text-muted-foreground">
                      {sindicato.endereco?.[0]?.rua && sindicato.endereco?.[0]?.numero
                        ? `${sindicato.endereco[0].rua}, ${sindicato.endereco[0].numero} - ${sindicato.endereco[0].bairro || ''}`
                        : 'Não informado'}
                    </span>
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
                            <span className="text-muted-foreground">{sindicato.presidente_nome || 'A definir'}</span>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">CNPJ: </span>
                            <span className="text-muted-foreground">{sindicato.cnpj || 'Não informado'}</span>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Estado/UF: </span>
                            <span className="text-muted-foreground">{sindicato.endereco?.[0]?.uf || 'Não informado'}</span>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Data de Fundação: </span>
                            <span className="text-muted-foreground">{sindicato.data_fundacao || 'Não informado'}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Endereço Completo</h4>
                        <div className="text-muted-foreground">
                          {sindicato.endereco?.[0] ? (
                            <>
                              <p>{sindicato.endereco[0].rua || 'Rua não informada'}, {sindicato.endereco[0].numero || 'S/N'}</p>
                              <p>{sindicato.endereco[0].bairro || ''}</p>
                              <p>{sindicato.endereco[0].municipio || ''} - {sindicato.endereco[0].uf || ''}</p>
                              <p>CEP: {sindicato.endereco[0].cep || 'Não informado'}</p>
                            </>
                          ) : (
                            <p>Endereço não cadastrado</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {!isLoading && sindicatos?.length === 0 && (
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