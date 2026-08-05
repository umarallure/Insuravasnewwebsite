import type { Metadata } from "next";
import { TestimonialsPageContent } from "@/features/marketing";
import { getTestimonialsContent } from "@/features/marketing/services/marketing.service";

export const metadata: Metadata = {
  title: "Testimonials"
};

export default async function TestimonialsPage() {
  const content = await getTestimonialsContent();

  return <TestimonialsPageContent content={content} />;
}
