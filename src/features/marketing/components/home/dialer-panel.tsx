import { Grid3x3, Mic, Scissors, Square, Volume2 } from "lucide-react";
import { PanelFrame } from "@/features/marketing/components/home/panel-frame";

const tone = {
  cardBg: "#12151f",
  cardBorder: "#232936",
  controlBg: "#161a24",
  controlBorder: "#2a3140",
  label: "#8a93a5",
  text: "#e6eaf2",

  green: "#22c55e",
  greenText: "#4ade80",
  greenCardBg: "#101c18",
  greenPillBg: "#123727",
  greenPillBorder: "#1d6340",

  amberText: "#fbbf24",
  amberPillBg: "#3a2f0c",
  amberPillBorder: "#6d5714",
  amberSolidBg: "#4a3c10",
  amberSolidText: "#fcd34d",

  red: "#ef4444",
  redText: "#f2909d",
  redBannerBg: "#200e16",
  redBannerBorder: "#4a1e29",

  purple: "#8b5cf6",
  purpleLabel: "#a78bfa",
  purpleValue: "#a5b4fc",
  purplePanelBg: "#16132e",
  purplePanelBorder: "#302a58",
  chipSelectedBg: "#1d1638"
};

const controls = [
  { label: "Mute", icon: Mic },
  { label: "Hold", icon: Square },
  { label: "Keypad", icon: Grid3x3 }
];

const dispositions = [
  { label: "Interested", selected: false },
  { label: "Appointment Booked", selected: true },
  { label: "Sold", selected: false },
  { label: "Needs Follow Up", selected: false }
];

const sessionStats = [
  { value: "67", label: "dials this session", lead: true },
  { value: "14", label: "conversations", lead: false },
  { value: "4", label: "appointments", lead: false }
];

const microLabel = {
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  color: tone.label
} as const;

const pillBase = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  borderRadius: "999px",
  padding: "3px 9px",
  fontSize: "10.5px",
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase"
} as const;

