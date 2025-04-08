import React from "react";
import Link from "next/link";

export default function Donate() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Make a Donation</h1>

        <p className="text-muted-foreground mb-8">
          Choose the type of charitable contribution you'd like to make. Our
          platform ensures your donation is transparent, efficient, and reaches
          those who need it most.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Waqf */}
          <Link href="/donate/waqf" className="block group">
            <div className="h-full border border-border rounded-lg overflow-hidden transition-all hover:shadow-md hover:border-primary bg-card">
              <div className="h-40 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-4">
                  <h2 className="text-xl font-bold text-white">Waqf</h2>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-4">
                  A perpetual endowment that generates ongoing benefits for the
                  community.
                </p>
                <span className="text-primary group-hover:underline font-medium text-sm">
                  Learn More &rarr;
                </span>
              </div>
            </div>
          </Link>

          {/* Zakat */}
          <Link href="/donate/zakat" className="block group">
            <div className="h-full border border-border rounded-lg overflow-hidden transition-all hover:shadow-md hover:border-primary bg-card">
              <div className="h-40 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-4">
                  <h2 className="text-xl font-bold text-white">Zakat</h2>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Fulfill your religious obligation with our Zakat calculator
                  and verified recipients.
                </p>
                <span className="text-primary group-hover:underline font-medium text-sm">
                  Calculate & Pay &rarr;
                </span>
              </div>
            </div>
          </Link>

          {/* Sadaqah */}
          <Link href="/donate/sadaqah" className="block group">
            <div className="h-full border border-border rounded-lg overflow-hidden transition-all hover:shadow-md hover:border-primary bg-card">
              <div className="h-40 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-4">
                  <h2 className="text-xl font-bold text-white">Sadaqah</h2>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Voluntary charity that can be given at any time for various
                  causes and needs.
                </p>
                <span className="text-primary group-hover:underline font-medium text-sm">
                  Donate Now &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-secondary rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Featured Organizations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href="/organizations/lembaga-zakat-selangor"
              className="block p-4 bg-card rounded-md border border-border hover:border-primary transition-all"
            >
              <h3 className="font-medium">Lembaga Zakat Selangor</h3>
              <p className="text-sm text-muted-foreground">
                Official zakat collection and distribution agency for Selangor
              </p>
            </Link>
            <Link
              href="/organizations/wakaf-selangor"
              className="block p-4 bg-card rounded-md border border-border hover:border-primary transition-all"
            >
              <h3 className="font-medium">Wakaf Selangor</h3>
              <p className="text-sm text-muted-foreground">
                Managing waqf assets and investments in Selangor
              </p>
            </Link>
            <Link
              href="/organizations/islamic-relief"
              className="block p-4 bg-card rounded-md border border-border hover:border-primary transition-all"
            >
              <h3 className="font-medium">Islamic Relief Malaysia</h3>
              <p className="text-sm text-muted-foreground">
                International humanitarian organization
              </p>
            </Link>
          </div>
          <div className="mt-4 text-right">
            <Link
              href="/organizations"
              className="text-primary hover:underline text-sm font-medium"
            >
              View all organizations &rarr;
            </Link>
          </div>
        </div>

        {/* Blockchain Transparency */}
        <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
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
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                <path d="M12 10v4" />
                <path d="M10 12h4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">
                Blockchain-Verified Donations
              </h3>
              <p className="text-muted-foreground text-sm">
                Every donation on our platform is recorded on a blockchain,
                creating a transparent, tamper-proof record that you can verify
                at any time. You'll receive a unique transaction ID that lets
                you track exactly how your funds are being used.
              </p>
              <Link
                href="/transparency"
                className="text-primary hover:underline text-sm font-medium inline-block mt-2"
              >
                Learn about our transparency features &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Inclusive Options */}
        <div className="rounded-lg border border-border p-6">
          <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="p-3 border border-border rounded-md bg-card flex flex-col items-center justify-center">
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
                className="mb-2 text-primary"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              <span className="text-sm font-medium">Bank Cards</span>
            </div>
            <div className="p-3 border border-border rounded-md bg-card flex flex-col items-center justify-center">
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
                className="mb-2 text-primary"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="text-sm font-medium">FPX</span>
            </div>
            <div className="p-3 border border-border rounded-md bg-card flex flex-col items-center justify-center">
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
                className="mb-2 text-primary"
              >
                <path d="M10.1 2.182L5.584 5.476c-.7.502-1.1 1.352-1.1 2.215v8.479a2.77 2.77 0 0 0 1.1 2.134l9.3 6.686c.634.456 1.475.456 2.11 0l5.614-4.03" />
                <path d="M2.1 15.5 9 10l-1.99-3.1" />
                <path d="M22.894 6.276c.076-.277.124-.565.124-.863a3.246 3.246 0 0 0-3.213-3.244c-1.396 0-2.5.945-3.01 1.344a1.926 1.926 0 0 1-2.42 0C13.864 3.113 12.761 2.2 11.333 2.2a3.246 3.246 0 0 0-3.243 3.244c0 .298.048.586.124.863L9.7 10l6.326 9.797L21.06 10l1.834-3.724Z" />
                <path d="M2.1 5.5 9 10l4.5-1.875" />
              </svg>
              <span className="text-sm font-medium">E-Wallets</span>
            </div>
            <div className="p-3 border border-border rounded-md bg-card flex flex-col items-center justify-center">
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
                className="mb-2 text-primary"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span className="text-sm font-medium">Cash Vouchers</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            We offer multiple payment options to ensure everyone can donate,
            including those without traditional banking access. Cash vouchers
            can be purchased at partner retail locations and redeemed on our
            platform.
          </p>
        </div>
      </div>
    </div>
  );
}
