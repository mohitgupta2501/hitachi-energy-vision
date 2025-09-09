import { useSidebar } from "@/components/ui/sidebar";

export function SidebarFooter() {
  const { open } = useSidebar();

  if (!open) return null;

  return (
    <div className="mt-auto pt-4">
      <div className="px-3 py-2 text-xs text-sidebar-foreground/40">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>System Online</span>
        </div>
        <div>247 devices connected</div>
      </div>
    </div>
  );
}