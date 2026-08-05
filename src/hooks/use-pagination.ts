"use client";

import { useMemo, useState } from "react";

export function usePagination(totalItems: number, pageSize = 10) {
  const [page, setPage] = useState(1);
  const pageCount = Math.max(1, Math.ceil(totalItems / pageSize));

  const range = useMemo(() => {
    const start = (page - 1) * pageSize;
    return { start, end: Math.min(start + pageSize, totalItems) };
  }, [page, pageSize, totalItems]);

  return {
    page,
    pageCount,
    range,
    canPrevious: page > 1,
    canNext: page < pageCount,
    setPage,
    previous: () => setPage((current) => Math.max(1, current - 1)),
    next: () => setPage((current) => Math.min(pageCount, current + 1))
  };
}
