import React from "react";

/**
 * ImpactMetrics component displays user impact statistics in a grid
 * @param metrics - Object containing impact metrics
 */
type ImpactMetricsProps = {
  metrics: {
    peopleHelped: number;
    educationHours: number;
    mealsProvided: number;
    housingDays: number;
  };
};

const ImpactMetrics: React.FC<ImpactMetricsProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <MetricCard value={metrics.peopleHelped} label="People Helped" />
      <MetricCard value={metrics.educationHours} label="Education Hours" />
      <MetricCard value={metrics.mealsProvided} label="Meals Provided" />
      <MetricCard value={metrics.housingDays} label="Housing Days" />
    </div>
  );
};

/**
 * MetricCard component displays a single impact metric
 */
const MetricCard = ({ value, label }: { value: number; label: string }) => (
  <div className="bg-card rounded-lg p-4 text-center border border-border">
    <div className="text-3xl font-bold mb-1 text-primary">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

export default ImpactMetrics;
