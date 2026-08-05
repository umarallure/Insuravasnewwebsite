import { BackOfficePanel } from "@/features/marketing/components/home/back-office-panel";
import { CalendarPanel } from "@/features/marketing/components/home/calendar-panel";
import { ConversationPanel } from "@/features/marketing/components/home/conversation-panel";
import { DialerPanel } from "@/features/marketing/components/home/dialer-panel";
import { SectionNavigationRail } from "@/features/marketing/components/section-navigation-rail";
import type { WalkthroughSection } from "@/features/marketing/types/marketing.types";

const panels = [ConversationPanel, CalendarPanel, DialerPanel, BackOfficePanel];

interface HomeWalkthroughProps {
  railItems: string[];
  sections: WalkthroughSection[];
}

export function HomeWalkthrough({ railItems, sections }: HomeWalkthroughProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
      <aside className="lg:sticky lg:top-24 lg:h-fit">
        <SectionNavigationRail items={railItems} />
      </aside>
      <div className="space-y-24">
        {sections.map((section, index) => {
          const Panel = panels[index];

          return (
            <article key={section.title} id={`section-${index + 1}`} className="scroll-mt-28">
              <h3
                className="max-w-2xl text-foreground"
                style={{
                  fontSize: "clamp(1.0625rem, 1.35vw, 1.25rem)",
                  lineHeight: 1.45,
                  letterSpacing: "-0.008em",
                  fontWeight: 600
                }}
              >
                {section.title} <span style={{ color: "#6B7280" }}>{section.mutedTitle}</span>
              </h3>
              {Panel ? (
                <div className="mt-7">
                  <Panel />
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
