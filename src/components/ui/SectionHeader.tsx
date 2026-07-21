"use client";

import { useProgresso } from "@/context/ProgressoContext";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  const { saving } = useProgresso();

  return (
    <div className="mb-8 flex items-start justify-between gap-4">
      <div>
        <p className="text-accent-bright text-xs font-semibold tracking-widest uppercase mb-2">
          {eyebrow}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{title}</h1>
        {description && <p className="text-muted mt-3 max-w-2xl">{description}</p>}
      </div>
      <span
        className={`shrink-0 text-xs text-muted transition-opacity ${
          saving ? "opacity-100" : "opacity-0"
        }`}
      >
        Salvando…
      </span>
    </div>
  );
}
