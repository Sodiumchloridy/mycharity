import { formatDate } from "../../utils/formatters";

interface InvestmentDetails {
  projectName: string;
  location: string;
  projectProgress: number;
  completionDate: string;
  sustainabilityModel: string;
}

interface ExpectedImpact {
  directBeneficiaries: {
    students: number;
    jobsCreated: number;
    communityMembers: number;
  };
  facilitiesProvided: string[];
}

interface WaqfDetailsProps {
  investmentDetails: InvestmentDetails;
  expectedImpact: ExpectedImpact;
}

export default function WaqfDetails({
  investmentDetails,
  expectedImpact,
}: WaqfDetailsProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold mb-2">Waqf Investment</h2>
        <p className="text-muted-foreground">
          How your Waqf contribution is being invested for long-term community
          benefit
        </p>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <h3 className="font-bold mb-3">{investmentDetails.projectName}</h3>
          <p className="text-muted-foreground mb-4">
            Location: {investmentDetails.location}
          </p>

          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Project Progress</span>
              <span className="text-sm">
                {investmentDetails.projectProgress}%
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{
                  width: `${investmentDetails.projectProgress}%`,
                }}
              ></div>
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Expected completion:{" "}
              {formatDate(investmentDetails.completionDate)}
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-4 mb-6">
            <h4 className="font-medium mb-2">Sustainability Model</h4>
            <p className="text-sm">{investmentDetails.sustainabilityModel}</p>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <h3 className="font-bold mb-3">Expected Impact</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-secondary rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {expectedImpact.directBeneficiaries.students}
              </div>
              <div className="text-sm text-muted-foreground">
                Students Benefiting
              </div>
            </div>
            <div className="bg-secondary rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {expectedImpact.directBeneficiaries.jobsCreated}
              </div>
              <div className="text-sm text-muted-foreground">Jobs Created</div>
            </div>
            <div className="bg-secondary rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {expectedImpact.directBeneficiaries.communityMembers}
              </div>
              <div className="text-sm text-muted-foreground">
                Community Members Served
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Facilities Provided</h4>
            <ul className="space-y-2">
              {expectedImpact.facilitiesProvided.map((facility, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
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
                    className="h-5 w-5 text-primary flex-shrink-0"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  {facility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
