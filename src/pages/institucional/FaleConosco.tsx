import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FaleConosco = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Fale Conosco</h1>
        <p className="text-muted-foreground text-lg">
          Entre em contato conosco através dos canais abaixo ou envie-nos uma mensagem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gold" />
                Telefone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">(11) 1234-5678</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gold" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">contato@cobrapol.org.br</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gold" />
                Endereço
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                Rua dos Policiais, 123<br />
                Centro, São Paulo - SP<br />
                CEP: 01234-567
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold" />
                Horário de Atendimento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                Segunda à Sexta: 9h às 18h<br />
                Sábado: 9h às 12h
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entraremos em contato o mais breve possível.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gold/20 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gold/20 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-2 border border-gold/20 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 border border-gold/20 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Sua mensagem"
                  />
                </div>
                
                <Button className="w-full bg-gold hover:bg-gold-dark">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default FaleConosco;