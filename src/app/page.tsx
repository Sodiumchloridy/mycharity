import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Transparent, Efficient, <br />
              <span className="text-primary">Inclusive Charity</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              MyCharity leverages finance technology to ensure your donations
              are transparent, efficiently allocated, and accessible to everyone
              - including the unbanked.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#donation"
                className="btn px-8 py-3 rounded-md bg-primary text-primary-foreground text-lg font-medium transition-all hover:shadow-md"
              >
                Donate Now
              </Link>
              <Link
                href="/track"
                className="btn-secondary px-8 py-3 rounded-md text-lg font-medium transition-all hover:shadow-md"
              >
                Track Your Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How We&apos;re Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Transparency Feature */}
            <div className="interactive-card p-6 bg-card rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Full Transparency</h3>
              <p className="text-muted-foreground mb-4">
                Every donation is recorded on a blockchain, creating an
                immutable record that you can verify at any time.
              </p>
              <Link href="/transparency" className="mt-auto">
                Learn about our transparency
              </Link>
            </div>

            {/* Efficiency Feature */}
            <div className="interactive-card p-6 bg-card rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
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
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="M4.93 4.93l2.83 2.83" />
                  <path d="M16.24 16.24l2.83 2.83" />
                  <path d="M2 12h4" />
                  <path d="M18 12h4" />
                  <path d="M4.93 19.07l2.83-2.83" />
                  <path d="M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Efficiency</h3>
              <p className="text-muted-foreground mb-4">
                Smart contracts automatically distribute funds, reducing
                administrative costs and ensuring your donation has maximum
                impact.
              </p>
              <Link href="/efficiency" className="mt-auto">
                See how we maximize impact
              </Link>
            </div>

            {/* Inclusivity Feature */}
            <div className="interactive-card p-6 bg-card rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusive For All</h3>
              <p className="text-muted-foreground mb-4">
                Support mobile payments, digital wallets, and cash options to
                ensure everyone can participate regardless of banking access.
              </p>
              <Link href="/inclusivity" className="mt-auto">
                Discover inclusive options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Categories */}
      <section id="donation" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Donation Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Waqf */}
            <div className="interactive-card overflow-hidden rounded-lg shadow-sm bg-card">
              <div className="h-48 relative">
                <Image
                  src="/waqf.jpg"
                  alt="Waqf donation category"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Waqf</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6">
                  Contribute to permanent endowments that provide ongoing
                  benefits to the community. Waqf funds are invested, and
                  proceeds are used for charitable purposes indefinitely.
                </p>
                <Link
                  href="/donate/waqf"
                  className="btn px-4 py-2 rounded-md text-sm font-medium inline-block border hover:border-gray-500"
                >
                  Donate to Waqf
                </Link>
              </div>
            </div>

            {/* Zakat */}
            <div className="interactive-card overflow-hidden rounded-lg shadow-sm bg-card">
              <div className="h-48 relative">
                <Image
                  src="/zakat.jpg"
                  alt="Zakat donation category"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Zakat</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6">
                  Fulfill your religious obligation with our Zakat calculator
                  and distribution service. We ensure your Zakat reaches
                  eligible recipients across eight prescribed categories.
                </p>
                <Link
                  href="/donate/zakat"
                  className="btn px-4 py-2 rounded-md text-sm font-medium inline-block border hover:border-gray-500"
                >
                  Calculate & Pay Zakat
                </Link>
              </div>
            </div>

            {/* Sadaqah */}
            <div className="interactive-card overflow-hidden rounded-lg shadow-sm bg-card">
              <div className="h-48 relative">
                <Image
                  src="/saqadah.png"
                  alt="Sadaqah donation category"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Sadaqah</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6">
                  Give voluntary charity to causes that matter to you. From
                  emergency relief to education and healthcare, your Sadaqah can
                  make an immediate difference.
                </p>
                <Link
                  href="/donate/sadaqah"
                  className="btn px-4 py-2 rounded-md text-sm font-medium inline-block border hover:border-gray-500"
                >
                  Give Sadaqah
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Impact</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">$2.4M</p>
              <p className="text-lg text-muted-foreground">
                Donations Processed
              </p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">12K+</p>
              <p className="text-lg text-muted-foreground">Donors</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">96%</p>
              <p className="text-lg text-muted-foreground">
                Funds to Beneficiaries
              </p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">45</p>
              <p className="text-lg text-muted-foreground">
                Partner Organizations
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/impact"
              className="btn-secondary px-6 py-3 rounded-md text-sm font-medium"
            >
              View Detailed Impact Reports
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Organizations */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted Organizations
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="interactive-card aspect-video bg-card rounded-lg flex items-center justify-center p-6">
              <div className="text-xl font-semibold text-center">
                Lembaga Zakat Selangor
              </div>
            </div>
            <div className="interactive-card aspect-video bg-card rounded-lg flex items-center justify-center p-6">
              <div className="text-xl font-semibold text-center">
                Wakaf Selangor
              </div>
            </div>
            <div className="interactive-card aspect-video bg-card rounded-lg flex items-center justify-center p-6">
              <div className="text-xl font-semibold text-center">
                Islamic Relief Malaysia
              </div>
            </div>
            <div className="interactive-card aspect-video bg-card rounded-lg flex items-center justify-center p-6">
              <div className="text-xl font-semibold text-center">
                Global Sadaqah
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join thousands of donors who are transforming lives through
            transparent, efficient, and inclusive giving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#donation"
              className="btn-secondary px-8 py-3 rounded-md text-primary-foreground text-lg font-medium border hover:border-gray-500"
            >
              Start Donating
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
