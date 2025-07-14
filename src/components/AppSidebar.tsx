import { useState } from "react";
import { 
  Home, 
  Info, 
  Settings, 
  Newspaper, 
  Phone, 
  Users, 
  FileText, 
  Shield, 
  Briefcase,
  ChevronRight,
  X
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

interface MenuItem {
  title: string;
  icon: any;
  href?: string;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Início",
    icon: Home,
    href: "#inicio"
  },
  {
    title: "Sobre",
    icon: Info,
    subItems: [
      { title: "História", icon: FileText, href: "#historia" },
      { title: "Missão e Visão", icon: Shield, href: "#missao" },
      { title: "Diretoria", icon: Users, href: "#diretoria" },
    ]
  },
  {
    title: "Serviços",
    icon: Settings,
    subItems: [
      { title: "Assistência Jurídica", icon: Briefcase, href: "#juridica" },
      { title: "Benefícios", icon: Shield, href: "#beneficios" },
      { title: "Cursos e Treinamentos", icon: FileText, href: "#cursos" },
      { title: "Plano de Saúde", icon: Settings, href: "#saude" },
    ]
  },
  {
    title: "Notícias",
    icon: Newspaper,
    href: "#noticias"
  },
  {
    title: "Contato",
    icon: Phone,
    href: "#contato"
  }
];

export function AppSidebar() {
  const { open, setOpen } = useSidebar();
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleMenuClick = (item: MenuItem) => {
    if (item.subItems) {
      setActiveSubmenu(activeSubmenu === item.title ? null : item.title);
    } else if (item.href) {
      // Navigate to the section
      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  const handleSubMenuClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <>
      <Sidebar className="border-r border-gold/20">
        <SidebarContent>
          <SidebarGroup>
            <div className="flex items-center justify-between p-4 border-b border-gold/20">
              <SidebarGroupLabel className="text-lg font-semibold text-gold">
                Menu Principal
              </SidebarGroupLabel>
              <button
                onClick={() => setOpen(false)}
                className="p-1 hover:bg-gold/10 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            
            <SidebarGroupContent className="p-2">
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      onClick={() => handleMenuClick(item)}
                      className="w-full flex items-center justify-between p-3 hover:bg-gold/10 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-gold" />
                        <span className="font-medium">{item.title}</span>
                      </div>
                      {item.subItems && (
                        <ChevronRight 
                          className={`h-4 w-4 text-muted-foreground transition-transform ${
                            activeSubmenu === item.title ? 'rotate-90' : ''
                          }`} 
                        />
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Submenu lateral */}
      {activeSubmenu && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setActiveSubmenu(null)}>
          <div 
            className="absolute left-64 top-0 h-full w-64 bg-background border-r border-gold/20 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gold/20">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gold">{activeSubmenu}</h3>
                <button
                  onClick={() => setActiveSubmenu(null)}
                  className="p-1 hover:bg-gold/10 rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            </div>
            
            <div className="p-2">
              {menuItems
                .find(item => item.title === activeSubmenu)
                ?.subItems?.map((subItem) => (
                  <button
                    key={subItem.title}
                    onClick={() => subItem.href && handleSubMenuClick(subItem.href)}
                    className="w-full flex items-center gap-3 p-3 hover:bg-gold/10 rounded-lg transition-colors text-left"
                  >
                    <subItem.icon className="h-5 w-5 text-gold" />
                    <span className="font-medium">{subItem.title}</span>
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}