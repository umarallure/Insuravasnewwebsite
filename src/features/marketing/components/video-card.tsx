"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  title: string;
  caption?: string;
  duration?: string;
  src?: string;
  objectPosition?: string;
  vertical?: boolean;
  className?: string;
}

export function VideoCard({
  title,
  caption,
  duration,
  src,
  objectPosition = "center",
  vertical,
  className
}: VideoCardProps) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <figure className={cn("space-y-3", className)}>
      <button
        type="button"
        className={cn(
          "group relative grid w-full place-items-center overflow-hidden rounded-md border border-border bg-surface text-left shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          vertical ? "aspect-[9/16]" : "aspect-video"
        )}
        aria-label={`Play ${title}`}
        onClick={() => setIsSelected(true)}
      >
        {src ? (
          <Image
            src={src}
            alt=""
            fill
            sizes={vertical ? "(max-width: 768px) 90vw, 260px" : "(max-width: 768px) 90vw, 900px"}
            className="object-cover opacity-70 transition-transform duration-slow group-hover:scale-105"
            style={{ objectPosition }}
          />
        ) : (
          <div className="absolute inset-0 surface-grid opacity-80" />
        )}
        <span className="absolute inset-0 bg-background/35" />
        {duration ? (
          <span className="absolute right-3 top-3 rounded-full bg-background/80 px-2 py-1 text-caption font-bold text-foreground">
            {duration}
          </span>
        ) : null}
        <span className="relative grid h-14 w-14 place-items-center rounded-full bg-danger text-primary-foreground shadow-lg transition-transform group-hover:scale-105">
          <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
        </span>
        <span className="sr-only" aria-live="polite">
          {isSelected ? `${title} preview selected` : ""}
        </span>
      </button>
      {caption ? <figcaption className="text-sm leading-6 text-muted-foreground">{caption}</figcaption> : null}
    </figure>
  );
}
