

export default function SmsSubscription() {
  return (
    <div className="bg-primary/5 border border-primary/10 rounded-lg p-6">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="md:w-1/4 flex-shrink-0">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <rect width="14" height="20" x="5" y="2" rx="2" />
              <path d="M15 14H9" />
              <path d="M15 8H9" />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Get Updates via SMS</h3>
          <p className="text-muted-foreground mb-4">
            Stay informed about how your donation is making an impact through
            SMS updates.
          </p>
          <div className="flex gap-3">
            <input
              type="tel"
              placeholder="Your phone number"
              className="px-3 py-2 rounded-md border border-input bg-background flex-1"
            />
            <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
