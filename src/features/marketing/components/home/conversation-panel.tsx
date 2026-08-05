import { Play } from "lucide-react";
import { PanelFrame, PanelPill } from "@/features/marketing/components/home/panel-frame";
import { cn } from "@/lib/utils";

interface ConversationMessage {
  author: "lead" | "ashley";
  text: string;
}

const messages: ConversationMessage[] = [
  { author: "lead", text: "Who is this?" },
  {
    author: "ashley",
    text:
      "Hi Linda, it's Ashley with the life insurance office. You requested final expense info last week. Do you have 2 minutes today?"
  },
  { author: "lead", text: "How much is it a month?" },
  {
    author: "ashley",
    text:
      "Most folks are between $40 and $80 a month. A licensed agent has 3:30 or 5:15 open today for exact numbers. Which works better?"
  }
];

const voiceProgress = 63;

export function ConversationPanel() {
  return (
    <PanelFrame
      title="Conversations · Linda P. · Final expense"
      badge={<PanelPill tone="success">Appt set</PanelPill>}
      className="mx-auto max-w-[520px]"
      bodyClassName="p-4"
    >
      <ol className="space-y-3.5">
        {messages.map((message, index) => {
          const isAshley = message.author === "ashley";

          return (
            <li
              key={`${message.author}-${index}`}
              className={cn("flex flex-col gap-1", isAshley ? "items-end" : "items-start")}
            >
              <span
                className={cn(
                  "text-[0.625rem] font-bold leading-none",
                  isAshley ? "text-primary-hover" : "text-success"
                )}
              >
                {isAshley ? "Ashley · AI" : "Lead"}
              </span>
              <p
                className={cn(
                  "w-fit max-w-[80%] rounded-sm border px-3 py-2 text-[0.8125rem] leading-5 text-foreground",
                  isAshley
                    ? "border-primary/45 bg-primary-subtle/85"
                    : "border-success/25 bg-success-subtle/70"
                )}
              >
                {message.text}
              </p>
            </li>
          );
        })}
      </ol>

      <div className="mt-4 flex items-center gap-3 rounded-md border border-border bg-background/70 px-3 py-2.5">
        <span
          className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-success/60 text-success"
          aria-hidden="true"
        >
          <Play className="ml-0.5 h-3 w-3 fill-current" />
        </span>
        <span className="hidden shrink-0 text-[0.6rem] font-bold uppercase leading-tight text-muted-foreground xs:inline">
          Voice · Confirmation call
        </span>
        <span className="h-1 min-w-8 flex-1 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
          <span className="block h-full rounded-full bg-success" style={{ width: `${voiceProgress}%` }} />
        </span>
        <span className="shrink-0 text-[0.65rem] font-medium tabular-nums text-muted-foreground">0:31 / 0:49</span>
        <PanelPill tone="success" className="shrink-0">
          Appt set
        </PanelPill>
      </div>

      <p className="mt-3.5 text-center text-[0.7rem] italic leading-tight text-muted-foreground">
        Appointment booked · 3:30 PM · added to Marcus&apos;s calendar
      </p>
    </PanelFrame>
  );
}
