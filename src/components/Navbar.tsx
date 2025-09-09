import { SidebarTrigger } from "@/components/ui/sidebar";
import { BrandLogo } from "@/components/navbar/BrandLogo";
import { UserProfile } from "@/components/navbar/UserProfile";
import { NavbarActions } from "@/components/navbar/NavbarActions";

export function Navbar() {
  return (
    <header className="h-16 bg-navbar-background/95 backdrop-blur-sm border-b border-navbar-border flex items-center px-6 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-6">
        <SidebarTrigger className="hover:bg-accent/50 transition-colors" />
        <BrandLogo />
      </div>
      
      <div className="ml-auto flex items-center gap-3">
        <UserProfile />
        <NavbarActions />
      </div>
    </header>
  );
}