import type { Metadata } from "next";
import { AppLogo } from "@/components/shared/app-logo";
import { Card } from "@/components/ui/card";
import { appConfig } from "@/constants/app.constants";
import { LoginForm } from "@/features/auth";

export const metadata: Metadata = {
  title: "Log in"
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-12">
      <div className="min-w-0 w-full max-w-[350px] sm:max-w-[520px]">
        <div className="mb-7 flex flex-col items-center text-center">
          <AppLogo href="" />
          <p className="mt-5 text-base text-muted-foreground">Agent Solutions Platform</p>
        </div>
        <Card className="min-w-0 overflow-hidden p-5 sm:p-7">
          <h1 className="mb-6 text-2xl font-bold text-foreground">Sign In</h1>
          <LoginForm />
        </Card>
        <p className="mt-6 px-2 text-center text-sm text-muted-foreground">{appConfig.copyright}</p>
      </div>
    </main>
  );
}
