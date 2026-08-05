import type { Metadata } from "next";
import { ComparePageContent } from "@/features/marketing";
import { getComparisonContent } from "@/features/marketing/services/marketing.service";

export const metadata: Metadata = {
  title: "Compare"
};

export default async function ComparePage() {
  const content = await getComparisonContent();

  return <ComparePageContent content={content} />;
}
