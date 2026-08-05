import type { Metadata } from "next";
import { DemoPageContent } from "@/features/marketing";
import { getDemoContent } from "@/features/marketing/services/marketing.service";

export const metadata: Metadata = {
  title: "Demo"
};

export default async function DemoPage() {
  const content = await getDemoContent();

  return <DemoPageContent content={content} />;
}
