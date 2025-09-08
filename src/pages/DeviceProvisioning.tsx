import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Plus, Settings } from "lucide-react";

export default function DeviceProvisioning() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Device Provisioning</h1>
          <p className="text-muted-foreground mt-2">
            Register and configure energy meters for system communication
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary-hover">
          <Plus className="h-4 w-4 mr-2" />
          Add Device
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <Activity className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold">Connected Devices</h3>
              <p className="text-2xl font-bold text-secondary">247</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-muted rounded-lg">
              <Settings className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold">Pending Setup</h3>
              <p className="text-2xl font-bold text-muted-foreground">12</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-destructive/10 rounded-lg">
              <Activity className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <h3 className="font-semibold">Offline Devices</h3>
              <p className="text-2xl font-bold text-destructive">3</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Device Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <div>
                <p className="font-medium">Meter_A1_Floor2</p>
                <p className="text-sm text-muted-foreground">Building A - Floor 2</p>
              </div>
            </div>
            <span className="text-sm text-secondary font-medium">Online</span>
          </div>
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <div>
                <p className="font-medium">Meter_B3_Lobby</p>
                <p className="text-sm text-muted-foreground">Building B - Lobby</p>
              </div>
            </div>
            <span className="text-sm text-secondary font-medium">Online</span>
          </div>
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
              <div>
                <p className="font-medium">Meter_C1_Basement</p>
                <p className="text-sm text-muted-foreground">Building C - Basement</p>
              </div>
            </div>
            <span className="text-sm text-muted-foreground font-medium">Setup Required</span>
          </div>
        </div>
      </Card>
    </div>
  );
}