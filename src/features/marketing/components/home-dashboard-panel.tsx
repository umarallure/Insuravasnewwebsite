"use client";

import { CalendarDays, ChevronDown, PhoneCall, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts";
import { cn } from "@/lib/utils";
import type {
  DashboardBreakdownSlice,
  DashboardGauge,
  DashboardKpi,
  DashboardKpiIcon,
  DashboardPanelContent
} from "@/features/marketing/types/marketing.types";

const palette = {
  windowBorder: "rgba(255,255,255,.10)",
  chromeBg: "#12151d",
  bodyBg: "#0a0d14",
  cardBg: "#12161f",
  cardBorder: "#1e2431",
  tileBg: "#1a1f2c",
  pillBg: "#161a24",
  pillBorder: "#252b39",
  label: "#8a93a5",
  dim: "#6b7280",
  grid: "rgba(255,255,255,.07)",
  track: "#2b3242",
  green: "#22c55e",
  orange: "#f97316",
  violet: "#a855f7",
  purple: "#8b5cf6",
  lavender: "#a5b4fc",
  indigo: "#6366f1",
  yellow: "#eab308"
};

const kpiIcons: Record<DashboardKpiIcon, { icon: LucideIcon; color: string }> = {
  calendar: { icon: CalendarDays, color: "#9aa6ff" },
  phone: { icon: PhoneCall, color: "#9aa6ff" },
  zap: { icon: Zap, color: "#f5c451" }
};

const gaugeTones: Record<DashboardGauge["tone"], string> = {
  green: palette.green,
  orange: palette.orange,
  violet: palette.violet
};

const sliceTones: Record<DashboardBreakdownSlice["tone"], string> = {
  violet: palette.purple,
  indigo: palette.indigo,
  yellow: palette.yellow,
  green: palette.green
};

const cardStyle = {
  background: palette.cardBg,
  border: `1px solid ${palette.cardBorder}`,
  borderRadius: "10px"
} as const;

const microLabel = {
  fontSize: "10.5px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: palette.label
} as const;

interface HomeDashboardPanelProps {
  content: DashboardPanelContent;
  className?: string;
}

export function HomeDashboardPanel({ content, className }: HomeDashboardPanelProps) {
  return (
    <div
      className={cn("overflow-hidden", className)}
      style={{
        borderRadius: "14px",
        border: `1px solid ${palette.windowBorder}`,
        background: palette.bodyBg,
        boxShadow: "0 30px 90px -28px rgba(0,0,0,.8)"
      }}
    >
      <div
        className="flex items-center gap-2.5"
        style={{
          padding: "11px 14px",
          background: palette.chromeBg,
          borderBottom: `1px solid ${palette.cardBorder}`
        }}
      >
        <span className="h-[10px] w-[10px] shrink-0 rounded-full" style={{ background: "#ff5f57" }} aria-hidden="true" />
        <span className="h-[10px] w-[10px] shrink-0 rounded-full" style={{ background: "#febc2e" }} aria-hidden="true" />
        <span className="h-[10px] w-[10px] shrink-0 rounded-full" style={{ background: "#28c840" }} aria-hidden="true" />
        <span className="ml-2.5 truncate" style={{ fontSize: "11.5px", color: palette.label }}>
          {content.url}
        </span>
      </div>

      <div style={{ padding: "14px" }}>
        <div className="mb-3.5 flex flex-wrap items-center justify-end gap-2">
          {content.ranges.map((range) => {
            const isActive = range === content.activeRange;

            return (
              <span
                key={range}
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  padding: "4px 9px",
                  borderRadius: "6px",
                  background: isActive ? palette.purple : palette.pillBg,
                  border: `1px solid ${isActive ? palette.purple : palette.pillBorder}`,
                  color: isActive ? "#ffffff" : palette.label
                }}
              >
                {range}
              </span>
            );
          })}
          <span
            className="ml-1 inline-flex items-center gap-1"
            style={{
              fontSize: "10.5px",
              fontWeight: 600,
              padding: "4px 9px",
              borderRadius: "6px",
              background: palette.pillBg,
              border: `1px solid ${palette.pillBorder}`,
              color: palette.label
            }}
          >
            {content.campaignFilter}
            <ChevronDown className="h-3 w-3" aria-hidden="true" />
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.kpis.map((kpi) => (
            <KpiCard key={kpi.label} kpi={kpi} />
          ))}
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.gauges.map((gauge) => (
            <GaugeCard key={`${gauge.label}-${gauge.sublabel}`} gauge={gauge} />
          ))}
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1.66fr_1.33fr_1fr]">
          <ChartCard label={content.premium.label} caption={content.premium.caption}>
            <div style={{ height: "168px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={content.premium.points} margin={{ top: 8, right: 6, bottom: 0, left: -14 }}>
                  <defs>
                    <linearGradient id="premium-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={palette.purple} stopOpacity={0.45} />
                      <stop offset="100%" stopColor={palette.purple} stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke={palette.grid} strokeDasharray="2 4" vertical={false} />
                  <XAxis
                    dataKey="name"
                    stroke={palette.dim}
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 10, fill: palette.dim }}
                    dy={6}
                  />
                  <YAxis
                    stroke={palette.dim}
                    tickLine={false}
                    axisLine={false}
                    width={46}
                    ticks={[20000, 40000, 60000]}
                    domain={[8000, 68000]}
                    tick={{ fontSize: 10, fill: palette.dim }}
                    tickFormatter={(value: number) => `$${value / 1000}K`}
                  />
                  <Area
                    type="monotone"
                    dataKey="current"
                    stroke={palette.purple}
                    strokeWidth={2}
                    fill="url(#premium-fill)"
                    dot={false}
                    activeDot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="previous"
                    stroke={palette.lavender}
                    strokeWidth={1.5}
                    strokeDasharray="4 4"
                    dot={false}
                    activeDot={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard label={content.activity.label} caption={content.activity.caption}>
            <div style={{ height: "168px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={content.activity.bars}
                  margin={{ top: 8, right: 4, bottom: 0, left: 0 }}
                  barGap={2}
                  barCategoryGap="18%"
                >
                  <CartesianGrid stroke={palette.grid} strokeDasharray="2 4" vertical={false} />
                  <XAxis
                    dataKey="name"
                    stroke={palette.dim}
                    tickLine={false}
                    axisLine={false}
                    interval={0}
                    tick={{ fontSize: 10, fill: palette.dim }}
                    tickFormatter={(value: string, index: number) => (index % 2 === 0 ? value : "")}
                    dy={6}
                  />
                  <YAxis hide domain={[0, 104]} />
                  <Bar dataKey="calls" fill={palette.purple} radius={[2, 2, 0, 0]} maxBarSize={9} />
                  <Bar dataKey="contacts" fill={palette.green} radius={[2, 2, 0, 0]} maxBarSize={9} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard label={content.breakdown.label}>
            <div className="flex justify-center" style={{ paddingTop: "6px" }}>
              <BreakdownDonut slices={content.breakdown.slices} centerValue={content.breakdown.centerValue} />
            </div>
            <ul className="mt-4 space-y-[7px]">
              {content.breakdown.slices.map((slice) => (
                <li key={slice.label} className="flex items-center justify-between gap-3">
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      className="h-[6px] w-[6px] shrink-0 rounded-full"
                      style={{ background: sliceTones[slice.tone] }}
                      aria-hidden="true"
                    />
                    <span className="truncate" style={{ fontSize: "11px", color: palette.label }}>
                      {slice.label}
                    </span>
                  </span>
                  <span
                    className="shrink-0 tabular-nums"
                    style={{ fontSize: "11.5px", fontWeight: 700, color: "#ffffff" }}
                  >
                    {slice.value}
                  </span>
                </li>
              ))}
            </ul>
          </ChartCard>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ kpi }: { kpi: DashboardKpi }) {
  const { icon: Icon, color } = kpiIcons[kpi.icon];

  return (
    <div style={{ ...cardStyle, padding: "13px 14px 14px" }}>
      <div className="flex items-center gap-2.5">
        <span
          className="grid shrink-0 place-items-center"
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "6px",
            background: palette.tileBg,
            border: `1px solid ${palette.cardBorder}`,
            color
          }}
          aria-hidden="true"
        >
          <Icon style={{ width: "13px", height: "13px" }} />
        </span>
        <span className="min-w-0 flex-1 truncate" style={microLabel}>
          {kpi.label}
        </span>
        <Sparkline values={kpi.spark} />
      </div>
      <div className="mt-3 flex items-end justify-between gap-3">
        <span style={{ fontSize: "27px", fontWeight: 700, lineHeight: 1, color: "#ffffff" }}>{kpi.value}</span>
        <span
          className="shrink-0"
          style={{ fontSize: "10.5px", fontWeight: 600, color: palette.green, paddingBottom: "2px" }}
        >
          ↗ {kpi.delta}
        </span>
      </div>
    </div>
  );
}

