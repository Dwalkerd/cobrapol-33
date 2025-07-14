import { Shield, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Notícias", href: "#noticias" },
    { label: "Contato", href: "#contato" }
  ];

  const services = [
    { label: "Assistência Jurídica", href: "#" },
    { label: "Assistência Social", href: "#" },
    { label: "Capacitação", href: "#" },
    { label: "Assistência Médica", href: "#" },
    { label: "Benefícios", href: "#" }
  ];

  const legal = [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Estatuto", href: "#" },
    { label: "Regimento Interno", href: "#" },
    { label: "Transparência", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/90 text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-gold to-gold-dark p-2 rounded-full">
                <Shield className="h-8 w-8 text-primary-foreground" />
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
                <span>Av. Paulista, 1000 - São Paulo/SP</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/80">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <span>(11) 1234-5678</span>
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
                Siga-nos nas redes sociais para ficar por dentro das últimas notícias e conquistas.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-background/10 hover:bg-gold p-3 rounded-xl transition-all duration-200 group hover:scale-110"
                  >
                    <social.icon className="h-5 w-5 text-background/80 group-hover:text-foreground" />
                  </a>
                ))}
              </div>
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
                © 2024 Cobrapol - Sindicato dos Policiais. Todos os direitos reservados.
              </p>
              <p className="text-background/50 text-xs mt-1">
                CNPJ: 12.345.678/0001-90 | Fundado em 1993
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