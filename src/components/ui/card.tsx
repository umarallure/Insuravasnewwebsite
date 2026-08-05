import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-md border transition-colors duration-base", {
  variants: {
    variant: {
      default: "border-border bg-surface",
      muted: "border-border bg-surface-muted",
      elevated: "border-border bg-surface-elevated shadow-md",
      interactive: "border-border bg-surface hover:border-primary/50 hover:bg-surface-muted"
    },
    padding: {
      none: "",
      sm: "p-4",
      md: "p-5",
      lg: "p-6"
    }
  },
  defaultVariants: {
    variant: "default",
    padding: "md"
  }
});

export interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

export function Card({ className, variant, padding, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant, padding }), className)} {...props} />;
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4 space-y-1", className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-semibold text-foreground", className)} {...props} />;
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm leading-6 text-muted-foreground", className)} {...props} />;
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-4", className)} {...props} />;
}
