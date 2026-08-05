import type { Metadata, Viewport } from "next";
import { AppProviders } from "@/components/providers/app-providers";
import { appConfig } from "@/constants/app.constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: appConfig.fullName,
    template: `%s | ${appConfig.fullName}`
  },
  description: appConfig.description
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
