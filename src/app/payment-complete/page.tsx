"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Transaction, sampleTransactions } from "@/data/sampleData";

export default function PaymentCompletePage() {
  const searchParams = useSearchParams();
  const transaction: Transaction = sampleTransactions[searchParams.get("id") ?? "TX123456789"]; // Fallback to first transaction if no ID is found

  // Get payment details from URL params or use defaults
  const paymentId = transaction.id;
  const amount = transaction.amount;
  const type = transaction.type;
  const organization = transaction.organization;
  const date = transaction.date;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Payment Successful</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thank you for your contribution. Your donation has been processed successfully and
            will be used to make a positive impact.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-bold">Payment Details</h2>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Transaction ID</h3>
                <p className="font-mono text-sm break-all">{paymentId}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Date</h3>
                <p>{date}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Donation Type</h3>
                <p>{type}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Organization</h3>
                <p>{organization}</p>
              </div>
            </div>

            <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Total Amount</h3>
                <div className="text-xl font-bold text-primary">
                  RM {amount}
                </div>
              </div>
            </div>

            <div className="p-4 bg-secondary rounded-lg mb-6">
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
                  <h4 className="font-medium mb-1">Transparent Tracking</h4>
                  <p className="text-sm text-muted-foreground">
                    Your donation has been recorded on our blockchain system.
                    You can track exactly how your contribution is being used with
                    your transaction ID.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-between">
              <Link
                href={`/track?id=${paymentId}`}
                className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium"
              >
                Track Your Donation
              </Link>

              <Link
                href="/dashboard"
                className="px-6 py-2 rounded-md bg-secondary text-secondary-foreground font-medium"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">Receipt Information</h3>
          <p className="text-muted-foreground mb-4">
            A receipt has been sent to your email address. You can also
            access all your donation receipts from your dashboard.
          </p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md text-sm font-medium">
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
                className="h-4 w-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Receipt
            </button>
            <Link
              href="/dashboard?tab=tax"
              className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md text-sm font-medium"
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
                className="h-4 w-4"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
                <path d="m9 16 2 2 4-4" />
              </svg>
              Tax Documents
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}