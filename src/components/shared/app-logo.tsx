import Image from "next/image";
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
      <Image
        src="/assets/insurvas-emblem.png"
        alt=""
        width={1190}
        height={1350}
        priority
        className="h-8 w-auto shrink-0 select-none object-contain"
      />
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
