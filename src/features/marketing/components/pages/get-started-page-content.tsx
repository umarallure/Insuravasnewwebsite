import type { getGetStartedContent } from "@/features/marketing/services/marketing.service";
import { CtaSection } from "@/features/marketing/components/cta-section";
import { FeatureGrid } from "@/features/marketing/components/feature-grid";
import { MarketingHero } from "@/features/marketing/components/marketing-hero";
import { MarketingSection } from "@/features/marketing/components/marketing-section";
import { MetricNoteList } from "@/features/marketing/components/metric-note-list";
import { PricingCard } from "@/features/marketing/components/pricing-card";
import { SectionHeading } from "@/features/marketing/components/section-heading";

interface GetStartedPageContentProps {
  content: Awaited<ReturnType<typeof getGetStartedContent>>;
}

export function GetStartedPageContent({ content }: GetStartedPageContentProps) {
  return (
    <>
      <MarketingHero content={content.hero} />
      <div className="px-6 pb-14 md:px-9">
        <FeatureGrid items={content.steps} columns={3} />
      </div>
      <MarketingSection>
        <SectionHeading
          eyebrow="For agents"
          title="Your own INSURVAS subscription."
          mutedTitle="Monthly with a free trial, or annual with three months free."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {content.agentPlans.map((plan) => (
            <PricingCard key={`${plan.eyebrow}-${plan.price}`} plan={plan} />
          ))}
        </div>
      </MarketingSection>
      <MarketingSection>
        <SectionHeading
          eyebrow="For agencies"
          title="Launch a white-label agency, or cover your whole team."
          mutedTitle="Independent is self-serve. Enterprise is sales-assisted."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {content.agencyPlans.map((plan) => (
            <PricingCard key={`${plan.eyebrow}-${plan.price}`} plan={plan} />
          ))}
        </div>
      </MarketingSection>
      <MarketingSection>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <MetricNoteList items={content.assurance} />
          <blockquote className="text-lg font-semibold leading-8 text-foreground">
            &quot;For April I sold $85,000 in AP with 80% commission and only 7% chargeback.&quot;
            <span className="mt-3 block text-caption text-muted-foreground">Devin R. - Life insurance agent</span>
          </blockquote>
        </div>
      </MarketingSection>
      <CtaSection {...content.cta} />
    </>
  );
}
