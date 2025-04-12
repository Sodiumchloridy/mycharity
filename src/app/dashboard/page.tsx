"use client";

import React, { useState } from "react";
import UserProfile from "./components/UserProfile";
import DashboardOverview from "./components/DashboardOverview";
import DonationHistory from "./components/DonationHistory";
import ImpactReport from "./components/ImpactReport";
import TaxDocuments from "./components/TaxDocuments";
import PaymentMethods from "./components/PaymentMethods";
import AccountSettings from "./components/AccountSettings";

/**
 * Main Dashboard page component
 * Uses modular components for each section
 */
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data
  const userData = {
    name: "Sarah Ahmad",
    email: "sarah@example.com",
    totalDonated: 8750.0,
    donationCount: 14,
    taxDeductionTotal: 8750.0,
    impactMetrics: {
      peopleHelped: 347,
      educationHours: 1680,
      mealsProvided: 1250,
      housingDays: 90,
    },
    recentDonations: [
      {
        id: "TX123456789",
        date: "2023-12-15",
        type: "Zakat",
        amount: 1250.0,
        organization: "Lembaga Zakat Selangor",
        status: "Distributed",
      },
      {
        id: "TX987654321",
        date: "2023-11-30",
        type: "Waqf",
        amount: 5000.0,
        organization: "Wakaf Selangor",
        status: "Invested",
      },
      {
        id: "TX567891234",
        date: "2024-01-05",
        type: "Sadaqah",
        amount: 500.0,
        organization: "Islamic Relief Malaysia",
        status: "Allocated",
      },
      {
        id: "TX246813579",
        date: "2024-01-10",
        type: "Sadaqah",
        amount: 100.0,
        organization: "Islamic Relief Malaysia",
        status: "Processing",
      },
      {
        id: "TX135792468",
        date: "2024-01-20",
        type: "Zakat",
        amount: 1900.0,
        organization: "Pusat Pungutan Zakat MAIWP",
        status: "Processing",
      },
    ],
    scheduledDonations: [
      {
        id: "SD001",
        frequency: "Monthly",
        amount: 500.0,
        type: "Sadaqah",
        organization: "Islamic Relief Malaysia",
        nextDate: "2024-02-15",
      },
    ],
    savedPaymentMethods: [
      {
        id: "PM001",
        type: "Credit Card",
        lastFour: "1234",
        expiryDate: "03/25",
        isDefault: true,
      },
      {
        id: "PM002",
        type: "FPX",
        bank: "Maybank",
        accountLastFour: "5678",
        isDefault: false,
      },
    ],
    certificates: [
      { id: "CERT2023-01", year: 2023, amount: 6250.0, status: "Available" },
      { id: "CERT2024-01", year: 2024, amount: 2500.0, status: "Processing" },
    ],
  };

  /**
   * Format date for display
   */
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-MY", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  /**
   * Get appropriate CSS class for status badges
   */
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Distributed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Allocated":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Invested":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Processing":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  /**
   * Render the appropriate tab content based on activeTab
   */
  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <DashboardOverview
            userData={userData}
            formatDate={formatDate}
            getStatusBadgeClass={getStatusBadgeClass}
            setActiveTab={setActiveTab}
          />
        );
      case "donations":
        return (
          <DonationHistory
            userData={userData}
            formatDate={formatDate}
            getStatusBadgeClass={getStatusBadgeClass}
          />
        );
      case "impact":
        return <ImpactReport userData={userData} />;
      case "tax":
        return <TaxDocuments userData={userData} />;
      case "payment":
        return <PaymentMethods userData={userData} />;
      case "settings":
        return <AccountSettings userData={userData} />;
      default:
        return (
          <DashboardOverview
            userData={userData}
            formatDate={formatDate}
            getStatusBadgeClass={getStatusBadgeClass}
            setActiveTab={setActiveTab}
          />
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          {/* Left sidebar with user profile */}
          <div className="md:w-1/3">
            <UserProfile
              userData={userData}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

          {/* Main content area */}
          <div className="md:w-2/3">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}
