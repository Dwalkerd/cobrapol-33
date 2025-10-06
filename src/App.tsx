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

import AreaAssociado from "./pages/AreaAssociado";
import AcessoInformacao from "./pages/AcessoInformacao";
import CartaServicos from "./pages/CartaServicos";
import RevistasCobrapol from "./pages/comunicacao/RevistasCobrapol";
import Filiacao from "./pages/sindicatos/Filiacao";
import Representacao from "./pages/sindicatos/Representacao";
import Transparencia from "./pages/transparencia/Transparencia";
import Ouvidoria from "./pages/e-cidadania/Ouvidoria";
import PoliticaPrivacidade from "./pages/legais/PoliticaPrivacidade";
import TermosUso from "./pages/legais/TermosUso";
import Estatuto from "./pages/legais/Estatuto";
import RegimentoInterno from "./pages/legais/RegimentoInterno";
import Composicao from "./pages/institucional/Composicao";
import EstruturaOrganizacional from "./pages/institucional/EstruturaOrganizacional";
import Funcionamento from "./pages/institucional/Funcionamento";
import ResponsabilidadeSocial from "./pages/institucional/ResponsabilidadeSocial";
import Federacoes from "./pages/entidades-filiadas/Federacoes";
import SindicatosPage from "./pages/entidades-filiadas/SindicatosPage";
import OrcamentoAnual from "./pages/orcamento/OrcamentoAnual";
import PrestacaoContas from "./pages/orcamento/PrestacaoContas";
import RelatoriosFinanceiros from "./pages/transparencia/RelatoriosFinanceiros";

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
          <Route path="/comunicacao/revistas" element={<RevistasCobrapol />} />
          <Route path="/institucional/fale-conosco" element={<FaleConosco />} />
          <Route path="/institucional/diretoria" element={<Diretoria />} />
          <Route path="/institucional/sobre-nos" element={<SobreNos />} />
          <Route path="/institucional/composicao" element={<Composicao />} />
          <Route path="/institucional/estrutura-organizacional" element={<EstruturaOrganizacional />} />
          <Route path="/institucional/funcionamento" element={<Funcionamento />} />
          <Route path="/institucional/responsabilidade-social" element={<ResponsabilidadeSocial />} />
          <Route path="/institucional/missao-visao-valores" element={<MissaoVisaoValores />} />
          <Route path="/publicacoes/noticias" element={<Noticias />} />
          <Route path="/publicacoes/noticia/:slug" element={<NoticiaDetalhes />} />
          <Route path="/publicacoes/blog" element={<Blog />} />
          <Route path="/publicacoes/artigo/:id" element={<ArtigoDetalhes />} />
          <Route path="/publicacoes/multimidia" element={<Multimidia />} />
          <Route path="/sindicatos" element={<SindicatosPage />} />
          <Route path="/entidades-filiadas/federacoes" element={<Federacoes />} />
          <Route path="/entidades-filiadas/sindicatos" element={<SindicatosPage />} />
          <Route path="/sindicatos/filiacao" element={<Filiacao />} />
          <Route path="/sindicatos/representacao" element={<Representacao />} />
          <Route path="/orcamento/anual" element={<OrcamentoAnual />} />
          <Route path="/orcamento/prestacao" element={<PrestacaoContas />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/transparencia/financeiros" element={<RelatoriosFinanceiros />} />
          <Route path="/e-cidadania/ouvidoria" element={<Ouvidoria />} />
          <Route path="/legais/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/legais/termos-uso" element={<TermosUso />} />
          <Route path="/legais/estatuto" element={<Estatuto />} />
          <Route path="/legais/regimento-interno" element={<RegimentoInterno />} />
          <Route path="/area-associado" element={<AreaAssociado />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;