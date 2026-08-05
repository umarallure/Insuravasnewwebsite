import { Check, Clock, Minus, ShieldCheck, X } from "lucide-react";
import { Badge, type BadgeProps } from "@/components/ui/badge";

export type StatusTone = "success" | "warning" | "danger" | "neutral" | "info" | "primary";

interface StatusBadgeProps {
  label: string;
  tone?: StatusTone;
  icon?: "check" | "clock" | "x" | "minus" | "shield";
}

const icons = {
  check: Check,
  clock: Clock,
  x: X,
  minus: Minus,
  shield: ShieldCheck
};

export function StatusBadge({ label, tone = "neutral", icon }: StatusBadgeProps) {
  const Icon = icon ? icons[icon] : null;

  return (
    <Badge variant={tone as BadgeProps["variant"]}>
      {Icon ? <Icon className="h-3 w-3" aria-hidden="true" /> : null}
      {label}
    </Badge>
  );
}
