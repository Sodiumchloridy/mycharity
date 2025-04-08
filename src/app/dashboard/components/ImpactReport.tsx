import React from "react";
import ImpactMetrics from "./ImpactMetrics";

/**
 * ImpactReport component displays the impact tab content
 */
interface ImpactReportProps {
  userData: any;
}

const ImpactReport: React.FC<ImpactReportProps> = ({ userData }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Your Impact</h1>

      <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-6">Impact Summary</h2>
        <ImpactMetrics metrics={userData.impactMetrics} />

        {/* Impact Breakdown */}
        <div className="bg-card rounded-lg border border-border p-6 mt-8">
          <h3 className="font-bold mb-4">Impact Breakdown by Cause</h3>
          <div className="space-y-4">
            <ImpactBar label="Emergency Relief" percentage={40} />
            <ImpactBar label="Education" percentage={30} />
            <ImpactBar label="Healthcare" percentage={15} />
            <ImpactBar label="Food Security" percentage={10} />
            <ImpactBar label="Economic Development" percentage={5} />
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border p-6 mb-8">
        <h2 className="text-xl font-bold mb-6">Impact Stories</h2>

        <div className="space-y-6">
          <ImpactStory
            title="Emergency Flood Relief in Kelantan"
            description="Your donation helped provide emergency supplies to 450 families affected by severe flooding. Relief packages included clean water, food, hygiene kits, and temporary shelter materials."
          />

          <ImpactStory
            title="Community Education Center Construction"
            description="Your Waqf contribution is helping build a new education center that will serve over 200 children annually with educational resources, tutoring programs, and vocational training for youth and adults."
          />
        </div>
      </div>
    </div>
  );
};

/**
 * ImpactBar component displays a progress bar for a specific impact category
 */
const ImpactBar = ({
  label,
  percentage,
}: {
  label: string;
  percentage: number;
}) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{label}</span>
      <span className="text-sm text-muted-foreground">{percentage}%</span>
    </div>
    <div className="w-full bg-secondary rounded-full h-2.5">
      <div
        className="bg-primary h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

/**
 * ImpactStory component displays a single impact story card
 */
const ImpactStory = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="p-4 bg-secondary rounded-lg">
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4">{description}</p>
    <div className="flex justify-end">
      <button className="text-primary hover:underline text-sm">
        Read Full Story
      </button>
    </div>
  </div>
);

export default ImpactReport;
