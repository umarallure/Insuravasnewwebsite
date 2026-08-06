import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import type { getBackOfficeContent } from "@/features/marketing/services/marketing.service";
import { BackOfficePanel } from "@/features/marketing/components/home/back-office-panel";
import { BackOfficeSidebar } from "@/features/marketing/components/back-office-sidebar";
import {
  BookOfBusinessWindow,
  CommissionTruthWindow,
  CompPlanWindow,
  FlightRiskWindow,
  PerformanceWindow,
  PersistencyWindow
} from "@/features/marketing/components/back-office-windows";
import { MarketingHero } from "@/features/marketing/components/marketing-hero";
import { cn } from "@/lib/utils";

interface BackOfficePageContentProps {
  content: Awaited<ReturnType<typeof getBackOfficeContent>>;
}

const ownerMenuItems = [
  "See the day, every day",
  "Reconcile statements",
  "Track every policy",
  "Track persistency",
  "Catch flight risk",
  "Comp plans and tiers"
] as const;

const sectionWindows = [
  CommissionTruthWindow,
  BookOfBusinessWindow,
  PersistencyWindow,
  FlightRiskWindow,
  CompPlanWindow
] as const;

export function BackOfficePageContent({ content }: BackOfficePageContentProps) {
  const [performanceSection, ...remainingSections] = content.sections;

  return (
    <>
      <MarketingHero content={content.hero}>
        <div className="overflow-x-auto">
          <BackOfficePanel hideStats />
        </div>
      </MarketingHero>

      <section className="mx-auto grid max-w-[var(--layout-page-max)] border-y border-border sm:grid-cols-2 lg:grid-cols-4">
        {content.features.map((item, index) => (
          <article
            key={item.title}
            className={cn(
              "min-h-32 px-5 py-6",
              index > 0 && "border-t border-border sm:border-l",
              index === 1 && "sm:border-t-0",
              index > 1 && "sm:border-t",
              index > 0 && "lg:border-t-0"
            )}
          >
            <h2 className="text-sm font-black leading-tight text-foreground">{item.title}</h2>
            <p className="mt-2 text-[0.72rem] font-medium leading-5 text-muted-foreground">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-[var(--layout-page-max)] px-5 py-16 md:px-9 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-16 md:space-y-20 lg:col-span-8">
            <article id="bo-section-1">
              <DashboardCopy
                title={performanceSection.title}
                mutedTitle={performanceSection.mutedTitle}
                description={performanceSection.description}
                descriptionMode="line"
              />
              <div className="mt-7">
                <PerformanceWindow />
              </div>
            </article>

            {remainingSections.map((section, index) => {
              const Window = sectionWindows[index];

              return (
                <DashboardBlock
                  key={section.title}
                  id={`bo-section-${index + 2}`}
                  title={section.title}
                  mutedTitle={section.mutedTitle}
                  description={section.description}
                >
                  <Window />
                </DashboardBlock>
              );
            })}
          </div>

          <div className="lg:col-span-4">
            <BackOfficeSidebar items={ownerMenuItems as unknown as string[]} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[var(--layout-page-max)] border-y border-border md:grid-cols-3">
        {content.bottomFeatures.map((item, index) => (
          <article
            key={item.title}
            className={cn("min-h-36 px-5 py-7", index > 0 && "border-t border-border md:border-l md:border-t-0")}
          >
            <h2 className="text-sm font-black leading-tight text-foreground">{item.title}</h2>
            <p className="mt-2 text-[0.72rem] font-medium leading-5 text-muted-foreground">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-[var(--layout-page-max)] px-5 py-14 md:px-9 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-xl">
            <h2 className="text-2xl font-black leading-tight text-foreground md:text-[2.15rem]">
              {content.closingCta.title}{" "}
              {content.closingCta.mutedTitle ? <span className="text-muted-foreground">{content.closingCta.mutedTitle}</span> : null}
            </h2>
            {content.closingCta.quote ? (
              <p className="mt-8 text-sm font-medium leading-6 text-muted-foreground">&quot;{content.closingCta.quote}&quot;</p>
            ) : null}
            {content.closingCta.attribution ? (
              <p className="mt-2 text-[0.72rem] font-bold text-foreground">{content.closingCta.attribution}</p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-3">
            {content.closingCta.secondaryAction ? (
              <Link href={content.closingCta.secondaryAction.href} className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
                {content.closingCta.secondaryAction.label}
              </Link>
            ) : null}
            {content.closingCta.primaryAction ? (
              <Link href={content.closingCta.primaryAction.href} className={cn(buttonVariants({ variant: "inverse", size: "sm" }))}>
                {content.closingCta.primaryAction.label}
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}

interface DashboardCopyProps {
  title: string;
  mutedTitle?: string;
  description: string;
  descriptionMode?: "inline" | "line";
}

function DashboardCopy({ title, mutedTitle, description, descriptionMode = "inline" }: DashboardCopyProps) {
  return (
    <div>
      <h2 className="text-xl font-black leading-none text-foreground md:text-2xl">
        {title}{" "}
        {mutedTitle ? (
          <span className="text-muted-foreground">
            {mutedTitle}
            {descriptionMode === "inline" ? ` ${description}` : null}
          </span>
        ) : null}
      </h2>
      {descriptionMode === "line" ? <p className="mt-1 text-lg font-semibold leading-tight text-muted-foreground md:text-xl">{description}</p> : null}
    </div>
  );
}

function DashboardBlock({ title, mutedTitle, description, children, id }: DashboardCopyProps & { children: React.ReactNode; id?: string }) {
  return (
    <article id={id}>
      <DashboardCopy title={title} mutedTitle={mutedTitle} description={description} />
      <div className="mt-7">{children}</div>
    </article>
  );
}
