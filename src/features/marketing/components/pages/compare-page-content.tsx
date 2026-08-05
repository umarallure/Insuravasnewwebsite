import type { getComparisonContent } from "@/features/marketing/services/marketing.service";
import { Badge } from "@/components/ui/badge";
import { ComparisonMatrix } from "@/features/marketing/components/comparison-matrix";
import { CtaSection } from "@/features/marketing/components/cta-section";
import { FeatureGrid } from "@/features/marketing/components/feature-grid";
import { MarketingHero } from "@/features/marketing/components/marketing-hero";
import { MarketingSection } from "@/features/marketing/components/marketing-section";

interface ComparePageContentProps {
  content: Awaited<ReturnType<typeof getComparisonContent>>;
}

export function ComparePageContent({ content }: ComparePageContentProps) {
  return (
    <>
      <MarketingHero content={content.hero}>
        <div className="flex flex-wrap justify-center gap-3">
          {content.pills.map((pill) => (
            <Badge key={pill} variant="neutral">
              {pill}
            </Badge>
          ))}
        </div>
      </MarketingHero>
      <FeatureGrid items={content.summary} columns={3} />
      <MarketingSection>
        <ComparisonMatrix columns={content.columns} groups={content.groups} />
        <p className="mt-5 text-caption leading-5 text-muted-foreground">
          A2P registration is free on annual plans. Second value with the MLPD add-on subscription. Email allotment on paid plans; trial accounts pay per email. Rates shown are published 2026-07 values and may vary by carrier.
        </p>
      </MarketingSection>
      <CtaSection {...content.cta} compact />
    </>
  );
}
