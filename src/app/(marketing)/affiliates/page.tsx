import type { Metadata } from "next";
import { AffiliatePageContent } from "@/features/marketing";
import { getAffiliatesContent } from "@/features/marketing/services/marketing.service";

export const metadata: Metadata = {
  title: "Affiliates"
};

export default async function AffiliatesPage() {
  const content = await getAffiliatesContent();

  return <AffiliatePageContent content={content} />;
}
