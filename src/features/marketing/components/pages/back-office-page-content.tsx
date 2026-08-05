import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { getBackOfficeContent } from "@/features/marketing/services/marketing.service";
import {
  BookOfBusinessWindow,
  CommissionTruthWindow,
  CompPlanWindow,
  FlightRiskWindow,
  PerformanceWindow,
  PersistencyWindow,
  TeamTreeWindow
} from "@/features/marketing/components/back-office-windows";
import { cn } from "@/lib/utils";

interface BackOfficePageContentProps {
  content: Awaited<ReturnType<typeof getBackOfficeContent>>;
}

const ownerMenuItems = [
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
      <section className="relative overflow-hidden px-5 pb-0 pt-12 md:px-9 md:pt-14">
        <div className="absolute inset-x-0 top-48 mx-auto hidden h-72 max-w-[930px] border-x border-border/60 bg-[linear-gradient(90deg,rgb(var(--color-primary)/0.05)_1px,transparent_1px)] bg-[length:10px_100%] md:block" />
        <div className="relative mx-auto max-w-[760px] text-left md:text-center">
          <Badge>{content.hero.eyebrow}</Badge>
          <h1 className="mt-5 max-w-2xl text-[2.55rem] font-black leading-[0.95] text-foreground md:mx-auto md:text-[3.45rem]">
            {content.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground md:mx-auto md:text-base md:leading-7">
            {content.hero.description}
          </p>
        </div>
        <div className="relative mx-auto mt-12 max-w-[760px]">
          <TeamTreeWindow />
        </div>
      </section>

      <section className="mx-auto grid max-w-[930px] border-y border-border sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="mx-auto max-w-[760px] px-5 py-16 md:px-0 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,570px)_150px] lg:items-start lg:justify-between">
          <DashboardCopy
            title={performanceSection.title}
            mutedTitle={performanceSection.mutedTitle}
            description={performanceSection.description}
            descriptionMode="line"
          />
          <aside className="hidden border-r border-border pr-4 text-right lg:block" aria-label="Owner view summary">
            <h2 className="text-sm font-black text-foreground">See the day, every day</h2>
            <ul className="mt-5 space-y-4 text-[0.72rem] font-semibold text-muted-foreground">
              {ownerMenuItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
          <div className="lg:col-start-1 lg:row-start-2">
            <PerformanceWindow />
          </div>
        </div>

        <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
          {remainingSections.map((section, index) => {
            const Window = sectionWindows[index];

            return (
              <DashboardBlock
                key={section.title}
                title={section.title}
                mutedTitle={section.mutedTitle}
                description={section.description}
              >
                <Window />
              </DashboardBlock>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-[930px] border-y border-border md:grid-cols-3">
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

      <section className="mx-auto max-w-[760px] px-5 py-14 md:px-0 md:py-16">
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
    <div className="max-w-[570px]">
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

function DashboardBlock({ title, mutedTitle, description, children }: DashboardCopyProps & { children: React.ReactNode }) {
  return (
    <article className="max-w-[570px]">
      <DashboardCopy title={title} mutedTitle={mutedTitle} description={description} />
      <div className="mt-7">{children}</div>
    </article>
  );
}
