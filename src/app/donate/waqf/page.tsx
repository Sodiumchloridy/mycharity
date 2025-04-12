"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function WaqfDonation() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState("education");
  const [donationAmount, setDonationAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [frequency, setFrequency] = useState("monthly");

  const projects = [
    {
      id: "educational-complex",
      name: "Educational Complex",
      description: "Building schools and educational facilities in underserved areas",
      category: "education",
      targetAmount: 2500000,
      raisedAmount: 1200000,
      imageUrl: "/images/projects/education.jpg"
    },
    {
      id: "community-hospital",
      name: "Community Medical Center",
      description: "Modern healthcare facilities providing free services to those in need",
      category: "healthcare",
      targetAmount: 3000000,
      raisedAmount: 950000,
      imageUrl: "/images/projects/hospital.jpg"
    },
    {
      id: "sustainable-farm",
      name: "Sustainable Agriculture Farm",
      description: "Self-sustaining farm that provides food and income for local communities",
      category: "agriculture",
      targetAmount: 1800000,
      raisedAmount: 620000,
      imageUrl: "/images/projects/farm.jpg"
    },
    {
      id: "orphanage-complex",
      name: "Orphanage Complex",
      description: "Safe housing and education for orphaned children",
      category: "social",
      targetAmount: 2200000,
      raisedAmount: 890000,
      imageUrl: "/images/projects/orphanage.jpg"
    },
  ];

  const handleProjectSelect = (id: string) => {
    setSelectedProject(id);
  };

  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount(null);
  };

  const handleCustomAmount = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount(amount);
  };

  const filteredProjects = projectType === "all" 
    ? projects 
    : projects.filter(project => project.category === projectType);

  const proceedToReview = () => {
    setStep(3);
  };

  const proceedToPayment = () => {
    setStep(4);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href="/#donate"
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

        <h1 className="text-3xl md:text-4xl font-bold mb-6">Waqf Donation</h1>

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
              {step === 1 && "Select Project"}
              {step === 2 && "Donation Amount"}
              {step === 3 && "Review & Confirm"}
              {step === 4 && "Payment"}
            </div>
          </div>
        </div>

        {step === 1 && (
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold mb-4">Select a Waqf Project</h2>
            
            <p className="text-muted-foreground mb-6">
              Waqf is a perpetual charitable endowment in Islamic tradition. Your contribution will help establish sustainable projects that benefit communities for generations.
            </p>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Project Category
              </label>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                <button
                  className={`selection-btn p-3 rounded-md transition-all ${
                    projectType === "all" ? "border" : ""
                  }`}
                  onClick={() => setProjectType("all")}
                >
                  <div className="font-medium">All</div>
                </button>
                <button
                  className={`selection-btn p-3 rounded-md transition-all ${
                    projectType === "education" ? "border" : ""
                  }`}
                  onClick={() => setProjectType("education")}
                >
                  <div className="font-medium">Education</div>
                </button>
                <button
                  className={`selection-btn p-3 rounded-md transition-all ${
                    projectType === "healthcare" ? "border" : ""
                  }`}
                  onClick={() => setProjectType("healthcare")}
                >
                  <div className="font-medium">Healthcare</div>
                </button>
                <button
                  className={`selection-btn p-3 rounded-md transition-all ${
                    projectType === "agriculture" ? "border" : ""
                  }`}
                  onClick={() => setProjectType("agriculture")}
                >
                  <div className="font-medium">Agriculture</div>
                </button>
                <button
                  className={`selection-btn p-3 rounded-md transition-all ${
                    projectType === "social" ? "border" : ""
                  }`}
                  onClick={() => setProjectType("social")}
                >
                  <div className="font-medium">Social</div>
                </button>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {filteredProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => handleProjectSelect(project.id)}
                  className={`selection-btn w-full text-left p-4 rounded-md transition-all ${
                    selectedProject === project.id ? "border" : ""
                  }`}
                >
                  <div className="font-medium mb-1">{project.name}</div>
                  <div className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5 mb-1">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{
                        width: `${(project.raisedAmount / project.targetAmount) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>
                      RM{" "}
                      {project.raisedAmount.toLocaleString()} raised
                    </span>
                    <span>
                      Target: RM {project.targetAmount.toLocaleString()}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium"
                disabled={!selectedProject}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold mb-4">Donation Amount</h2>

            <div className="mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[50, 100, 200, 500].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`selection-btn p-4 rounded-md transition-all ${
                      donationAmount === amount && !customAmount ? "border" : ""
                    }`}
                  >
                    <div className="font-medium">RM {amount}</div>
                  </button>
                ))}
              </div>

              <label className="block text-sm font-medium mb-2">
                Custom Amount (RM)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-muted-foreground">RM</span>
                </div>
                <input
                  type="number"
                  value={customAmount || ""}
                  onChange={(e) => handleCustomAmount(parseFloat(e.target.value) || 0)}
                  min="1"
                  className="block w-full rounded-md border border-input pl-12 py-2 bg-background"
                  placeholder="Enter custom amount"
                />
              </div>
            </div>

            <div className="bg-secondary rounded-lg p-4 mb-8">
              <h3 className="font-medium mb-4">Donation Options</h3>
              
              <div className="mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="recurring"
                    checked={isRecurring}
                    onChange={(e) => setIsRecurring(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="recurring" className="text-sm font-medium">
                    Make this a recurring donation
                  </label>
                </div>
                
                {isRecurring && (
                  <div className="mt-3 ml-6">
                    <label className="block text-sm font-medium mb-2">
                      Frequency
                    </label>
                    <select
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      className="w-full rounded-md border border-input py-2 bg-background"
                    >
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Donor Name (Optional)
                </label>
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full rounded-md border border-input p-2 bg-background mb-4"
                  placeholder="Your name"
                />
                
                <label className="block text-sm font-medium mb-2">
                  Email Address (For Receipt)
                </label>
                <input
                  type="email"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full rounded-md border border-input p-2 bg-background"
                  placeholder="your-name@email.com"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2 rounded-md bg-secondary text-secondary-foreground font-medium"
              >
                Back
              </button>
              <button
                onClick={proceedToReview}
                className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium"
                disabled={donationAmount <= 0}
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
                  Selected Project
                </div>
                <div className="text-lg font-medium">
                  {projects.find((project) => project.id === selectedProject)?.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {projects.find((project) => project.id === selectedProject)?.description}
                </div>
              </div>

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
                </div>
                {isRecurring && (
                  <div className="text-sm text-muted-foreground">
                    Recurring {frequency}
                  </div>
                )}
              </div>

              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">
                  Donor Information
                </div>
                <div className="text-lg font-medium">
                  {donorName || "Anonymous"}
                </div>
                {donorEmail && (
                  <div className="text-sm text-muted-foreground">
                    {donorEmail}
                  </div>
                )}
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
                  <h4 className="font-medium mb-1">
                    Perpetual Benefits
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Your Waqf contribution will create lasting benefits. You'll receive detailed reports on the project's progress and a certificate of contribution for your records.
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
                Waqf donation of
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
                href="/payment-complete?id=TX987654321" // TODO : Replace with actual transaction ID
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
            If you have questions about Waqf or the donation process, our team is here to help.
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