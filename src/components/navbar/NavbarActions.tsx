import { Bell, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NavbarActions() {
  return (
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
  );
}