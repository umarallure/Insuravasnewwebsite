import type { getAffiliatesContent } from "@/features/marketing/services/marketing.service";
import { AffiliateApplicationForm } from "@/features/marketing/components/affiliate-application-form";
import { BarCard, ProductWindow } from "@/features/marketing/components/product-window";
import { FaqList } from "@/features/marketing/components/faq-list";
import { FeatureGrid } from "@/features/marketing/components/feature-grid";
import { MarketingHero } from "@/features/marketing/components/marketing-hero";
import { MarketingSection } from "@/features/marketing/components/marketing-section";
import { MetricNoteList } from "@/features/marketing/components/metric-note-list";
import { SectionHeading } from "@/features/marketing/components/section-heading";
import { StatStrip } from "@/features/marketing/components/stat-strip";

interface AffiliatePageContentProps {
  content: Awaited<ReturnType<typeof getAffiliatesContent>>;
}

export function AffiliatePageContent({ content }: AffiliatePageContentProps) {
  return (
    <>
      <MarketingHero content={content.hero}>
        <p className="text-caption text-muted-foreground">Requires an INSURVAS account. Free to join. No cap on referrals.</p>
      </MarketingHero>
      <FeatureGrid items={content.steps} />
      <MarketingSection>
        <div className="grid gap-8 md:grid-cols-[1fr_420px] md:items-end">
          <SectionHeading
            title="Every month they stay, your wallet moves."
            mutedTitle="$15 per active referral, every billing cycle, no invoices, no thresholds, no waiting."
            className="mb-0"
          />
          <ProductWindow
            panel={{
              title: "Wallet - activity",
              badge: "Usage wallet +$645.00",
              variant: "table",
              rows: [
                { label: "Referral credit - M. Alvarez", value: "Month 14 subscription renewal", status: "+$15.00", tone: "success" },
                { label: "Referral credit - Legacy Life Group", value: "Month 6 subscription renewal", status: "+$15.00", tone: "success" },
                { label: "Referral credit - D. Okafor", value: "Month 2 subscription renewal", status: "+$15.00", tone: "success" }
              ]
            }}
          />
        </div>
      </MarketingSection>
      <StatStrip stats={content.benefits} />
      <MarketingSection>
        <SectionHeading
          eyebrow="Your potential"
          title="Referrals compound."
          mutedTitle="Every referral keeps paying you monthly, month 12 earns from all twelve cohorts."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <BarCard title="10 referrals a month" value="$11,700" values={[2, 4, 8, 11, 14, 18, 22, 26, 31, 36, 42, 48]} />
          <BarCard title="25 referrals a month" value="$29,250" values={[3, 6, 10, 15, 21, 28, 35, 43, 52, 62, 73, 85]} />
        </div>
        <p className="mt-5 text-caption leading-5 text-muted-foreground">
          A tiny agency audience or niche signature can compound when accounts stay active.
        </p>
      </MarketingSection>
      <MarketingSection id="apply">
        <div className="grid gap-10 md:grid-cols-[1fr_460px]">
          <div>
            <SectionHeading
              title="Apply to the program."
              mutedTitle="Open to every INSURVAS account, agents, agency owners, and teams alike."
              className="mb-8"
            />
            <MetricNoteList
              items={[
                { title: "Requires an INSURVAS account.", description: "Your link and rewards are tied to it. Not a user yet? Start a free trial first, then apply." },
                { title: "$15/mo per active referral.", description: "Usage credit automatically lands every cycle while the account stays paid." },
                { title: "Code emailed on approval.", description: "Applications are reviewed within a few days." }
              ]}
            />
          </div>
          <AffiliateApplicationForm />
        </div>
      </MarketingSection>
      <MarketingSection id="faq">
        <SectionHeading eyebrow="Common questions" title="Affiliate FAQ" />
        <FaqList items={content.faq} />
      </MarketingSection>
    </>
  );
}
