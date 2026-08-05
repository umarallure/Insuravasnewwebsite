import type { Metadata } from "next";
import { GetStartedPageContent } from "@/features/marketing";
import { getGetStartedContent } from "@/features/marketing/services/marketing.service";

export const metadata: Metadata = {
  title: "Get Started"
};

export default async function GetStartedPage() {
  const content = await getGetStartedContent();

  return <GetStartedPageContent content={content} />;
}
