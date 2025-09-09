import { 
  Activity, 
  BarChart3, 
  Zap, 
  Calculator, 
  TrendingUp, 
  Clock, 
  Calendar
} from "lucide-react";

export const menuItems = [
  { 
    title: "Device Provisioning", 
    url: "/device-provisioning", 
    icon: Activity,
    description: "Meter registration & setup",
    color: "text-blue-400"
  },
  { 
    title: "Dashboard", 
    url: "/dashboard", 
    icon: BarChart3,
    description: "KPIs & real-time metrics",
    color: "text-emerald-400"
  },
  { 
    title: "SLD Screen", 
    url: "/sld", 
    icon: Zap,
    description: "Single Line Diagram",
    color: "text-yellow-400"
  },
  { 
    title: "Bill Simulation", 
    url: "/bill-simulation", 
    icon: Calculator,
    description: "Cost estimation & analysis",
    color: "text-purple-400"
  },
  { 
    title: "KWh Prediction", 
    url: "/kwh-prediction", 
    icon: TrendingUp,
    description: "Consumption forecasting",
    color: "text-green-400"
  },
  { 
    title: "Rolling Time Prediction", 
    url: "/rolling-prediction", 
    icon: Clock,
    description: "Time-based trends",
    color: "text-orange-400"
  },
  { 
    title: "Scheduling Prediction", 
    url: "/scheduling", 
    icon: Calendar,
    description: "Tariff optimization",
    color: "text-cyan-400"
  },
];