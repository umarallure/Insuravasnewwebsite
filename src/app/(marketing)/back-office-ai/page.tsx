import type { Metadata } from "next";
import { BackOfficePageContent } from "@/features/marketing";
import { getBackOfficeContent } from "@/features/marketing/services/marketing.service";

export const metadata: Metadata = {
  title: "Back Office AI"
};

export default async function BackOfficeAiPage() {
  const content = await getBackOfficeContent();

  return <BackOfficePageContent content={content} />;
}
