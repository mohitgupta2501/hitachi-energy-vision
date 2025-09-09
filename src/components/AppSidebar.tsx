import { useSidebar } from "@/components/ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { SidebarHeader } from "@/components/sidebar/SidebarHeader";
import { SidebarFooter } from "@/components/sidebar/SidebarFooter";
import { SidebarMenuItem } from "@/components/sidebar/SidebarMenuItem";
import { menuItems } from "@/data/menuItems";

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar className="border-r-0 shadow-lg">
      <SidebarHeader />

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
                <SidebarMenuItem 
                  key={item.title}
                  title={item.title}
                  url={item.url}
                  icon={item.icon}
                  description={item.description}
                  color={item.color}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarFooter />
      </SidebarContent>
    </Sidebar>
  );
}