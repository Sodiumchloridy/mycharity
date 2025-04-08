import React from "react";
import Link from "next/link";

/**
 * TaxDocuments component to display tax documents and receipts
 */
interface TaxDocumentsProps {
  userData: any;
}

const TaxDocuments: React.FC<TaxDocumentsProps> = ({ userData }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Tax Documents</h1>

      <div className="bg-card rounded-lg border border-border mb-8">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold">Tax Receipts</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Download your tax receipts for deduction purposes.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary text-secondary-foreground">
              <tr>
                <th className="text-left p-3 text-sm font-medium">Reference</th>
                <th className="text-left p-3 text-sm font-medium">Year</th>
                <th className="text-left p-3 text-sm font-medium">Amount</th>
                <th className="text-left p-3 text-sm font-medium">Status</th>
                <th className="text-right p-3 text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.certificates.map((certificate) => (
                <tr key={certificate.id} className="border-b border-border">
                  <td className="p-3">{certificate.id}</td>
                  <td className="p-3">{certificate.year}</td>
                  <td className="p-3">
                    RM{" "}
                    {certificate.amount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        certificate.status === "Available"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      }`}
                    >
                      {certificate.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    {certificate.status === "Available" ? (
                      <button className="text-primary hover:underline text-sm">
                        Download PDF
                      </button>
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        Pending
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-lg p-6">
        <h2 className="font-bold mb-2">Tax Information</h2>
        <p className="text-sm text-muted-foreground mb-4">
          In Malaysia, donations to approved institutions or organizations are
          tax-deductible up to 7% of aggregate income for individuals. All
          receipts provided by MyCharity are recognized by the Inland Revenue
          Board of Malaysia (LHDN).
        </p>
        <Link href="/tax-info" className="text-primary hover:underline text-sm">
          Learn more about tax deductions for charitable giving
        </Link>
      </div>
    </div>
  );
};

export default TaxDocuments;
