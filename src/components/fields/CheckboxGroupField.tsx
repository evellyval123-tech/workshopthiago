"use client";

import { useSectionField } from "@/context/ProgressoContext";

export function CheckboxGroupField({
  sectionId,
  fieldKey,
  label,
  options,
}: {
  sectionId: string;
  fieldKey: string;
  label: string;
  options: { value: string; label: string }[];
}) {
  const [value, setValue] = useSectionField(sectionId, fieldKey);
  const selected: string[] = Array.isArray(value) ? value : [];

  function toggle(optionValue: string) {
    setValue((prev: unknown) => {
      const arr: string[] = Array.isArray(prev) ? prev : [];
      return arr.includes(optionValue)
        ? arr.filter((v) => v !== optionValue)
        : [...arr, optionValue];
    });
  }

  return (
    <fieldset>
      <legend className="block text-sm font-medium text-foreground mb-3">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isSelected = selected.includes(opt.value);
          return (
            <button
              type="button"
              key={opt.value}
              onClick={() => toggle(opt.value)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                isSelected
                  ? "bg-accent/15 border-accent text-accent-bright"
                  : "bg-background border-border text-muted hover:border-accent/50"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
