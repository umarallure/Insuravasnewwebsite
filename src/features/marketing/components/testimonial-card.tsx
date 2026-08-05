"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import type { Testimonial } from "@/features/marketing/types/marketing.types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="rounded-md border border-border bg-background p-5">
      <h3 className="text-2xl font-bold text-foreground">{testimonial.result}</h3>
      <p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">&quot;{testimonial.quote}&quot;</p>
      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-subtle text-caption font-bold text-primary-hover">
            {testimonial.name
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </span>
          <div>
            <p className="text-sm font-bold text-foreground">{testimonial.name}</p>
            <p className="text-caption text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
        <Button type="button" variant="ghost" size="sm" onClick={() => setIsOpen(true)}>
          See the text
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </Button>
      </div>
      <Modal isOpen={isOpen} title={`${testimonial.name}'s message`} onClose={() => setIsOpen(false)}>
        <p className="text-base leading-7 text-foreground">&quot;{testimonial.quote}&quot;</p>
        <p className="mt-4 text-sm text-muted-foreground">
          Shared by {testimonial.name}, {testimonial.role}.
        </p>
      </Modal>
    </article>
  );
}
