"use client";

import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip as ChartTooltip, XAxis, YAxis } from "recharts";
import { CalendarDays, Coffee, Copy, GripVertical, Mail, Phone, Power, Sparkles, Trash2 } from "lucide-react";
import { StatusBadge } from "@/components/shared/status-badge";
import { Badge } from "@/components/ui/badge";
import { themeConfig } from "@/config/theme";
import { cn } from "@/lib/utils";
import type { ProductPanel } from "@/features/marketing/types/marketing.types";

interface ProductWindowProps {
  panel: ProductPanel;
  className?: string;
}

export function ProductWindow({ panel, className }: ProductWindowProps) {
  const isCapped = panel.variant === "email" || panel.variant === "conversation" || panel.variant === "campaign-builder" || panel.variant === "calendar-week" || panel.variant === "dialer-v2" || panel.variant === "drip-sequence" || panel.variant === "email-builder" || panel.variant === "lifecycle" || panel.variant === "call-summary" || panel.variant === "compliance-health";

  return (
    <>
      <div
        className={cn("overflow-hidden rounded-md border shadow-lg", className)}
        style={{ background: "#0a0d14", borderColor: "#1f2531", maxWidth: isCapped ? "780px" : undefined, width: "100%" }}
      >
        <div
          className="flex h-10 items-center justify-between border-b px-4"
          style={{ background: "#1c212b", borderColor: "#242a36" }}
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ background: isCapped ? "#3d4451" : "#ff5f57" }} />
            <span className="h-2 w-2 rounded-full" style={{ background: isCapped ? "#3d4451" : "#febc2e" }} />
            <span className="h-2 w-2 rounded-full" style={{ background: isCapped ? "#3d4451" : "#28c840" }} />
            <span className="ml-2 text-caption font-semibold text-muted-foreground">{panel.title}</span>
          </div>
          {panel.badge ? (
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "3px 8px",
                borderRadius: "5px",
                border: (panel.variant === "calendar-week" || panel.variant === "dialer-v2" || panel.variant === "drip-sequence" || panel.variant === "call-summary") ? "1px solid rgba(34,197,94,0.5)" : "1px solid rgba(139,92,246,0.5)",
                color: (panel.variant === "calendar-week" || panel.variant === "dialer-v2" || panel.variant === "drip-sequence" || panel.variant === "call-summary") ? "#4ade80" : "#a78bfa",
                background: "transparent"
              }}
            >
              {panel.badge}
            </span>
          ) : null}
        </div>
        <div className="p-4">
          {panel.variant === "conversation" ? <ConversationPanel panel={panel} /> : null}
          {panel.variant === "email" ? <EmailPanel /> : null}
          {panel.variant === "campaign-builder" ? <CampaignBuilderPanel /> : null}
          {panel.variant === "calendar-week" ? <CalendarWeekPanel /> : null}
          {panel.variant === "dialer-v2" ? <DialerV2Content /> : null}
          {panel.variant === "drip-sequence" ? <DripSequencePanel /> : null}
          {panel.variant === "email-builder" ? <EmailBuilderPanel /> : null}
          {panel.variant === "lifecycle" ? <LifecyclePanel /> : null}
          {panel.variant === "call-summary" ? <CallSummaryPanel /> : null}
          {panel.variant === "compliance-health" ? <ComplianceHealthPanel /> : null}
          {panel.variant === "chart" ? <ChartPanel panel={panel} /> : null}
          {panel.variant === "calendar" ? <CalendarPanel panel={panel} /> : null}
          {panel.variant === "campaign" ? <CampaignPanel panel={panel} /> : null}
          {panel.variant === "dialer" ? <DialerPanel panel={panel} /> : null}
          {!panel.variant || panel.variant === "table" ? <TablePanel panel={panel} /> : null}
        </div>
      </div>
      {panel.variant === "dialer-v2" ? <DialerV2Stats /> : null}
    </>
  );
}

