import { Card } from "@/components/ui/card";
import { TrendingUp, BarChart3 } from "lucide-react";

export default function KWhPrediction() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">KWh Prediction</h1>
        <p className="text-muted-foreground mt-2">
          Energy consumption forecasting using historical data and AI models
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Next 7 Days</p>
              <p className="text-2xl font-bold">166.2 MWh</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <BarChart3 className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Next 30 Days</p>
              <p className="text-2xl font-bold">712.5 MWh</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Confidence</p>
              <p className="text-2xl font-bold">94.2%</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Prediction Model Performance</h3>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Prediction accuracy chart will be implemented here</p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Weekly Forecast</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span>Monday</span>
              <span className="font-semibold">23.8 MWh</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span>Tuesday</span>
              <span className="font-semibold">24.2 MWh</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span>Wednesday</span>
              <span className="font-semibold">23.5 MWh</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span>Thursday</span>
              <span className="font-semibold">24.1 MWh</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span>Friday</span>
              <span className="font-semibold">22.9 MWh</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg">
              <span>Saturday</span>
              <span className="font-semibold">18.7 MWh</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg">
              <span>Sunday</span>
              <span className="font-semibold">16.2 MWh</span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Model Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-primary/10 rounded-lg">
            <h4 className="font-semibold mb-2">Key Factors</h4>
            <ul className="text-sm space-y-1">
              <li>• Historical consumption patterns (35%)</li>
              <li>• Weather conditions (25%)</li>
              <li>• Day of week patterns (20%)</li>
              <li>• Seasonal variations (20%)</li>
            </ul>
          </div>
          <div className="p-4 bg-secondary/10 rounded-lg">
            <h4 className="font-semibold mb-2">Optimization Opportunities</h4>
            <ul className="text-sm space-y-1">
              <li>• Peak shaving potential: 8.5 MW</li>
              <li>• Load balancing savings: 12%</li>
              <li>• Predictive maintenance alerts</li>
              <li>• Demand response integration</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}