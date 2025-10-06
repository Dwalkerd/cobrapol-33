import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Phone, Mail, Globe, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useFederacoes } from '@/hooks/useFederacoes';

const Federacoes = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const { data: federacoes, isLoading, error } = useFederacoes();

  const toggleExpanded = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center text-xl">Carregando federações...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center text-red-500">Erro ao carregar federações</div>
        </main>
        <Footer />
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
            Federações
            <span className="text-gold"> Regionais</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça as cinco federações regionais que compõem a estrutura organizacional da Cobrapol em todo o território nacional.
          </p>
        </div>

        <div className="grid gap-6">
          {federacoes?.map((federacao) => (
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
                        {federacao.sigla} • {federacao.estados?.join(", ")}
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
                    <span className="text-sm text-muted-foreground">{federacao.site_url}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gold" />
                    <span className="text-sm text-muted-foreground">
                      {federacao.quantidade_sindicatos} sindicatos filiados
                    </span>
                  </div>
                </div>

                {expandedCard === federacao.id && (
                  <div className="mt-6 pt-6 border-t border-gold/20 space-y-4">
                    {/* Endereço */}
                    {federacao.endereco && (
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold mb-1">Endereço</p>
                          <p className="text-muted-foreground">{federacao.endereco}</p>
                        </div>
                      </div>
                    )}

                    {/* Descrição */}
                    {federacao.descricao && (
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold mb-1">Sobre</p>
                          <p className="text-muted-foreground">{federacao.descricao}</p>
                        </div>
                      </div>
                    )}

                    {/* Quantidade de sindicatos */}
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Sindicatos Filiados</p>
                        <p className="text-muted-foreground">
                          {federacao.quantidade_sindicatos} sindicatos ativos em {federacao.estados?.length} estados
                        </p>
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