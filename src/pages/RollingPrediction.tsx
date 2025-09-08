import { Card } from "@/components/ui/card";
import { Clock, Activity } from "lucide-react";

export default function RollingPrediction() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Rolling Time Prediction</h1>
        <p className="text-muted-foreground mt-2">
          Time-based energy consumption trends and rolling forecasts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Next Hour</p>
              <p className="text-2xl font-bold">1,245 kW</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <Activity className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Next 4 Hours</p>
              <p className="text-2xl font-bold">4.8 MWh</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Peak Time</p>
              <p className="text-2xl font-bold">14:30</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <Activity className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Accuracy</p>
              <p className="text-2xl font-bold">96.8%</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">24-Hour Rolling Forecast</h3>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Real-time rolling prediction chart will be implemented here</p>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="p-4">
            <h4 className="font-semibold mb-3">Hourly Breakdown</h4>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <span>{String(new Date().getHours() + i).padStart(2, '0')}:00</span>
                  <span className="font-medium">{(1200 + Math.random() * 400).toFixed(0)} kW</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-3">Live Indicators</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-sm">Real-time tracking active</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm">Model updating every 5 min</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                <span className="text-sm">Next update: 2 min</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Pattern Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Morning Pattern</h4>
            <p className="text-sm text-muted-foreground">
              Gradual increase starting 6 AM, peak at 9 AM with 1,450 kW average
            </p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Afternoon Pattern</h4>
            <p className="text-sm text-muted-foreground">
              Sustained high load 12-4 PM, maximum efficiency at 2:30 PM
            </p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Evening Pattern</h4>
            <p className="text-sm text-muted-foreground">
              Gradual decline from 5 PM, reaching minimum 850 kW at midnight
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}