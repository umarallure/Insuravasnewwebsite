import { ProductWindow } from "@/features/marketing/components/product-window";
import { SectionNavigationRail } from "@/features/marketing/components/section-navigation-rail";
import type { DetailSection } from "@/features/marketing/types/marketing.types";
import { cn } from "@/lib/utils";

interface DetailSectionsProps {
  sections: DetailSection[];
  railItems?: string[];
}

export function DetailSections({ sections, railItems }: DetailSectionsProps) {
  return (
    <div className={cn("grid gap-10", railItems?.length && "lg:grid-cols-[180px_1fr]")}>
      {railItems?.length ? (
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <SectionNavigationRail items={railItems} />
        </aside>
      ) : null}
      <div className="space-y-20">
        {sections.map((section, index) => (
          <article key={section.title} id={`section-${index + 1}`} className="grid gap-7">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold leading-tight text-foreground">
                {section.title} {section.mutedTitle ? <span className="text-muted-foreground">{section.mutedTitle}</span> : null}
              </h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">{section.description}</p>
            </div>
            <ProductWindow panel={section.panel} />
          </article>
        ))}
      </div>
    </div>
  );
}
