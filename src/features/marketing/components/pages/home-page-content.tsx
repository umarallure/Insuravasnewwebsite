import type { getHomeContent } from "@/features/marketing/services/marketing.service";
import { AshleySection } from "@/features/marketing/components/ashley-section";
import { CtaSection } from "@/features/marketing/components/cta-section";
import { FeatureGrid } from "@/features/marketing/components/feature-grid";
import { HomeDashboardPanel } from "@/features/marketing/components/home-dashboard-panel";
import { HomeWalkthrough } from "@/features/marketing/components/home/home-walkthrough";
import { MarketingHero } from "@/features/marketing/components/marketing-hero";
import { MarketingSection } from "@/features/marketing/components/marketing-section";
import { PricingCard } from "@/features/marketing/components/pricing-card";
import { SectionHeading } from "@/features/marketing/components/section-heading";
import { StatStrip } from "@/features/marketing/components/stat-strip";
import { TrustStrip } from "@/features/marketing/components/trust-strip";

interface HomePageContentProps {
  content: Awaited<ReturnType<typeof getHomeContent>>;
}

export function HomePageContent({ content }: HomePageContentProps) {
  return (
    <>
      <MarketingHero content={content.hero}>
        <HomeDashboardPanel content={content.dashboard} />
      </MarketingHero>

      <TrustStrip note={content.trustNote} items={content.trustItems} />

      <StatStrip stats={content.stats} />

      <MarketingSection withBorder={false} padTop="96px" padBottom="40px">
        <SectionHeading
          label={content.overview.label}
          title={content.overview.title}
          mutedTitle={content.overview.mutedTitle}
          className="mb-14"
        />
        <HomeWalkthrough sections={content.sections} railItems={content.rail} />
      </MarketingSection>

      <AshleySection
        name={content.ashley.name}
        eyebrow={content.ashley.eyebrow}
        headline={content.ashley.headline}
        capabilities={content.ashley.capabilities}
      />

      <MarketingSection withBorder={false} padTop="104px" padBottom="96px" className="text-center">
        <div
          className="mx-auto max-w-[860px]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: "22px 22px"
          }}
        >
          <p
            className="text-foreground"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.875rem, 3.4vw, 2.875rem)",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              fontWeight: 400
            }}
          >
            &quot;{content.quote.text}&quot;
          </p>
          <p className="mt-10 text-[14.5px] font-semibold text-foreground">{content.quote.attribution}</p>
          <a
            href="/testimonials"
            className="mt-5 inline-block text-[14px] font-medium text-primary hover:text-primary-hover"
          >
            Read every agent text ›
          </a>
        </div>
      </MarketingSection>

      <div className="px-6 pb-16 md:px-9 md:pb-20">
        <FeatureGrid items={content.proofNotes} columns={3} />
      </div>

      <MarketingSection id="pricing" padTop="96px" padBottom="104px">
        <div className="mb-10">
          <span
            className="mb-5 inline-block rounded-md px-2.5 py-1 text-[13px] font-medium"
            style={{
              color: "#A5B4FC",
              background: "rgba(99,102,241,.14)"
            }}
          >
            Pricing
          </span>
        </div>
        <div className="mt-6 grid gap-14 md:grid-cols-2 md:gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="max-w-2xl">
            <h2
              className="text-foreground"
              style={{
                fontSize: "clamp(1.75rem, 2.6vw, 2.5rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.012em",
                fontWeight: 500
              }}
            >
              {content.pricing.title}{" "}
              <span className="text-muted-foreground" style={{ color: "#6B7280" }}>
                {content.pricing.mutedTitle}
              </span>
            </h2>
          </div>
          <div
            className="grid md:grid-cols-2"
            style={{
              border: "1px solid rgb(var(--color-border))",
              borderRadius: "14px",
              overflow: "hidden"
            }}
          >
            {content.pricing.plans.map((plan) => (
              <PricingCard key={`${plan.eyebrow}-${plan.price}`} plan={plan} />
            ))}
          </div>
        </div>
        <p className="mt-6 text-[13px] text-muted-foreground">
          Running an agency?{" "}
          <a href="/affiliates" className="text-primary hover:text-primary-hover">
            Independent setup from $499 one-time ›
          </a>
        </p>
      </MarketingSection>

      <CtaSection {...content.closingCta} />
    </>
  );
}
