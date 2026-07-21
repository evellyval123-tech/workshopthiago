"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SECTIONS } from "@/lib/sections";

export function SectionNav() {
  const pathname = usePathname();
  const currentIndex = SECTIONS.findIndex((s) => s.path === pathname);

  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? SECTIONS[currentIndex - 1] : null;
  const next = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : null;

  return (
    <div className="mt-10 pt-6 border-t border-border flex items-center justify-between gap-4">
      {prev ? (
        <Link
          href={prev.path}
          className="rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground/80 hover:bg-surface-hover hover:text-foreground transition-colors"
        >
          ← Anterior
        </Link>
      ) : (
        <span className="rounded-xl border border-border px-5 py-3 text-sm font-medium text-muted/40 cursor-not-allowed">
          ← Anterior
        </span>
      )}

      {next ? (
        <Link
          href={next.path}
          className="rounded-xl bg-accent hover:bg-accent-bright hover:text-background text-background px-5 py-3 text-sm font-semibold transition-colors"
        >
          Próximo →
        </Link>
      ) : (
        <span className="rounded-xl bg-accent/30 text-background/50 px-5 py-3 text-sm font-semibold cursor-not-allowed">
          Próximo →
        </span>
      )}
    </div>
  );
}
