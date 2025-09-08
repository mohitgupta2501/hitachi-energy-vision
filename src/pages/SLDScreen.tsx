import { Card } from "@/components/ui/card";
import { Zap, Circle } from "lucide-react";

export default function SLDScreen() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Single Line Diagram</h1>
        <p className="text-muted-foreground mt-2">
          Electrical system visualization and real-time status monitoring
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="p-6 h-[600px]">
            <h3 className="text-lg font-semibold mb-4">System Overview</h3>
            <div className="h-full bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">SLD visualization will be implemented here</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Interactive single line diagram with real-time status indicators
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="p-4">
            <h4 className="font-semibold mb-3">System Status</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Circle className="h-3 w-3 fill-secondary text-secondary" />
                <span className="text-sm">Main Feeder: Normal</span>
              </div>
              <div className="flex items-center gap-2">
                <Circle className="h-3 w-3 fill-secondary text-secondary" />
                <span className="text-sm">Distribution: Active</span>
              </div>
              <div className="flex items-center gap-2">
                <Circle className="h-3 w-3 fill-secondary text-secondary" />
                <span className="text-sm">Load Centers: Operational</span>
              </div>
              <div className="flex items-center gap-2">
                <Circle className="h-3 w-3 fill-muted-foreground text-muted-foreground" />
                <span className="text-sm">Backup Generator: Standby</span>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-3">Live Readings</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Voltage</p>
                <p className="text-lg font-bold">415.2 V</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Current</p>
                <p className="text-lg font-bold">245.8 A</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Power Factor</p>
                <p className="text-lg font-bold">0.94</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Frequency</p>
                <p className="text-lg font-bold">50.1 Hz</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}