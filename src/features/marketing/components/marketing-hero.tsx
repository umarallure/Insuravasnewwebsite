import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { MarketingHeroContent } from "@/features/marketing/types/marketing.types";

interface MarketingHeroProps {
  content: MarketingHeroContent;
  children?: React.ReactNode;
  compact?: boolean;
}

export function MarketingHero({ content, children }: MarketingHeroProps) {
  const titleLines = content.titleLines?.length ? content.titleLines : [content.title];

  return (
    <section className="px-8 text-center" style={{ paddingTop: "104px", paddingBottom: 0 }}>
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
          content.eyebrow && "mt-8"
        )}
        style={{
          fontSize: "clamp(3rem, 4.8vw, 4.625rem)",
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
        style={{ maxWidth: "730px", marginTop: "26px" }}
      >
        {content.description}
      </p>
      {content.primaryAction || content.secondaryAction ? (
        <div className="mt-8 flex flex-wrap justify-center gap-3" style={{ marginTop: "34px" }}>
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
      <p className="mt-4 text-[13px] text-muted-foreground" style={{ marginTop: "16px" }}>
        14-day free trial · Cancel anytime
      </p>
      {children ? (
        <div
          className="mt-16"
          style={{
            marginTop: "64px",
            paddingBottom: "48px",
            background: "repeating-linear-gradient(90deg, rgba(129, 140, 248, 0.06) 0px, rgba(129, 140, 248, 0.06) 1px, transparent 1px, transparent 9px), linear-gradient(rgb(5, 7, 12) 0%, rgba(78, 86, 200, 0.16) 40%, rgba(78, 86, 200, 0.1) 72%, rgb(5, 7, 12) 100%)"
          }}
        >
          <div style={{ maxWidth: "1096px", margin: "0px auto", padding: "0px 32px" }}>{children}</div>
        </div>
      ) : null}
    </section>
  );
}
