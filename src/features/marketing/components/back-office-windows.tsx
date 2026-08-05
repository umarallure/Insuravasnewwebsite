import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { themeConfig } from "@/config/theme";
import { cn } from "@/lib/utils";

type Tone = "primary" | "success" | "warning" | "danger" | "info" | "neutral";

interface BackOfficeWindowProps {
  title: string;
  badge?: string;
  badgeTone?: Tone;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}

const toneClasses: Record<Tone, string> = {
  primary: "border-primary/30 bg-primary-subtle text-primary-hover",
  success: "border-success/30 bg-success-subtle text-success",
  warning: "border-warning/35 bg-warning-subtle text-warning",
  danger: "border-danger/30 bg-danger-subtle text-danger",
  info: "border-info/30 bg-info-subtle text-info",
  neutral: "border-border bg-surface-muted text-muted-foreground"
};

export function TeamTreeWindow() {
  return (
    <BackOfficeWindow title="Back Office - Team tree - production rollup" badge="YTD" className="shadow-glow">
      <div className="relative h-[210px] overflow-hidden bg-background/45 sm:h-[260px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgb(var(--color-primary)/0.16),transparent_42%)]" />
        <div className="absolute inset-y-0 right-0 w-1 bg-info" />
        <svg viewBox="0 0 100 322" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 h-full w-full text-foreground/15">
          <g fill="none" stroke="currentColor" strokeWidth="1.2" vectorEffect="non-scaling-stroke">
            <path d="M50 96 V116 H26 V138" vectorEffect="non-scaling-stroke" />
            <path d="M50 96 V116 H74 V138" vectorEffect="non-scaling-stroke" />
            <path d="M26 224 V244 H14 V252" vectorEffect="non-scaling-stroke" />
            <path d="M26 224 V244 H44 V252" vectorEffect="non-scaling-stroke" />
            <path d="M74 224 V244 H80 V252" vectorEffect="non-scaling-stroke" />
          </g>
        </svg>
        <TeamNode
          name="Marcus Reed"
          role="Owner"
          metrics={["$42,600", "$322,350", "100%"]}
          className="left-1/2 top-6 w-[132px] -translate-x-1/2 border-warning/70 sm:w-[150px]"
          badgeTone="warning"
        />
        <TeamNode
          name="S. Whitfield"
          role="Manager"
          metrics={["$4,210", "$91,040", "50.5%"]}
          className="left-[7%] top-[40%] w-[112px] sm:left-[16%] sm:w-[142px]"
        />
        <TeamNode
          name="D. Alvarez"
          role="Manager"
          metrics={["$9,250", "$44,210", "26.3%"]}
          className="right-[7%] top-[40%] w-[112px] sm:right-[16%] sm:w-[142px]"
        />
        <TeamNode
          name="A. Kim"
          role="Agent"
          metrics={["$7,800", "$17,840", "18.4%"]}
          className="bottom-5 left-1 w-[98px] sm:left-9 sm:w-[132px]"
          badgeTone="info"
        />
        <TeamNode
          name="R. Boyd"
          role="Agent"
          metrics={["$8,340", "$36,340", "78.1%"]}
          className="bottom-5 left-1/2 w-[98px] -translate-x-1/2 sm:w-[132px]"
          badgeTone="info"
        />
        <TeamNode
          name="T. Nguyen"
          role="Agent"
          metrics={["$12,480", "$37,440", "92.3%"]}
          className="bottom-5 right-1 w-[98px] sm:right-9 sm:w-[132px]"
          badgeTone="danger"
        />
      </div>
    </BackOfficeWindow>
  );
}

export function PerformanceWindow() {
  return (
    <BackOfficeWindow title="Performance - YTD" badge="Owner view">
      <div className="grid grid-cols-2 border-b border-border">
        <MetricCell label="Team YTD sold" value="$682,037" delta="+42.8% vs prior" />
        <MetricCell label="Commission paid" value="$1.23M" delta="Matched to statements" />
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-4 p-4">
        <div>
          <p className="text-[0.62rem] font-black uppercase text-muted-foreground">Top producers</p>
          <ul className="mt-3 space-y-2 text-[0.72rem] font-semibold text-foreground">
            <li>Alex Rivera</li>
            <li>Michael Williams</li>
            <li>Andrew Lee</li>
          </ul>
        </div>
        <div className="space-y-2 text-right text-[0.72rem] font-bold text-primary-hover">
          <p>$232.3K</p>
          <p>$105.0K</p>
          <p>$53.5K</p>
        </div>
      </div>
    </BackOfficeWindow>
  );
}

