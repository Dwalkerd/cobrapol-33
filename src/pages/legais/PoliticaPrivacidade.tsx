import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Eye, Lock, FileText } from "lucide-react";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-gold" />
            <h1 className="text-4xl font-bold mb-4">Política de Privacidade</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Transparência total sobre como coletamos, utilizamos e protegemos seus dados pessoais
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <p className="text-blue-800 mb-0">
                  <strong>Última atualização:</strong> 15 de janeiro de 2024
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Eye className="h-6 w-6 text-primary" />
                1. Informações Gerais
              </h2>
              <p>
                O COBRAPOL - Confederação Brasileira dos Policiais está comprometido com a proteção 
                da privacidade e dos dados pessoais de nossos filiados, visitantes do site e usuários 
                de nossos serviços. Esta Política de Privacidade descreve como coletamos, usamos, 
                armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral 
                de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">2. Dados Coletados</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Dados Fornecidos Voluntariamente</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nome completo</li>
                <li>CPF/CNPJ</li>
                <li>E-mail</li>
                <li>Telefone</li>
                <li>Endereço</li>
                <li>Dados profissionais (matrícula, lotação, cargo)</li>
                <li>Informações bancárias (para filiados)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Dados Coletados Automaticamente</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Endereço IP</li>
                <li>Tipo de navegador</li>
                <li>Páginas visitadas</li>
                <li>Tempo de permanência no site</li>
                <li>Cookies e tecnologias similares</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                3. Finalidades do Tratamento
              </h2>
              <p>Utilizamos seus dados pessoais para as seguintes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Gestão da filiação:</strong> controle de associados, cobrança de mensalidades</li>
                <li><strong>Prestação de serviços:</strong> assistência jurídica, orientações, benefícios</li>
                <li><strong>Comunicação:</strong> envio de informativos, notícias e comunicados oficiais</li>
                <li><strong>Cumprimento de obrigações legais:</strong> relatórios para órgãos públicos</li>
                <li><strong>Melhoria dos serviços:</strong> análise de uso do site e feedback dos usuários</li>
                <li><strong>Segurança:</strong> prevenção de fraudes e proteção contra ameaças</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">4. Base Legal</h2>
              <p>O tratamento de dados pessoais pelo COBRAPOL baseia-se nas seguintes hipóteses legais:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consentimento:</strong> para envio de comunicações promocionais</li>
                <li><strong>Execução de contrato:</strong> para prestação de serviços aos filiados</li>
                <li><strong>Cumprimento de obrigação legal:</strong> relatórios obrigatórios</li>
                <li><strong>Interesse legítimo:</strong> segurança e melhoria dos serviços</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">5. Compartilhamento de Dados</h2>
              <p>Seus dados pessoais podem ser compartilhados com:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Sindicatos filiados:</strong> para coordenação de atividades</li>
                <li><strong>Prestadores de serviços:</strong> sob rigoroso controle e confidencialidade</li>
                <li><strong>Órgãos públicos:</strong> quando exigido por lei</li>
                <li><strong>Instituições financeiras:</strong> para processamento de pagamentos</li>
              </ul>
              <p className="mt-4">
                <strong>Importante:</strong> Nunca vendemos, alugamos ou comercializamos seus dados pessoais.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-2">
                <Lock className="h-6 w-6 text-primary" />
                6. Segurança dos Dados
              </h2>
              <p>Implementamos medidas técnicas e organizacionais para proteger seus dados:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Criptografia de dados sensíveis</li>
                <li>Controle de acesso baseado em perfis</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Backups regulares e seguros</li>
                <li>Treinamento de funcionários sobre proteção de dados</li>
                <li>Auditorias periódicas de segurança</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">7. Retenção de Dados</h2>
              <p>Mantemos seus dados pessoais apenas pelo tempo necessário para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cumprir as finalidades para as quais foram coletados</li>
                <li>Atender obrigações legais (prazo mínimo de 5 anos)</li>
                <li>Exercer direitos em processos judiciais</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">8. Seus Direitos</h2>
              <p>Você possui os seguintes direitos sobre seus dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Acesso:</strong> obter informações sobre o tratamento de seus dados</li>
                <li><strong>Correção:</strong> corrigir dados incompletos ou inexatos</li>
                <li><strong>Eliminação:</strong> solicitar a exclusão de dados desnecessários</li>
                <li><strong>Portabilidade:</strong> solicitar a transferência de dados para outro controlador</li>
                <li><strong>Oposição:</strong> opor-se ao tratamento em determinadas situações</li>
                <li><strong>Revogação do consentimento:</strong> retirar consentimento a qualquer momento</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">9. Cookies</h2>
              <p>
                Utilizamos cookies para melhorar sua experiência em nosso site. Você pode 
                configurar seu navegador para bloquear cookies, mas isso pode afetar algumas 
                funcionalidades do site.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">10. Menores de Idade</h2>
              <p>
                Não coletamos intencionalmente dados pessoais de menores de 18 anos sem o 
                consentimento dos pais ou responsáveis legais.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">11. Alterações nesta Política</h2>
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente. As alterações 
                serão comunicadas através de nosso site e, quando significativas, por e-mail.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">12. Contato</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta Política:
                </p>
                <ul className="space-y-2">
                  <li><strong>E-mail:</strong> privacidade@cobrapol.org.br</li>
                  <li><strong>Telefone:</strong> (11) 1234-5678</li>
                  <li><strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo/SP - CEP: 01310-100</li>
                  <li><strong>Encarregado de Dados:</strong> Dr. João Silva (dpo@cobrapol.org.br)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8">
                <p className="text-yellow-800 mb-0">
                  <strong>Importante:</strong> Em caso de violação de dados que possa gerar 
                  riscos aos titulares, comunicaremos o fato à Autoridade Nacional de Proteção 
                  de Dados (ANPD) e aos titulares afetados, conforme exigido pela LGPD.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;