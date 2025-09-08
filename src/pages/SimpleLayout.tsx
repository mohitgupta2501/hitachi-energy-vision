import { Card } from "@/components/ui/card";

export default function SimpleLayout() {
  return (
    <div className="p-6 max-w-4xl">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Hitachi Energy Management System
          </h1>
          <p className="text-muted-foreground">
            Professional industrial energy monitoring and control interface
          </p>
        </div>

        <Card className="p-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                System Layout Preview
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                This demonstrates the sidebar navigation and top navbar design for the energy management system. 
                Use the sidebar to explore different modules and features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-sm mb-2">Collapsible Sidebar</h3>
                <p className="text-xs text-muted-foreground">
                  Clean navigation with 7 energy management modules
                </p>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-sm mb-2">Premium Navbar</h3>
                <p className="text-xs text-muted-foreground">
                  Hitachi branding with user controls and notifications
                </p>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-sm mb-2">Industrial Theme</h3>
                <p className="text-xs text-muted-foreground">
                  Professional blue/green color scheme with smooth animations
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}