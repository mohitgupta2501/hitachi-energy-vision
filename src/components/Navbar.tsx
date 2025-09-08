import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="h-16 bg-navbar-background/95 backdrop-blur-sm border-b border-navbar-border flex items-center px-6 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-6">
        <SidebarTrigger className="hover:bg-accent/50 transition-colors" />
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-brand-primary tracking-tight leading-none">
              HITACHI
            </h1>
            <span className="text-xs text-muted-foreground font-medium">
              Energy Management System
            </span>
          </div>
        </div>
      </div>
      
      <div className="ml-auto flex items-center gap-3">
        <div className="hidden md:flex flex-col text-right">
          <span className="text-sm font-medium text-foreground">Energy Operator</span>
          <span className="text-xs text-muted-foreground">Industrial Facility A</span>
        </div>
        
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-accent/50">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-accent/50">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-accent/50">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}