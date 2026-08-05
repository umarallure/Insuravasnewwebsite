import { type ReactNode } from "react";
import { EmptyState } from "@/components/shared/empty-state";
import { ErrorState } from "@/components/shared/error-state";
import { LoadingState } from "@/components/shared/loading-state";

interface ResponsiveDataViewProps {
  isLoading?: boolean;
  error?: string;
  isEmpty?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  table: ReactNode;
  mobile?: ReactNode;
}

export function ResponsiveDataView({
  isLoading,
  error,
  isEmpty,
  emptyTitle = "No records yet",
  emptyDescription = "When records are available, they will appear here.",
  table,
  mobile
}: ResponsiveDataViewProps) {
  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState description={error} />;
  }

  if (isEmpty) {
    return <EmptyState title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <>
      <div className="hidden md:block">{table}</div>
      <div className="md:hidden">{mobile ?? table}</div>
    </>
  );
}
