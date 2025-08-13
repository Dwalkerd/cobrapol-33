import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, FileText, Phone, Mail, Clock } from "lucide-react";

const CartaServicos = () => {
  const servicos = [
    {
      icon: Shield,
      titulo: "Assistência Jurídica",
      descricao: "Orientação e representação legal para policiais civis",
      detalhes: [
        "Consultoria em direitos trabalhistas",
        "Acompanhamento processual",
        "Defesa em procedimentos administrativos",
        "Orientação previdenciária"
      ]
    },
    {
      icon: Users,
      titulo: "Representação Sindical",
      descricao: "Defesa dos interesses da categoria",
      detalhes: [
        "Negociação coletiva",
        "Mediação de conflitos",
        "Acompanhamento de políticas públicas",
        "Representação em comissões"
      ]
    },
    {
      icon: FileText,
      titulo: "Serviços Administrativos",
      descricao: "Suporte em questões burocráticas",
      detalhes: [
        "Emissão de declarações",
        "Orientação sobre benefícios",
        "Suporte em licenças",
        "Informações sobre carreira"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Carta de Serviços</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Nossos Serviços</h2>
            <p className="text-gray-600 mb-8">
              A COBRAPOL oferece diversos serviços para atender as necessidades dos policiais civis 
              e suas famílias, sempre priorizando a qualidade e eficiência no atendimento.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {servicos.map((servico, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <servico.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{servico.titulo}</CardTitle>
                    </div>
                    <CardDescription>{servico.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {servico.detalhes.map((detalhe, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {detalhe}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/5 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6" />
                Horários de Atendimento
              </h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>Segunda a Quinta:</strong> 8h às 18h</p>
                <p><strong>Sexta-feira:</strong> 8h às 17h</p>
                <p><strong>Almoço:</strong> 12h às 14h</p>
                <p className="text-sm mt-4 text-gray-500">
                  * Atendimento mediante agendamento para alguns serviços
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Contato</h2>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  (61) 3000-0000
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  atendimento@cobrapol.org.br
                </p>
                <p className="text-sm mt-4">
                  <strong>Endereço:</strong><br />
                  SCS Quadra 01, Bloco A, Edifício Central<br />
                  Brasília - DF, CEP: 70000-000
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartaServicos;