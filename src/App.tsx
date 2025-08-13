import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FaleConosco from "./pages/institucional/FaleConosco";
import Diretoria from "./pages/institucional/Diretoria";
import SobreNos from "./pages/institucional/SobreNos";
import MissaoVisaoValores from "./pages/institucional/MissaoVisaoValores";
import Noticias from "./pages/publicacoes/Noticias";
import NoticiaDetalhes from "./pages/publicacoes/NoticiaDetalhes";
import Blog from "./pages/publicacoes/Blog";
import ArtigoDetalhes from "./pages/publicacoes/ArtigoDetalhes";
import Multimidia from "./pages/publicacoes/Multimidia";
import Sindicatos from "./pages/Sindicatos";
import AreaAssociado from "./pages/AreaAssociado";
import AcessoInformacao from "./pages/AcessoInformacao";
import CartaServicos from "./pages/CartaServicos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/acesso-informacao" element={<AcessoInformacao />} />
          <Route path="/carta-servicos" element={<CartaServicos />} />
          <Route path="/institucional/fale-conosco" element={<FaleConosco />} />
          <Route path="/institucional/diretoria" element={<Diretoria />} />
          <Route path="/institucional/sobre-nos" element={<SobreNos />} />
          <Route path="/institucional/missao-visao-valores" element={<MissaoVisaoValores />} />
          <Route path="/publicacoes/noticias" element={<Noticias />} />
          <Route path="/publicacoes/noticia/:id" element={<NoticiaDetalhes />} />
          <Route path="/publicacoes/blog" element={<Blog />} />
          <Route path="/publicacoes/artigo/:id" element={<ArtigoDetalhes />} />
          <Route path="/publicacoes/multimidia" element={<Multimidia />} />
          <Route path="/sindicatos" element={<Sindicatos />} />
          <Route path="/area-associado" element={<AreaAssociado />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
