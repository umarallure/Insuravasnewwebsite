import {
  affiliatesContent,
  backOfficeContent,
  comparisonContent,
  complianceContent,
  demoContent,
  getStartedContent,
  homeContent,
  salesAiContent,
  testimonialsContent
} from "@/features/marketing/data/marketing-content";
import type { AffiliateApplicationValues } from "@/features/marketing/schemas/affiliate.schema";
import type { DemoRequestValues } from "@/features/marketing/schemas/demo.schema";

export async function getHomeContent() {
  return homeContent;
}

export async function getSalesAiContent() {
  return salesAiContent;
}

export async function getBackOfficeContent() {
  return backOfficeContent;
}

export async function getComparisonContent() {
  return comparisonContent;
}

export async function getDemoContent() {
  return demoContent;
}

export async function getTestimonialsContent() {
  return testimonialsContent;
}

export async function getComplianceContent() {
  return complianceContent;
}

export async function getAffiliatesContent() {
  return affiliatesContent;
}

export async function getGetStartedContent() {
  return getStartedContent;
}

export async function submitDemoRequest(values: DemoRequestValues) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { message: `Ashley will call ${values.firstName} shortly.` };
}

export async function submitAffiliateApplication(values: AffiliateApplicationValues) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { message: `Thanks, ${values.firstName}. Your affiliate application was received.` };
}
