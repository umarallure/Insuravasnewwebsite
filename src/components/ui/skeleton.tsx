import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-shimmer rounded-md bg-[linear-gradient(90deg,rgb(var(--color-surface-muted))_25%,rgb(var(--color-surface-elevated))_37%,rgb(var(--color-surface-muted))_63%)] bg-[length:400%_100%]",
        className
      )}
      {...props}
    />
  );
}
