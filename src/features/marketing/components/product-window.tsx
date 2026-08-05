"use client";

import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip as ChartTooltip, XAxis, YAxis } from "recharts";
import { CalendarDays, Phone, Sparkles } from "lucide-react";
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
  return (
    <div className={cn("overflow-hidden rounded-md border border-border bg-surface shadow-glow", className)}>
      <div className="flex h-10 items-center justify-between border-b border-border bg-surface-elevated px-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-danger" />
          <span className="h-2 w-2 rounded-full bg-warning" />
          <span className="h-2 w-2 rounded-full bg-success" />
          <span className="ml-2 text-caption font-semibold text-muted-foreground">{panel.title}</span>
        </div>
        {panel.badge ? <Badge variant="success">{panel.badge}</Badge> : null}
      </div>
      <div className="min-h-56 bg-surface-muted/60 p-4">
        {panel.variant === "conversation" ? <ConversationPanel panel={panel} /> : null}
        {panel.variant === "chart" ? <ChartPanel panel={panel} /> : null}
        {panel.variant === "calendar" ? <CalendarPanel panel={panel} /> : null}
        {panel.variant === "campaign" ? <CampaignPanel panel={panel} /> : null}
        {panel.variant === "dialer" ? <DialerPanel panel={panel} /> : null}
        {!panel.variant || panel.variant === "table" ? <TablePanel panel={panel} /> : null}
      </div>
    </div>
  );
}

function ConversationPanel({ panel }: ProductWindowProps) {
  return (
    <div className="space-y-3">
      {(panel.rows ?? []).map((row, index) => (
        <div
          key={`${row.label}-${index}`}
          className={cn(
            "max-w-[88%] rounded-md border border-border bg-background p-3 text-sm leading-6",
            index % 2 === 1 && "ml-auto border-primary/30 bg-primary-subtle"
          )}
        >
          <div className="mb-1 flex items-center gap-2 text-caption font-bold text-primary-hover">
            {index % 2 === 1 ? <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> : <Phone className="h-3.5 w-3.5" aria-hidden="true" />}
            {row.label}
          </div>
          <p className="text-muted-foreground">{row.value}</p>
        </div>
      ))}
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
