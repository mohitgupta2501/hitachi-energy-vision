import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import DeviceProvisioning from "./pages/DeviceProvisioning";
import SLDScreen from "./pages/SLDScreen";
import BillSimulation from "./pages/BillSimulation";
import KWhPrediction from "./pages/KWhPrediction";
import RollingPrediction from "./pages/RollingPrediction";
import Scheduling from "./pages/Scheduling";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/device-provisioning" element={<DashboardLayout><DeviceProvisioning /></DashboardLayout>} />
          <Route path="/sld" element={<DashboardLayout><SLDScreen /></DashboardLayout>} />
          <Route path="/bill-simulation" element={<DashboardLayout><BillSimulation /></DashboardLayout>} />
          <Route path="/kwh-prediction" element={<DashboardLayout><KWhPrediction /></DashboardLayout>} />
          <Route path="/rolling-prediction" element={<DashboardLayout><RollingPrediction /></DashboardLayout>} />
          <Route path="/scheduling" element={<DashboardLayout><Scheduling /></DashboardLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
