import type { ProductPanel } from "@/features/marketing/types/marketing.types";
import type { getComplianceContent } from "@/features/marketing/services/marketing.service";
import { BackOfficeSidebar } from "@/features/marketing/components/back-office-sidebar";
import { CtaSection } from "@/features/marketing/components/cta-section";
import { FeatureGrid } from "@/features/marketing/components/feature-grid";
import { MarketingHero } from "@/features/marketing/components/marketing-hero";
import { MarketingSection } from "@/features/marketing/components/marketing-section";
import { ProductWindow } from "@/features/marketing/components/product-window";
import { SectionHeading } from "@/features/marketing/components/section-heading";

const heroPanel: ProductPanel = {
  title: "Outbound gate · every call and text passes through",
  badge: "Enforced",
  variant: "compliance-gate"
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
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <BackOfficeSidebar
              alignLeft
              items={["Quiet hours, enforced", "Consent before the AI dials", "Disclosed, on the record", "Abandoned calls, handled", "Opt-outs cascade", "DNC that fails closed"]}
            />
          </div>
          <div className="space-y-16 md:space-y-20 lg:col-span-8">
            {content.sections.map((section, index) => (
              <article key={section.title} id={`bo-section-${index + 1}`}>
                <h2
                  style={{
                    fontWeight: 500,
                    fontSize: "clamp(20px, 2vw, 26px)",
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                    color: "#f0f2f5"
                  }}
                >
                  {section.title}{" "}
                  <span style={{ color: "#6b7280" }}>{section.mutedTitle}</span>
                </h2>
                {section.description ? (
                  <p style={{ marginTop: "8px", fontSize: "14px", color: "#6b7280", lineHeight: 1.5 }}>{section.description}</p>
                ) : null}
                <div className="mt-7">
                  <ProductWindow panel={section.panel} />
                </div>
              </article>
            ))}
          </div>
        </div>
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
        <h2
          style={{
            fontWeight: 500,
            fontSize: "clamp(20px, 2vw, 26px)",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
            color: "#f0f2f5",
            marginBottom: "32px"
          }}
        >
          Prove your leads are compliant.{" "}
          <span style={{ color: "#6b7280" }}>When a lead, a carrier, or a lawyer asks — you have the record.</span>
        </h2>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <ul className="space-y-6">
            {content.proofBullets.map((item) => (
              <li key={item.title}>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#f0f2f5" }}>{item.title}</p>
                <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px", lineHeight: 1.5 }}>{item.desc}</p>
              </li>
            ))}
          </ul>
          <ProductWindow
            panel={{
              title: "Lead import · aged-leads-may.csv",
              badge: "Scrubbed on entry",
              variant: "table",
              rows: [
                { label: "2,406 leads imported", status: "38 DNC matches stripped", tone: "neutral" },
                { label: "Consent records attached", status: "Source · Language · Timestamp", tone: "success" },
                { label: "AI voice on this batch", status: "Enabled after your attestation", tone: "info" },
                { label: "Compliance log", status: "Export for carrier or counsel", tone: "neutral" }
              ]
            }}
          />
        </div>
      </MarketingSection>
      <CtaSection {...content.cta} />
    </>
  );
}
