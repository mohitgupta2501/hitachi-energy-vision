import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Navbar() {
  return (
    <header className="h-16 bg-navbar-background border-b border-navbar-border flex items-center px-4 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-brand-primary tracking-tight">
            HITACHI
          </h1>
          <span className="ml-2 text-sm text-muted-foreground font-medium">
            Energy Management System
          </span>
        </div>
      </div>
      
      <div className="ml-auto flex items-center gap-4">
        <div className="text-sm text-muted-foreground">
          Welcome, Energy Operator
        </div>
      </div>
    </header>
  );
}