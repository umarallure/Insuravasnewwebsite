"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  page: number;
  pageCount: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function Pagination({ page, pageCount, onPrevious, onNext }: PaginationProps) {
  return (
    <nav className="flex items-center justify-between gap-3" aria-label="Pagination">
      <Button variant="outline" size="sm" onClick={onPrevious} disabled={page <= 1}>
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        Previous
      </Button>
      <span className="text-sm text-muted-foreground">
        Page {page} of {pageCount}
      </span>
      <Button variant="outline" size="sm" onClick={onNext} disabled={page >= pageCount}>
        Next
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </Button>
    </nav>
  );
}
