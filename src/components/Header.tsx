import { useState } from "react";
import { Menu, X, Shield, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: "Home", href: "/" },
    { 
      label: "Institucional", 
      href: "#",
      dropdown: [
        { label: "Fale Conosco", href: "/institucional/fale-conosco" },
        { label: "Diretoria Executiva", href: "/institucional/diretoria" },
        { label: "História", href: "/institucional/historia" },
        { label: "Missão, Visão e Valores", href: "/institucional/missao-visao-valores" },
      ]
    },
    { 
      label: "Publicações", 
      href: "#",
      dropdown: [
        { label: "Notícias", href: "/publicacoes/noticias" },
        { label: "Artigos/Blog", href: "/publicacoes/blog" },
        { label: "Multimídia", href: "/publicacoes/multimidia" },
      ]
    },
    { label: "Sindicatos", href: "/sindicatos" },
  ];

  return (
    <header className="bg-background border-b border-gold/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gold/10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>(11) 1234-5678</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>contato@cobrapol.org.br</span>
            </div>
          </div>
          <div className="text-muted-foreground">
            Atendimento: Segunda à Sexta, 9h às 18h
          </div>
        </div>

        {/* Main header */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="bg-gold p-1 rounded-full">
              <img 
                src="/lovable-uploads/18bd6ef1-312b-49a8-8679-fb0436eb8e48.png" 
                alt="Logo Cobrapol" 
                className="h-10 w-10 rounded-full"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Cobrapol</h1>
              <p className="text-sm text-muted-foreground">Sindicato dos Policiais</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center gap-1 text-foreground hover:text-gold transition-colors font-medium cursor-pointer"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                    
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-gold/20 rounded-md shadow-lg z-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-4 py-2 text-foreground hover:bg-gold/10 hover:text-gold transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-foreground hover:text-gold transition-colors font-medium relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
            <Link to="/area-associado">
              <Button variant="default" className="bg-gold hover:bg-gold-dark">
                Área do Associado
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gold/10">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-gold transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="default" className="bg-gold hover:bg-gold-dark mt-2">
                Área do Associado
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;