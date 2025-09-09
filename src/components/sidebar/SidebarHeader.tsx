import { Gauge } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

export function SidebarHeader() {
  const { open } = useSidebar();

  return (
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
  );
}