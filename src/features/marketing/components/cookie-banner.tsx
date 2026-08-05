"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const storageKey = "insurvas-cookie-choice";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(window.localStorage.getItem(storageKey) === null);
  }, []);

  function persistChoice(choice: "accepted" | "declined") {
    window.localStorage.setItem(storageKey, choice);
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/96 px-4 py-4 shadow-lg backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 text-caption leading-5 text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          We use cookies and analytics tools, including session recording that, with your consent, captures your
          clicks, scrolls, and page navigation text to improve our site and measure advertising.
          <a href="#" className="mx-1 font-semibold text-foreground underline underline-offset-2">
            Privacy Policy
          </a>
          and
          <a href="#" className="mx-1 font-semibold text-foreground underline underline-offset-2">
            Do Not Sell or Share My Personal Information
          </a>
        </p>
        <div className="flex shrink-0 gap-3">
          <Button type="button" variant="outline" size="sm" onClick={() => persistChoice("declined")}>
            Decline
          </Button>
          <Button type="button" variant="inverse" size="sm" onClick={() => persistChoice("accepted")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
