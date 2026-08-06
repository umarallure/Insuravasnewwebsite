import { type ReactNode } from "react";
import { CookieBanner } from "@/features/marketing/components/cookie-banner";
import { PublicSiteFooter } from "@/features/marketing/components/public-site-footer";
import { PublicSiteHeader } from "@/features/marketing/components/public-site-header";

interface MarketingPageShellProps {
  children: ReactNode;
}

export function MarketingPageShell({ children }: MarketingPageShellProps) {
  return (
    <>
      <PublicSiteHeader />
      <main className="content-rail min-h-screen overflow-x-hidden bg-background">{children}</main>
      <PublicSiteFooter />
      <CookieBanner />
    </>
  );
}
