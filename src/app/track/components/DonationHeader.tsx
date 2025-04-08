import StatusBadge from "./StatusBadge";
import { formatDate } from "../utils/formatters";

interface DonationHeaderProps {
  type: string;
  organization: string;
  date: string;
  amount: number;
  status: string;
}

export default function DonationHeader({
  type,
  organization,
  date,
  amount,
  status,
}: DonationHeaderProps) {
  return (
    <div className="p-6 border-b border-border">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold">{type} Donation</h2>
          <p className="text-muted-foreground">
            {organization} • {formatDate(date)}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-2xl font-bold">
            RM{" "}
            {amount.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <StatusBadge status={status} />
        </div>
      </div>
    </div>
  );
}
