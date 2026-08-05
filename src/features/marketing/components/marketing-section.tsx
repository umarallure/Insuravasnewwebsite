import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarketingSectionProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  withBorder?: boolean;
  id?: string;
  padTop?: string;
  padBottom?: string;
}

export function MarketingSection({
  children,
  className,
  innerClassName,
  withBorder = true,
  id,
  padTop,
  padBottom
}: MarketingSectionProps) {
  return (
    <section
      id={id}
      className={cn(withBorder && "border-t border-border", className)}
      style={{
        paddingTop: padTop || undefined,
        paddingBottom: padBottom || undefined
      }}
    >
      <div className={cn("px-6 py-16 md:px-9 md:py-20", innerClassName)}>{children}</div>
    </section>
  );
}
