import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, AlertTriangle, Scale, Globe } from "lucide-react";

const TermosUso = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <FileText className="h-16 w-16 mx-auto mb-6 text-gold" />
            <h1 className="text-4xl font-bold mb-4">Termos de Uso</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Condições gerais para uso do site e serviços do COBRAPOL
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <p className="text-blue-800 mb-0">
                  <strong>Última atualização:</strong> 15 de janeiro de 2024<br/>
                  <strong>Data de vigência:</strong> 15 de janeiro de 2024
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao acessar e utilizar o site do COBRAPOL - Confederação Brasileira dos Policiais 
                (www.cobrapol.org.br), você concorda automaticamente com estes Termos de Uso. 
                Se você não concorda com qualquer parte destes termos, não deve utilizar nosso site.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">2. Sobre o COBRAPOL</h2>
              <p>
                O COBRAPOL é uma entidade sindical de âmbito nacional que representa os interesses 
                dos policiais brasileiros, constituída conforme a legislação brasileira vigente, 
                com sede na Av. Paulista, 1000 - São Paulo/SP.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">3. Uso Permitido</h2>
              
              <h3 className="text-xl font-semibold mb-3">3.1 Você pode:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acessar e navegar pelo site para fins legítimos</li>
                <li>Consultar informações públicas disponibilizadas</li>
                <li>Utilizar os serviços oferecidos aos filiados</li>
                <li>Entrar em contato conosco através dos canais oficiais</li>
                <li>Compartilhar conteúdos públicos com devida atribuição</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Você não pode:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Usar o site para atividades ilegais ou não autorizadas</li>
                <li>Tentar acessar áreas restritas sem autorização</li>
                <li>Reproduzir, duplicar ou copiar conteúdos sem permissão</li>
                <li>Transmitir vírus, malware ou códigos maliciosos</li>
                <li>Interferir no funcionamento normal do site</li>
                <li>Fazer engenharia reversa ou tentar descobrir códigos-fonte</li>
                <li>Usar informações obtidas para fins comerciais não autorizados</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">4. Cadastro e Conta de Usuário</h2>
              <p>
                Para acessar determinados serviços, é necessário criar uma conta. Você é responsável por:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer informações verdadeiras e atualizadas</li>
                <li>Manter a segurança de suas credenciais de acesso</li>
                <li>Notificar imediatamente sobre uso não autorizado de sua conta</li>
                <li>Usar a conta apenas para os fins autorizados</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-2">
                <Scale className="h-6 w-6 text-primary" />
                5. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo do site (textos, imagens, logotipos, design, códigos) é propriedade 
                do COBRAPOL ou de terceiros licenciadores, protegido por leis de direitos autorais 
                e propriedade intelectual.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Direitos Reservados</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Marca "COBRAPOL" e logotipos relacionados</li>
                <li>Design e layout do site</li>
                <li>Conteúdos editoriais próprios</li>
                <li>Fotografias e ilustrações</li>
                <li>Softwares e aplicações</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">6. Conteúdo do Usuário</h2>
              <p>
                Ao enviar conteúdo através de nossos formulários ou canais de comunicação, você:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Garante que possui todos os direitos sobre o conteúdo</li>
                <li>Concede ao COBRAPOL licença para usar o conteúdo conforme necessário</li>
                <li>Assume responsabilidade por qualquer violação de direitos de terceiros</li>
                <li>Autoriza moderação e remoção de conteúdo inadequado</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">7. Privacidade e Proteção de Dados</h2>
              <p>
                O tratamento de dados pessoais é regido por nossa 
                <a href="/legais/politica-privacidade" className="text-primary hover:underline"> Política de Privacidade</a>, 
                elaborada em conformidade com a Lei Geral de Proteção de Dados (LGPD).
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">8. Limitação de Responsabilidade</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-yellow-800 mb-2 font-semibold">Importante:</p>
                    <p className="text-yellow-800 mb-0">
                      O COBRAPOL não se responsabiliza por danos diretos, indiretos, incidentais 
                      ou consequentes decorrentes do uso do site.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">8.1 Isenções</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Interrupções temporárias do serviço</li>
                <li>Perda de dados por problemas técnicos</li>
                <li>Ações de terceiros não autorizadas</li>
                <li>Conteúdo de sites externos linkados</li>
                <li>Decisões tomadas com base em informações do site</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">9. Links para Sites Externos</h2>
              <p>
                Nosso site pode conter links para sites de terceiros. Não controlamos nem 
                nos responsabilizamos pelo conteúdo, políticas de privacidade ou práticas 
                desses sites externos.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">10. Modificações do Serviço</h2>
              <p>
                Reservamo-nos o direito de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modificar, suspender ou descontinuar qualquer parte do site</li>
                <li>Alterar estes Termos de Uso a qualquer momento</li>
                <li>Restringir acesso a certas funcionalidades</li>
                <li>Implementar novas políticas de uso</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">11. Violações e Penalidades</h2>
              <p>
                Em caso de violação destes termos, podemos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Suspender ou cancelar sua conta</li>
                <li>Remover conteúdo inadequado</li>
                <li>Restringir acesso ao site</li>
                <li>Tomar medidas legais cabíveis</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">12. Lei Aplicável e Foro</h2>
              <p>
                Estes Termos de Uso são regidos pela legislação brasileira. Qualquer 
                controvérsia será resolvida nos tribunais competentes da Comarca de São Paulo/SP.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">13. Força Maior</h2>
              <p>
                Não seremos responsáveis por falhas ou atrasos decorrentes de circunstâncias 
                além de nosso controle razoável, incluindo desastres naturais, atos 
                governamentais, guerras, ou falhas de infraestrutura de internet.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">14. Disposições Gerais</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Se alguma disposição for considerada inválida, as demais permanecem em vigor</li>
                <li>Estes termos constituem o acordo completo entre as partes</li>
                <li>A não aplicação de qualquer direito não constitui renúncia</li>
                <li>Alterações só são válidas se feitas por escrito</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">15. Contato</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-4">
                  Para dúvidas sobre estes Termos de Uso:
                </p>
                <ul className="space-y-2">
                  <li><strong>E-mail:</strong> juridico@cobrapol.org.br</li>
                  <li><strong>Telefone:</strong> (11) 1234-5678</li>
                  <li><strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo/SP - CEP: 01310-100</li>
                  <li><strong>Horário de atendimento:</strong> Segunda a Sexta, 8h às 18h</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-8">
                <p className="text-green-800 mb-0">
                  <strong>Agradecemos por utilizar nossos serviços!</strong><br/>
                  O COBRAPOL está comprometido em oferecer a melhor experiência aos nossos 
                  usuários, sempre respeitando seus direitos e nossa missão institucional.
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

export default TermosUso;