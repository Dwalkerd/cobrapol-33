import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const FaleConosco = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Contato
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Fale
            <span className="text-gold"> Conosco</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato conosco. Estamos aqui para ajudar e esclarecer suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-gold/20">
            <CardHeader>
              <CardTitle className="text-2xl text-gold">Envie sua mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input placeholder="(11) 99999-9999" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Assunto</label>
                    <Input placeholder="Assunto da mensagem" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea 
                    placeholder="Escreva sua mensagem aqui..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-gold hover:bg-gold-dark text-foreground">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-gold/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Telefone</h3>
                    <p className="text-muted-foreground">(11) 3333-4444</p>
                    <p className="text-muted-foreground">(11) 99999-8888</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">E-mail</h3>
                    <p className="text-muted-foreground">contato@cobrapol.com.br</p>
                    <p className="text-muted-foreground">diretoria@cobrapol.com.br</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua Exemplo, 123 - Centro<br />
                      São Paulo - SP, 01234-567
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground">
                      Segunda à Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">Atendimento de Emergência</h3>
                <p className="text-muted-foreground mb-4">
                  Para situações de emergência, nossos associados podem contar com atendimento 24 horas.
                </p>
                <div className="bg-gold/10 p-4 rounded-lg">
                  <p className="font-semibold text-gold">Emergência 24h: (11) 99999-0000</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaleConosco;