import React from "react";
import Link from "next/link";

/**
 * UserProfile component displays the user information and sidebar navigation
 * @param userData - User data object containing profile information
 * @param activeTab - Currently active tab
 * @param setActiveTab - Function to set the active tab
 */
const UserProfile = ({
  userData,
  activeTab,
  setActiveTab,
}: {
  userData: any;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
      {/* User info header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
          {userData.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-lg font-bold">{userData.name}</h2>
          <p className="text-sm text-muted-foreground">{userData.email}</p>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="space-y-1">
        <NavButton
          label="Overview"
          icon={<DashboardIcon />}
          active={activeTab === "overview"}
          onClick={() => setActiveTab("overview")}
        />
        <NavButton
          label="Donation History"
          icon={<DonationIcon />}
          active={activeTab === "donations"}
          onClick={() => setActiveTab("donations")}
        />
        <NavButton
          label="My Impact"
          icon={<ImpactIcon />}
          active={activeTab === "impact"}
          onClick={() => setActiveTab("impact")}
        />
        <NavButton
          label="Tax Documents"
          icon={<DocumentIcon />}
          active={activeTab === "tax"}
          onClick={() => setActiveTab("tax")}
        />
        <NavButton
          label="Payment Methods"
          icon={<CardIcon />}
          active={activeTab === "payment"}
          onClick={() => setActiveTab("payment")}
        />
        <NavButton
          label="Account Settings"
          icon={<SettingsIcon />}
          active={activeTab === "settings"}
          onClick={() => setActiveTab("settings")}
        />
      </nav>

      {/* Donation button */}
      <div className="mt-8 pt-6 border-t border-border">
        <Link
          href="/#donation"
          className="w-full flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground"
        >
          Make a New Donation
        </Link>
      </div>
    </div>
  );
};

// Navigation button component
const NavButton = ({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center px-3 py-2 rounded-md transition-colors ${
      active ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
    }`}
  >
    <span className="mr-3 h-5 w-5">{icon}</span>
    {label}
  </button>
);

// Icon components
const DashboardIcon = () => (
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
  >
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

const DonationIcon = () => (
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
  >
    <path d="M12 2v20" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const ImpactIcon = () => (
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
  >
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

const DocumentIcon = () => (
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
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H8" />
  </svg>
);

const CardIcon = () => (
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
  >
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const SettingsIcon = () => (
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
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default UserProfile;
