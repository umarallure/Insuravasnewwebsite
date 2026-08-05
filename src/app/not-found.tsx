import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { EmptyState } from "@/components/shared/empty-state";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";

export default function NotFoundPage() {
  return (
    <main className="content-rail flex min-h-screen items-center px-6 py-24">
      <div className="mx-auto w-full max-w-xl">
        <EmptyState
          title="Page not found"
          description="The page you are looking for is not part of the current INSURVAS experience."
          action={
            <Link href={routes.salesAi} className={cn(buttonVariants({ variant: "primary" }))}>
              Back to Sales AI
            </Link>
          }
        />
      </div>
    </main>
  );
}
