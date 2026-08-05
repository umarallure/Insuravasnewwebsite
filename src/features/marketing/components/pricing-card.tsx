import { Check } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/features/marketing/types/marketing.types";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <article
      className={cn(
        "flex min-h-[360px] flex-col bg-surface p-8",
        plan.highlighted && "bg-[#0B0E15]"
      )}
      style={plan.highlighted ? {} : { borderRight: "1px solid rgb(var(--hair))" }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p
            className={cn(
              "text-[13px] font-medium",
              plan.highlighted ? "text-[#A5B4FC]" : "text-muted-foreground"
            )}
          >
            {plan.eyebrow}
          </p>
          {plan.name ? <h3 className="mt-3 text-lg font-bold text-foreground">{plan.name}</h3> : null}
        </div>
        {plan.badge ? (
          <span
            className="rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider"
            style={{
              background: "rgba(99,102,241,0.16)",
              color: "#A5B4FC",
              letterSpacing: "0.09em"
            }}
          >
            {plan.badge}
          </span>
        ) : null}
      </div>
      <div className="mt-5">
        <span
          className="text-foreground"
          style={{ fontSize: "40px", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1 }}
        >
          {plan.price}
        </span>
        {plan.interval ? (
          <span className="ml-1 text-[15px] font-medium text-muted-foreground">{plan.interval}</span>
        ) : null}
        {plan.description ? (
          <p className="mt-1 text-[13px] text-muted-foreground">{plan.description}</p>
        ) : null}
      </div>
      {plan.features?.length ? (
        <ul className="mt-6 space-y-3 border-t border-border pt-5" style={{ borderColor: "rgb(var(--color-border))" }}>
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-[14px] leading-6 text-muted-foreground">
              <Check className="mt-1 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <Link
        href={plan.href}
        className={cn(
          buttonVariants({ variant: plan.highlighted ? "outline" : "inverse", fullWidth: true }),
          "mt-auto"
        )}
      >
        {plan.actionLabel}
      </Link>
    </article>
  );
}
