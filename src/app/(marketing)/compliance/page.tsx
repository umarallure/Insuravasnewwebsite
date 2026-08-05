import type { Metadata } from "next";
import { CompliancePageContent } from "@/features/marketing";
import { getComplianceContent } from "@/features/marketing/services/marketing.service";

export const metadata: Metadata = {
  title: "Compliance"
};

export default async function CompliancePage() {
  const content = await getComplianceContent();

  return <CompliancePageContent content={content} />;
}
