export const themeConfig = {
  layout: {
    pageMax: 1240,
    headerHeight: 64,
    mobileBreakpoint: 768
  },
  chartColors: {
    primary: "rgb(var(--chart-primary))",
    secondary: "rgb(var(--chart-secondary))",
    tertiary: "rgb(var(--chart-tertiary))",
    positive: "rgb(var(--chart-positive))",
    negative: "rgb(var(--chart-negative))",
    warning: "rgb(var(--chart-warning))",
    grid: "rgb(var(--chart-grid))",
    label: "rgb(var(--chart-label))"
  },
  motion: {
    fast: 120,
    base: 180,
    slow: 280
  }
} as const;
