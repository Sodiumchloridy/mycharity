import StatusBadge from "./StatusBadge";
import { formatDate } from "../utils/formatters";

interface TimelineEvent {
  date: string;
  status: string;
  note: string;
}

interface DonationTimelineProps {
  events: TimelineEvent[];
}

export default function DonationTimeline({ events }: DonationTimelineProps) {
  return (
    <div className="p-6">
      <h3 className="font-bold mb-4">Donation Timeline</h3>
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-border"></div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="relative pl-10">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                {index + 1}
              </div>
              <div>
                <div className="flex gap-2 items-center mb-1">
                  <StatusBadge status={event.status} />
                  <span className="text-sm text-muted-foreground">
                    {formatDate(event.date)}
                  </span>
                </div>
                <p className="text-sm">{event.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
