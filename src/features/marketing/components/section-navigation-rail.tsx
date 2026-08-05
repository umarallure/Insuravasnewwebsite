"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionNavigationRailProps {
  items: string[];
}

export function SectionNavigationRail({ items }: SectionNavigationRailProps) {
  const ids = useMemo(() => items.map((_, index) => `section-${index + 1}`), [items]);
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    if (!ids.length) {
      return;
    }

    const setFromHash = () => {
      const hashId = window.location.hash.replace("#", "");

      if (ids.includes(hashId)) {
        setActiveId(hashId);
      }
    };

    setFromHash();

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.1, 0.35, 0.6]
      }
    );

    const observedElements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    observedElements.forEach((element) => observer.observe(element));
    window.addEventListener("hashchange", setFromHash);

    return () => {
      window.removeEventListener("hashchange", setFromHash);
      observer.disconnect();
    };
  }, [ids]);

  return (
    <nav aria-label="Product sections">
      <ul className="flex gap-x-6 gap-y-3 overflow-x-auto pb-1 lg:block lg:space-y-[1.4rem] lg:overflow-visible lg:pb-0">
        {items.map((item, index) => {
          const id = ids[index];
          const isActive = activeId === id;

          return (
            <li key={item} className="relative shrink-0">
              {isActive ? (
                <span
                  className="absolute -left-3 top-0 hidden h-full w-0.5 rounded-full bg-primary-hover lg:block"
                  aria-hidden="true"
                />
              ) : null}
              <a
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "block whitespace-nowrap rounded-xs text-[0.8125rem] font-semibold leading-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:whitespace-normal",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setActiveId(id)}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
