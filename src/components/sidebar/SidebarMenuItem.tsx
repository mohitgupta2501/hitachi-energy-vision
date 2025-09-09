import { NavLink, useLocation } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";
import { SidebarMenuButton, SidebarMenuItem as SidebarMenuItemBase } from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";

interface SidebarMenuItemProps {
  title: string;
  url: string;
  icon: LucideIcon;
  description: string;
  color: string;
}

export function SidebarMenuItem({ title, url, icon: Icon, description, color }: SidebarMenuItemProps) {
  const location = useLocation();
  const { open } = useSidebar();
  const isActive = location.pathname === url;

  return (
    <SidebarMenuItemBase>
      <SidebarMenuButton
        asChild
        isActive={isActive}
        className="group relative overflow-hidden"
      >
        <NavLink 
          to={url}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-sidebar-hover text-sidebar-primary shadow-md border-l-2 border-sidebar-primary"
                : "text-sidebar-foreground/80 hover:bg-sidebar-hover/50 hover:text-sidebar-foreground"
            }`
          }
        >
          <Icon className={`h-5 w-5 shrink-0 transition-colors ${
            isActive ? "text-sidebar-primary" : color
          }`} />
          
          {open && (
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-sm font-medium truncate">
                {title}
              </span>
              <span className="text-xs text-sidebar-foreground/50 truncate group-hover:text-sidebar-foreground/70 transition-colors">
                {description}
              </span>
            </div>
          )}
          
          {isActive && (
            <div className="absolute inset-0 bg-gradient-to-r from-sidebar-primary/10 to-transparent opacity-20" />
          )}
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItemBase>
  );
}