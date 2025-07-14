import { useState } from "react";
import { Menu, X, Shield, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Header = () => {

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
          <div className="flex items-center gap-4">
            <SidebarTrigger className="flex items-center gap-2 px-4 py-2 bg-gold hover:bg-gold/90 text-primary-foreground rounded-lg font-medium transition-colors">
              <Menu className="h-5 w-5" />
              <span>Menu</span>
            </SidebarTrigger>
            
            <Button variant="default" className="bg-gold hover:bg-gold/90">
              Área do Associado
            </Button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;