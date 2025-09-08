import { Card } from "@/components/ui/card";
import { Calculator, TrendingUp } from "lucide-react";

export default function BillSimulation() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Electricity Bill Simulation</h1>
        <p className="text-muted-foreground mt-2">
          Estimate and analyze electricity costs based on consumption patterns
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Current Month Projection</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <Calculator className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Estimated Bill</p>
                <p className="text-2xl font-bold">₹47,250</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">vs Last Month</p>
                <p className="text-2xl font-bold text-secondary">-8.5%</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <Calculator className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Units (kWh)</p>
                <p className="text-2xl font-bold">9,450</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Tariff Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span>Energy Charges (0-200 units)</span>
                <span className="font-semibold">₹3.45/unit</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span>Energy Charges (201-400 units)</span>
                <span className="font-semibold">₹4.20/unit</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span>Energy Charges (400+ units)</span>
                <span className="font-semibold">₹5.15/unit</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg">
                <span>Fixed Charges</span>
                <span className="font-semibold">₹850/month</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="p-4">
            <h4 className="font-semibold mb-3">Quick Stats</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Average Daily Cost</p>
                <p className="text-lg font-bold">₹1,525</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Peak Hour Cost</p>
                <p className="text-lg font-bold">₹485/hour</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Off-Peak Cost</p>
                <p className="text-lg font-bold">₹285/hour</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-3">Optimization Tips</h4>
            <div className="space-y-2 text-sm">
              <p className="p-2 bg-secondary/10 rounded">
                Shift 15% load to off-peak hours to save ₹3,200/month
              </p>
              <p className="p-2 bg-primary/10 rounded">
                Power factor improvement could reduce demand charges
              </p>
              <p className="p-2 bg-muted rounded">
                Consider load balancing during peak hours
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}