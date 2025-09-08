import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import SimpleLayout from "./pages/SimpleLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout><SimpleLayout /></DashboardLayout>} />
          <Route path="/dashboard" element={<DashboardLayout><SimpleLayout /></DashboardLayout>} />
          <Route path="/device-provisioning" element={<DashboardLayout><SimpleLayout /></DashboardLayout>} />
          <Route path="/sld" element={<DashboardLayout><SimpleLayout /></DashboardLayout>} />
          <Route path="/bill-simulation" element={<DashboardLayout><SimpleLayout /></DashboardLayout>} />
          <Route path="/kwh-prediction" element={<DashboardLayout><SimpleLayout /></DashboardLayout>} />
          <Route path="/rolling-prediction" element={<DashboardLayout><SimpleLayout /></DashboardLayout>} />
          <Route path="/scheduling" element={<DashboardLayout><SimpleLayout /></DashboardLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
