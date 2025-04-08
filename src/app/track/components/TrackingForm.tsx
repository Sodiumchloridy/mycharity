import { useState } from "react";

interface TrackingFormProps {
  trackingId: string;
  setTrackingId: (id: string) => void;
  handleTrack: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export default function TrackingForm({
  trackingId,
  setTrackingId,
  handleTrack,
  isLoading,
}: TrackingFormProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-10">
      <h2 className="text-xl font-bold mb-6">Track Your Donation</h2>

      <form onSubmit={handleTrack} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Enter your donation ID (e.g. TX123456789)"
            className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Tracking
              </>
            ) : (
              "Track Donation"
            )}
          </button>
        </div>

        <div className="mt-3 text-sm text-muted-foreground text-center">
          You can find your donation ID in your receipt email or SMS
          confirmation.
          <br />
          <span className="text-xs">
            Try sample IDs: TX123456789, TX987654321, or TX567891234
          </span>
        </div>
      </form>
    </div>
  );
}
