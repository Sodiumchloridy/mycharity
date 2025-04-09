"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ZakatDonation() {
  const [step, setStep] = useState(1);
  const [wealthType, setWealthType] = useState("cash");
  const [wealthAmount, setWealthAmount] = useState<number>(0);
  const [selectedOrganization, setSelectedOrganization] = useState<
    string | null
  >(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [calculation, setCalculation] = useState({
    total: 0,
    zakatPayable: 0,
    nisabThreshold: 16875, // in MYR, example threshold
  });

  const calculateZakat = () => {
    if (wealthAmount < calculation.nisabThreshold) {
      // Below nisab threshold
      setCalculation({
        ...calculation,
        total: wealthAmount,
        zakatPayable: 0,
      });
    } else {
      // Calculate 2.5% of wealth
      const payable = wealthAmount * 0.025;
      setCalculation({
        ...calculation,
        total: wealthAmount,
        zakatPayable: payable,
      });
    }
    setStep(2);
  };

  const organizations = [
    {
      id: "lzs",
      name: "Lembaga Zakat Selangor",
      description:
        "Official zakat collection and distribution agency for Selangor",
    },
    {
      id: "ppz",
      name: "Pusat Pungutan Zakat MAIWP",
      description: "Zakat collection center for Federal Territories",
    },
    {
      id: "irm",
      name: "Islamic Relief Malaysia",
      description: "International humanitarian organization",
    },
  ];

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

        <h1 className="text-3xl md:text-4xl font-bold mb-6">Zakat Donation</h1>

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
              {step === 1 && "Calculate"}
              {step === 2 && "Select Organization"}
              {step === 3 && "Review & Confirm"}
              {step === 4 && "Payment"}
            </div>
          </div>
        </div>

        {step === 1 && (
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold mb-4">Calculate Your Zakat</h2>
            <p className="text-muted-foreground mb-6">
              Zakat is payable at 2.5% on wealth held for one lunar year, if the
              total value exceeds the Nisab threshold (currently RM{" "}
              {calculation.nisabThreshold.toLocaleString()}).
            </p>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Wealth Type
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button
                  className={`selection-btn p-4 rounded-md transition-all ${
                    wealthType === "cash" ? "active" : ""
                  }`}
                  onClick={() => setWealthType("cash")}
                >
                  <div className="font-medium mb-1">Cash & Savings</div>
                  <div className="text-xs text-muted-foreground">
                    Bank accounts, cash in hand
                  </div>
                </button>
                <button
                  className={`selection-btn p-4 rounded-md transition-all ${
                    wealthType === "gold" ? "active" : ""
                  }`}
                  onClick={() => setWealthType("gold")}
                >
                  <div className="font-medium mb-1">Gold & Silver</div>
                  <div className="text-xs text-muted-foreground">
                    Jewelry, precious metals
                  </div>
                </button>
                <button
                  className={`selection-btn p-4 rounded-md transition-all ${
                    wealthType === "investments" ? "active" : ""
                  }`}
                  onClick={() => setWealthType("investments")}
                >
                  <div className="font-medium mb-1">Investments</div>
                  <div className="text-xs text-muted-foreground">
                    Stocks, mutual funds, crypto
                  </div>
                </button>
              </div>
            </div>

            <div className="mb-8">
              <label
                htmlFor="wealthAmount"
                className="block text-sm font-medium mb-2"
              >
                Value in MYR
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-muted-foreground">RM</span>
                </div>
                <input
                  type="number"
                  id="wealthAmount"
                  value={wealthAmount || ""}
                  onChange={(e) =>
                    setWealthAmount(parseFloat(e.target.value) || 0)
                  }
                  min="0"
                  className="block w-full rounded-md border border-input pl-12 py-2 bg-background"
                  placeholder="0.00"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Enter the total value of your{" "}
                {wealthType === "cash"
                  ? "cash and savings"
                  : wealthType === "gold"
                  ? "gold and silver"
                  : "investments"}{" "}
                held for one lunar year.
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={calculateZakat}
                className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium"
              >
                Calculate Zakat
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold mb-4">Your Zakat Calculation</h2>

            <div className="mb-8 p-6 bg-secondary rounded-lg">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-muted-foreground">
                    Total Wealth
                  </div>
                  <div className="text-xl font-semibold">
                    RM{" "}
                    {calculation.total.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Nisab Threshold
                  </div>
                  <div className="text-xl font-semibold">
                    RM{" "}
                    {calculation.nisabThreshold.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Zakat Due (2.5%)
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      RM{" "}
                      {calculation.zakatPayable.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </div>

                  {calculation.zakatPayable === 0 && (
                    <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      Below Nisab
                    </div>
                  )}
                </div>
              </div>

              {calculation.zakatPayable === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Your wealth is below the Nisab threshold, so no Zakat is due.
                  However, you may still wish to give voluntary charity
                  (Sadaqah).
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  This amount is due as Zakat based on your input. Please note
                  that this is a basic calculation and you may want to consult
                  with a Zakat advisor for complex cases.
                </p>
              )}
            </div>

            <h3 className="text-lg font-bold mb-4">
              Select an Organization to Receive Your Zakat
            </h3>

            <div className="space-y-4 mb-8">
              {organizations.map((org) => (
                <button
                  key={org.id}
                  onClick={() => handleOrganizationSelect(org.id)}
                  className={`selection-btn w-full text-left p-4 rounded-md transition-all ${
                    selectedOrganization === org.id ? "active" : ""
                  }`}
                >
                  <div className="font-medium mb-1">{org.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {org.description}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2 rounded-md bg-secondary text-secondary-foreground font-medium"
              >
                Back
              </button>

              {calculation.zakatPayable === 0 ? (
                <Link
                  href="/donate/sadaqah"
                  className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium"
                >
                  Give Sadaqah Instead
                </Link>
              ) : (
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium"
                  disabled={!selectedOrganization}
                >
                  Proceed to Review
                </button>
              )}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold mb-4">Review & Confirm</h2>

            <div className="mb-8 space-y-6">
              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">
                  Zakat Amount
                </div>
                <div className="text-2xl font-bold">
                  RM{" "}
                  {calculation.zakatPayable.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </div>

              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">
                  Selected Organization
                </div>
                <div className="text-lg font-medium">
                  {
                    organizations.find((org) => org.id === selectedOrganization)
                      ?.name
                  }
                </div>
                <div className="text-sm text-muted-foreground">
                  {
                    organizations.find((org) => org.id === selectedOrganization)
                      ?.description
                  }
                </div>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-medium mb-2">Distribution Categories</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your Zakat will be distributed across the following categories
                  as prescribed:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm">• The poor (Fuqara)</div>
                  <div className="text-sm">• The needy (Masakin)</div>
                  <div className="text-sm">• Zakat administrators</div>
                  <div className="text-sm">• Those in debt (Gharimin)</div>
                  <div className="text-sm">• Wayfarers (Ibn al-Sabil)</div>
                  <div className="text-sm">• In the cause of Allah</div>
                </div>
              </div>
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
                    allowing you to track exactly how your Zakat is being
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
                Zakat payment of
                <span className="font-bold">
                  {" "}
                  RM{" "}
                  {calculation.zakatPayable.toLocaleString(undefined, {
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
                  paymentMethod === "card" ? "active" : ""
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
                  paymentMethod === "fpx" ? "active" : ""
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
                  paymentMethod === "ewallet" ? "active" : ""
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
                  Zakat Amount
                </span>
                <span>
                  RM{" "}
                  {calculation.zakatPayable.toLocaleString(undefined, {
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
                  {calculation.zakatPayable.toLocaleString(undefined, {
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
                href="/payment-complete"
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
            If you have questions about Zakat calculation or the donation
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
