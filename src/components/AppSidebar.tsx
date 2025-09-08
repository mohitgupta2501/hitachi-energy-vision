import { 
  Activity, 
  BarChart3, 
  Zap, 
  Calculator, 
  TrendingUp, 
  Clock, 
  Calendar 
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { 
    title: "Device Provisioning", 
    url: "/device-provisioning", 
    icon: Activity,
    description: "Energy meter registration and communication setup"
  },
  { 
    title: "Dashboard", 
    url: "/dashboard", 
    icon: BarChart3,
    description: "Energy KPIs, metrics, and real-time graphs"
  },
  { 
    title: "SLD Screen", 
    url: "/sld", 
    icon: Zap,
    description: "Single Line Diagram visualization"
  },
  { 
    title: "Bill Simulation", 
    url: "/bill-simulation", 
    icon: Calculator,
    description: "Electricity bill estimation and analysis"
  },
  { 
    title: "KWh Prediction", 
    url: "/kwh-prediction", 
    icon: TrendingUp,
    description: "Energy consumption forecasting"
  },
  { 
    title: "Rolling Time Prediction", 
    url: "/rolling-prediction", 
    icon: Clock,
    description: "Time-based energy consumption trends"
  },
  { 
    title: "Scheduling Prediction", 
    url: "/scheduling", 
    icon: Calendar,
    description: "Tariff-optimized scheduling forecasts"
  },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 font-semibold text-xs uppercase tracking-wider mb-2">
            Energy Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className="group relative"
                  >
                    <NavLink 
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                          isActive
                            ? "bg-sidebar-accent text-sidebar-primary font-medium"
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{item.title}</span>
                        <span className="text-xs text-sidebar-foreground/60 group-hover:text-sidebar-foreground/80">
                          {item.description}
                        </span>
                      </div>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}