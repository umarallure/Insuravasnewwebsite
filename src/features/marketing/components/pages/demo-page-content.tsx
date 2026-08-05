import { DemoCallForm } from "@/features/marketing/components/demo-call-form";
import type { getDemoContent } from "@/features/marketing/services/marketing.service";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/features/marketing/components/cta-section";
import { FeatureGrid } from "@/features/marketing/components/feature-grid";
import { MarketingHero } from "@/features/marketing/components/marketing-hero";
import { MarketingSection } from "@/features/marketing/components/marketing-section";
import { StatStrip } from "@/features/marketing/components/stat-strip";
import { VideoCard } from "@/features/marketing/components/video-card";

interface DemoPageContentProps {
  content: Awaited<ReturnType<typeof getDemoContent>>;
}

export function DemoPageContent({ content }: DemoPageContentProps) {
  return (
    <>
      <MarketingHero content={content.hero}>
        <VideoCard
          title="INSURVAS AI nine minute demo"
          duration="8:43"
          src="/assets/references/demo-page.png"
          objectPosition="50% 25%"
          className="mx-auto max-w-4xl"
        />
      </MarketingHero>
      <FeatureGrid items={content.agenda} />
      <MarketingSection>
        <div className="grid gap-10 rounded-md border border-primary/20 bg-primary-subtle/40 p-6 md:grid-cols-[1fr_420px] md:p-10">
          <div className="flex min-h-96 flex-col justify-end">
            <Badge variant="primary">Live AI Demo Call</Badge>
            <h2 className="mt-6 max-w-xl text-title font-bold text-foreground">
              Or skip the video. <span className="text-muted-foreground">Ashley will call you right now, she is the product.</span>
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">Live AI conversation takes 90 seconds.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-foreground">Talk to Ashley, Our AI</h3>
            <p className="mb-5 text-sm text-muted-foreground">Fill out the form and she will call you in seconds.</p>
            <DemoCallForm />
          </div>
        </div>
      </MarketingSection>
      <StatStrip stats={content.stats} />
      <CtaSection {...content.cta} />
    </>
  );
}
