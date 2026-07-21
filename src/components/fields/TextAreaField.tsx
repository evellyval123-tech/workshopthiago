"use client";

import { useSectionField } from "@/context/ProgressoContext";

export function TextAreaField({
  sectionId,
  fieldKey,
  label,
  placeholder,
  rows = 4,
}: {
  sectionId: string;
  fieldKey: string;
  label: string;
  placeholder?: string;
  rows?: number;
}) {
  const [value, setValue] = useSectionField(sectionId, fieldKey);

  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground mb-2">{label}</span>
      <textarea
        className="w-full rounded-xl bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent resize-y"
        rows={rows}
        placeholder={placeholder}
        value={typeof value === "string" ? value : ""}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
}
