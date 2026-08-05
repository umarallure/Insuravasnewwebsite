import type { ProductPanel } from "@/features/marketing/types/marketing.types";
import type { getComplianceContent } from "@/features/marketing/services/marketing.service";
import { CtaSection } from "@/features/marketing/components/cta-section";
import { DetailSections } from "@/features/marketing/components/detail-sections";
import { FeatureGrid } from "@/features/marketing/components/feature-grid";
import { MarketingHero } from "@/features/marketing/components/marketing-hero";
import { MarketingSection } from "@/features/marketing/components/marketing-section";
import { MetricNoteList } from "@/features/marketing/components/metric-note-list";
import { ProductWindow } from "@/features/marketing/components/product-window";
import { SectionHeading } from "@/features/marketing/components/section-heading";

const heroPanel: ProductPanel = {
  title: "Outbound gate - every call and text passes through",
  badge: "Enforced",
  variant: "table",
  rows: [
    { label: "Linda P. - SMS", value: "9am local, consent recorded", status: "Send", tone: "success" },
    { label: "Robert M. - AI call", value: "Missing voice consent", status: "Blocked", tone: "danger" },
    { label: "J. Alvarez - Email", value: "After quiet hours", status: "Deferred", tone: "warning" }
  ]
};

interface CompliancePageContentProps {
  content: Awaited<ReturnType<typeof getComplianceContent>>;
}

export function CompliancePageContent({ content }: CompliancePageContentProps) {
  return (
    <>
      <MarketingHero content={content.hero}>
        <ProductWindow panel={heroPanel} className="mx-auto max-w-4xl" />
      </MarketingHero>
      <FeatureGrid items={content.features} />
      <CtaSection
        title="Bring us your compliance checklist."
        mutedTitle="We'll show you where each line is enforced."
        primaryAction={{ label: "Watch the demo", href: "/demo" }}
        compact
      />
      <MarketingSection>
        <DetailSections
          sections={content.sections}
          railItems={["Quiet hours", "Consent before AI dials", "Disclosure on record", "Abandoned calls handled", "Opt-outs cascade", "DNC that fails closed"]}
        />
      </MarketingSection>
      <MarketingSection>
        <SectionHeading title="Your book, protected." mutedTitle="The data side of the same discipline." />
        <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {content.trust.map((item) => (
            <article key={item.title} className="bg-background p-5">
              <h3 className="text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </MarketingSection>
      <MarketingSection>
        <div className="grid gap-10 md:grid-cols-[1fr_420px] md:items-center">
          <div>
            <SectionHeading
              title="Prove your leads are compliant."
              mutedTitle="When a lead, a carrier, or a lawyer asks, you have the record."
              className="mb-8"
            />
            <MetricNoteList items={content.proofBullets.map((title) => ({ title, description: "" }))} />
          </div>
          <ProductWindow
            panel={{
              title: "Lead legal export",
              badge: "Evidence on entry",
              variant: "table",
              rows: [
                { label: "2,408 leads imported", value: "Quiet hours and DNC checked", status: "Pass", tone: "success" },
                { label: "Consent records attached", value: "Source plus timestamp", status: "Verified", tone: "success" },
                { label: "AI voice on this batch", value: "Enabled after attestation", status: "Enabled", tone: "success" },
                { label: "Compliance log", value: "Export for carrier or counsel", status: "Ready", tone: "info" }
              ]
            }}
          />
        </div>
      </MarketingSection>
      <CtaSection {...content.cta} />
    </>
  );
}
