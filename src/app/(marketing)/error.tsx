"use client";

import { Button } from "@/components/ui/button";
import { ErrorState } from "@/components/shared/error-state";

interface MarketingErrorProps {
  error: Error;
  reset: () => void;
}

export default function MarketingError({ error, reset }: MarketingErrorProps) {
  return (
    <main className="content-rail flex min-h-screen items-center px-6 py-24">
      <div className="mx-auto w-full max-w-xl">
        <ErrorState
          title="Unable to load this INSURVAS page"
          description={error.message || "The marketing page failed to load. Try again in a moment."}
          action={<Button onClick={reset}>Try again</Button>}
        />
      </div>
    </main>
  );
}
