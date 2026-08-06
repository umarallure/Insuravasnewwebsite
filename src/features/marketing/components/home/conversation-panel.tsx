import { Play } from "lucide-react";
import { PanelFrame, PanelPill } from "@/features/marketing/components/home/panel-frame";
import { cn } from "@/lib/utils";

export interface ConversationMessage {
  author: "lead" | "ashley";
  text: string;
  /** Optional elapsed-time stamp shown next to the sender label, e.g. "0:11". */
  time?: string;
}

const defaultMessages: ConversationMessage[] = [
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

interface VoiceRow {
  label: string;
  progress: number;
  duration: string;
  badge: string;
}

const defaultVoice: VoiceRow = {
  label: "Voice · Confirmation call",
  progress: 63,
  duration: "0:31 / 0:49",
  badge: "Appt set"
};

interface FooterBadge {
  label: string;
  tone?: "success" | "neutral";
}

interface ConversationPanelProps {
  title?: string;
  badge?: string;
  messages?: ConversationMessage[];
  /** Set to null to hide the voice player row entirely. */
  voice?: VoiceRow | null;
  footnote?: string;
  /** Renders a row of small pills below the messages instead of the italic footnote, e.g. call outcomes. */
  footerBadges?: FooterBadge[];
  className?: string;
  /** Caps the panel width. Defaults to the homepage chat width; pass a larger value for wider call-style panels. */
  maxWidth?: number;
  /** Label for the non-Ashley party, e.g. "Lead" for SMS threads or "Caller" for phone calls. */
  leadLabel?: string;
  /** Tightens internal padding and message spacing so the panel sits fully above the fold. */
  dense?: boolean;
}

export function ConversationPanel({
  title = "Conversations · Linda P. · Final expense",
  badge = "Appt set",
  messages = defaultMessages,
  voice = defaultVoice,
  footnote = "Appointment booked · 3:30 PM · added to Marcus's calendar",
  footerBadges,
  className,
  maxWidth = 620,
  leadLabel = "Lead",
  dense = false
}: ConversationPanelProps) {
  return (
    <PanelFrame
      title={title}
      badge={<PanelPill tone="success">{badge}</PanelPill>}
      className={cn("mx-auto w-full", className)}
      style={{ maxWidth }}
      bodyClassName={dense ? "px-3.5 pb-5 pt-4 " : "p-5 "}
    >
      <ol className={dense ? "space-y-1.5" : "space-y-3"}>
        {messages.map((message, index) => {
          const isAshley = message.author === "ashley";

          return (
            <li
              key={`${message.author}-${index}`}
              className={cn("flex flex-col gap-1", isAshley ? "items-end" : "items-start")}
            >
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 text-[0.625rem] font-bold leading-none",
                  isAshley ? "text-primary-hover" : "text-success"
                )}
              >
                {isAshley ? "Ashley · AI" : leadLabel}
                {message.time ? (
                  <span className="font-medium text-muted-foreground">{message.time}</span>
                ) : null}
              </span>
              <p
                className={cn(
                  "w-fit rounded-sm border text-left text-foreground",
                  dense ? "px-2.5 py-1.5" : "px-3 py-2",
                  isAshley
                    ? "border-primary/45 bg-primary-subtle/85"
                    : "border-success/25 bg-success-subtle/70"
                )}
                style={{
                  maxWidth: "min(85%, 620px)",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 500,
                  fontSize: dense ? "12px" : "13px",
                  lineHeight: dense ? 1.3 : 1.4
                }}
              >
                {message.text}
              </p>
            </li>
          );
        })}
      </ol>

      {voice ? (
        <div
          className={cn(
            "flex items-center gap-3 rounded-md border border-border bg-background/70",
            dense ? "mt-3 px-2.5 py-2" : "mt-4 px-3 py-2.5"
          )}
        >
          <span
            className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-success/60 text-success"
            aria-hidden="true"
          >
            <Play className="ml-0.5 h-3 w-3 fill-current" />
          </span>
          <span className="hidden shrink-0 text-[0.6rem] font-bold uppercase leading-tight text-muted-foreground xs:inline">
            {voice.label}
          </span>
          <span className="h-1 min-w-8 flex-1 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <span className="block h-full rounded-full bg-success" style={{ width: `${voice.progress}%` }} />
          </span>
          <span className="shrink-0 text-[0.65rem] font-medium tabular-nums text-muted-foreground">
            {voice.duration}
          </span>
          <PanelPill tone="success" className="shrink-0">
            {voice.badge}
          </PanelPill>
        </div>
      ) : null}

      {footerBadges?.length ? (
        <div className={cn("flex flex-wrap items-center justify-center gap-2", dense ? "mt-2" : "mt-3.5")}>
          {footerBadges.map((item) => (
            <PanelPill key={item.label} tone={item.tone ?? "neutral"}>
              {item.label}
            </PanelPill>
          ))}
        </div>
      ) : footnote ? (
        <p
          className={cn(
            "text-center text-[0.7rem] italic leading-tight text-muted-foreground",
            dense ? "mt-3" : "mt-3.5"
          )}
        >
          {footnote}
        </p>
      ) : null}
    </PanelFrame>
  );
}
