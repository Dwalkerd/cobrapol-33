import { useState, useRef } from "react";
import { Menu, X, Shield, Phone, Mail, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems = [
    { 
      label: "Institucional", 
      items: [
        { label: "Sobre o Sindicato", href: "/institucional/sobre-nos" },
        { label: "Fale com o Sindicato", href: "/institucional/fale-conosco" },
        { label: "Páginas Institucionais", href: "/institucional" },
        { label: "Serviços", href: "/servicos" },
        { label: "Especiais", href: "/especiais" },
      ]
    },
    { 
      label: "Sindicatos", 
      items: [
        { label: "Lista de Sindicatos", href: "/sindicatos" },
        { label: "Filiação", href: "/sindicatos/filiacao" },
        { label: "Representação", href: "/sindicatos/representacao" },
      ]
    },
    { 
      label: "Atividade Legislativa", 
      items: [
        { label: "Projetos de Lei", href: "/atividade/projetos" },
        { label: "Comissões", href: "/atividade/comissoes" },
        { label: "Plenário", href: "/atividade/plenario" },
      ]
    },
    { 
      label: "Comunicação", 
      items: [
        { label: "Notícias", href: "/publicacoes/noticias" },
        { label: "Blog/Artigos", href: "/publicacoes/blog" },
        { label: "Multimídia", href: "/publicacoes/multimidia" },
        { label: "Redes Sociais", href: "/comunicacao/redes-sociais" },
      ]
    },
    { 
      label: "Publicações", 
      items: [
        { label: "Notícias", href: "/publicacoes/noticias" },
        { label: "Artigos/Blog", href: "/publicacoes/blog" },
        { label: "Multimídia", href: "/publicacoes/multimidia" },
        { label: "Boletins", href: "/publicacoes/boletins" },
      ]
    },
    { 
      label: "Orçamento", 
      items: [
        { label: "Orçamento Anual", href: "/orcamento/anual" },
        { label: "Prestação de Contas", href: "/orcamento/prestacao" },
        { label: "Relatórios", href: "/orcamento/relatorios" },
      ]
    },
    { 
      label: "Transparência e Prestação de Contas", 
      items: [
        { label: "Portal da Transparência", href: "/transparencia" },
        { label: "Relatórios Financeiros", href: "/transparencia/financeiros" },
        { label: "Contratos", href: "/transparencia/contratos" },
      ]
    },
    { 
      label: "e-Cidadania", 
      items: [
        { label: "Consultas Públicas", href: "/e-cidadania/consultas" },
        { label: "Ouvidoria", href: "/e-cidadania/ouvidoria" },
        { label: "Petições", href: "/e-cidadania/peticoes" },
      ]
    },
  ];

  const handleMouseEnter = (itemLabel: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(itemLabel);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // 200ms delay para dar tempo do usuário navegar
  };

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
          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <Link to="/" className="text-foreground hover:text-gold transition-colors font-medium px-4 py-2">
                    Home
                  </Link>
                </NavigationMenuItem>
                
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger className="text-foreground hover:text-gold data-[state=open]:text-gold">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-80 p-4">
                        <div className="grid gap-2">
                          {item.items.map((subItem) => (
                            <NavigationMenuLink key={subItem.label} asChild>
                              <Link
                                to={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gold/10 hover:text-gold focus:bg-gold/10 focus:text-gold"
                              >
                                <div className="text-sm font-medium leading-none">{subItem.label}</div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/area-associado">
              <Button variant="default" className="bg-gold hover:bg-gold-dark ml-4">
                Área do Associado
              </Button>
            </Link>
          </div>

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
              <Link
                to="/"
                className="text-foreground hover:text-gold transition-colors font-medium py-2 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {menuItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <span className="text-foreground font-medium py-2 block">
                    {item.label}
                  </span>
                  <div className="ml-4 space-y-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="text-muted-foreground hover:text-gold transition-colors block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <Link to="/area-associado" onClick={() => setIsMenuOpen(false)}>
                <Button variant="default" className="bg-gold hover:bg-gold-dark mt-2 w-full">
                  Área do Associado
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;