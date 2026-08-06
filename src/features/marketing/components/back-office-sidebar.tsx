"use client";

import { useEffect, useState } from "react";

interface BackOfficeSidebarProps {
  items: string[];
}

export function BackOfficeSidebar({ items }: BackOfficeSidebarProps) {
  const ids = items.map((_, index) => `bo-section-${index + 1}`);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = ids.indexOf(visible.target.id);
          if (idx >= 0) setActiveIndex(idx);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.1, 0.4] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return (
    <aside className="hidden lg:block lg:sticky lg:top-24 lg:h-fit" aria-label="Section navigation">
      <ul className="space-y-5">
        {items.map((item, index) => (
          <li key={item}>
            <a
              href={`#${ids[index]}`}
              style={{
                display: "block",
                fontSize: "17px",
                fontWeight: 500,
                color: activeIndex === index ? "#f0f2f5" : "#6b7280",
                borderRight: activeIndex === index ? "2px solid #a78bfa" : "2px solid transparent",
                paddingRight: "14px",
                textAlign: "right",
                transition: "color .25s"
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
