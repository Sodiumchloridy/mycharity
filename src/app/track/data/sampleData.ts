export interface TimelineEvent {
  date: string;
  status: string;
  note: string;
}

export interface DistributionItem {
  purpose: string;
  percentage: number;
  amount: number;
}

export interface BeneficiaryStat {
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

export interface InvestmentDetails {
  projectName: string;
  location: string;
  projectProgress: number;
  completionDate: string;
  sustainabilityModel: string;
}

export interface ExpectedImpact {
  directBeneficiaries: {
    students: number;
    jobsCreated: number;
    communityMembers: number;
  };
  facilitiesProvided: string[];
}

export interface AllocationDetails {
  campaign: string;
  allocationBreakdown: Array<{
    purpose: string;
    percentage: number;
    amount: number;
  }>;
}

export interface ImpactUpdate {
  status: string;
  familiesHelped: number;
  estimatedCompletion: string;
  nextUpdate: string;
}

export interface Transaction {
  id: string;
  donorName: string;
  date: string;
  amount: number;
  type: string;
  organization: string;
  status: string;
  lastUpdated: string;
  verificationCode: string;
  timeline: TimelineEvent[];
  distributionBreakdown?: DistributionItem[];
  beneficiaryStats?: BeneficiaryStat;
  investmentDetails?: InvestmentDetails;
  expectedImpact?: ExpectedImpact;
  allocationDetails?: AllocationDetails;
  impactUpdate?: ImpactUpdate;
}

export const sampleTransactions: { [key: string]: Transaction } = {
  TX123456789: {
    id: "TX123456789",
    donorName: "Anonymous",
    date: "2023-12-15",
    amount: 1250.0,
    type: "Zakat",
    organization: "Lembaga Zakat Selangor",
    status: "Distributed",
    lastUpdated: "2024-01-20",
    verificationCode: "ZKT-LZS-7F2C3D4",
    distributionBreakdown: [
      { purpose: "Education Assistance", percentage: 30, amount: 375.0 },
      { purpose: "Food & Basic Necessities", percentage: 25, amount: 312.5 },
      { purpose: "Healthcare Support", percentage: 15, amount: 187.5 },
      { purpose: "Economic Empowerment", percentage: 20, amount: 250.0 },
      { purpose: "Administrative Cost", percentage: 10, amount: 125.0 },
    ],
    timeline: [
      {
        date: "2023-12-15",
        status: "Received",
        note: "Donation received and verified",
      },
      {
        date: "2023-12-16",
        status: "Processing",
        note: "Donation allocated to distribution categories",
      },
      {
        date: "2023-12-20",
        status: "Distributed",
        note: "Funds distributed to beneficiaries",
      },
      {
        date: "2024-01-10",
        status: "Impact Reported",
        note: "Impact assessment completed",
      },
    ],
    beneficiaryStats: {
      totalBeneficiaries: 83,
      regionBreakdown: [
        { region: "Klang Valley", count: 42 },
        { region: "Northern Region", count: 18 },
        { region: "East Coast", count: 23 },
      ],
      categoryBreakdown: [
        { category: "Asnaf Fakir (Extreme Poverty)", count: 29 },
        { category: "Asnaf Miskin (Poor)", count: 35 },
        { category: "Asnaf Gharimin (Indebted)", count: 12 },
        { category: "Asnaf Fi Sabilillah (Education)", count: 7 },
      ],
    },
  },
  TX987654321: {
    id: "TX987654321",
    donorName: "Anonymous",
    date: "2023-11-30",
    amount: 5000.0,
    type: "Waqf",
    organization: "Wakaf Selangor",
    status: "Invested",
    lastUpdated: "2024-01-15",
    verificationCode: "WQF-WS-1A2B3C4",
    investmentDetails: {
      projectName: "Community Education Center Construction",
      location: "Shah Alam, Selangor",
      projectProgress: 65,
      completionDate: "2024-06-30",
      sustainabilityModel:
        "Rental of facilities will generate ongoing revenue to maintain the center and fund scholarships",
    },
    timeline: [
      {
        date: "2023-11-30",
        status: "Received",
        note: "Waqf contribution received and verified",
      },
      {
        date: "2023-12-05",
        status: "Allocated",
        note: "Funds allocated to Education Center project",
      },
      {
        date: "2023-12-15",
        status: "Invested",
        note: "Construction materials purchased",
      },
      {
        date: "2024-01-10",
        status: "In Progress",
        note: "Foundation and structure completed",
      },
    ],
    expectedImpact: {
      directBeneficiaries: {
        students: 200,
        jobsCreated: 12,
        communityMembers: 850,
      },
      facilitiesProvided: [
        "Library with 5,000 books and digital resources",
        "Computer lab with 20 workstations",
        "Multipurpose hall for community events",
        "4 classrooms for educational programs",
        "Vocational training workshop",
      ],
    },
  },
  TX567891234: {
    id: "TX567891234",
    donorName: "Anonymous",
    date: "2024-01-05",
    amount: 500.0,
    type: "Sadaqah",
    organization: "Islamic Relief Malaysia",
    status: "Allocated",
    lastUpdated: "2024-01-15",
    verificationCode: "SDQ-IRM-2B3C4D5",
    allocationDetails: {
      campaign: "Emergency Flood Relief in Kelantan",
      allocationBreakdown: [
        { purpose: "Clean Water Supply", percentage: 35, amount: 175.0 },
        { purpose: "Food Packages", percentage: 30, amount: 150.0 },
        { purpose: "Hygiene Kits", percentage: 20, amount: 100.0 },
        { purpose: "Emergency Shelter", percentage: 15, amount: 75.0 },
      ],
    },
    timeline: [
      {
        date: "2024-01-05",
        status: "Received",
        note: "Donation received and verified",
      },
      {
        date: "2024-01-07",
        status: "Processing",
        note: "Allocated to Kelantan Flood Relief",
      },
      {
        date: "2024-01-10",
        status: "Procurement",
        note: "Relief supplies being purchased",
      },
      {
        date: "2024-01-15",
        status: "Allocated",
        note: "Supplies prepared for distribution",
      },
    ],
    impactUpdate: {
      status: "In Progress",
      familiesHelped: 35,
      estimatedCompletion: "2024-01-25",
      nextUpdate: "2024-01-22",
    },
  },
};
