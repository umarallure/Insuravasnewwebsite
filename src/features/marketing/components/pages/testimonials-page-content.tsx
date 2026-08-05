import type { getTestimonialsContent } from "@/features/marketing/services/marketing.service";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/features/marketing/components/cta-section";
import { MarketingHero } from "@/features/marketing/components/marketing-hero";
import { MarketingSection } from "@/features/marketing/components/marketing-section";
import { StatStrip } from "@/features/marketing/components/stat-strip";
import { TestimonialCard } from "@/features/marketing/components/testimonial-card";
import { VideoCard } from "@/features/marketing/components/video-card";

interface TestimonialsPageContentProps {
  content: Awaited<ReturnType<typeof getTestimonialsContent>>;
}

export function TestimonialsPageContent({ content }: TestimonialsPageContentProps) {
  return (
    <>
      <MarketingHero content={content.hero} />
      <StatStrip stats={content.stats} />
      <MarketingSection>
        <div className="grid gap-10 md:grid-cols-[1fr_260px] md:items-center">
          <article>
            <Badge>Featured</Badge>
            <blockquote className="mt-7 text-2xl font-bold leading-snug text-foreground md:text-3xl">
              &quot;{content.featured.quote}&quot;
            </blockquote>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-subtle text-sm font-bold text-primary-hover">
                  CS
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">{content.featured.name}</p>
                  <p className="text-caption text-muted-foreground">{content.featured.role}</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">{content.featured.result}</p>
            </div>
            <div className="mt-6 flex gap-2">
              <span className="h-1.5 w-8 rounded-full bg-primary" />
              <span className="h-1.5 w-2 rounded-full bg-border" />
              <span className="h-1.5 w-2 rounded-full bg-border" />
              <span className="h-1.5 w-2 rounded-full bg-border" />
            </div>
          </article>
          <VideoCard
            title="Featured agent walkthrough"
            duration="0:49"
            src="/assets/references/testimonials-page.png"
            objectPosition="78% 31%"
            vertical
            caption="Look, it's calling 10 of these numbers at once, then it texts everybody."
          />
        </div>
      </MarketingSection>
      <MarketingSection className="surface-grid">
        <h2 className="mb-10 max-w-4xl text-title font-bold text-foreground">
          Hundreds more like this. <span className="text-muted-foreground">Two columns, straight off our phones.</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {content.testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <p className="mt-8 text-center text-caption text-muted-foreground">
          Every quote is a real, unedited text message from a licensed agency owner or producer using INSURVAS.
        </p>
      </MarketingSection>
      <MarketingSection>
        <div className="grid gap-10 md:grid-cols-[220px_1fr_220px] md:items-center">
          <VideoCard
            title="Life insurance agent testimonial"
            duration="0:11"
            src="/assets/references/testimonials-page.png"
            objectPosition="28% 81%"
            vertical
          />
          <div className="text-center">
            <h2 className="text-title font-bold text-foreground">
              Be the next agent texting us. <span className="text-muted-foreground">Upload your leads today. Tell us how it went tonight.</span>
            </h2>
          </div>
          <VideoCard
            title="CRM testimonial"
            duration="0:33"
            src="/assets/references/testimonials-page.png"
            objectPosition="77% 81%"
            vertical
          />
        </div>
      </MarketingSection>
      <CtaSection
        title="Real agents."
        mutedTitle="Real numbers."
        primaryAction={content.hero.primaryAction}
        secondaryAction={content.hero.secondaryAction}
        compact
      />
    </>
  );
}
