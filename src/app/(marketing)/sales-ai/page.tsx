import type { Metadata } from "next";
import { SalesAiPageContent } from "@/features/marketing";
import { getSalesAiContent } from "@/features/marketing/services/marketing.service";

export const metadata: Metadata = {
  title: "Sales AI"
};

export default async function SalesAiPage() {
  const content = await getSalesAiContent();

  return <SalesAiPageContent content={content} />;
}
