import { Orbit } from "lucide-react";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";

interface AppLogoProps {
  href?: string;
  compact?: boolean;
  className?: string;
}

export function AppLogo({ href = routes.home, compact = false, className }: AppLogoProps) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5 text-foreground", className)}>
      <span className="grid h-8 w-8 place-items-center rounded-full border border-primary/40 bg-primary-subtle text-primary-hover shadow-glow">
        <Orbit className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="leading-none">
        <span className="block text-lg font-black uppercase tracking-normal">INSURVAS</span>
        {!compact ? <span className="block text-[0.65rem] font-semibold text-muted-foreground">AI Solutions</span> : null}
      </span>
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} aria-label="INSURVAS home" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      {content}
    </Link>
  );
}
