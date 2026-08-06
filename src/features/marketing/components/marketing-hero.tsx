import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { MarketingHeroContent } from "@/features/marketing/types/marketing.types";

interface MarketingHeroProps {
  content: MarketingHeroContent;
  children?: React.ReactNode;
  compact?: boolean;
}

export function MarketingHero({ content, children, compact = false }: MarketingHeroProps) {
  const titleLines = content.titleLines?.length ? content.titleLines : [content.title];

  return (
    <section className="px-4 text-center sm:px-8" style={{ paddingTop: compact ? "18px" : "104px", paddingBottom: 0 }}>
      {content.eyebrow ? (
        <Link
          href="/sales-ai"
          className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(var(--color-border))] px-3.5 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:border-white/20 hover:bg-white/5 hover:text-foreground"
        >
          {content.eyebrow}
          <span className="text-muted-foreground">›</span>
        </Link>
      ) : null}
      <h1
        className={cn(
          "mx-auto max-w-[980px] font-semibold text-foreground",
          content.eyebrow && (compact ? "mt-3" : "mt-8")
        )}
        style={{
          fontSize: compact ? "clamp(2.5rem, 4.2vw, 3.75rem)" : "clamp(3rem, 4.8vw, 4.625rem)",
          lineHeight: 0.97,
          letterSpacing: "-0.025em",
          fontWeight: 600
        }}
      >
        {titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
      <p
        className="mx-auto text-[19px] leading-[1.5] text-muted-foreground"
        style={{ maxWidth: "580px", marginTop: compact ? "8px" : "26px", fontSize: compact ? "14px" : "19px" }}
      >
        {content.description}
      </p>
      {content.primaryAction || content.secondaryAction ? (
        <div
          className="flex flex-wrap justify-center gap-3"
          style={{ marginTop: compact ? "10px" : "34px" }}
        >
          {content.secondaryAction ? (
            <Link
              href={content.secondaryAction.href}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              {content.secondaryAction.label}
            </Link>
          ) : null}
          {content.primaryAction ? (
            <Link
              href={content.primaryAction.href}
              className={cn(buttonVariants({ variant: "inverse", size: "sm" }))}
            >
              {content.primaryAction.label}
            </Link>
          ) : null}
        </div>
      ) : null}
      {!compact ? (
        <p className="text-[13px] text-muted-foreground" style={{ marginTop: "16px" }}>
          14-day free trial · Cancel anytime
        </p>
      ) : null}
      {children ? (
        <div
          className="-mx-4 sm:-mx-8"
          style={{
            marginTop: compact ? "16px" : "64px",
            paddingBottom: compact ? "2px" : "48px",
            background: "repeating-linear-gradient(90deg, rgba(129, 140, 248, 0.06) 0px, rgba(129, 140, 248, 0.06) 1px, transparent 1px, transparent 9px), linear-gradient(rgb(5, 7, 12) 0%, rgba(78, 86, 200, 0.16) 40%, rgba(78, 86, 200, 0.1) 72%, rgb(5, 7, 12) 100%)"
          }}
        >
          <div style={{ maxWidth: "1096px", margin: "0px auto" }}>{children}</div>
        </div>
      ) : null}
    </section>
  );
}