function ConversationPanel({ panel }: ProductWindowProps) {
  return (
    <div className="space-y-2.5">
      {(panel.rows ?? []).map((row, index) => {
        const isAshley = row.label !== "Lead";

        return (
          <div
            key={`${row.label}-${index}`}
            className={cn("flex flex-col gap-1", isAshley ? "items-end" : "items-start")}
          >
            <span
              className={cn(
                "inline-flex items-center gap-1.5 text-[0.625rem] font-bold leading-none",
                isAshley ? "text-primary-hover" : "text-success"
              )}
            >
              {isAshley ? (
                <Sparkles className="h-3 w-3" aria-hidden="true" />
              ) : (
                <Phone className="h-3 w-3" aria-hidden="true" />
              )}
              {row.label}
            </span>
            <p
              className={cn(
                "w-fit rounded-sm border text-left text-foreground",
                isAshley
                  ? "border-primary/45 bg-primary-subtle/85"
                  : "border-success/25 bg-success-subtle/70"
              )}
              style={{
                maxWidth: "min(85%, 620px)",
                padding: "8px 12px",
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                lineHeight: 1.4
              }}
            >
              {row.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function EmailPanel() {
  const sidebar: { name: string; subject: string; active: boolean; icon: "mail" | "coffee" | "none" }[] = [
    { name: "Diane W.", subject: "Re: Final expense cove...", active: true, icon: "mail" },
    { name: "Robert M.", subject: "Quote for my wife and me", active: false, icon: "mail" },
    { name: "Karen S.", subject: "Thanks, see you Thursday", active: false, icon: "none" }
  ];

  const iconMap = { mail: Mail, coffee: Coffee, none: null };

  return (
    <div className="grid min-h-[280px] overflow-hidden rounded-sm border sm:grid-cols-[190px_1fr]" style={{ borderColor: "#1f2531" }}>
      <div className="border-b sm:border-b-0 sm:border-r" style={{ borderColor: "#1f2531", background: "#0c1018" }}>
        <div className="flex items-center justify-between px-3 py-2.5" style={{ borderBottom: "1px solid #1f2531" }}>
          <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a93a5" }}>Email</span>
          <span style={{ fontSize: "10px", color: "#8a93a5" }}>12 total</span>
        </div>
        <ul className="p-2">
          {sidebar.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-2 rounded-sm px-2 py-2.5"
              style={{ background: item.active ? "rgba(139,92,246,0.08)" : "transparent", borderLeft: item.active ? "2px solid #8b5cf6" : "2px solid transparent" }}
            >
              {item.active ? (
                <span className="h-[5px] w-[5px] shrink-0 rounded-full" style={{ background: "#8b5cf6" }} aria-hidden="true" />
              ) : null}
              <div className="min-w-0 flex-1">
                <p style={{ fontSize: "12px", fontWeight: 600, color: item.active ? "#f0f2f5" : "#c3cad6" }}>{item.name}</p>
                <p className="mt-0.5 truncate" style={{ fontSize: "11px", color: "#6b7280" }}>{item.subject}</p>
              </div>
              {(() => {
                const Icon = iconMap[item.icon];
                return Icon ? <Icon className="h-3.5 w-3.5 shrink-0" style={{ color: "#4ade80" }} aria-hidden="true" /> : null;
              })()}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col p-3.5" style={{ background: "#0a0d14" }}>
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#f0f2f5" }}>Diane W.</p>
            <p style={{ fontSize: "11px", color: "#6b7280", marginTop: "2px" }}>diane.w@example.com</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span style={{ display: "inline-flex", alignItems: "center", height: "24px", padding: "0 8px", borderRadius: "6px", fontSize: "10.5px", fontWeight: 600, background: "rgba(139,92,246,0.14)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.3)" }}>AI</span>
            <span className="inline-flex items-center gap-1" style={{ height: "24px", padding: "0 8px", borderRadius: "6px", fontSize: "10.5px", fontWeight: 600, background: "rgba(139,92,246,0.14)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.3)" }}>
              <Power className="h-3 w-3" aria-hidden="true" /> AI On
            </span>
          </div>
        </div>

        <div className="mt-4 flex-1 space-y-3">
          <div>
            <p style={{ fontSize: "11px", color: "#22c55e", fontWeight: 600 }}>
              Diane W. <span style={{ color: "#6b7280", fontWeight: 400 }}>9:41 AM</span>
            </p>
            <div className="mt-1.5 rounded-sm border px-3 py-2.5" style={{ borderColor: "rgba(34,197,94,0.25)", background: "rgba(8,55,41,0.7)" }}>
              <p style={{ fontSize: "12.5px", fontWeight: 600, color: "#f0f2f5" }}>Re: Final expense coverage</p>
              <p style={{ fontSize: "12px", color: "#c3cad6", marginTop: "4px", lineHeight: 1.45 }}>
                Does this cover my husband too? And what happens if I miss a payment?
              </p>
            </div>
          </div>

          <div>
            <p className="text-right" style={{ fontSize: "11px", color: "#a78bfa", fontWeight: 600 }}>
              Ashley · AI <span style={{ color: "#6b7280", fontWeight: 400 }}>9:43 AM</span>
            </p>
            <div className="mt-1.5 rounded-sm border px-3 py-2.5" style={{ borderColor: "rgba(139,92,246,0.45)", background: "rgba(35,26,68,0.85)" }}>
              <p style={{ fontSize: "12.5px", fontWeight: 600, color: "#f0f2f5" }}>Re: Final expense coverage</p>
              <p style={{ fontSize: "12px", color: "#c3cad6", marginTop: "4px", lineHeight: 1.45 }}>
                Yes, one policy each covers you both, and there&apos;s a 30-day grace period on payments so coverage doesn&apos;t lapse. A licensed agent can go over exact rates with you. Would tomorrow at 10:15 AM or 2:30 PM work better?
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-3 rounded-sm border px-3 py-2" style={{ borderColor: "#1f2531", background: "#12151f" }}>
          <CalendarDays className="h-3.5 w-3.5 shrink-0" style={{ color: "#22c55e" }} aria-hidden="true" />
          <span className="min-w-0 truncate" style={{ fontSize: "11.5px", color: "#c3cad6" }}>
            Tomorrow · 10:15 AM · added to Marcus&apos;s cal...
          </span>
          <span className="ml-auto shrink-0" style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#22c55e", background: "rgba(8,55,41,0.7)", border: "1px solid rgba(34,197,94,0.4)", borderRadius: "5px", padding: "3px 7px" }}>
            Appointment booked
          </span>
        </div>
      </div>
    </div>
  );
}

function CampaignBuilderPanel() {
  const sections = [
    {
      label: "Audience",
      value: "Final expense · aged 30-90 days · ",
      bold: "412 leads"
    },
    {
      label: "Agent",
      value: "Ashley · Final Expense persona · objection pack on",
      tags: ["Final expense", "Veteran", "Mortgage", "IUL", "Trucker", "Beneficiary"]
    },
    {
      label: "Schedule",
      value: "Mon–Sat · 9:00a–7:00p lead local time · TCPA windows enforced"
    },
    {
      label: "Caller IDs",
      value: "3 numbers rotating · health ",
      dots: true,
      suffix: " all clean"
    }
  ];

  return (
    <div className="space-y-3">
      {sections.map((section) => (
        <div
          key={section.label}
          className="flex items-start justify-between gap-4 rounded-sm border-l-2 px-4 py-3"
          style={{ borderLeftColor: "#2a3348", borderTop: "1px solid #1f2531", borderRight: "1px solid #1f2531", borderBottom: "1px solid #1f2531", borderRadius: "6px", background: "#0c1018" }}
        >
          <div className="min-w-0 flex-1">
            <p style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a93a5", marginBottom: "6px" }}>
              {section.label}
            </p>
            <p style={{ fontSize: "13px", fontWeight: 500, color: "#f0f2f5", lineHeight: 1.4 }}>
              {section.value}
              {section.bold ? <strong style={{ fontWeight: 700 }}>{section.bold}</strong> : null}
              {section.dots ? (
                <>
                  <span className="inline-flex gap-0.5" aria-hidden="true">
                    <span className="inline-block h-[6px] w-[6px] rounded-full" style={{ background: "#22c55e" }} />
                    <span className="inline-block h-[6px] w-[6px] rounded-full" style={{ background: "#22c55e" }} />
                    <span className="inline-block h-[6px] w-[6px] rounded-full" style={{ background: "#22c55e" }} />
                  </span>
                  {section.suffix}
                </>
              ) : null}
            </p>
            {section.tags ? (
              <div className="mt-2.5 flex flex-wrap gap-2">
                {section.tags.map((tag, idx) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "10.5px",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      padding: "3px 8px",
                      borderRadius: "5px",
                      border: idx === 0 ? "1px solid rgba(139,92,246,0.5)" : "1px solid #2a3348",
                      background: idx === 0 ? "rgba(35,26,68,0.7)" : "#12151f",
                      color: idx === 0 ? "#a78bfa" : "#8a93a5"
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          <span style={{ fontSize: "12px", fontWeight: 500, color: "#a78bfa", cursor: "default", flexShrink: 0 }}>Edit</span>
        </div>
      ))}

      <div className="flex items-center justify-between gap-4 pt-2">
        <p style={{ fontSize: "12.5px", color: "#6b7280", fontStyle: "italic" }}>
          Est. 3–4 days to first pass · pauses itself if pickup drops
        </p>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            height: "36px",
            padding: "0 18px",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 600,
            background: "#8b5cf6",
            color: "#ffffff",
            flexShrink: 0
          }}
        >
          Launch campaign
        </span>
      </div>
    </div>
  );
}

function CalendarWeekPanel() {
  const days: { label: string; events: { title: string; meta: string; ashley?: boolean }[] }[] = [
    {
      label: "Mon 13",
      events: [{ title: "Team standup", meta: "9:00 AM" }]
    },
    {
      label: "Tue 14",
      events: [
        { title: "Linda P. · final expense", meta: "3:30 PM · set by Ashley", ashley: true },
        { title: "Follow-up · R. Boyd", meta: "5:15 PM" }
      ]
    },
    {
      label: "Wed 15",
      events: [{ title: "James K. · veteran", meta: "10:00 AM · set by Ashley", ashley: true }]
    },
    {
      label: "Thu 16",
      events: [
        { title: "Denise W. · mortgage", meta: "1:00 PM · set by Ashley", ashley: true },
        { title: "Carrier call", meta: "4:00 PM" }
      ]
    },
    {
      label: "Fri 17",
      events: [{ title: "Paul H. · final expense", meta: "11:30 AM · set by Ashley", ashley: true }]
    }
  ];

  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" style={{ borderTop: "1px solid #1f2531" }}>
        {days.map((day, idx) => (
          <div key={day.label} className="min-h-[140px] p-3" style={{ borderLeft: idx > 0 ? "1px solid #1f2531" : undefined }}>
            <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a93a5" }}>
              {day.label}
            </p>
            <div className="mt-3 space-y-2">
              {day.events.map((event) => (
                <div
                  key={event.title}
                  className="rounded-sm border p-2"
                  style={{
                    borderColor: event.ashley ? "rgba(139,92,246,0.6)" : "#2a3348",
                    background: event.ashley ? "rgba(35,26,68,0.75)" : "#12151f"
                  }}
                >
                  <p style={{ fontSize: "11.5px", fontWeight: 600, color: "#f0f2f5", lineHeight: 1.35 }}>{event.title}</p>
                  <p style={{ fontSize: "10.5px", color: event.ashley ? "#a78bfa" : "#6b7280", marginTop: "3px", lineHeight: 1.3 }}>{event.meta}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmailBuilderPanel() {
  const blocks = [
    { icon: "T", label: "Text" },
    { icon: "H", label: "Heading" },
    { icon: "⊡", label: "Image" },
    { icon: "✦", label: "Button", active: true },
    { icon: "—", label: "Divider" },
    { icon: "↕", label: "Spacer" },
    { icon: "⊞", label: "Columns" },
    { icon: "✎", label: "Signature" },
    { icon: "≤", label: "Social" },
    { icon: "{ }", label: "Merge tag" }
  ];

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 border-b pb-3" style={{ borderColor: "#1f2531" }}>
        {["Settings", "Steps", "Enrollments", "Stats"].map((tab) => (
          <span
            key={tab}
            style={{
              fontSize: "12px",
              fontWeight: tab === "Steps" ? 600 : 500,
              color: tab === "Steps" ? "#ffffff" : "#8a93a5",
              background: tab === "Steps" ? "#8b5cf6" : "transparent",
              border: tab === "Steps" ? "1px solid #8b5cf6" : "1px solid transparent",
              borderRadius: "6px",
              padding: "5px 12px"
            }}
          >
            {tab}
          </span>
        ))}
        <span className="ml-auto" style={{ fontSize: "11px", color: "#8a93a5" }}>
          Emails this month <strong style={{ color: "#f0f2f5", fontWeight: 600 }}>412 / 2,000 included</strong>
          <span className="ml-1.5 inline-block h-[4px] w-[20px] rounded-full" style={{ background: "#6366f1", verticalAlign: "middle" }} aria-hidden="true" />
        </span>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-[150px_1fr_190px]">
        <div>
          <p style={{ fontSize: "13px", fontWeight: 700, color: "#f0f2f5" }}>Blocks</p>
          <p style={{ fontSize: "10px", color: "#6b7280", marginTop: "2px" }}>Drag onto the canvas</p>
          <ul className="mt-3 space-y-1.5">
            {blocks.map((block) => (
              <li
                key={block.label}
                className="flex items-center gap-2.5 rounded-md px-2.5 py-[7px]"
                style={{
                  background: block.active ? "rgba(139,92,246,0.12)" : "#12151f",
                  border: block.active ? "1px solid rgba(139,92,246,0.6)" : "1px solid #1f2531",
                  color: "#f0f2f5",
                  fontSize: "12px",
                  fontWeight: 600,
                  borderRadius: "7px"
                }}
              >
                <span style={{ width: "14px", textAlign: "center", fontSize: "11px", opacity: 0.7 }}>{block.icon}</span>
                {block.label}
              </li>
            ))}
          </ul>
          <p className="mt-3 flex items-center gap-2 px-2.5" style={{ fontSize: "10.5px", color: "#8a93a5" }}>
            <span style={{ fontSize: "10px" }}>⊡</span> Start from template <span className="ml-auto" style={{ fontSize: "10.5px", color: "#6b7280" }}>4</span>
          </p>
        </div>

        <div className="rounded-md border px-4 py-3" style={{ borderColor: "#d1d5db", background: "#f8f9fa", height:"fit-content"}}>
          <p style={{ fontSize: "15px", fontWeight: 700, color: "#111", lineHeight: 1.3 }}>Your final expense quote is ready</p>
          <p style={{ fontSize: "11.5px", color: "#444", marginTop: "8px", lineHeight: 1.5 }}>
            Hi <span style={{ background: "#ede9fe", padding: "1px 4px", borderRadius: "3px", fontFamily: "monospace", fontSize: "10.5px" }}>{"{{firstName}}"}</span> , thanks for requesting information on final expense coverage. Here&apos;s the plan summary we put together for you.
          </p>
          <div className="mt-3 flex flex-col items-center justify-center rounded-md border border-dashed py-4" style={{ borderColor: "#d1d5db", background: "#f3f4f6" }}>
            <span style={{ fontSize: "16px", color: "#9ca3af" }}>⊡</span>
            <span style={{ fontSize: "9px", fontWeight: 600, color: "#9ca3af", marginTop: "3px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Image</span>
          </div>
          <div className="relative mt-3 flex items-center justify-center" style={{ border: "1.5px dashed #8b5cf6", borderRadius: "5px", padding: "7px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "9px 20px",
                borderRadius: "7px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#ffffff",
                background: "#7c3aed"
              }}
            >
              Get my quote
            </span>
            <span className="absolute -top-2 right-4 flex items-center gap-1" style={{ background: "#1f2937", borderRadius: "6px", padding: "4px 6px" }}>
              <GripVertical className="h-3 w-3" style={{ color: "#6b7280" }} aria-hidden="true" />
              <Copy className="h-3 w-3" style={{ color: "#9ca3af" }} aria-hidden="true" />
              <Trash2 className="h-3 w-3" style={{ color: "#f87171" }} aria-hidden="true" />
            </span>
            {/* Corner handles */}
            <span className="absolute -bottom-1 -right-1 h-2 w-2 border" style={{ borderColor: "#8b5cf6", background: "#f8f9fa" }} aria-hidden="true" />
            <span className="absolute -bottom-1 -left-1 h-2 w-2 border" style={{ borderColor: "#8b5cf6", background: "#f8f9fa" }} aria-hidden="true" />
            <span className="absolute -right-1 -top-1 h-2 w-2 border" style={{ borderColor: "#8b5cf6", background: "#f8f9fa" }} aria-hidden="true" />
          </div>
          <div className="mt-3">
            <p style={{ fontSize: "12px", fontWeight: 700, color: "#111" }}>Marcus Reed</p>
            <p style={{ fontSize: "10.5px", color: "#6b7280" }}>Licensed Agent · youragency.com</p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <span style={{ fontSize: "11px", color: "#a78bfa" }}>✦</span>
            <div>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#f0f2f5" }}>Button</p>
              <p style={{ fontSize: "10px", color: "#6b7280" }}>Call-to-action link</p>
            </div>
          </div>

          <div className="mt-4 space-y-3.5">
            <div>
              <p style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#8a93a5" }}>Content</p>
              <div className="mt-2 space-y-2">
                <div>
                  <p style={{ fontSize: "10.5px", color: "#8a93a5", marginBottom: "3px" }}>Button text</p>
                  <div className="rounded-md border px-2.5 py-[6px]" style={{ borderColor: "#2a3348", background: "#12151f" }}>
                    <span style={{ fontSize: "12px", color: "#f0f2f5" }}>Get my quote</span>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "10.5px", color: "#8a93a5", marginBottom: "3px" }}>Link URL</p>
                  <div className="flex items-center gap-2 rounded-md border px-2.5 py-[6px]" style={{ borderColor: "#2a3348", background: "#12151f" }}>
                    <span className="min-w-0 flex-1 truncate" style={{ fontSize: "12px", color: "#f0f2f5" }}>youragency.com/quote</span>
                    <span style={{ fontSize: "10px", color: "#6b7280" }}>( )</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#8a93a5" }}>Style</p>
              <div className="mt-2 space-y-2">
                <div>
                  <p style={{ fontSize: "10.5px", color: "#8a93a5", marginBottom: "3px" }}>Alignment</p>
                  <div className="grid grid-cols-4 overflow-hidden rounded-md border" style={{ borderColor: "#2a3348" }}>
                    {["≡", "≡", "≡", "≡"].map((a, i) => (
                      <span key={i} className="flex items-center justify-center py-1.5" style={{ background: i === 2 ? "#8b5cf6" : "#12151f", color: i === 2 ? "#fff" : "#6b7280", fontSize: "11px", borderLeft: i > 0 ? "1px solid #2a3348" : undefined }}>{a}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "10.5px", color: "#8a93a5", marginBottom: "3px" }}>Button color</p>
                  <div className="flex items-center gap-2 rounded-md border px-2.5 py-[6px]" style={{ borderColor: "#2a3348", background: "#12151f" }}>
                    <span className="h-3.5 w-3.5 rounded-sm" style={{ background: "#7c3aed" }} />
                    <span style={{ fontSize: "11.5px", color: "#f0f2f5" }}>#7C3AED</span>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "10.5px", color: "#8a93a5", marginBottom: "3px" }}>Corner radius</p>
                  <div className="flex items-center gap-2 rounded-md border px-2.5 py-[6px]" style={{ borderColor: "#2a3348", background: "#12151f" }}>
                    <span style={{ fontSize: "11.5px", color: "#f0f2f5" }}>8</span>
                    <span className="ml-auto" style={{ fontSize: "10px", color: "#6b7280" }}>px</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComplianceHealthPanel() {
  const badges = [
    { label: "TCPA ✓", green: true },
    { label: "TCR ✓", green: true },
    { label: "FTC ✓", green: true },
    { label: "Opt-outs auto", green: false },
    { label: "DNC auto", green: false }
  ];

  const numbers = [
    { number: "(415) 336-0112", info: "spam score 0 · 412 calls this week", status: "Healthy", tone: "green" as const },
    { number: "(628) 200-4471", info: "carrier flag detected → rotated out automatically", status: "Rotated", tone: "amber" as const },
    { number: "(415) 771-0090", info: "spam score 0 · 388 calls this week", status: "Healthy", tone: "green" as const }
  ];

  const statusStyle = {
    green: { color: "#4ade80", border: "1px solid rgba(34,197,94,0.4)", background: "rgba(34,197,94,0.08)" },
    amber: { color: "#fbbf24", border: "1px solid rgba(251,191,36,0.4)", background: "rgba(251,191,36,0.08)" }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span
            key={badge.label}
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: "5px",
              background: badge.green ? "rgba(34,197,94,0.12)" : "#12151f",
              border: badge.green ? "1px solid rgba(34,197,94,0.4)" : "1px solid #2a3348",
              color: badge.green ? "#4ade80" : "#8a93a5"
            }}
          >
            {badge.label}
          </span>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        {numbers.map((num) => (
          <div
            key={num.number}
            className="flex items-center justify-between gap-4 rounded-md border px-4 py-3"
            style={{ borderColor: "#1f2531", background: "#0c1018" }}
          >
            <p style={{ fontSize: "13px", color: "#c3cad6" }}>
              <strong style={{ fontWeight: 700, color: "#f0f2f5" }}>{num.number}</strong> · {num.info}
            </p>
            <span
              className="shrink-0"
              style={{
                fontSize: "9.5px",
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                padding: "3px 8px",
                borderRadius: "5px",
                ...statusStyle[num.tone]
              }}
            >
              {num.status}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-4" style={{ fontSize: "12px", fontStyle: "italic", color: "#6b7280" }}>
        Numbers monitored daily. Flags handled before they cost you pickups.
      </p>
      <a
        href="/compliance"
        className="mt-3 inline-block underline"
        style={{ fontSize: "13px", fontWeight: 500, color: "#a78bfa" }}
      >
        See every safeguard, and how it&apos;s enforced →
      </a>
    </div>
  );
}

function CallSummaryPanel() {
  return (
    <div>
      <div className="rounded-md border-l-2 px-4 py-3" style={{ borderLeftColor: "#2a3348", borderTop: "1px solid #1f2531", borderRight: "1px solid #1f2531", borderBottom: "1px solid #1f2531", borderRadius: "6px", background: "#0c1018" }}>
        <p style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#8a93a5", marginBottom: "6px" }}>AI Summary</p>
        <p style={{ fontSize: "13px", fontWeight: 500, color: "#c3cad6", lineHeight: 1.5 }}>
          Linda asked about monthly cost and coverage for her husband. Price framed at $40-$80/mo. Objection: &quot;need to talk to my daughter&quot; resolved with a 3-way option. Appointment set for 3:30 PM with Marcus. Sentiment: warm.
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "5px", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.4)", color: "#4ade80" }}>Disposition · Appt set</span>
        <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "5px", background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.4)", color: "#a78bfa" }}>Final expense</span>
        <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "5px", background: "#12151f", border: "1px solid #2a3348", color: "#8a93a5" }}>Recording + Transcript</span>
      </div>
    </div>
  );
}

function LifecyclePanel() {
  const campaigns: { label: string; labelColor: string; desc: string; stat: string }[] = [
    { label: "Customer care", labelColor: "#22c55e", desc: "New Sold policies", stat: "47 active" },
    { label: "Beneficiary referral", labelColor: "#a78bfa", desc: "Beneficiary outreach", stat: "24 active" },
    { label: "Chargeback", labelColor: "#f97316", desc: "Win-back follow-up", stat: "8 active" },
    { label: "Appointment reminder", labelColor: "#4ade80", desc: "Booked this week", stat: "19 active" },
    { label: "No show", labelColor: "#f87171", desc: "Re-engagement", stat: "6 active" },
    { label: "Emergency contact", labelColor: "#38bdf8", desc: "Secondary outreach", stat: "11 active" }
  ];

  return (
    <div>
      <div className="space-y-2">
        {campaigns.map((campaign) => (
          <div
            key={campaign.label}
            className="flex items-center justify-between gap-4 rounded-md border-l-2 px-4 py-3"
            style={{ borderLeftColor: campaign.labelColor, borderTop: "1px solid #1f2531", borderRight: "1px solid #1f2531", borderBottom: "1px solid #1f2531", borderRadius: "6px", background: "#0c1018" }}
          >
            <div className="min-w-0">
              <p style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: campaign.labelColor }}>{campaign.label}</p>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#f0f2f5", marginTop: "3px" }}>{campaign.desc}</p>
            </div>
            <span className="shrink-0" style={{ fontSize: "12px", color: "#6b7280" }}>{campaign.stat}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 flex items-center gap-2" style={{ fontSize: "12px", color: "#6b7280" }}>
        <span className="h-[6px] w-[6px] rounded-full" style={{ background: "#6366f1" }} aria-hidden="true" />
        AI memory active across 437 ongoing conversations
      </p>
    </div>
  );
}

function DripSequencePanel() {
  const steps = [
    { channel: "SMS", day: "Day 0", desc: "Intro text, replies handled by Ashley", stat: "98% delivered" },
    { channel: "VOICE", day: "Day 1", desc: "AI call, books or transfers live", stat: "61% reached" },
    { channel: "EMAIL", day: "Day 2", desc: "Email recap, replies handled by Ashley", stat: "47% opened" },
    { channel: "SMS", day: "Day 3", desc: "Objection follow-up, price framing", stat: "24 replies" }
  ];

  return (
    <div>
      <div className="space-y-2.5">
        {steps.map((step) => (
          <div
            key={step.day}
            className="flex items-center justify-between gap-4 rounded-md border px-4 py-3"
            style={{ borderColor: "#1f2531", background: "#0c1018" }}
          >
            <div className="flex min-w-0 items-center gap-3">
              <span
                className="inline-flex shrink-0 items-center gap-1.5"
                style={{
                  borderRadius: "5px",
                  padding: "3px 7px",
                  fontSize: "10px",
                  fontWeight: 700,

                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  background: step.channel === "VOICE" ? "rgba(139, 92, 246, 0.15)" :  step.channel === "EMAIL" ?  "#1E293B" : "#123727" ,
                  // border: `1px solid ${ step.channel === "VOICE" ? "rgb(167, 139, 250)" :  step.channel === "EMAIL" ?  "#94A3B8" : "#1d6340"}`,
                  color:  step.channel === "VOICE" ? "rgb(167, 139, 250)" :  step.channel === "EMAIL" ?  "#94A3B8" : "#4ade80"
                }}
              >
               
                {/* <span className="h-[4px] w-[4px] rounded-full" style={{ background: "#4ade80" }} aria-hidden="true" /> */}
                {step.channel}
              </span>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#f0f2f5" }}>
                {step.day} · {step.desc}
              </span>
            </div>
            <span className="shrink-0" style={{ fontSize: "12px", color: "#6b7280" }}>{step.stat}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <p className="flex items-baseline gap-1.5"><span style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>24</span><span style={{ fontSize: "13px", color: "#8a93a5" }}>replies</span></p>
        <p className="flex items-baseline gap-1.5"><span style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>9</span><span style={{ fontSize: "13px", color: "#8a93a5" }}>appointments</span></p>
        <p className="flex items-baseline gap-1.5"><span style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>3</span><span style={{ fontSize: "13px", color: "#8a93a5" }}>live transfers</span></p>
      </div>
    </div>
  );
}

function DialerV2Content() {
  const controls = [
    { label: "Mute" },
    { label: "Hold" },
    { label: "Keypad" }
  ];
  const dispositions = [
    { label: "Interested", selected: true },
    { label: "Appointment Booked", selected: false },
    { label: "Sold", selected: false },
    { label: "Needs Follow Up", selected: false }
  ];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3" style={{ borderBottom: "1px solid #242a36" }}>
        <div className="flex flex-wrap items-center gap-3">
          <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#ffffff" }}>Dial session</span>
          <span style={{ borderRadius: "6px", padding: "3px 8px", fontSize: "11.5px", fontWeight: 500, color: "#8a93a5", background: "#161a24", border: "1px solid #2a3140" }}>3 lines</span>
          <span className="inline-flex items-center gap-1.5" style={{ fontSize: "12.5px", fontWeight: 600, color: "#4ade80" }}>
            <span className="animate-pulse-dot h-[6px] w-[6px] rounded-full" style={{ background: "#22c55e" }} aria-hidden="true" />Live
          </span>
          <span className="inline-flex items-center gap-1.5" style={{ fontSize: "12.5px", fontWeight: 600, color: "#f87171" }}>
            <span className="animate-pulse-dot h-[6px] w-[6px] rounded-full" style={{ background: "#ef4444" }} aria-hidden="true" />Recording
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {controls.map((c) => (
            <span key={c.label} style={{ borderRadius: "6px", padding: "6px 11px", fontSize: "12.5px", fontWeight: 500, color: "#e6eaf2", background: "#161a24", border: "1px solid #2a3140" }}>{c.label}</span>
          ))}
          <span style={{ borderRadius: "6px", padding: "6px 13px", fontSize: "12.5px", fontWeight: 700, color: "#ffffff", background: "#ef4444" }}>End</span>
        </div>
      </div>

      <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
        <div style={{ background: "#12151f", border: "1px solid #232936", borderRadius: "8px", padding: "10px 12px" }}>
          <div className="flex items-center justify-between gap-2">
            <span style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#8a93a5" }}>Line 1</span>
            <span className="inline-flex items-center gap-1.5" style={{ borderRadius: "999px", padding: "3px 9px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", background: "#3a2f0c", border: "1px solid #6d5714", color: "#fbbf24" }}>
              <span className="h-[5px] w-[5px] rounded-full" style={{ background: "#fbbf24" }} aria-hidden="true" />Ringing
            </span>
          </div>
          <p style={{ marginTop: "8px", fontSize: "15px", fontWeight: 500, color: "#e6eaf2" }}>Robert M.</p>
          <span style={{ display: "inline-block", marginTop: "8px", borderRadius: "6px", padding: "4px 9px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", background: "#4a3c10", color: "#fcd34d" }}>Callback owed</span>
        </div>

        <div style={{ background: "#101c18", border: "2px solid #22c55e", borderRadius: "8px", padding: "9px 11px" }}>
          <div className="flex items-center justify-between gap-2">
            <span style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#8a93a5" }}>Line 2</span>
            <span style={{ borderRadius: "999px", padding: "3px 9px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", background: "#123727", border: "1px solid #1d6340", color: "#4ade80" }}>Connected</span>
          </div>
          <p style={{ marginTop: "8px", fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>Karen S.</p>
          <p className="inline-flex items-center gap-1.5" style={{ marginTop: "8px", fontSize: "12.5px", fontWeight: 600, color: "#4ade80" }}>◁)) Live audio</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center" style={{ border: "1px dashed #232936", borderRadius: "8px", padding: "10px 12px" }}>
          <p style={{ fontSize: "14px", fontWeight: 500, color: "#e6eaf2" }}>+ Open slot</p>
          <p style={{ marginTop: "4px", fontSize: "12px", fontStyle: "italic", color: "#8a93a5" }}>Dialing next...</p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2.5 rounded-lg px-4 py-2.5" style={{ background: "#200e16", border: "1px solid #4a1e29" }}>
        <span className="animate-pulse-dot h-[6px] w-[6px] shrink-0 rounded-full" style={{ background: "#ef4444" }} aria-hidden="true" />
        <span style={{ fontSize: "12.5px", fontWeight: 600, color: "#f2909d" }}>This call is being recorded</span>
      </div>

      <div className="mt-3 rounded-lg" style={{ background: "#16132e", border: "1px solid #302a58", borderLeft: "3px solid #8b5cf6", padding: "12px 16px" }}>
        <span style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#a78bfa" }}>Why they&apos;re calling</span>
        <p style={{ marginTop: "7px", fontSize: "14px", lineHeight: 1.5, color: "#8a93a5" }}>
          <span style={{ color: "#a78bfa", fontWeight: 700 }}>IUL</span> — wants <strong style={{ color: "#a5b4fc", fontWeight: 700 }}>~$400K</strong> coverage · beneficiary: <strong style={{ color: "#a5b4fc", fontWeight: 700 }}>spouse</strong> · budget <strong style={{ color: "#a5b4fc", fontWeight: 700 }}>$220/mo</strong>
        </p>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {dispositions.map((d) => (
            <span key={d.label} style={{ borderRadius: "6px", padding: "7px 12px", fontSize: "12.5px", fontWeight: d.selected ? 600 : 500, color: d.selected ? "#ffffff" : "#e6eaf2", background: d.selected ? "#1d1638" : "#161a24", border: `1px solid ${d.selected ? "#8b5cf6" : "#2a3140"}` }}>{d.label}</span>
          ))}
        </div>
        <span style={{ borderRadius: "6px", padding: "8px 15px", fontSize: "12.5px", fontWeight: 700, color: "#ffffff", background: "#8b5cf6" }}>Submit &amp; Call Next →</span>
      </div>
    </div>
  );
}

function DialerV2Stats() {
  return (
    <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 px-4 pb-2">
      <p className="flex items-baseline gap-2"><span style={{ fontSize: "15px", fontWeight: 700, lineHeight: 1, color: "#ffffff" }}>82</span><span style={{ fontSize: "13px", color: "#8a93a5" }}>dials this session</span></p>
      <p className="flex items-baseline gap-2"><span style={{ fontSize: "15px", fontWeight: 700, lineHeight: 1, color: "#ffffff" }}>19</span><span style={{ fontSize: "13px", color: "#8a93a5" }}>conversations</span></p>
      <p className="flex items-baseline gap-2"><span style={{ fontSize: "15px", fontWeight: 700, lineHeight: 1, color: "#ffffff" }}>6</span><span style={{ fontSize: "13px", color: "#8a93a5" }}>appointments</span></p>
    </div>
  );
}

function ChartPanel({ panel }: ProductWindowProps) {
  const values = panel.chartValues?.length ? panel.chartValues : [18, 24, 23, 31, 38, 45, 58];
  const data = values.map((value, index) => ({ name: `M${index + 1}`, value }));

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        {(panel.metrics ?? []).map((metric) => (
          <div key={metric.label} className="rounded-md border border-border bg-background p-3">
            <p className="text-caption font-semibold uppercase text-muted-foreground">{metric.label}</p>
            <p className="mt-1 text-2xl font-bold text-foreground">{metric.value}</p>
            {metric.delta ? <p className="mt-1 text-caption font-semibold text-success">{metric.delta}</p> : null}
          </div>
        ))}
      </div>
      <div className="h-40 rounded-md border border-border bg-background p-3">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" stroke={themeConfig.chartColors.label} tickLine={false} axisLine={false} fontSize={10} />
            <YAxis hide domain={[0, "dataMax + 10"]} />
            <ChartTooltip
              contentStyle={{
                background: "rgb(var(--color-surface))",
                border: "1px solid rgb(var(--color-border))",
                borderRadius: "var(--radius-sm)",
                color: "rgb(var(--color-foreground))"
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={themeConfig.chartColors.secondary}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function CalendarPanel({ panel }: ProductWindowProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-4">
      {(panel.rows ?? []).map((row, index) => (
        <div key={row.label} className="min-h-28 rounded-md border border-border bg-background p-3">
          <div className="mb-3 flex items-center justify-between">
            <CalendarDays className="h-4 w-4 text-primary-hover" aria-hidden="true" />
            <span className="text-caption text-muted-foreground">Day {index + 1}</span>
          </div>
          <p className="text-sm font-bold text-foreground">{row.label}</p>
          <p className="mt-1 text-caption leading-5 text-muted-foreground">{row.value}</p>
        </div>
      ))}
    </div>
  );
}

function CampaignPanel({ panel }: ProductWindowProps) {
  return (
    <div className="space-y-3">
      {(panel.rows ?? []).map((row, index) => (
        <div key={row.label} className="flex items-center justify-between gap-4 rounded-md border border-border bg-background p-3">
          <div>
            <p className="text-sm font-bold text-foreground">{row.label}</p>
            <p className="text-caption text-muted-foreground">{row.value}</p>
          </div>
          <StatusBadge label={row.status ?? (index === 0 ? "Active" : "Queued")} tone={row.tone ?? "success"} icon="check" />
        </div>
      ))}
    </div>
  );
}

function DialerPanel({ panel }: ProductWindowProps) {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        {(panel.metrics ?? []).map((metric) => (
          <div key={metric.label} className="rounded-md border border-border bg-background p-3">
            <p className="text-caption text-muted-foreground">{metric.label}</p>
            <p className="mt-1 text-xl font-bold text-foreground">{metric.value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-md border border-danger/35 bg-danger-subtle p-3 text-sm font-semibold text-danger">
        The lead is being worked.
      </div>
      <div className="flex flex-wrap gap-2">
        {(panel.rows ?? []).map((row) => (
          <Badge key={row.label} variant={row.tone ?? "primary"}>
            {row.label}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function TablePanel({ panel }: ProductWindowProps) {
  return (
    <div className="space-y-3">
      {panel.metrics?.length ? (
        <div className="grid gap-3 sm:grid-cols-3">
          {panel.metrics.map((metric) => (
            <div key={metric.label} className="rounded-md border border-border bg-background p-3">
              <p className="text-caption font-semibold uppercase text-muted-foreground">{metric.label}</p>
              <p className="mt-1 text-xl font-bold text-foreground">{metric.value}</p>
            </div>
          ))}
        </div>
      ) : null}
      {(panel.rows ?? []).map((row) => (
        <div key={row.label} className="flex items-center justify-between gap-4 rounded-md border border-border bg-background p-3">
          <div>
            <p className="text-sm font-bold text-foreground">{row.label}</p>
            {row.value ? <p className="text-caption text-muted-foreground">{row.value}</p> : null}
          </div>
          {row.status ? <StatusBadge label={row.status} tone={row.tone ?? "neutral"} icon={row.tone === "success" ? "check" : "clock"} /> : null}
        </div>
      ))}
    </div>
  );
}

export function BarCard({ title, value, values }: { title: string; value: string; values: number[] }) {
  const data = values.map((item, index) => ({ name: `${index + 1}`, value: item }));

  return (
    <div className="rounded-md border border-border bg-surface p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <p className="text-caption font-bold uppercase text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold text-success">{value}</p>
      </div>
      <div className="h-36">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Bar dataKey="value" fill={themeConfig.chartColors.primary} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
