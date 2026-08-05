import Link from "next/link";
import { AppLogo } from "@/components/shared/app-logo";
import { appConfig } from "@/constants/app.constants";
import { footerNavigation, legalNavigation } from "@/constants/navigation";

export function PublicSiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="content-rail px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <AppLogo compact />
            <p className="mt-5 max-w-[260px] text-sm leading-[1.6] text-muted-foreground">
              The AI sales floor and back office for life insurance agencies.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-3 lg:grid-cols-3">
            {footerNavigation.map((group) => (
              <nav key={group.label} aria-label={group.label}>
                <h2
                  className="text-[11.5px] font-semibold uppercase tracking-[0.07em] text-muted-foreground"
                >
                  {group.label}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={`${group.label}-${item.href}-${item.label}`}>
                      <Link
                        href={item.href}
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs text-muted-foreground">{appConfig.copyright}</p>
            <p className="mt-2 max-w-[560px] text-[10.5px] leading-[1.5] text-muted-foreground/80">
              *Estimated from all-time live transfers and booked appointments at a 20% expected conversion rate and
              a $1,200 average annual premium per sale.
            </p>
          </div>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalNavigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
