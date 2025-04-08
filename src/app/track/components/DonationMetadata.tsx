import { formatDate } from "../utils/formatters";

interface DonationMetadataProps {
  id: string;
  verificationCode: string;
  lastUpdated: string;
}

export default function DonationMetadata({
  id,
  verificationCode,
  lastUpdated,
}: DonationMetadataProps) {
  return (
    <div className="p-6 border-b border-border">
      <div className="flex flex-wrap gap-6">
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-sm text-muted-foreground mb-1">Transaction ID</h3>
          <p className="font-mono text-sm break-all">{id}</p>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-sm text-muted-foreground mb-1">
            Verification Code
          </h3>
          <p className="font-mono text-sm break-all">{verificationCode}</p>
        </div>
        <div className="w-full md:w-auto">
          <h3 className="text-sm text-muted-foreground mb-1">Last Updated</h3>
          <p>{formatDate(lastUpdated)}</p>
        </div>
      </div>
    </div>
  );
}
