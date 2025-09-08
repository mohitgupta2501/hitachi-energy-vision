import { Card } from "@/components/ui/card";
import { Activity, Zap, TrendingUp, BarChart3 } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Energy Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Real-time energy KPIs, metrics, and system performance overview
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Devices</p>
              <p className="text-2xl font-bold">247</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <Zap className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Load</p>
              <p className="text-2xl font-bold">1,247 kW</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Daily Usage</p>
              <p className="text-2xl font-bold">24.7 MWh</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <BarChart3 className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Efficiency</p>
              <p className="text-2xl font-bold">94.2%</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Energy Consumption Trends</h3>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Chart visualization will be implemented here</p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">System Alerts</h3>
          <div className="space-y-3">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <p className="font-medium">Normal Operation</p>
              <p className="text-sm text-muted-foreground">All systems running within parameters</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium">Scheduled Maintenance</p>
              <p className="text-sm text-muted-foreground">Unit B3 maintenance planned for tomorrow</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}