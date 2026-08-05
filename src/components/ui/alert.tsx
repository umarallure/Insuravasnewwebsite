import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const alertVariants = cva("rounded-md border px-4 py-3 text-sm leading-6", {
  variants: {
    variant: {
      info: "border-info/30 bg-info-subtle text-info",
      success: "border-success/30 bg-success-subtle text-success",
      warning: "border-warning/30 bg-warning-subtle text-warning",
      danger: "border-danger/30 bg-danger-subtle text-danger",
      neutral: "border-border bg-surface-muted text-muted-foreground"
    }
  },
  defaultVariants: {
    variant: "info"
  }
});

export interface AlertProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {}

export function Alert({ className, variant, ...props }: AlertProps) {
  return <div role="status" className={cn(alertVariants({ variant }), className)} {...props} />;
}
