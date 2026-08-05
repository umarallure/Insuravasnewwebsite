import { Skeleton } from "@/components/ui/skeleton";

interface LoadingStateProps {
  rows?: number;
}

export function LoadingState({ rows = 4 }: LoadingStateProps) {
  return (
    <div className="space-y-3" aria-live="polite" aria-label="Loading">
      {Array.from({ length: rows }, (_, index) => (
        <Skeleton key={index} className="h-16 w-full" />
      ))}
    </div>
  );
}
