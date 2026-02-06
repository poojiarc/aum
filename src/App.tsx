import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Home */}
            <Route path="/" element={<Index />} />

            {/* All Recipes */}
            <Route path="/recipes" element={<Recipes />} />

            {/* Single Recipe */}
            <Route path="/recipes/:id" element={<RecipeDetails />} />

            {/* Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
