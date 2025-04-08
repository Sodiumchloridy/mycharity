

interface DistributionItem {
  purpose: string;
  percentage: number;
  amount: number;
}

interface BeneficiaryStat {
  totalBeneficiaries: number;
  regionBreakdown: Array<{
    region: string;
    count: number;
  }>;
  categoryBreakdown: Array<{
    category: string;
    count: number;
  }>;
}

interface ZakatDetailsProps {
  distributionBreakdown: DistributionItem[];
  beneficiaryStats: BeneficiaryStat;
}

export default function ZakatDetails({
  distributionBreakdown,
  beneficiaryStats,
}: ZakatDetailsProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold mb-2">Zakat Distribution</h2>
        <p className="text-muted-foreground">
          How your Zakat contribution was distributed across eligible categories
        </p>
      </div>

      <div className="p-6">
        <div className="space-y-4 mb-6">
          {distributionBreakdown.map((item, index) => (
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

        <div className="bg-secondary rounded-lg p-4">
          <h3 className="font-bold mb-3">Beneficiary Information</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-primary">
                  {beneficiaryStats.totalBeneficiaries}
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Beneficiaries
                </div>
              </div>

              <h4 className="text-sm font-medium mb-2">Asnaf Categories</h4>
              <div className="space-y-2">
                {beneficiaryStats.categoryBreakdown.map((category, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{category.category}</span>
                    <span>{category.count} people</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-sm font-medium mb-2">
                Geographic Distribution
              </h4>
              <div className="space-y-2">
                {beneficiaryStats.regionBreakdown.map((region, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{region.region}</span>
                      <span>{region.count} people</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-1.5">
                      <div
                        className="bg-primary h-1.5 rounded-full"
                        style={{
                          width: `${
                            (region.count /
                              (beneficiaryStats.totalBeneficiaries || 1)) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
