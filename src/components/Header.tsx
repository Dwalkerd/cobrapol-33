import { useState, useRef } from "react";
import { Menu, X, Shield, Phone, Mail, ChevronDown, ChevronRight, Search, Globe, Monitor, Sun, Moon, Lock } from "lucide-react";
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
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

  const quickActions = [
    { label: "Conheça os Policiais", href: "/policiais" },
    { label: "Veja as ações sindicais", href: "/acoes" },
    { label: "Acompanhe a atividade", href: "/atividade" },
    { label: "Transparência e prestação de contas", href: "/transparencia" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar - Black background */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="bg-primary-foreground/10 p-1 rounded">
              <img 
                src="/lovable-uploads/18bd6ef1-312b-49a8-8679-fb0436eb8e48.png" 
                alt="Logo Cobrapol" 
                className="h-8 w-8 rounded"
              />
            </div>
            <span className="text-lg font-bold">COBRAPOL</span>
          </div>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/fale-conosco" className="text-sm hover:text-primary-foreground/80 transition-colors">
              Fale com o Sindicato
            </Link>
            <Link to="/acesso-informacao" className="text-sm hover:text-primary-foreground/80 transition-colors">
              Acesso à informação
            </Link>
            <Link to="/carta-servicos" className="text-sm hover:text-primary-foreground/80 transition-colors">
              Carta de serviços
            </Link>
          </div>

          {/* Right side tools */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-primary-foreground/10 rounded" title="Acessibilidade">
              <Globe className="h-4 w-4" />
            </button>
            <button className="p-2 hover:bg-primary-foreground/10 rounded" title="Contraste">
              <Monitor className="h-4 w-4" />
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span>Português</span>
              <ChevronDown className="h-3 w-3" />
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Main navigation bar - Primary color */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
          {/* Menu button */}
          <button
            className="flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 px-4 py-2 rounded transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="font-medium">Menu</span>
          </button>

          {/* Quick actions - Desktop only */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                to={action.href}
                className="text-center hover:text-primary-foreground/80 transition-colors"
              >
                <span className="text-sm font-medium">{action.label}</span>
              </Link>
            ))}
          </div>

          {/* Search and area do associado */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-primary-foreground/10 rounded" title="Buscar">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/area-associado">
              <Button variant="secondary" size="sm" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Área restrita
              </Button>
            </Link>
          </div>
        </div>

        {/* 3-Level Navigation Menu */}
        {isMenuOpen && (
          <nav className="fixed inset-0 top-[120px] bg-primary border-t border-primary-foreground/20 z-40">
            <div className="flex h-full">
              {/* Level 1: Categories */}
              <div className="w-80 bg-primary border-r border-primary-foreground/20 overflow-y-auto">
                <div className="p-4">
                  {/* Quick actions for mobile */}
                  <div className="lg:hidden mb-6">
                    <h3 className="font-semibold text-sm opacity-80 mb-3">Acesso Rápido</h3>
                    <div className="grid gap-2">
                      {quickActions.map((action) => (
                        <Link
                          key={action.label}
                          to={action.href}
                          className="text-sm hover:text-primary-foreground/80 transition-colors py-2 px-3 hover:bg-primary-foreground/10 rounded"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {action.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="space-y-1">
                    <h3 className="font-semibold text-sm opacity-80 mb-3">Categorias</h3>
                    {menuItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => setSelectedCategory(selectedCategory === item.label ? null : item.label)}
                        className={`w-full text-left flex items-center justify-between py-3 px-3 rounded transition-colors ${
                          selectedCategory === item.label 
                            ? 'bg-primary-foreground/20 text-primary-foreground' 
                            : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10'
                        }`}
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronRight className={`h-4 w-4 transition-transform ${selectedCategory === item.label ? 'rotate-90' : ''}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Level 2: Subcategories/Items */}
              {selectedCategory && (
                <div className="w-80 bg-primary-foreground/5 border-r border-primary-foreground/20 overflow-y-auto">
                  <div className="p-4">
                    <h3 className="font-semibold text-primary-foreground mb-4 border-b border-primary-foreground/20 pb-2">
                      {selectedCategory}
                    </h3>
                    <div className="space-y-1">
                      {menuItems.find(item => item.label === selectedCategory)?.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2 px-3 hover:bg-primary-foreground/10 rounded"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setSelectedCategory(null);
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Close button overlay */}
              <div className="flex-1 bg-black/20" onClick={() => {
                setIsMenuOpen(false);
                setSelectedCategory(null);
              }}>
                <button 
                  className="absolute top-4 right-4 p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setSelectedCategory(null);
                  }}
                >
                  <X className="h-5 w-5 text-primary-foreground" />
                </button>
              </div>
            </div>
          </nav>
        )}
        </div>
      </div>
    </header>
  );
};

export default Header;
