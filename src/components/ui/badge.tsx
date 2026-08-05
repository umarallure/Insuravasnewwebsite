import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] font-bold uppercase leading-none tracking-normal",
  {
    variants: {
      variant: {
        primary: "border-primary/30 bg-primary-subtle text-primary-hover",
        neutral: "border-border bg-surface-muted text-muted-foreground",
        success: "border-success/30 bg-success-subtle text-success",
        warning: "border-warning/35 bg-warning-subtle text-warning",
        danger: "border-danger/30 bg-danger-subtle text-danger",
        info: "border-info/30 bg-info-subtle text-info"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
