import type { Metadata } from "next";
import { DesignSystemShowcase } from "@/features/design-system";

export const metadata: Metadata = {
  title: "Design System"
};

export default function DesignSystemPage() {
  return <DesignSystemShowcase />;
}
