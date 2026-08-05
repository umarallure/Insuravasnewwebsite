"use client";

import { X } from "lucide-react";
import { type ReactNode, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useClickOutside } from "@/hooks/use-click-outside";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  className?: string;
}

export function Modal({ isOpen, title, children, onClose, className }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useClickOutside(dialogRef, () => {
    if (isOpen) {
      onClose();
    }
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={dialogRef}
        className={cn(
          "w-full max-w-lg rounded-lg border border-border bg-surface p-5 shadow-lg",
          className
        )}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 id="modal-title" className="text-lg font-semibold text-foreground">
            {title}
          </h2>
          <Button type="button" variant="ghost" size="icon" aria-label="Close modal" onClick={onClose}>
            <X className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}
