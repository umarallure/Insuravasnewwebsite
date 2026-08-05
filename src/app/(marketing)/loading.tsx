import { LoadingState } from "@/components/shared/loading-state";

export default function MarketingLoading() {
  return (
    <main className="content-rail min-h-screen px-6 py-24">
      <LoadingState rows={8} />
    </main>
  );
}