export function CommissionTruthWindow() {
  return (
    <BackOfficeWindow title="Commissions" badge="Owner scope">
      <div className="flex flex-wrap gap-2 border-b border-border p-3">
        {["Trends", "Bonuses", "Payouts", "Debt"].map((tab, index) => (
          <span key={tab} className={cn("rounded-sm px-2 py-1 text-[0.62rem] font-black", index === 0 ? toneClasses.primary : "bg-background text-muted-foreground")}>
            {tab}
          </span>
        ))}
      </div>
      <div className="grid gap-2 p-3 sm:grid-cols-4">
        <MetricCard tone="success" label="Earned commission" value="$84,210" />
        <MetricCard tone="info" label="Personal sales" value="$47,930" />
        <MetricCard tone="warning" label="Override income" value="$29,480" />
        <MetricCard tone="danger" label="Outstanding debt" value="-$6,790" />
      </div>
      <div className="px-3 pb-4">
        <div className="rounded-md border border-border bg-background p-3">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-[0.65rem] font-black text-foreground">Trend - monthly</p>
            <p className="text-[0.65rem] font-black text-success">+14.5% MoM net</p>
          </div>
          <MultiLineChart />
          <div className="mt-3 flex flex-wrap justify-center gap-4 text-[0.58rem] font-semibold text-muted-foreground">
            {["Commission", "Personal sales", "Override", "Debt"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-6 items-end gap-7 px-6">
            {[36, 48, 40, 57, 45, 68].map((height, index) => (
              <span key={index} className="block w-3 rounded-t-xs bg-primary" style={{ height }} />
            ))}
          </div>
        </div>
      </div>
    </BackOfficeWindow>
  );
}

export function BookOfBusinessWindow() {
  const rows = [
    ["Linda P.", "Carrier A", "$68/mo", "M4", "In force", "success"],
    ["B. Boyd", "Carrier C", "$54/mo", "--", "Pending", "warning"],
    ["M. Ortiz", "Carrier B", "$89/mo", "M1", "Lapsed", "danger"],
    ["J. Whitmore", "Carrier A", "$72/mo", "M13", "In force", "success"]
  ] as const;

  return (
    <BackOfficeWindow title="Book of business" badge="$1.2M in force" badgeTone="primary">
      <div className="p-3">
        <div className="rounded-sm border border-border bg-background px-3 py-2 text-[0.68rem] font-semibold text-muted-foreground">
          Search 842 policies - client, carrier, agent, status...
        </div>
        <div className="mt-3 overflow-hidden rounded-sm border border-border">
          <div className="grid grid-cols-[1.2fr_1fr_1fr_.7fr_1fr] bg-surface-muted px-3 py-2 text-[0.58rem] font-black uppercase text-muted-foreground">
            <span>Client</span>
            <span>Carrier</span>
            <span>Premium</span>
            <span>Month</span>
            <span>Status</span>
          </div>
          {rows.map(([client, carrier, premium, month, status, tone]) => (
            <div key={client} className="grid grid-cols-[1.2fr_1fr_1fr_.7fr_1fr] border-t border-border px-3 py-2 text-[0.66rem] font-semibold text-muted-foreground">
              <span className="text-foreground">{client}</span>
              <span>{carrier}</span>
              <span className="text-foreground">{premium}</span>
              <span>{month}</span>
              <span><InlineBadge tone={tone}>{status}</InlineBadge></span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[0.62rem] font-semibold text-muted-foreground">Persistency flat: <span className="text-foreground">88.4%</span> weighted: <span className="text-foreground">91.0%</span> straight from the carrier statement</p>
      </div>
    </BackOfficeWindow>
  );
}

export function PersistencyWindow() {
  return (
    <BackOfficeWindow title="Persistency" badge="Owner view">
      <div className="border-b border-border p-3">
        <div className="flex flex-wrap gap-2">
          {["Overall", "4-month", "9-month", "13-month", "25-month"].map((item, index) => (
            <span key={item} className={cn("rounded-sm px-2 py-1 text-[0.6rem] font-black", index === 3 ? toneClasses.primary : "bg-background text-muted-foreground")}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="p-3">
        <div className="rounded-md border border-border bg-surface-elevated p-4">
          <p className="text-[0.6rem] font-black uppercase text-muted-foreground">13-month persistency weighted</p>
          <p className="mt-2 text-4xl font-black leading-none text-foreground">91.0%</p>
          <p className="mt-2 text-[0.65rem] font-semibold text-muted-foreground">Flat: 88.4% - Saved: 24 policies matching 13 months</p>
        </div>
        <div className="mt-3 rounded-md border border-border bg-background p-3">
          <p className="text-[0.68rem] font-semibold text-success">Insight: Carrier C lapse risk is concentrated in months 2-4 - 9 policies recoverable this cycle.</p>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <PersistencyList title="Carrier - 13 month" items={[["Carrier A", "89%", "91%", "green"], ["Carrier B", "88%", "87%", "green"], ["Carrier C", "75%", "76%", "yellow"]]} />
          <PersistencyList title="Cohort - Mar 2026" items={[["Final expense", "90%", "91%", "green"], ["Veteran", "88%", "87%", "green"], ["Mortgage", "74%", "80%", "yellow"]]} />
        </div>
      </div>
    </BackOfficeWindow>
  );
}

export function FlightRiskWindow() {
  const rows = [
    ["T. Nguyen", "Production -36% MoM - 2 chargebacks in 30d - no deals in 6 days", "Red", "danger"],
    ["S. Whitfield", "No new apps - production steady", "Yellow", "warning"],
    ["D. Alvarez", "Production +12% MoM - debt clear", "Green", "success"]
  ] as const;

  return (
    <BackOfficeWindow title="Flight risk - owner view" badge="Owner only" badgeTone="neutral">
      <div className="space-y-3 p-3">
        {rows.map(([name, detail, status, tone]) => (
          <div key={name} className={cn("rounded-md border p-3", tone === "danger" ? "border-danger/35 bg-danger-subtle/50" : "border-border bg-background")}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-black text-foreground">{name}</p>
                <p className="mt-1 text-[0.68rem] font-semibold text-muted-foreground">{detail}</p>
              </div>
              <InlineBadge tone={tone}>{status}</InlineBadge>
            </div>
          </div>
        ))}
        <p className="text-[0.62rem] font-semibold text-muted-foreground">You see the walk coming a month early, while there is still time to save the leg.</p>
      </div>
    </BackOfficeWindow>
  );
}

export function CompPlanWindow() {
  return (
    <BackOfficeWindow title="Commission - Comp ladder - Carrier A" badge="July" badgeTone="neutral">
      <div className="p-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.62rem] font-black uppercase text-muted-foreground">Earned in July</p>
            <p className="mt-1 text-4xl font-black leading-none text-foreground">$8,412</p>
            <p className="mt-2 text-[0.68rem] font-semibold text-muted-foreground">Senior producer 83% - Manager $10K - <span className="text-success">+$1,600 bonus</span></p>
          </div>
          <p className="text-right text-[0.65rem] font-bold text-muted-foreground">Pace - $12.1K by month end</p>
        </div>
        <div className="mt-6">
          <div className="relative h-14">
            <div className="absolute left-0 right-0 top-1/2 h-1 rounded-full bg-surface-muted" />
            <div className="absolute left-0 top-1/2 h-1 w-[83%] -translate-y-1/2 rounded-full bg-primary" />
            {[8, 32, 57, 83].map((left, index) => (
              <span key={left} className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-background bg-primary" style={{ left: `${left}%` }}>
                <span className="sr-only">Tier {index + 1}</span>
              </span>
            ))}
          </div>
          <div className="grid grid-cols-4 text-[0.62rem] font-bold text-muted-foreground">
            <span>Start</span>
            <span>Producer</span>
            <span>Senior producer</span>
            <span>Manager</span>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <InlineBadge tone="primary">Fast start bonus - qualified</InlineBadge>
          <InlineBadge tone="success">Producer club - $1,500 at $25K net</InlineBadge>
          <InlineBadge tone="neutral">Overrides compute per statement</InlineBadge>
        </div>
      </div>
    </BackOfficeWindow>
  );
}

function BackOfficeWindow({ title, badge, badgeTone = "primary", children, className, bodyClassName }: BackOfficeWindowProps) {
  return (
    <div className={cn("overflow-hidden rounded-md border border-border bg-surface shadow-sm", className)}>
      <div className="flex h-9 items-center justify-between border-b border-border bg-surface-elevated px-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="ml-1 truncate text-[0.65rem] font-bold text-muted-foreground">{title}</span>
        </div>
        {badge ? <Badge variant={badgeTone} className="px-2 py-0.5 text-[0.58rem]">{badge}</Badge> : null}
      </div>
      <div className={cn("bg-surface-muted/55", bodyClassName)}>{children}</div>
    </div>
  );
}

interface TeamNodeProps {
  name: string;
  role: string;
  metrics: [string, string, string];
  className: string;
  badgeTone?: Tone;
}

function TeamNode({ name, role, metrics, className, badgeTone = "primary" }: TeamNodeProps) {
  return (
    <div className={cn("absolute rounded-sm border bg-surface-elevated/95 p-2 shadow-md", className)}>
      <div className="flex items-center justify-between gap-2">
        <p className="truncate text-[0.62rem] font-black text-foreground">{name}</p>
        <span className={cn("rounded-xs border px-1 py-0.5 text-[0.48rem] font-black uppercase", toneClasses[badgeTone])}>{role}</span>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1 text-[0.46rem] font-black text-muted-foreground sm:text-[0.55rem]">
        {metrics.map((metric, index) => (
          <span key={`${name}-${metric}`} className={index === 0 ? "text-foreground" : ""}>{metric}</span>
        ))}
      </div>
    </div>
  );
}

function MetricCell({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="min-h-24 border-r border-border p-4 last:border-r-0">
      <p className="text-[0.62rem] font-black uppercase text-muted-foreground">{label}</p>
      <p className="mt-2 text-2xl font-black text-foreground">{value}</p>
      <p className={cn("mt-1 text-[0.62rem] font-black", delta.includes("+") ? "text-success" : "text-primary-hover")}>{delta}</p>
    </div>
  );
}

function MetricCard({ label, value, tone }: { label: string; value: string; tone: Tone }) {
  return (
    <div className="rounded-md border border-border bg-background p-3">
      <p className="text-[0.56rem] font-black uppercase text-muted-foreground">{label}</p>
      <p className={cn("mt-2 text-sm font-black", tone === "danger" ? "text-danger" : tone === "success" ? "text-success" : "text-foreground")}>{value}</p>
    </div>
  );
}

function MultiLineChart() {
  const series = [
    { values: [30, 35, 34, 43, 54, 58, 72], color: themeConfig.chartColors.tertiary },
    { values: [18, 24, 23, 29, 35, 41, 52], color: themeConfig.chartColors.primary },
    { values: [16, 18, 17, 21, 26, 31, 38], color: themeConfig.chartColors.warning },
    { values: [8, 7, 8, 8, 10, 11, 13], color: themeConfig.chartColors.negative, dashed: true }
  ];
  const months = ["Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  return (
    <svg viewBox="0 0 520 230" className="h-56 w-full" role="img" aria-label="Monthly commission trend chart">
      {[45, 90, 135, 180].map((y) => (
        <line key={y} x1="34" x2="505" y1={y} y2={y} stroke={themeConfig.chartColors.grid} strokeWidth="1" opacity="0.65" />
      ))}
      {series.map((item, index) => (
        <polyline
          key={index}
          points={toPoints(item.values, 34, 505, 24, 182)}
          fill="none"
          stroke={item.color}
          strokeWidth="3"
          strokeDasharray={item.dashed ? "5 5" : undefined}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      {months.map((month, index) => (
        <text key={month} x={62 + index * 74} y="214" fill={themeConfig.chartColors.label} fontSize="10" textAnchor="middle">{month}</text>
      ))}
    </svg>
  );
}

function PersistencyList({ title, items }: { title: string; items: readonly (readonly [string, string, string, string])[] }) {
  return (
    <div className="rounded-md border border-border bg-background p-3">
      <h3 className="text-[0.62rem] font-black uppercase text-muted-foreground">{title}</h3>
      <div className="mt-3 space-y-2">
        {items.map(([name, flat, weighted, tone]) => (
          <div key={name} className="grid grid-cols-[1fr_46px_46px_50px] items-center gap-2 text-[0.62rem] font-bold">
            <span className="text-foreground">{name}</span>
            <span className="h-1.5 rounded-full bg-success" />
            <span className="text-muted-foreground">{flat}</span>
            <InlineBadge tone={tone}>{weighted}</InlineBadge>
          </div>
        ))}
      </div>
    </div>
  );
}

function InlineBadge({ children, tone }: { children: ReactNode; tone: string }) {
  const mappedTone = tone === "green" ? "success" : tone === "yellow" ? "warning" : tone === "red" ? "danger" : (tone as Tone);

  return (
    <span className={cn("inline-flex w-fit items-center rounded-xs border px-1.5 py-0.5 text-[0.55rem] font-black uppercase", toneClasses[mappedTone])}>
      {children}
    </span>
  );
}

function toPoints(values: number[], minX: number, maxX: number, minY: number, maxY: number) {
  const maxValue = Math.max(...values) + 8;
  const step = (maxX - minX) / (values.length - 1);

  return values
    .map((value, index) => {
      const x = minX + index * step;
      const y = maxY - (value / maxValue) * (maxY - minY);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}