function Sparkline({ values }: { values: number[] }) {
  const width = 42;
  const height = 16;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const span = max - min || 1;
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / span) * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="shrink-0" aria-hidden="true">
      <polyline
        points={points}
        fill="none"
        stroke={palette.green}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GaugeCard({ gauge }: { gauge: DashboardGauge }) {
  return (
    <div className="flex items-center gap-4" style={{ ...cardStyle, padding: "16px 18px" }}>
      <GaugeRing percent={gauge.percent} color={gaugeTones[gauge.tone]} />
      <span className="min-w-0" style={microLabel}>
        <span className="block">{gauge.label}</span>
        <span className="block">{gauge.sublabel}</span>
      </span>
    </div>
  );
}

function GaugeRing({ percent, color }: { percent: number; color: string }) {
  const size = 62;
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <span className="relative grid shrink-0 place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={palette.track} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${(circumference * percent) / 100} ${circumference}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="absolute tabular-nums" style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
        {`${percent}%`}
      </span>
    </span>
  );
}

function BreakdownDonut({
  slices,
  centerValue
}: {
  slices: DashboardBreakdownSlice[];
  centerValue: string;
}) {
  const size = 86;
  const stroke = 13;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = slices.reduce((sum, slice) => sum + slice.count, 0) || 1;

  let offset = 0;

  return (
    <span className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={palette.track} strokeWidth={stroke} />
        {slices.map((slice) => {
          const length = (slice.count / total) * circumference;
          const dashOffset = -offset;
          offset += length;

          return (
            <circle
              key={slice.label}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={sliceTones[slice.tone]}
              strokeWidth={stroke}
              strokeDasharray={`${length} ${circumference - length}`}
              strokeDashoffset={dashOffset}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          );
        })}
      </svg>
      <span className="absolute tabular-nums" style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>
        {centerValue}
      </span>
    </span>
  );
}

function ChartCard({
  label,
  caption,
  children
}: {
  label: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ ...cardStyle, padding: "13px 14px 14px" }}>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <span style={microLabel}>{label}</span>
        {caption ? <span style={{ fontSize: "10.5px", color: palette.dim }}>{caption}</span> : null}
      </div>
      {children}
    </div>
  );
}
