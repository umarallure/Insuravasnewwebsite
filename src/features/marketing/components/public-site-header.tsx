"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AppHeader } from "@/components/layout/app-header";
import { AppLogo } from "@/components/shared/app-logo";
import { buttonVariants, Button } from "@/components/ui/button";
import { publicNavigation } from "@/constants/navigation";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";

export function PublicSiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppHeader>
      <div className="content-rail-plain relative flex h-[var(--layout-header-height)] items-center justify-between px-5 md:px-8">
        <AppLogo compact />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {publicNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                pathname === item.href
                  ? "rounded-md bg-white/10 text-white"
                  : ""
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href={routes.login} className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
            Log in
          </Link>
          <Link href={routes.getStarted} className={cn(buttonVariants({ variant: "inverse", size: "sm" }))}>
            Start free trial
          </Link>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </Button>
        {isOpen ? (
          <div className="absolute left-0 right-0 top-[var(--layout-header-height)] border-b border-border bg-background px-5 py-5 shadow-lg md:hidden">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {publicNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md border border-transparent px-3 py-3 text-sm font-semibold text-muted-foreground hover:border-white/20 hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    pathname === item.href && "border-white/40 bg-white/15 text-white shadow-sm"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid gap-3">
              <Link
                href={routes.login}
                className={cn(buttonVariants({ variant: "outline", fullWidth: true }))}
                onClick={() => setIsOpen(false)}
              >
                Log in
              </Link>
              <Link
                href={routes.getStarted}
                className={cn(buttonVariants({ variant: "inverse", fullWidth: true }))}
                onClick={() => setIsOpen(false)}
              >
                Start free trial
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </AppHeader>
  );
}
