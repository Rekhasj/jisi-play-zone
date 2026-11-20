"use client";

import { useEffect } from "react";

/**
 * Scroll animations for the whole page.
 * Add `data-reveal` ("up" | "left" | "right" | "zoom") to any element and it slides/fades in
 * when it scrolls into view. Elements added later (e.g. "Show more photos") are picked up too.
 */
export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    // Without IntersectionObserver, just show everything.
    if (!("IntersectionObserver" in window)) return;
    root.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            // An attribute, not a class: React rewrites className on re-render and would wipe a class.
            e.target.setAttribute("data-revealed", "");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const watch = (scope: ParentNode) =>
      scope.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])").forEach((el) => io.observe(el));
    watch(document);

    const mo = new MutationObserver((records) => {
      for (const r of records) {
        r.addedNodes.forEach((n) => {
          if (!(n instanceof HTMLElement)) return;
          if (n.matches("[data-reveal]")) io.observe(n);
          watch(n);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
