import type { getSalesAiContent } from "@/features/marketing/services/marketing.service";
import { CtaSection } from "@/features/marketing/components/cta-section";
import { DetailSections } from "@/features/marketing/components/detail-sections";
import { MarketingHero } from "@/features/marketing/components/marketing-hero";
import { MarketingSection } from "@/features/marketing/components/marketing-section";
import { ProductWindow } from "@/features/marketing/components/product-window";
import { StatStrip } from "@/features/marketing/components/stat-strip";

interface SalesAiPageContentProps {
  content: Awaited<ReturnType<typeof getSalesAiContent>>;
}

export function SalesAiPageContent({ content }: SalesAiPageContentProps) {
  return (
    <>
      <MarketingHero content={content.hero}>
        <ProductWindow
          panel={{
            title: "Inbound lead - live reply",
            badge: "Live transfer",
            variant: "conversation",
            rows: [
              { label: "Lead", value: "I requested info but I don't know where to start." },
              { label: "Ashley AI", value: "No pressure. I can ask a few questions and get you to the right agent." },
              { label: "Lead", value: "That works. I just need something affordable." },
              { label: "Ashley AI", value: "Perfect. Tobias has an opening this afternoon. Want me to book it?" }
            ]
          }}
          className="mx-auto max-w-3xl"
        />
      </MarketingHero>
      <StatStrip stats={content.stats} />
      <CtaSection {...content.introCta} compact />
      <MarketingSection>
        <DetailSections sections={content.sections} railItems={content.rail} />
      </MarketingSection>
      <CtaSection {...content.closingCta} />
    </>
  );
}
