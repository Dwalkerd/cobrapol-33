import { Shield, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/institucional/sobre-nos" },
    { label: "Serviços", href: "/carta-servicos" },
    { label: "Notícias", href: "/publicacoes/noticias" },
    { label: "Contato", href: "/institucional/fale-conosco" }
  ];

  const services = [
    { label: "Área do Associado", href: "/area-associado" },
    { label: "Lista de Sindicatos", href: "/sindicatos" },
    { label: "Filiação", href: "/sindicatos/filiacao" },
    { label: "Ouvidoria", href: "/e-cidadania/ouvidoria" },
    { label: "Transparência", href: "/transparencia" }
  ];

  const legal = [
    { label: "Política de Privacidade", href: "/legais/politica-privacidade" },
    { label: "Termos de Uso", href: "/legais/termos-uso" },
    { label: "Estatuto", href: "/legais/estatuto" },
    { label: "Regimento Interno", href: "/legais/regimento-interno" },
    { label: "Transparência", href: "/transparencia" }
  ];


  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/90 text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gold p-1 rounded-full">
                <img 
                  src="/lovable-uploads/18bd6ef1-312b-49a8-8679-fb0436eb8e48.png" 
                  alt="Logo Cobrapol" 
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Cobrapol</h3>
                <p className="text-sm text-background/70">Sindicato dos Policiais</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Defendendo os direitos dos policiais brasileiros há mais de 30 anos. 
              Unidos pela justiça, fortalecidos pela união.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-background/80">
                <MapPin className="h-4 w-4 text-gold flex-shrink-0" />
                <span>SCS Quadra 01 Bloco G Sala 201, Edifício Baracat - Asa Sul, Brasília/DF - CEP: 70309-900</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/80">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <span>(61) 1234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/80">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <span>contato@cobrapol.org.br</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-background/80 hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">Conecte-se</h4>
            <div className="space-y-4 mb-6">
              <p className="text-background/80 text-sm">
                Acompanhe nossas redes sociais para ficar por dentro das últimas notícias e conquistas. Visite nosso site para mais informações.
              </p>
            </div>
            <div className="bg-gold/10 rounded-2xl p-4 border border-gold/20">
              <h5 className="font-semibold text-gold mb-2">Atendimento 24h</h5>
              <p className="text-sm text-background/80 mb-2">
                Plantão de emergência para associados
              </p>
              <p className="text-lg font-bold text-gold">0800 123 4567</p>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-background/20 py-6">
          <ul className="flex flex-wrap justify-center gap-6 mb-6">
            {legal.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  className="text-background/60 hover:text-gold transition-colors duration-200 text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-background/60 text-sm">
                © 2024 Cobrapol - Confederação Brasileira de Trabalhadores Policiais Civis. Todos os direitos reservados.
              </p>
              <p className="text-background/50 text-xs mt-1">
                CNPJ: 37.050.804/0001-05 | Fundada em 9 de outubro de 1991
              </p>
            </div>
            <div className="flex items-center gap-2 text-background/60 text-sm">
              <span>Desenvolvido com</span>
              <span className="text-gold">❤</span>
              <span>para os Policiais do Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;