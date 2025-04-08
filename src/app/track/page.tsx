"use client";

import { useState } from "react";


// Import components
import TrackingForm from "./components/TrackingForm";
import DonationHeader from "./components/DonationHeader";
import DonationMetadata from "./components/DonationMetadata";
import DonationTimeline from "./components/DonationTimeline";
import ZakatDetails from "./components/donation-types/ZakatDetails";
import WaqfDetails from "./components/donation-types/WaqfDetails";
import SadaqahDetails from "./components/donation-types/SadaqahDetails";
import SmsSubscription from "./components/SmsSubscription";
import TrackingInfo from "./components/TrackingInfo";
import FAQSection from "./components/FAQSection";

// Import sample data and types
import { sampleTransactions, Transaction } from "./data/sampleData";

export default function DonationTracker() {
  const [trackingId, setTrackingId] = useState("");
  const [trackingResult, setTrackingResult] = useState<Transaction | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      const result = sampleTransactions[trackingId];
      setTrackingResult(result);
      setIsLoading(false);
    }, 1500);
  };

  // FAQ data
  const faqs = [
    {
      question: "How secure is the tracking system?",
      answer:
        "Our tracking system uses enterprise-grade security with advanced encryption. All data is stored in secure, redundant databases with multiple layers of protection. Our systems are regularly audited by independent third parties to ensure the integrity of donation records.",
    },
    {
      question: "Can I track donations made via cash or SMS?",
      answer:
        "Yes, all donations regardless of payment method receive a unique tracking ID. Cash donations get a printed receipt with a tracking code, while SMS donations receive the tracking ID via text message.",
    },
    {
      question: "How often are donation statuses updated?",
      answer:
        "Donation statuses are updated in real-time as they progress through each stage. For long-term projects like Waqf, we provide regular updates at least once a month, and you can opt-in to receive SMS or email notifications.",
    },
    {
      question: "Is my personal information visible to others?",
      answer:
        "No, we protect your privacy. The tracking system only includes transaction data and a unique identifier. Personal information is stored separately in our secure database and is never shared with third parties without explicit consent.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent Donation Tracking
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track the journey of your donation in real-time. Our secure, audited
            system ensures complete transparency in how your contributions are
            making an impact.
          </p>
        </div>

        <TrackingForm
          trackingId={trackingId}
          setTrackingId={setTrackingId}
          handleTrack={handleTrack}
          isLoading={isLoading}
        />

        {trackingResult && (
          <div className="animate-in fade-in">
            <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
              <DonationHeader
                type={trackingResult.type}
                organization={trackingResult.organization}
                date={trackingResult.date}
                amount={trackingResult.amount}
                status={trackingResult.status}
              />

              <DonationMetadata
                id={trackingResult.id}
                verificationCode={trackingResult.verificationCode}
                lastUpdated={trackingResult.lastUpdated}
              />

              <DonationTimeline events={trackingResult.timeline} />
            </div>

            {/* Type-specific information */}
            {trackingResult.type === "Zakat" &&
              trackingResult.distributionBreakdown &&
              trackingResult.beneficiaryStats && (
                <ZakatDetails
                  distributionBreakdown={trackingResult.distributionBreakdown}
                  beneficiaryStats={trackingResult.beneficiaryStats}
                />
              )}

            {trackingResult.type === "Waqf" &&
              trackingResult.investmentDetails &&
              trackingResult.expectedImpact && (
                <WaqfDetails
                  investmentDetails={trackingResult.investmentDetails}
                  expectedImpact={trackingResult.expectedImpact}
                />
              )}

            {trackingResult.type === "Sadaqah" &&
              trackingResult.allocationDetails &&
              trackingResult.impactUpdate && (
                <SadaqahDetails
                  allocationDetails={trackingResult.allocationDetails}
                  impactUpdate={trackingResult.impactUpdate}
                />
              )}

            <SmsSubscription />
          </div>
        )}

        <TrackingInfo />
        <FAQSection faqs={faqs} />
      </div>
    </div>
  );
}
