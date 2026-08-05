import { MarketingPageShell } from "@/features/marketing/components/marketing-page-shell";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return <MarketingPageShell>{children}</MarketingPageShell>;
}
