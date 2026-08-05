import { Inbox } from "lucide-react";
import { type ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <Card className="flex flex-col items-center justify-center py-10 text-center">
      <Inbox className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
      <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </Card>
  );
}
