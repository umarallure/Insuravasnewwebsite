import { PanelFrame, PanelFieldLabel, PanelPill } from "@/features/marketing/components/home/panel-frame";
import { cn } from "@/lib/utils";

interface CalendarEvent {
  title: string;
  meta: string;
  setByAshley?: boolean;
  selected?: boolean;
}

interface CalendarDay {
  label: string;
  events: CalendarEvent[];
}

const days: CalendarDay[] = [
  {
    label: "Mon 13",
    events: [{ title: "Team standup", meta: "9:00 AM" }]
  },
  {
    label: "Tue 14",
    events: [
      { title: "Linda P. · final expense", meta: "3:30 PM · set by Ashley", setByAshley: true, selected: true },
      { title: "Follow-up · R. Boyd", meta: "5:15 PM" }
    ]
  },
  {
    label: "Wed 15",
    events: [{ title: "James K. · veteran", meta: "10:00 AM · set by Ashley", setByAshley: true }]
  },
  {
    label: "Thu 16",
    events: [
      { title: "Denise W. · mortgage", meta: "1:00 PM · set by Ashley", setByAshley: true },
      { title: "Carrier call", meta: "4:00 PM" }
    ]
  },
  {
    label: "Fri 17",
    events: [{ title: "Paul H. · final expense", meta: "11:30 AM · set by Ashley", setByAshley: true }]
  }
];

export function CalendarPanel() {
  return (
    <PanelFrame
      title="Calendar · Marcus Reed · this week"
      badge={<PanelPill tone="success">4 set by Ashley</PanelPill>}
      bodyClassName="p-0"
    >
      <div className="overflow-x-auto">
        <div className="grid min-w-[680px] grid-cols-5 divide-x divide-border">
          {days.map((day) => (
            <div key={day.label} className="min-h-[136px] p-3">
              <PanelFieldLabel className="block">{day.label}</PanelFieldLabel>
              <div className="mt-3 space-y-2">
                {day.events.map((event) => (
                  <div
                    key={event.title}
                    className={cn(
                      "rounded-sm border p-2",
                      event.setByAshley
                        ? event.selected
                          ? "border-primary bg-primary-subtle/90"
                          : "border-primary/45 bg-primary-subtle/70"
                        : "border-border bg-background/70"
                    )}
                  >
                    <p className="text-[0.7rem] font-bold leading-4 text-foreground">{event.title}</p>
                    <p className="mt-1 text-[0.65rem] leading-4 text-muted-foreground">{event.meta}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-border p-3.5 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[0.75rem] font-bold text-foreground">Linda P. · final expense — Tue 3:30 PM</p>
            <PanelPill tone="success" dot>
              Synced
            </PanelPill>
          </div>
          <p className="mt-1.5 text-[0.65rem] leading-4 text-muted-foreground">
            Appointment notes: prefers afternoon · husband joining the call
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-4">
          <span className="text-[0.68rem] font-medium text-muted-foreground">View Voice AI history</span>
          <span className="text-[0.68rem] font-medium text-muted-foreground">View SMS AI history</span>
        </div>
      </div>
    </PanelFrame>
  );
}
