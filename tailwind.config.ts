import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-muted": "rgb(var(--color-surface-muted) / <alpha-value>)",
        "surface-elevated": "rgb(var(--color-surface-elevated) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        "muted-foreground": "rgb(var(--color-muted-foreground) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-hover": "rgb(var(--color-primary-hover) / <alpha-value>)",
        "primary-active": "rgb(var(--color-primary-active) / <alpha-value>)",
        "primary-subtle": "rgb(var(--color-primary-subtle) / <alpha-value>)",
        "primary-foreground": "rgb(var(--color-primary-foreground) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "secondary-foreground": "rgb(var(--color-secondary-foreground) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        input: "rgb(var(--color-input) / <alpha-value>)",
        ring: "rgb(var(--color-ring) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        "success-subtle": "rgb(var(--color-success-subtle) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        "warning-subtle": "rgb(var(--color-warning-subtle) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
        "danger-subtle": "rgb(var(--color-danger-subtle) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        "info-subtle": "rgb(var(--color-info-subtle) / <alpha-value>)",
        chart: {
          primary: "rgb(var(--chart-primary) / <alpha-value>)",
          secondary: "rgb(var(--chart-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--chart-tertiary) / <alpha-value>)",
          positive: "rgb(var(--chart-positive) / <alpha-value>)",
          negative: "rgb(var(--chart-negative) / <alpha-value>)",
          warning: "rgb(var(--chart-warning) / <alpha-value>)",
          grid: "rgb(var(--chart-grid) / <alpha-value>)",
          label: "rgb(var(--chart-label) / <alpha-value>)"
        }
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)"
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        glow: "var(--shadow-glow)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"]
      },
      fontSize: {
        display: ["var(--text-display)", { lineHeight: "var(--leading-display)", letterSpacing: "0" }],
        title: ["var(--text-title)", { lineHeight: "var(--leading-title)", letterSpacing: "0" }],
        subtitle: ["var(--text-subtitle)", { lineHeight: "var(--leading-subtitle)", letterSpacing: "0" }],
        body: ["var(--text-body)", { lineHeight: "var(--leading-body)", letterSpacing: "0" }],
        caption: ["var(--text-caption)", { lineHeight: "var(--leading-caption)", letterSpacing: "0" }]
      },
      transitionDuration: {
        fast: "var(--motion-fast)",
        base: "var(--motion-base)",
        slow: "var(--motion-slow)"
      },
      screens: {
        xs: "420px"
      }
    }
  },
  plugins: []
};

export default config;
