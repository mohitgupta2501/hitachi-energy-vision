import { 
  Activity, 
  BarChart3, 
  Zap, 
  Calculator, 
  TrendingUp, 
  Clock, 
  Calendar,
  Gauge
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";
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

export function AppSidebar() {
  const location = useLocation();
  const { open } = useSidebar();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className="border-r-0 shadow-lg">
      <div className="p-4 border-b border-sidebar-border/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
            <Gauge className="h-4 w-4 text-white" />
          </div>
          {open && (
            <div>
              <h3 className="font-semibold text-sidebar-foreground text-sm">Control Center</h3>
              <p className="text-xs text-sidebar-foreground/60">Energy Management</p>
            </div>
          )}
        </div>
      </div>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          {open && (
            <SidebarGroupLabel className="text-sidebar-foreground/50 font-medium text-xs uppercase tracking-wider mb-3 px-3">
              System Modules
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className="group relative overflow-hidden"
                  >
                    <NavLink 
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-sidebar-hover text-sidebar-primary shadow-md border-l-2 border-sidebar-primary"
                            : "text-sidebar-foreground/80 hover:bg-sidebar-hover/50 hover:text-sidebar-foreground"
                        }`
                      }
                    >
                      <item.icon className={`h-5 w-5 shrink-0 transition-colors ${
                        isActive(item.url) ? "text-sidebar-primary" : item.color
                      }`} />
                      
                      {open && (
                        <div className="flex flex-col min-w-0 flex-1">
                          <span className="text-sm font-medium truncate">
                            {item.title}
                          </span>
                          <span className="text-xs text-sidebar-foreground/50 truncate group-hover:text-sidebar-foreground/70 transition-colors">
                            {item.description}
                          </span>
                        </div>
                      )}
                      
                      {isActive(item.url) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-sidebar-primary/10 to-transparent opacity-20" />
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {open && (
          <div className="mt-auto pt-4">
            <div className="px-3 py-2 text-xs text-sidebar-foreground/40">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>System Online</span>
              </div>
              <div>247 devices connected</div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}