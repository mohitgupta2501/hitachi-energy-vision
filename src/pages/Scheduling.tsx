import { Card } from "@/components/ui/card";
import { Calendar, DollarSign } from "lucide-react";

export default function Scheduling() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Scheduling Prediction</h1>
        <p className="text-muted-foreground mt-2">
          Tariff-optimized scheduling forecasts and cost-effective load management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <DollarSign className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Potential Savings</p>
              <p className="text-2xl font-bold">₹8,450</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Optimal Slots</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <Calendar className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Efficiency Gain</p>
              <p className="text-2xl font-bold">18.5%</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Tariff Schedule</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-destructive/10 rounded-lg">
              <span>Peak Hours (9 AM - 6 PM)</span>
              <span className="font-semibold">₹6.85/kWh</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
              <span>Normal Hours (6 PM - 10 PM)</span>
              <span className="font-semibold">₹4.20/kWh</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg">
              <span>Off-Peak (10 PM - 6 AM)</span>
              <span className="font-semibold">₹2.85/kWh</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span>Weekend Rates</span>
              <span className="font-semibold">₹3.50/kWh</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recommended Schedule</h3>
          <div className="space-y-3">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">High Priority Loads</span>
                <span className="text-sm text-secondary">10 PM - 6 AM</span>
              </div>
              <p className="text-sm text-muted-foreground">Heavy machinery, batch processing</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Medium Priority</span>
                <span className="text-sm text-primary">6 PM - 10 PM</span>
              </div>
              <p className="text-sm text-muted-foreground">HVAC systems, lighting</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Essential Only</span>
                <span className="text-sm text-muted-foreground">9 AM - 6 PM</span>
              </div>
              <p className="text-sm text-muted-foreground">Critical systems, safety equipment</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Weekly Optimization Plan</h3>
        <div className="grid grid-cols-7 gap-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={day} className="text-center">
              <div className="font-medium text-sm mb-2">{day}</div>
              <div className="space-y-1">
                <div className="h-8 bg-secondary/20 rounded text-xs flex items-center justify-center">
                  Off-Peak
                </div>
                <div className="h-12 bg-destructive/20 rounded text-xs flex items-center justify-center">
                  Peak
                </div>
                <div className="h-6 bg-primary/20 rounded text-xs flex items-center justify-center">
                  Normal
                </div>
                <div className="h-8 bg-secondary/20 rounded text-xs flex items-center justify-center">
                  Off-Peak
                </div>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Save ₹{(800 + Math.random() * 400).toFixed(0)}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}