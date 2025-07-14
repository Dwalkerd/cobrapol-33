import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FaleConosco from "./pages/institucional/FaleConosco";
import Diretoria from "./pages/institucional/Diretoria";
import Historia from "./pages/institucional/Historia";
import MissaoVisaoValores from "./pages/institucional/MissaoVisaoValores";
import Noticias from "./pages/publicacoes/Noticias";
import Blog from "./pages/publicacoes/Blog";
import Multimidia from "./pages/publicacoes/Multimidia";
import Sindicatos from "./pages/Sindicatos";
import AreaAssociado from "./pages/AreaAssociado";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/institucional/fale-conosco" element={<FaleConosco />} />
                <Route path="/institucional/diretoria" element={<Diretoria />} />
                <Route path="/institucional/historia" element={<Historia />} />
                <Route path="/institucional/missao-visao-valores" element={<MissaoVisaoValores />} />
                <Route path="/publicacoes/noticias" element={<Noticias />} />
                <Route path="/publicacoes/blog" element={<Blog />} />
                <Route path="/publicacoes/multimidia" element={<Multimidia />} />
                <Route path="/sindicatos" element={<Sindicatos />} />
                <Route path="/area-associado" element={<AreaAssociado />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
