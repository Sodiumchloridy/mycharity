import React from "react";
import Link from "next/link";

/**
 * DonationTable component to display donation history
 * @param donations - Array of donation objects to display
 * @param formatDate - Function to format date strings
 * @param getStatusBadgeClass - Function to get appropriate CSS class for status
 * @param limit - Optional limit of donations to show
 * @param showViewAll - Whether to show the "View All" button
 * @param onViewAll - Function to call when "View All" is clicked
 */
type Donation = {
  id: string;
  date: string;
  type: string;
  amount: number;
  organization: string;
  status: string;
};

interface DonationTableProps {
  donations: Donation[];
  formatDate: (date: string) => string;
  getStatusBadgeClass: (status: string) => string;
  limit?: number;
  showViewAll?: boolean;
  onViewAll?: () => void;
}

const DonationTable: React.FC<DonationTableProps> = ({
  donations,
  formatDate,
  getStatusBadgeClass,
  limit,
  showViewAll = false,
  onViewAll,
}) => {
  // Limit the number of donations if specified
  const displayDonations = limit ? donations.slice(0, limit) : donations;

  return (
    <div className="bg-card rounded-lg border border-border mb-8">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold">
          {limit ? "Recent Donations" : "All Donations"}
        </h2>
      </div>
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
            {displayDonations.map((donation) => (
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
                  <Link
                    href={`/track?id=${donation.id}`}
                    className="text-primary hover:underline text-sm"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showViewAll && (
        <div className="p-4 text-center">
          <button
            onClick={onViewAll}
            className="text-primary hover:underline text-sm"
          >
            View All Donations
          </button>
        </div>
      )}
    </div>
  );
};

export default DonationTable;
