import type { getSalesAiContent } from "@/features/marketing/services/marketing.service";
import { ConversationPanel } from "@/features/marketing/components/home/conversation-panel";
import { CtaSection } from "@/features/marketing/components/cta-section";
import { DetailSections } from "@/features/marketing/components/detail-sections";
import { MarketingHero } from "@/features/marketing/components/marketing-hero";
import { MarketingSection } from "@/features/marketing/components/marketing-section";
import { StatStrip } from "@/features/marketing/components/stat-strip";

interface SalesAiPageContentProps {
  content: Awaited<ReturnType<typeof getSalesAiContent>>;
}

export function SalesAiPageContent({ content }: SalesAiPageContentProps) {
  return (
    <>
      <MarketingHero content={content.hero} compact>
        <ConversationPanel
          title="Inbound call · (415) 336-0112 · answered in 2 rings"
          badge="Live transfer"
          maxWidth={1000}
          leadLabel="Caller"
          dense
          messages={[
            {
              author: "ashley",
              time: "0:02",
              text: "Thanks for calling the life insurance office, this is Ashley. Are you calling about the final expense information we sent over?"
            },
            {
              author: "lead",
              time: "0:11",
              text: "Yeah, I got a letter. I want to know what it would cost for me and my wife."
            },
            {
              author: "ashley",
              time: "0:19",
              text: "Happy to help with both of you. I have a licensed agent free right now, can I bring him on the line while I pull up your info?"
            }
          ]}
          voice={null}
          footerBadges={[
            { label: "Transferred to Marcus · 0:31", tone: "success" },
            { label: "Recorded + Transcribed", tone: "neutral" }
          ]}
        />
      </MarketingHero>
      <StatStrip stats={content.stats} compact />
      <CtaSection {...content.introCta} compact />
      <MarketingSection>
        <DetailSections sections={content.sections} railItems={content.rail} />
      </MarketingSection>
      <CtaSection {...content.closingCta} />
    </>
  );
}
