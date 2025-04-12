import React from "react";
import DonationTable from "./DonationTable";
import ImpactMetrics from "./ImpactMetrics";

/**
 * DashboardOverview displays the main dashboard overview tab
 */
interface DashboardOverviewProps {
  userData: any;
  formatDate: (date: string) => string;
  getStatusBadgeClass: (status: string) => string;
  setActiveTab: (tab: string) => void;
}

const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  userData,
  formatDate,
  getStatusBadgeClass,
  setActiveTab,
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Total Donations */}
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="text-sm text-muted-foreground">Total Donations</div>
          <div className="text-3xl font-bold mb-1">
            RM{" "}
            {userData.totalDonated.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <div className="text-sm text-muted-foreground">
            {userData.donationCount} contributions
          </div>
        </div>

        {/* Tax Deduction */}
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="text-sm text-muted-foreground">
            Tax Deduction Eligible
          </div>
          <div className="text-3xl font-bold mb-1">
            RM{" "}
            {userData.taxDeductionTotal.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <div className="text-sm text-muted-foreground">
            For tax year 2023-2024
          </div>
        </div>
      </div>

      {/* Recent Donations Table */}
      <DonationTable
        donations={userData.recentDonations}
        formatDate={formatDate}
        getStatusBadgeClass={getStatusBadgeClass}
        limit={3}
        showViewAll={true}
        onViewAll={() => setActiveTab("donations")}
      />

      {/* Impact Section */}
      <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Your Impact</h2>
        <ImpactMetrics metrics={userData.impactMetrics} />
        <div className="mt-4 text-right">
          <button
            onClick={() => setActiveTab("impact")}
            className="text-primary hover:underline text-sm"
          >
            View Detailed Impact Report
          </button>
        </div>
      </div>

      {/* Recurring Donations */}
      {userData.scheduledDonations.length > 0 && (
        <div className="bg-card rounded-lg border border-border p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Recurring Donations</h2>
          {userData.scheduledDonations.map((donation: any) => (
            <div
              key={donation.id}
              className="flex items-center justify-between p-4 bg-secondary rounded-lg"
            >
              <div>
                <div className="font-medium">
                  {donation.type} - {donation.organization}
                </div>
                <div className="text-sm text-muted-foreground">
                  RM{" "}
                  {donation.amount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                  {donation.frequency}
                </div>
                <div className="text-sm text-muted-foreground">
                  Next payment: {formatDate(donation.nextDate)}
                </div>
              </div>
              <button className="text-sm text-primary hover:underline">
                Manage
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardOverview;
