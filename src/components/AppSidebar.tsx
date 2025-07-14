import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Building,
  FileText,
  MapPin,
  Users,
  MessageCircle,
  UsersRound,
  History,
  Target,
  Newspaper,
  PenTool,
  Camera,
  ChevronRight,
  X
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Institucional",
    icon: Building,
    submenu: [
      {
        title: "Fale conosco",
        url: "/institucional/fale-conosco",
        icon: MessageCircle,
      },
      {
        title: "Diretoria Executiva",
        url: "/institucional/diretoria",
        icon: UsersRound,
      },
      {
        title: "História",
        url: "/institucional/historia",
        icon: History,
      },
      {
        title: "Missão, visão e valores",
        url: "/institucional/missao-visao-valores",
        icon: Target,
      },
    ],
  },
  {
    title: "Publicações",
    icon: FileText,
    submenu: [
      {
        title: "Notícias",
        url: "/publicacoes/noticias",
        icon: Newspaper,
      },
      {
        title: "Artigos/Blog",
        url: "/publicacoes/blog",
        icon: PenTool,
      },
      {
        title: "Multimídia",
        url: "/publicacoes/multimidia",
        icon: Camera,
      },
    ],
  },
  {
    title: "Sindicatos",
    url: "/sindicatos",
    icon: MapPin,
  },
  {
    title: "Área do Associado",
    url: "/area-associado",
    icon: Users,
  },
];

export function AppSidebar() {
  const { open, setOpen } = useSidebar();
  const location = useLocation();
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const currentPath = location.pathname;

  const isActive = (url: string) => currentPath === url;

  const hasActiveSubmenu = (submenu: any[]) => {
    return submenu.some((item) => isActive(item.url));
  };

  const handleMenuClick = (item: any) => {
    if (item.submenu) {
      setActiveSubmenu(activeSubmenu === item.title ? null : item.title);
    } else {
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuClick = () => {
    setActiveSubmenu(null);
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden" onClick={() => setOpen(false)} />
      )}
      
      <Sidebar className={`${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out fixed lg:static inset-y-0 left-0 z-50 w-80 bg-card border-r border-gold/20`}>
        <SidebarHeader className="p-6 border-b border-gold/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/18bd6ef1-312b-49a8-8679-fb0436eb8e48.png" 
                alt="Cobrapol" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h2 className="text-lg font-bold text-foreground">Cobrapol</h2>
                <p className="text-sm text-muted-foreground">Menu de Navegação</p>
              </div>
            </div>
            <button 
              onClick={() => setOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gold/10 transition-colors"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </SidebarHeader>

        <SidebarContent className="p-4">
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                {item.submenu ? (
                  <div>
                    <SidebarMenuButton
                      onClick={() => handleMenuClick(item)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg hover:bg-gold/10 transition-colors ${
                        hasActiveSubmenu(item.submenu) ? "bg-gold/10 text-gold" : "text-foreground"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-5 w-5" />
                        <span className="font-medium">{item.title}</span>
                      </div>
                      <ChevronRight 
                        className={`h-4 w-4 transition-transform ${
                          activeSubmenu === item.title ? "rotate-90" : ""
                        }`} 
                      />
                    </SidebarMenuButton>
                    
                    {activeSubmenu === item.title && (
                      <div className="mt-2 ml-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <SidebarMenuButton key={subItem.title} asChild>
                            <NavLink
                              to={subItem.url}
                              onClick={handleSubmenuClick}
                              className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-gold/10 transition-colors ${
                                isActive(subItem.url) ? "bg-gold/10 text-gold font-medium" : "text-muted-foreground"
                              }`}
                            >
                              <subItem.icon className="h-4 w-4" />
                              <span>{subItem.title}</span>
                            </NavLink>
                          </SidebarMenuButton>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      onClick={() => setActiveSubmenu(null)}
                      className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gold/10 transition-colors ${
                        isActive(item.url) ? "bg-gold/10 text-gold font-medium" : "text-foreground"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </>
  );
}