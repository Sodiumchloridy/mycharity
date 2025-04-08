import React from "react";
import DonationTable from "./DonationTable";

/**
 * DonationHistory component displays the donation history tab
 */
interface DonationHistoryProps {
  userData: any;
  formatDate: (date: string) => string;
  getStatusBadgeClass: (status: string) => string;
}

const DonationHistory: React.FC<DonationHistoryProps> = ({
  userData,
  formatDate,
  getStatusBadgeClass,
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Donation History</h1>

      <div className="bg-card rounded-lg border border-border mb-8">
        <div className="p-6 border-b border-border flex justify-between items-center">
          <h2 className="text-xl font-bold">All Donations</h2>
          <div className="flex gap-2">
            <select className="px-3 py-1 rounded-md border border-input bg-background text-sm">
              <option value="all">All Types</option>
              <option value="zakat">Zakat</option>
              <option value="waqf">Waqf</option>
              <option value="sadaqah">Sadaqah</option>
            </select>
            <select className="px-3 py-1 rounded-md border border-input bg-background text-sm">
              <option value="all">All Time</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>

        {/* Reuse DonationTable component */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary text-secondary-foreground">
              <tr>
                <th className="text-left p-3 text-sm font-medium">Date</th>
                <th className="text-left p-3 text-sm font-medium">Type</th>
                <th className="text-left p-3 text-sm font-medium">Amount</th>
                <th className="text-left p-3 text-sm font-medium">
                  Organization
                </th>
                <th className="text-left p-3 text-sm font-medium">Status</th>
                <th className="text-right p-3 text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.recentDonations.map((donation) => (
                <tr key={donation.id} className="border-b border-border">
                  <td className="p-3">{formatDate(donation.date)}</td>
                  <td className="p-3">{donation.type}</td>
                  <td className="p-3">
                    RM{" "}
                    {donation.amount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="p-3">{donation.organization}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                        donation.status
                      )}`}
                    >
                      {donation.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <a
                      href={`/track?id=${donation.id}`}
                      className="text-primary hover:underline text-sm"
                    >
                      View Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 text-center">
          <button className="text-primary hover:underline text-sm">
            Load More
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md text-sm font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          Export Donation History
        </button>
      </div>
    </div>
  );
};

export default DonationHistory;
