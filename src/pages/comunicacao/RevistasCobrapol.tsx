import { useState } from 'react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Download, Eye, Calendar, FileText } from "lucide-react"
import { useRevistas, useRevistasDestaque, useAnosDisponiveis, useIncrementarDownload } from '@/hooks/useRevistas'

const RevistasCobrapol = () => {
  const [filtros, setFiltros] = useState({
    ano: undefined as number | undefined,
    busca: ''
  })

  const { data: todasRevistas, isLoading } = useRevistas(filtros)
  const { data: revistasDestaque } = useRevistasDestaque()
  const { data: anos } = useAnosDisponiveis()
  const incrementarDownload = useIncrementarDownload()

  // Separar revistas em destaque e normais
  const revistasNormais = todasRevistas?.filter(r => !r.destaque) || []

  const handleDownload = (revistaId: number, url: string) => {
    incrementarDownload.mutate(revistaId)
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho e Filtros */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Revistas Cobrapol</h1>
            <p className="text-gray-600 mb-6">
              Conheça nossa revista institucional com conteúdo especializado sobre a Polícia Civil, 
              direitos da categoria e assuntos relevantes para profissionais de segurança pública.
            </p>

            {/* Busca */}
            <div className="mb-6">
              <div className="relative max-w-2xl">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar revistas por título ou edição..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={filtros.busca}
                  onChange={(e) => setFiltros({ ...filtros, busca: e.target.value })}
                />
              </div>
            </div>

            {/* Filtro por ano */}
            <div className="flex gap-2 flex-wrap items-center">
              <span className="text-sm font-medium text-gray-600">Filtrar por ano:</span>
              <button
                onClick={() => setFiltros({ ...filtros, ano: undefined })}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  !filtros.ano 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Todos
              </button>
              {anos?.map(ano => (
                <button
                  key={ano}
                  onClick={() => setFiltros({ ...filtros, ano })}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filtros.ano === ano 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {ano}
                </button>
              ))}
            </div>
          </div>

          {/* Edições em Destaque */}
          {revistasDestaque && revistasDestaque.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Edições em Destaque - Download Disponível</h2>
              </div>
              
              <div className="space-y-6">
                {revistasDestaque.map((revista) => (
                  <Card key={revista.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      {/* Imagem da capa */}
                      <div className="md:w-1/3 relative h-64 md:h-auto">
                        <img
                          src={revista.capa_url || "https://images.unsplash.com/photo-1589998059171-988d887df646?w=800"}
                          alt={revista.titulo}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                            Destaque
                          </span>
                        </div>
                      </div>

                      {/* Conteúdo */}
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{revista.mes} {revista.ano}</span>
                          {revista.edicao && <span>• Edição {revista.edicao}</span>}
                        </div>

                        <h3 className="text-2xl font-bold mb-3">{revista.titulo}</h3>
                        <p className="text-gray-600 mb-6">{revista.descricao}</p>

                        <div className="flex gap-4">
                          <Button
                            onClick={() => handleDownload(revista.id, revista.arquivo_pdf_url || '#')}
                            className="gap-2"
                          >
                            <Download className="w-4 h-4" />
                            Download PDF
                            {revista.tamanho_arquivo && (
                              <span className="text-xs">({revista.tamanho_arquivo})</span>
                            )}
                          </Button>
                          
                          {revista.arquivo_pdf_url && (
                            <Button
                              variant="outline"
                              onClick={() => window.open(revista.arquivo_pdf_url, '_blank')}
                              className="gap-2"
                            >
                              <Eye className="w-4 h-4" />
                              Visualizar
                            </Button>
                          )}
                        </div>

                        {revista.downloads > 0 && (
                          <p className="text-sm text-gray-500 mt-4">
                            {revista.downloads} downloads
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Todas as Edições */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Todas as Edições</h2>
            
            {isLoading ? (
              <div className="text-center py-12">Carregando revistas...</div>
            ) : revistasNormais.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                Nenhuma revista encontrada
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {revistasNormais.map((revista) => (
                  <Card key={revista.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                    {/* Capa */}
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={revista.capa_url || "https://images.unsplash.com/photo-1589998059171-988d887df646?w=800"}
                        alt={revista.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center gap-2 text-sm mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{revista.mes} {revista.ano}</span>
                        </div>
                        {revista.edicao && (
                          <span className="text-xs bg-primary px-2 py-1 rounded">
                            Edição {revista.edicao}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {revista.titulo}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {revista.descricao}
                      </p>

                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleDownload(revista.id, revista.arquivo_pdf_url || '#')}
                          className="flex-1 gap-2"
                          size="sm"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </Button>
                        
                        {revista.arquivo_pdf_url && (
                          <Button
                            variant="outline"
                            onClick={() => window.open(revista.arquivo_pdf_url, '_blank')}
                            size="sm"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        )}
                      </div>

                      {revista.downloads > 0 && (
                        <p className="text-xs text-gray-500 mt-3">
                          {revista.downloads} downloads
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </section>

          {/* Sobre as Revistas Cobrapol */}
          <section className="mt-16 bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Sobre as Revistas Cobrapol</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">📅 Periodicidade</h3>
                <p className="text-gray-600">
                  As revistas são publicadas trimestralmente, sempre trazendo conteúdo 
                  atual e relevante para os profissionais da segurança pública.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">📖 Conteúdo</h3>
                <p className="text-gray-600">
                  Artigos técnicos, entrevistas, análises jurídicas e informações sobre 
                  direitos e benefícios dos policiais civis.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">📥 Acesso</h3>
                <p className="text-gray-600">
                  As edições mais recentes estão disponíveis para download gratuito em 
                  formato PDF. Basta clicar no botão de download.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">📢 Distribuição</h3>
                <p className="text-gray-600">
                  Além do acesso digital, as revistas também são distribuídas fisicamente 
                  nas sedes sindicais e eventos da categoria.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default RevistasCobrapol
