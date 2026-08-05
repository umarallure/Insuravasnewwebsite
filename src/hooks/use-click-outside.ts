"use client";

import { RefObject, useEffect } from "react";

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  onOutsideClick: () => void
) {
  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      onOutsideClick();
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [onOutsideClick, ref]);
}
