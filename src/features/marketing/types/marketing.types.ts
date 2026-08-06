export interface MarketingStat {
  value: string;
  label: string;
}

export interface FeatureCardItem {
  eyebrow?: string;
  title: string;
  description: string;
}

export interface MarketingHeroContent {
  eyebrow?: string;
  title: string;
  /** Renders the headline across explicit lines, matching the homepage two-line lockup. */
  titleLines?: string[];
  description: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export interface ProductRow {
  label: string;
  value?: string;
  status?: string;
  tone?: "success" | "warning" | "danger" | "neutral" | "info" | "primary";
}

export interface ProductMetric {
  label: string;
  value: string;
  delta?: string;
}

export interface ProductPanel {
  title: string;
  badge?: string;
  rows?: ProductRow[];
  metrics?: ProductMetric[];
  chartValues?: number[];
  variant?: "conversation" | "table" | "chart" | "calendar" | "campaign" | "dialer" | "email" | "campaign-builder" | "calendar-week" | "dialer-v2" | "drip-sequence" | "email-builder" | "lifecycle" | "call-summary" | "compliance-health" | "compliance-gate" | "quiet-hours" | "consent-cards" | "disclosure" | "dialer-pacing" | "stop-cascade" | "dnc-log";
}

export interface DetailSection {
  title: string;
  mutedTitle?: string;
  description: string;
  panel: ProductPanel;
}

export interface PricingPlan {
  eyebrow: string;
  name?: string;
  price: string;
  interval?: string;
  description?: string;
  badge?: string;
  /** Omit to render the card without a feature checklist. */
  features?: string[];
  actionLabel: string;
  href: string;
  highlighted?: boolean;
}

export type ComparisonValue = "included" | "partial" | "limited" | "none" | "text";

export interface ComparisonCell {
  value: ComparisonValue;
  label?: string;
}

export interface ComparisonRow {
  feature: string;
  cells: ComparisonCell[];
}

export interface ComparisonGroup {
  label: string;
  rows: ComparisonRow[];
}

export interface Testimonial {
  id: string;
  result: string;
  quote: string;
  name: string;
  role: string;
}

export type TrustItemIcon =
  | "leads"
  | "messaging"
  | "dialer"
  | "calendar"
  | "statements"
  | "book"
  | "shield";

export interface TrustItem {
  label: string;
  icon: TrustItemIcon;
}

export type DashboardKpiIcon = "calendar" | "phone" | "zap";

export interface DashboardKpi {
  label: string;
  value: string;
  delta: string;
  icon: DashboardKpiIcon;
  /** Sparkline sample values, drawn as a small green trend line. */
  spark: number[];
}

export interface DashboardGauge {
  percent: number;
  label: string;
  sublabel: string;
  tone: "green" | "orange" | "violet";
}

export interface DashboardBreakdownSlice {
  label: string;
  value: string;
  count: number;
  tone: "violet" | "indigo" | "yellow" | "green";
}

export interface DashboardPanelContent {
  /** Fake browser chrome address, e.g. "app.insurvas.ai / Dashboard". */
  url: string;
  ranges: string[];
  activeRange: string;
  campaignFilter: string;
  kpis: DashboardKpi[];
  gauges: DashboardGauge[];
  premium: {
    label: string;
    caption: string;
    points: { name: string; current: number; previous: number }[];
  };
  activity: {
    label: string;
    caption: string;
    /** Every other hour is labelled on the axis, matching the mock. */
    bars: { name: string; calls: number; contacts: number }[];
  };
  breakdown: {
    label: string;
    centerValue: string;
    slices: DashboardBreakdownSlice[];
  };
}

/** A walkthrough block: a white lead sentence followed by a muted continuation. */
export interface WalkthroughSection {
  title: string;
  mutedTitle: string;
}
