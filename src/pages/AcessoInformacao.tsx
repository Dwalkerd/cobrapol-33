import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AcessoInformacao = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Acesso à Informação</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Lei de Acesso à Informação</h2>
            <p className="text-gray-600 mb-4">
              Em cumprimento à Lei Federal nº 12.527/2011 (Lei de Acesso à Informação), a COBRAPOL disponibiliza 
              informações de interesse público de forma transparente e acessível.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Informações Institucionais</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Estrutura organizacional</li>
                  <li>• Competências e responsabilidades</li>
                  <li>• Legislação e normas</li>
                  <li>• Relatórios de atividades</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Transparência Financeira</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Orçamento e execução</li>
                  <li>• Contratos e convênios</li>
                  <li>• Despesas e receitas</li>
                  <li>• Prestação de contas</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Como Solicitar Informações</h2>
            <p className="text-gray-600 mb-4">
              Para solicitar informações que não estejam disponíveis no portal, utilize os canais abaixo:
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>E-mail:</strong> acesso@cobrapol.org.br</p>
              <p><strong>Telefone:</strong> (61) 3000-0000</p>
              <p><strong>Horário de atendimento:</strong> Segunda a sexta, das 8h às 18h</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AcessoInformacao;