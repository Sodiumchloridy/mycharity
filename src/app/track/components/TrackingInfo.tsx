export default function TrackingInfo() {
  return (
    <div className="mt-16">
      <h2 className="text-xl font-bold mb-6 text-center">
        How Our Transparent Tracking Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
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
              <path d="M21 2H9a2 2 0 0 0-2 2v1m0 10v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2" />
              <path d="M10 18H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1" />
              <path d="M15 22v-4" />
            </svg>
          </div>
          <h3 className="font-bold mb-2">Secure Verification</h3>
          <p className="text-sm text-muted-foreground">
            Every donation is recorded in our secure, audited database with a
            unique verification code that allows transparent tracking while
            protecting sensitive information.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
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
              <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
              <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
              <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
            </svg>
          </div>
          <h3 className="font-bold mb-2">Real-Time Tracking</h3>
          <p className="text-sm text-muted-foreground">
            Follow your donation's journey from receipt to impact with real-time
            updates at every stage of the process, ensuring complete
            transparency.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
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
              <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
              <path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
              <path d="M12 12v3" />
              <path d="M8 21h8a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2z" />
              <path d="M15 16v-2" />
              <path d="M9 16v-2" />
            </svg>
          </div>
          <h3 className="font-bold mb-2">Impact Reporting</h3>
          <p className="text-sm text-muted-foreground">
            Receive detailed reports on how your donation has helped
            beneficiaries, with specific metrics and outcomes to show the
            tangible difference you've made.
          </p>
        </div>
      </div>
    </div>
  );
}
