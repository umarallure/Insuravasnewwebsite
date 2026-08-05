import type { Metadata } from "next";
import { HomePageContent } from "@/features/marketing";
import { getHomeContent } from "@/features/marketing/services/marketing.service";

export const metadata: Metadata = {
  title: "Every lead worked. Every policy tracked."
};

export default async function HomePage() {
  const content = await getHomeContent();

  return <HomePageContent content={content} />;
}
