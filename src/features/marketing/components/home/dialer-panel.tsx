import { Grid3x3, Mic, Pause, PhoneOff, Volume2 } from "lucide-react";
import { PanelFrame, PanelFieldLabel, PanelPill } from "@/features/marketing/components/home/panel-frame";

const controls = [
  { label: "Mute", icon: Mic },
  { label: "Hold", icon: Pause },
  { label: "Keypad", icon: Grid3x3 }
];

const dispositions = ["Interested", "Appointment Booked", "Sold", "Needs Follow Up"];

const sessionStats = [
  { value: "67", label: "dials this session", large: true },
  { value: "14", label: "conversations" },
  { value: "4", label: "appointments" }
];

export function DialerPanel() {
  return (
    <div>
      <PanelFrame
        toolbar={
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[0.68rem] font-bold uppercase tracking-normal text-foreground">Dial session</span>
              <span className="h-3 w-px bg-border" aria-hidden="true" />
              <PanelPill tone="neutral">3 lines</PanelPill>
              <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-semibold text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                Live
              </span>
              <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-semibold text-danger">
                <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                Recording
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {controls.map((control) => (
                <span
                  key={control.label}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-background/70 px-2 py-1 text-[0.65rem] font-semibold text-muted-foreground"
                >
                  <control.icon className="h-3 w-3" aria-hidden="true" />
                  {control.label}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 rounded-sm bg-danger px-2.5 py-1 text-[0.65rem] font-bold text-primary-foreground">
                <PhoneOff className="h-3 w-3" aria-hidden="true" />
                End
              </span>
            </div>
          </div>
        }
        bodyClassName="space-y-2.5 p-2.5"
      >
        <div className="overflow-x-auto">
          <div className="grid min-w-[560px] grid-cols-3 divide-x divide-border rounded-md border border-border bg-background/50">
            <div className="p-3">
              <div className="flex items-center justify-between gap-2">
                <PanelFieldLabel>Line 1</PanelFieldLabel>
                <PanelPill tone="warning" dot>
                  Ringing
                </PanelPill>
              </div>
              <p className="mt-3 text-[0.8rem] font-semibold text-foreground">James K.</p>
              <PanelPill tone="warning" className="mt-2.5">
                Callback owed
              </PanelPill>
            </div>

            <div className="rounded-md bg-success/[0.07] p-3 outline outline-1 -outline-offset-1 outline-success/60">
              <div className="flex items-center justify-between gap-2">
                <PanelFieldLabel>Line 2</PanelFieldLabel>
                <PanelPill tone="success">Connected</PanelPill>
              </div>
              <p className="mt-3 text-[0.85rem] font-bold text-foreground">Denise W.</p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-[0.68rem] font-semibold text-success">
                <Volume2 className="h-3 w-3" aria-hidden="true" />
                Live audio
              </p>
            </div>

            <div className="p-3">
              <p className="text-[0.7rem] font-semibold text-muted-foreground">+ Open slot</p>
              <p className="mt-1 text-[0.65rem] italic text-muted-foreground">Dialing next...</p>
            </div>
          </div>
        </div>

        <p className="inline-flex w-full items-center gap-2 rounded-md border border-danger/35 bg-danger-subtle/50 px-3 py-2 text-[0.68rem] font-semibold text-danger">
          <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
          This call is being recorded
        </p>

        <div className="rounded-md border border-l-2 border-primary/45 border-l-primary bg-primary-subtle/35 px-3 py-2.5">
          <PanelFieldLabel className="text-primary-hover">Why they&apos;re calling</PanelFieldLabel>
          <p className="mt-1.5 text-[0.75rem] leading-5 text-muted-foreground">
            <span className="font-semibold text-primary-hover">final expense</span> — wants{" "}
            <strong className="font-bold text-foreground">~$25K</strong> coverage · beneficiary:{" "}
            <strong className="font-bold text-foreground">daughter</strong> · budget{" "}
            <strong className="font-bold text-foreground">$60/mo</strong>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex flex-wrap gap-2">
            {dispositions.map((disposition) => (
              <span
                key={disposition}
                className="rounded-sm border border-border bg-background/70 px-2.5 py-1 text-[0.68rem] font-medium text-muted-foreground"
              >
                {disposition}
              </span>
            ))}
          </div>
          <span className="rounded-sm bg-primary px-3 py-1.5 text-[0.68rem] font-bold text-primary-foreground">
            Submit &amp; Call Next →
          </span>
        </div>
      </PanelFrame>

      <div className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-2">
        {sessionStats.map((stat) => (
          <p key={stat.label} className="flex items-baseline gap-1.5">
            <span
              className={
                stat.large
                  ? "text-3xl font-bold leading-none text-foreground"
                  : "text-sm font-bold leading-none text-foreground"
              }
            >
              {stat.value}
            </span>
            <span className="text-[0.7rem] text-muted-foreground">{stat.label}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
