"use client";

import { useEffect, useState } from "react";

function resolveActiveSection(sectionIds: string[]) {
  const headerOffset = 96;
  const anchorLine = headerOffset + 8;
  let currentId = sectionIds[0] ?? "";

  for (const id of sectionIds) {
    const element = document.getElementById(id);
    if (!element) continue;

    const top = element.getBoundingClientRect().top;
    if (top - anchorLine <= 0) {
      currentId = id;
    }
  }

  return currentId;
}

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const updateActiveSection = () => {
      setActiveId(resolveActiveSection(sectionIds));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [sectionIds]);

  return [activeId, setActiveId] as const;
}
