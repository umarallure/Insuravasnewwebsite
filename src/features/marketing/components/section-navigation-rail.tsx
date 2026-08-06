"use client";

import { useEffect, useMemo, useState } from "react";

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
    <nav aria-label="Product sections" className="hidden lg:block">
      <ul className="space-y-[1.4rem]">
        {items.map((item, index) => {
          const id = ids[index];
          const isActive = activeId === id;

          return (
            <li key={item}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                style={{
                  fontWeight: 500,
                  fontSize: "17px",
                  lineHeight: 1.3,
                  color: isActive ? "#f0f2f5" : "#6b7280",
                  borderLeft: isActive ? "2px solid #a78bfa" : "2px solid transparent",
                  paddingLeft: "14px",
                  transition: "color .25s"
                }}
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
