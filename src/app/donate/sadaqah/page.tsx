"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SadaqahDonation() {
  const [step, setStep] = useState(1);
  const [donationType, setDonationType] = useState("general");
  const [donationAmount, setDonationAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<number | null>(null);
  const [recurringDonation, setRecurringDonation] = useState(false);
  const [frequency, setFrequency] = useState("monthly");
  const [selectedOrganization, setSelectedOrganization] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");

  const predefinedAmounts = [10, 50, 100, 200, 500];

  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount(null);
  };

  const handleCustomAmount = (value: number | null) => {
    if (value && value > 0) {
      setCustomAmount(value);
      setDonationAmount(value);
    } else {
      setCustomAmount(null);
      setDonationAmount(50); // Default to first predefined amount
    }
  };

  const organizations = [
    {
      id: "irm",
      name: "Islamic Relief Malaysia",
      description: "Emergency response and development projects in Malaysia and globally",
    },
    {
      id: "gs",
      name: "Global Sadaqah",
      description: "Connecting donors to verified charitable causes via blockchain",
    },
    {
      id: "erman",
      name: "Education Resource Malaysia Network",
      description: "Supporting educational initiatives for underprivileged children",
    },
    {
      id: "mmss",
      name: "Malaysian Medical Support Society",
      description: "Healthcare support for the poor and medical emergency relief",
    },
  ];

  const causes = {
    general: "General Sadaqah Fund",
    emergency: "Emergency Relief",
    orphans: "Orphan Sponsorship",
    education: "Education Support",
    medical: "Medical Aid",
    food: "Food Security",
  };

  const handleOrganizationSelect = (id: string) => {
    setSelectedOrganization(id);
  };

  const proceedToPayment = () => {
    setStep(4);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href="/donate"
            className="text-primary hover:underline inline-flex items-center"
          >
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
              className="mr-2 h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Donation Options
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">Sadaqah Donation</h1>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step === 1
                    ? "bg-blue-600 text-white"
                    : step > 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                1
              </div>
              <div
                className={`h-1 w-16 mx-1 ${
                  step >= 2 ? "bg-blue-600" : "bg-gray-200"
                }`}
              ></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step === 2
                    ? "bg-blue-600 text-white"
                    : step > 2
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                2
              </div>
              <div
                className={`h-1 w-16 mx-1 ${
                  step >= 3 ? "bg-blue-600" : "bg-gray-200"
                }`}
              ></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step === 3
                    ? "bg-blue-600 text-white"
                    : step > 3
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                3
              </div>
              <div
                className={`h-1 w-16 mx-1 ${
                  step >= 4 ? "bg-blue-600" : "bg-gray-200"
                }`}
              ></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step === 4
                    ? "bg-blue-600 text-white"
                    : step > 4
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                4
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {step === 1 && "Choose Amount"}
              {step === 2 && "Select Organization"}
              {step === 3 && "Review & Confirm"}
              {step === 4 && "Payment"}
            </div>
          </div>
        </div>

        {step === 1 && (
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold mb-4">Choose Sadaqah Details</h2>
            <p className="text-muted-foreground mb-6">
              Sadaqah is a voluntary charitable act that can be given any time and in any amount. 
              Your contribution will help those in need and is a means of seeking Allah's blessings.
            </p>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Select Cause
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {Object.entries(causes).map(([key, value]) => (
                  <button
                    key={key}
                    className={`selection-btn p-4 rounded-md transition-all ${
                      donationType === key ? "border" : ""
                    }`}
                    onClick={() => setDonationType(key)}
                  >
                    <div className="font-medium">{value}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">
                Donation Amount (MYR)
              </label>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-3">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    className={`selection-btn p-4 rounded-md transition-all ${
                      donationAmount === amount && !customAmount ? "border" : ""
                    }`}
                    onClick={() => handleAmountSelect(amount)}
                  >
                    <div className="font-medium">RM {amount}</div>
                  </button>
                ))}
              </div>
              
              <div className="relative mt-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-muted-foreground">RM</span>
                </div>
                <input
                  type="number"
                  value={customAmount || ""}
                  onChange={(e) => handleCustomAmount(e.target.value ? parseFloat(e.target.value) : null)}
                  className="block w-full rounded-md border border-input pl-12 py-2 bg-background"
                  placeholder="Custom amount"
                  min="1"
                />
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <input
                  id="recurring"
                  type="checkbox"
                  checked={recurringDonation}
                  onChange={(e) => setRecurringDonation(e.target.checked)}
                  className="h-4 w-4 text-primary border-gray-300 rounded"
                />
                <label htmlFor="recurring" className="ml-2 text-sm font-medium">
                  Make this a recurring donation
                </label>
              </div>
              
              {recurringDonation && (
                <div className="pl-6">
                  <label className="block text-sm font-medium mb-2">
                    Frequency
                  </label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="block w-full md:w-1/2 rounded-md border border-input py-2 px-3 bg-background"
                  >
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                  </select>
                  <p className="text-xs text-muted-foreground mt-2">
                    You can cancel your recurring donation at any time from your account.
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium"
                disabled={donationAmount <= 0}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold mb-4">Select an Organization</h2>
            
            <div className="mb-6">
              <p className="text-muted-foreground">
                Choose an organization to receive your {causes[donationType as keyof typeof causes]} donation.
                All organizations are verified and monitored to ensure transparent fund management.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {organizations.map((org) => (
                <button
                  key={org.id}
                  onClick={() => handleOrganizationSelect(org.id)}
                  className={`selection-btn w-full text-left p-4 rounded-md transition-all ${
                    selectedOrganization === org.id ? "border" : ""
                  }`}
                >
                  <div className="font-medium mb-1">{org.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {org.description}
                  </div>
                </button>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Add a Message (Optional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full rounded-md border border-input py-2 px-3 bg-background"
                rows={3}
                placeholder="Add a personal message or dua"
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2 rounded-md bg-secondary text-secondary-foreground font-medium"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium"
                disabled={!selectedOrganization}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold mb-4">Review & Confirm</h2>

            <div className="mb-8 space-y-6">
              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">
                  Donation Amount
                </div>
                <div className="text-2xl font-bold">
                  RM{" "}
                  {donationAmount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                  {recurringDonation && (
                    <span className="text-sm font-normal text-muted-foreground ml-2">
                      ({frequency})
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">
                  Donation Type
                </div>
                <div className="text-lg font-medium">
                  {causes[donationType as keyof typeof causes]}
                </div>
              </div>

              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">
                  Selected Organization
                </div>
                <div className="text-lg font-medium">
                  {organizations.find((org) => org.id === selectedOrganization)?.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {organizations.find((org) => org.id === selectedOrganization)?.description}
                </div>
              </div>

              {message && (
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">
                    Your Message
                  </div>
                  <div className="text-sm">
                    {message}
                  </div>
                </div>
              )}
            </div>

            <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex items-start gap-3">
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
                  className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <div>
                  <h4 className="font-medium mb-1">Transparent Distribution</h4>
                  <p className="text-sm text-muted-foreground">
                    Your donation will be recorded on our blockchain system,
                    allowing you to track exactly how your Sadaqah is being
                    distributed. You'll receive a unique transaction ID for
                    verification.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-2 rounded-md bg-secondary text-secondary-foreground font-medium"
              >
                Back
              </button>
              <button
                onClick={proceedToPayment}
                className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
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
              </div>
              <h2 className="text-xl font-bold mb-2">Payment</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Please select your preferred payment method to complete your
                Sadaqah donation of
                <span className="font-bold">
                  {" "}
                  RM{" "}
                  {donationAmount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <button
                onClick={() => setPaymentMethod("card")}
                className={`selection-btn p-4 rounded-md transition-all bg-background flex flex-col items-center justify-center ${
                  paymentMethod === "card" ? "border" : ""
                }`}
              >
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
                  className="mb-2"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
                <span className="font-medium">Credit/Debit Card</span>
              </button>
              <button
                onClick={() => setPaymentMethod("fpx")}
                className={`selection-btn p-4 rounded-md transition-all bg-background flex flex-col items-center justify-center ${
                  paymentMethod === "fpx" ? "border" : ""
                }`}
              >
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
                  className="mb-2"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="font-medium">FPX</span>
              </button>
              <button
                onClick={() => setPaymentMethod("ewallet")}
                className={`selection-btn p-4 rounded-md transition-all bg-background flex flex-col items-center justify-center ${
                  paymentMethod === "ewallet" ? "border" : ""
                }`}
              >
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
                  className="mb-2"
                >
                  <path d="M10.1 2.182L5.584 5.476c-.7.502-1.1 1.352-1.1 2.215v8.479a2.77 2.77 0 0 0 1.1 2.134l9.3 6.686c.634.456 1.475.456 2.11 0l5.614-4.03" />
                  <path d="M2.1 15.5 9 10l-1.99-3.1" />
                  <path d="M22.894 6.276c.076-.277.124-.565.124-.863a3.246 3.246 0 0 0-3.213-3.244c-1.396 0-2.5.945-3.01 1.344a1.926 1.926 0 0 1-2.42 0C13.864 3.113 12.761 2.2 11.333 2.2a3.246 3.246 0 0 0-3.243 3.244c0 .298.048.586.124.863L9.7 10l6.326 9.797L21.06 10l1.834-3.724Z" />
                  <path d="M2.1 5.5 9 10l4.5-1.875" />
                </svg>
                <span className="font-medium">E-Wallet</span>
              </button>
            </div>

            <div className="bg-secondary p-4 rounded-lg mb-6">
              <h3 className="font-medium text-sm mb-2">Payment Summary</h3>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  Donation Amount
                </span>
                <span>
                  RM{" "}
                  {donationAmount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  Processing Fee
                </span>
                <span>RM 0.00</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-border mt-2">
                <span className="font-medium">Total</span>
                <span className="font-bold">
                  RM{" "}
                  {donationAmount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(3)}
                className="px-6 py-2 rounded-md bg-secondary text-secondary-foreground font-medium"
              >
                Back
              </button>
              <Link
                href="/payment-complete?id=TX123456789" // TODO: replace with actual transaction ID
                className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium"
              >
                Complete Payment
              </Link>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <h3 className="text-lg font-bold mb-2">Need Assistance?</h3>
          <p className="text-muted-foreground mb-4">
            If you have questions about Sadaqah or the donation
            process, our team is here to help.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="text-primary hover:underline">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}