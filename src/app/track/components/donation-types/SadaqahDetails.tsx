import { formatDate } from "../../utils/formatters";

interface AllocationDetails {
  campaign: string;
  allocationBreakdown: Array<{
    purpose: string;
    percentage: number;
    amount: number;
  }>;
}

interface ImpactUpdate {
  status: string;
  familiesHelped: number;
  estimatedCompletion: string;
  nextUpdate: string;
}

interface SadaqahDetailsProps {
  allocationDetails: AllocationDetails;
  impactUpdate: ImpactUpdate;
}

export default function SadaqahDetails({
  allocationDetails,
  impactUpdate,
}: SadaqahDetailsProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold mb-2">Sadaqah Allocation</h2>
        <p className="text-muted-foreground">
          How your Sadaqah donation is being used to help those in need
        </p>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <h3 className="font-bold mb-3">{allocationDetails.campaign}</h3>

          <div className="space-y-4 mb-6">
            {allocationDetails.allocationBreakdown.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{item.purpose}</span>
                  <span className="text-sm">
                    RM{" "}
                    {item.amount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                    <span className="text-muted-foreground ml-1">
                      ({item.percentage}%)
                    </span>
                  </span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary rounded-lg p-4">
          <h3 className="font-bold mb-3">Impact Update</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-sm text-muted-foreground mb-1">
                Current Status
              </div>
              <div className="font-medium">{impactUpdate.status}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">
                Families Helped So Far
              </div>
              <div className="font-medium">{impactUpdate.familiesHelped}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">
                Estimated Completion
              </div>
              <div className="font-medium">
                {impactUpdate.estimatedCompletion &&
                  formatDate(impactUpdate.estimatedCompletion)}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">
                Next Update Expected
              </div>
              <div className="font-medium">
                {impactUpdate.nextUpdate && formatDate(impactUpdate.nextUpdate)}
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            You will receive an email notification when there is a new update on
            this donation.
          </div>
        </div>
      </div>
    </div>
  );
}