export function DialerPanel() {
  return (
    <div>
      <PanelFrame
        toolbarFlat
        toolbar={
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#ffffff"
                }}
              >
                Dial session
              </span>
              <span
                style={{
                  borderRadius: "6px",
                  padding: "3px 8px",
                  fontSize: "11.5px",
                  fontWeight: 500,
                  color: tone.label,
                  background: tone.controlBg,
                  border: `1px solid ${tone.controlBorder}`
                }}
              >
                3 lines
              </span>
              <span
                className="inline-flex items-center gap-1.5"
                style={{ fontSize: "12.5px", fontWeight: 600, color: tone.greenText }}
              >
                <span className="h-[6px] w-[6px] rounded-full" style={{ background: tone.green }} aria-hidden="true" />
                Live
              </span>
              <span
                className="inline-flex items-center gap-1.5"
                style={{ fontSize: "12.5px", fontWeight: 600, color: tone.redText }}
              >
                <span className="h-[6px] w-[6px] rounded-full" style={{ background: tone.red }} aria-hidden="true" />
                Recording
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {controls.map((control) => (
                <span
                  key={control.label}
                  className="inline-flex items-center gap-1.5"
                  style={{
                    borderRadius: "6px",
                    padding: "6px 11px",
                    fontSize: "12.5px",
                    fontWeight: 500,
                    color: tone.text,
                    background: tone.controlBg,
                    border: `1px solid ${tone.controlBorder}`
                  }}
                >
                  <control.icon style={{ width: "13px", height: "13px", color: tone.label }} aria-hidden="true" />
                  {control.label}
                </span>
              ))}
              <span
                className="inline-flex items-center gap-1.5"
                style={{
                  borderRadius: "6px",
                  padding: "6px 13px",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  color: "#ffffff",
                  background: tone.red
                }}
              >
                <Scissors style={{ width: "13px", height: "13px" }} aria-hidden="true" />
                End
              </span>
            </div>
          </div>
        }
        bodyClassName="p-3.5"
      >
        <div className="grid gap-2.5 sm:grid-cols-3">
          <div style={{ background: tone.cardBg, border: `1px solid ${tone.cardBorder}`, borderRadius: "8px", padding: "13px 14px" }}>
            <div className="flex items-center justify-between gap-2">
              <span style={microLabel}>Line 1</span>
              <span style={{ ...pillBase, background: tone.amberPillBg, border: `1px solid ${tone.amberPillBorder}`, color: tone.amberText }}>
                <span className="h-[5px] w-[5px] rounded-full" style={{ background: tone.amberText }} aria-hidden="true" />
                Ringing
              </span>
            </div>
            <p style={{ marginTop: "12px", fontSize: "15px", fontWeight: 500, color: tone.text }}>James K.</p>
            <span
              className="inline-block"
              style={{
                marginTop: "12px",
                borderRadius: "6px",
                padding: "4px 9px",
                fontSize: "10.5px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                background: tone.amberSolidBg,
                color: tone.amberSolidText
              }}
            >
              Callback owed
            </span>
          </div>

          <div style={{ background: tone.greenCardBg, border: `2px solid ${tone.green}`, borderRadius: "8px", padding: "12px 13px" }}>
            <div className="flex items-center justify-between gap-2">
              <span style={microLabel}>Line 2</span>
              <span style={{ ...pillBase, background: tone.greenPillBg, border: `1px solid ${tone.greenPillBorder}`, color: tone.greenText }}>
                Connected
              </span>
            </div>
            <p style={{ marginTop: "12px", fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>Denise W.</p>
            <p
              className="inline-flex items-center gap-1.5"
              style={{ marginTop: "11px", fontSize: "12.5px", fontWeight: 600, color: tone.greenText }}
            >
              <Volume2 style={{ width: "13px", height: "13px" }} aria-hidden="true" />
              Live audio
            </p>
          </div>

          <div
            className="flex flex-col items-center justify-center text-center"
            style={{ border: `1px dashed ${tone.cardBorder}`, borderRadius: "8px", padding: "13px 14px" }}
          >
            <p style={{ fontSize: "14px", fontWeight: 500, color: tone.text }}>+ Open slot</p>
            <p style={{ marginTop: "5px", fontSize: "12px", fontStyle: "italic", color: tone.label }}>Dialing next...</p>
          </div>
        </div>

        <div
          className="flex items-center gap-2.5"
          style={{
            marginTop: "10px",
            background: tone.redBannerBg,
            border: `1px solid ${tone.redBannerBorder}`,
            borderRadius: "8px",
            padding: "10px 14px"
          }}
        >
          <span
            className="animate-pulse-dot h-[6px] w-[6px] shrink-0 rounded-full"
            style={{ background: tone.red }}
            aria-hidden="true"
          />
          <span style={{ fontSize: "12.5px", fontWeight: 600, color: tone.redText }}>This call is being recorded</span>
        </div>

        <div
          style={{
            marginTop: "10px",
            background: tone.purplePanelBg,
            border: `1px solid ${tone.purplePanelBorder}`,
            borderLeft: `3px solid ${tone.purple}`,
            borderRadius: "8px",
            padding: "12px 16px"
          }}
        >
          <span style={{ ...microLabel, color: tone.purpleLabel }}>Why they&apos;re calling</span>
          <p style={{ marginTop: "7px", fontSize: "14px", lineHeight: 1.5, color: tone.label }}>
            <span style={{ color: tone.purpleLabel, fontWeight: 700 }}>final expense</span> — wants{" "}
            <strong style={{ color: tone.purpleValue, fontWeight: 700 }}>~$25K</strong> coverage · beneficiary:{" "}
            <strong style={{ color: tone.purpleValue, fontWeight: 700 }}>daughter</strong> · budget{" "}
            <strong style={{ color: tone.purpleValue, fontWeight: 700 }}>$60/mo</strong>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3" style={{ marginTop: "10px" }}>
          <div className="flex flex-wrap gap-2">
            {dispositions.map((disposition) => (
              <span
                key={disposition.label}
                style={{
                  borderRadius: "6px",
                  padding: "7px 12px",
                  fontSize: "12.5px",
                  fontWeight: disposition.selected ? 600 : 500,
                  color: disposition.selected ? "#ffffff" : tone.text,
                  background: disposition.selected ? tone.chipSelectedBg : tone.controlBg,
                  border: `1px solid ${disposition.selected ? tone.purple : tone.controlBorder}`
                }}
              >
                {disposition.label}
              </span>
            ))}
          </div>
          <span
            style={{
              borderRadius: "6px",
              padding: "8px 15px",
              fontSize: "12.5px",
              fontWeight: 700,
              color: "#ffffff",
              background: tone.purple
            }}
          >
            Submit &amp; Call Next →
          </span>
        </div>
      </PanelFrame>

      <div className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-2">
        {sessionStats.map((stat) => (
          <p key={stat.label} className="flex items-baseline gap-2">
            <span
              style={{
                fontSize: stat.lead ? "34px" : "15px",
                fontWeight: 700,
                lineHeight: 1,
                color: "#ffffff"
              }}
            >
              {stat.value}
            </span>
            <span style={{ fontSize: "13px", color: tone.label }}>{stat.label}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
