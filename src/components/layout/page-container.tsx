import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return <main className={cn("mx-auto w-full max-w-[var(--layout-page-max)] px-6 py-10 md:px-8", className)}>{children}</main>;
}
