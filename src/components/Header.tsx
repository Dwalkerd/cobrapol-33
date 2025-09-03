import { useState, useRef, useEffect } from "react";
import { Menu, X, Shield, Phone, Mail, ChevronDown, ChevronRight, Search, Globe, Monitor, Sun, Moon, Lock, Instagram, Youtube, Facebook } from "lucide-react";
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Simular busca - em uma aplicação real, isso faria uma busca de fato
      alert(`Buscando por: "${searchQuery}"`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  const menuItems = [
    { 
      label: "Institucional", 
      items: [
        { label: "Sobre o Sindicato", href: "/institucional/sobre-nos" },
        { label: "Fale com o Sindicato", href: "/institucional/fale-conosco" },
        { label: "Diretoria", href: "/institucional/diretoria" },
        { label: "Missão, Visão e Valores", href: "/institucional/missao-visao-valores" },
        { label: "Carta de Serviços", href: "/carta-servicos" },
        { label: "Acesso à Informação", href: "/acesso-informacao" },
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
      label: "Comunicação", 
      items: [
        { label: "Notícias", href: "/publicacoes/noticias" },
        { label: "Blog/Artigos", href: "/publicacoes/blog" },
        { label: "Multimídia", href: "/publicacoes/multimidia" },
        { label: "Revistas Cobrapol", href: "/comunicacao/revistas" },
      ]
    },
    { 
      label: "Orçamento", 
      items: [
        { label: "Orçamento Anual", href: "/orcamento/anual" },
        { label: "Prestação de Contas", href: "/orcamento/prestacao" },
      ]
    },
    { 
      label: "Transparência", 
      items: [
        { label: "Portal da Transparência", href: "/transparencia" },
        { label: "Relatórios Financeiros", href: "/transparencia/financeiros" },
        { label: "Acesso à Informação", href: "/acesso-informacao" },
      ]
    },
    { 
      label: "e-Cidadania", 
      items: [
        { label: "Ouvidoria", href: "/e-cidadania/ouvidoria" },
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
    { label: "Sobre a Cobrapol", href: "/institucional/sobre-nos" },
    { label: "Notícias", href: "/publicacoes/noticias" },
    { label: "Revista Cobrapol", href: "/comunicacao/revistas" },
    { label: "Eventos", href: "#" },
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "http://instagram.com/CobrapolBR", 
      label: "Instagram" 
    },
    { 
      icon: Youtube, 
      href: "http://youtube.com/TVCobrapol", 
      label: "YouTube" 
    },
    { 
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.86 5.5a.61.61 0 0 0-.35-.35A69.09 69.09 0 0 0 12 4.5a69.09 69.09 0 0 0-9.51.65.61.61 0 0 0-.35.35A69.32 69.32 0 0 0 1.5 12a69.32 69.32 0 0 0 .64 6.5.61.61 0 0 0 .35.35A69.09 69.09 0 0 0 12 19.5a69.09 69.09 0 0 0 9.51-.65.61.61 0 0 0 .35-.35A69.32 69.32 0 0 0 22.5 12a69.32 69.32 0 0 0-.64-6.5ZM8.79 15.54a7.44 7.44 0 0 1-2.33-.19.79.79 0 0 1-.5-.5A7.44 7.44 0 0 1 5.77 12a7.44 7.44 0 0 1 .19-2.85.79.79 0 0 1 .5-.5A7.44 7.44 0 0 1 8.79 8.46a.63.63 0 0 1 .63.63v6.82a.63.63 0 0 1-.63.63Zm6.67 0a7.44 7.44 0 0 1-2.33-.19.79.79 0 0 1-.5-.5A7.44 7.44 0 0 1 12.44 12a7.44 7.44 0 0 1 .19-2.85.79.79 0 0 1 .5-.5a7.44 7.44 0 0 1 2.33-.19.63.63 0 0 1 .63.63v6.82a.63.63 0 0 1-.63.63Z"/>
        </svg>
      ), 
      href: "https://threads.com/CobrapolBR", 
      label: "Threads" 
    },
    { 
      icon: Facebook, 
      href: "http://facebook.com/CobrapolBR", 
      label: "Facebook" 
    },
    { 
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      href: "http://x.com/CobrapolBR", 
      label: "X" 
    },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar - Black background */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 border-b border-white/20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="bg-primary-foreground/10 p-1 rounded">
              <img 
                src="/lovable-uploads/18bd6ef1-312b-49a8-8679-fb0436eb8e48.png" 
                alt="Logo Cobrapol" 
                className="h-8 w-8 rounded"
              />
            </div>
            <span className="text-lg font-bold">COBRAPOL</span>
          </Link>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/sindicatos" className="text-sm hover:text-primary-foreground/80 transition-colors">
              Entidades Filiadas
            </Link>
            <Link to="#" className="text-sm hover:text-primary-foreground/80 transition-colors">
              Ranking Nacional Remuneratório
            </Link>
            <Link to="/e-cidadania/ouvidoria" className="text-sm hover:text-primary-foreground/80 transition-colors">
              Ouvidoria
            </Link>
          </div>

          {/* Right side tools */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-primary-foreground/10 hover:bg-primary text-primary-foreground hover:text-black p-2 rounded transition-all duration-200"
                >
                  <social.icon />
                </a>
              ))}
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
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center bg-primary-foreground/10 rounded-lg px-3 py-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar..."
                    className="bg-transparent text-primary-foreground placeholder:text-primary-foreground/60 text-sm w-48 focus:outline-none"
                    autoFocus
                    onClick={(e) => e.stopPropagation()}
                  />
                  <button type="submit" className="ml-2 p-1 hover:bg-primary-foreground/10 rounded">
                    <Search className="h-4 w-4" />
                  </button>
                </form>
              ) : (
                <button 
                  className="p-2 hover:bg-primary-foreground/10 rounded transition-colors" 
                  title="Buscar"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSearchOpen(true);
                  }}
                >
                  <Search className="h-5 w-5" />
                </button>
              )}
            </div>
            <Link to="/area-associado">
              <button className="flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 px-4 py-2 rounded transition-colors text-sm">
                <Lock className="h-4 w-4" />
                Área Restrita
              </button>
            </Link>
          </div>
        </div>

        {/* 3-Level Navigation Menu */}
        {isMenuOpen && (
          <nav className="fixed inset-0 top-[120px] bg-black/20 backdrop-blur-sm z-40 animate-fade-in">
            <div className="flex h-full">
              {/* Level 1: Categories */}
              <div className="w-80 bg-white border-r border-gray-200 shadow-xl overflow-y-auto animate-slide-in-right">
                <div className="p-4">
                  {/* Quick actions for mobile */}
                  <div className="lg:hidden mb-6">
                    <h3 className="font-semibold text-sm text-gray-600 mb-3">Acesso Rápido</h3>
                    <div className="grid gap-2">
                      {quickActions.map((action) => (
                        <Link
                          key={action.label}
                          to={action.href}
                          className="text-sm text-gray-700 hover:text-primary transition-colors py-2 px-3 hover:bg-gray-50 rounded"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {action.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="space-y-1">
                    <h3 className="font-semibold text-sm text-gray-600 mb-3">Categorias</h3>
                    {menuItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => setSelectedCategory(selectedCategory === item.label ? null : item.label)}
                        className={`w-full text-left flex items-center justify-between py-3 px-3 rounded transition-colors ${
                          selectedCategory === item.label 
                            ? 'bg-primary text-white' 
                            : 'text-gray-700 hover:text-primary hover:bg-gray-50'
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
                <div className="w-80 bg-white border-r border-gray-200 shadow-xl overflow-y-auto animate-slide-in-right">
                  <div className="p-4">
                    <h3 className="font-semibold text-primary mb-4 border-b border-gray-200 pb-2">
                      {selectedCategory}
                    </h3>
                    <div className="space-y-1">
                      {menuItems.find(item => item.label === selectedCategory)?.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block text-sm text-gray-700 hover:text-primary transition-colors py-2 px-3 hover:bg-gray-50 rounded"
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
              <div className="flex-1" onClick={() => {
                setIsMenuOpen(false);
                setSelectedCategory(null);
              }}>
                <button 
                  className="absolute top-4 right-4 p-2 bg-white hover:bg-gray-100 rounded-full shadow-lg border border-gray-200 transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setSelectedCategory(null);
                  }}
                >
                  <X className="h-5 w-5 text-gray-600" />
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
