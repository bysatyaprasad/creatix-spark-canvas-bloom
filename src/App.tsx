import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VizianagramInteriors from "./pages/VizianagramInteriors";
import VisakhapatnamInteriors from "./pages/VisakhapatnamInteriors";
import HyderabadInteriors from "./pages/HyderabadInteriors";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/interior-design-vizianagaram" element={<VizianagramInteriors />} />
          <Route path="/interior-design-visakhapatnam" element={<VisakhapatnamInteriors />} />
          <Route path="/interior-design-hyderabad" element={<HyderabadInteriors />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
