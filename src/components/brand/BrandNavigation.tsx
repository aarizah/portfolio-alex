"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { personalBrand, getPrimaryContactHref, getPrimaryContactLabel } from "@/content/personal-brand";

export function BrandNavigation() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (!open) {
      if (wasOpenRef.current) triggerRef.current?.focus();
      wasOpenRef.current = false;
      return;
    }

    wasOpenRef.current = true;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousHtmlOverscrollBehavior = document.documentElement.style.overscrollBehavior;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "none";
    document.body.style.overflow = "hidden";

    const getFocusable = () => [
      ...(triggerRef.current && triggerRef.current.getClientRects().length > 0 ? [triggerRef.current] : []),
      ...Array.from(menuRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [])
        .filter((element) => element.getClientRects().length > 0),
    ];

    const frame = window.requestAnimationFrame(() => menuRef.current?.querySelector<HTMLElement>("a[href]")?.focus());

    const containFocus = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = getFocusable();
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", containFocus);
    return () => {
      window.cancelAnimationFrame(frame);
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.overscrollBehavior = previousHtmlOverscrollBehavior;
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener("keydown", containFocus);
    };
  }, [open]);

  return (
    <header className="brand-nav fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0b0d]/90 backdrop-blur-xl">
      <nav aria-label="Primary navigation" className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="brand-wordmark rounded-sm text-base font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fb8ff]">
          {personalBrand.name}<span className="text-[#8fb8ff]">.</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {personalBrand.navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-[#b8bac2] transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fb8ff]">
              {item.label}
            </a>
          ))}
          <a href={getPrimaryContactHref()} className="brand-button brand-button-small">
            {getPrimaryContactLabel()}
          </a>
        </div>

        <button
          ref={triggerRef}
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fb8ff] lg:hidden"
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </nav>

      <div ref={menuRef} id="mobile-navigation" aria-label="Mobile navigation" hidden={!open} className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-[#0a0b0d] px-5 pb-6 pt-4 lg:hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {personalBrand.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded-lg px-3 text-base text-[#d7d8dd] hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fb8ff]">
              {item.label}
            </a>
          ))}
          <a href={getPrimaryContactHref()} onClick={() => setOpen(false)} className="brand-button mt-3 justify-center">
            {getPrimaryContactLabel()}
          </a>
        </div>
      </div>
    </header>
  );
}
