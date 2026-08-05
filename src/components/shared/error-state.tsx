import { AlertTriangle } from "lucide-react";
import { type ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface ErrorStateProps {
  title?: string;
  description: string;
  action?: ReactNode;
}

export function ErrorState({ title = "Unable to load this section", description, action }: ErrorStateProps) {
  return (
    <Card className="border-danger/30 bg-danger-subtle/40 py-8 text-center">
      <AlertTriangle className="mx-auto h-8 w-8 text-danger" aria-hidden="true" />
      <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </Card>
  );
}
