"use client";

import { useSectionField } from "@/context/ProgressoContext";

export function NumberField({
  sectionId,
  fieldKey,
  label,
  prefix,
  suffix,
  placeholder,
}: {
  sectionId: string;
  fieldKey: string;
  label: string;
  prefix?: string;
  suffix?: string;
  placeholder?: string;
}) {
  const [value, setValue] = useSectionField(sectionId, fieldKey);

  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground mb-2">{label}</span>
      <div className="flex items-center rounded-xl bg-background border border-border px-4 py-3 focus-within:ring-2 focus-within:ring-accent">
        {prefix && <span className="text-muted mr-2">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          className="w-full bg-transparent text-foreground placeholder:text-muted focus:outline-none"
          placeholder={placeholder}
          value={typeof value === "number" ? value : ""}
          onChange={(e) => setValue(e.target.value === "" ? null : Number(e.target.value))}
        />
        {suffix && <span className="text-muted ml-2">{suffix}</span>}
      </div>
    </label>
  );
}
