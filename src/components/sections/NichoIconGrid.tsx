"use client";

import { useSectionField } from "@/context/ProgressoContext";

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth={1.4} />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
      <circle cx="12" cy="7.5" r="3.2" stroke="currentColor" strokeWidth={1.3} />
      <circle cx="4.5" cy="9" r="2.3" stroke="currentColor" strokeWidth={1.3} />
      <circle cx="19.5" cy="9" r="2.3" stroke="currentColor" strokeWidth={1.3} />
      <path d="M6.5 20c.5-3.3 2.7-5.3 5.5-5.3s5 2 5.5 5.3" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
      <path d="M1.5 18.3c.4-2.4 1.7-3.8 3.3-3.8M22.5 18.3c-.4-2.4-1.7-3.8-3.3-3.8" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
      <rect x="3" y="8" width="18" height="11.5" rx="1.8" stroke="currentColor" strokeWidth={1.4} />
      <path d="M8.5 8V6.2A1.7 1.7 0 0 1 10.2 4.5h3.6a1.7 1.7 0 0 1 1.7 1.7V8" stroke="currentColor" strokeWidth={1.4} />
      <circle cx="12" cy="13.5" r="1" fill="currentColor" />
    </svg>
  );
}

function BuildingsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
      <rect x="3" y="9.5" width="9" height="11" stroke="currentColor" strokeWidth={1.3} />
      <rect x="12" y="4.5" width="9" height="16" stroke="currentColor" strokeWidth={1.3} />
      <path
        d="M5.5 12.5h1.2M9.3 12.5h1.2M5.5 15.5h1.2M9.3 15.5h1.2M5.5 18.5h1.2M9.3 18.5h1.2M15 7.5h1.2M18.8 7.5H20M15 10.5h1.2M18.8 10.5H20M15 13.5h1.2M18.8 13.5H20M15 16.5h1.2M18.8 16.5H20"
        stroke="currentColor"
        strokeWidth={1.1}
      />
      <path d="M15.6 20.5V17h2v3.5" stroke="currentColor" strokeWidth={1.3} />
    </svg>
  );
}

const NICHOS = [
  { value: "individual", label: "Individual", Icon: PersonIcon },
  { value: "adesao", label: "Adesão", Icon: GroupIcon },
  { value: "pme", label: "PME", Icon: BriefcaseIcon },
  { value: "grandes_contas", label: "Grandes Contas", Icon: BuildingsIcon },
];

export function NichoIconGrid() {
  const [value, setValue] = useSectionField("alvo-produtos", "nichos");
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
    <div>
      <p className="text-center font-semibold text-foreground mb-2">
        Quais nichos te dão o melhor resultado hoje?
      </p>
      <div className="flex justify-center mb-6">
        <span className="h-px w-8 bg-border" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
        {NICHOS.map((nicho) => {
          const isSelected = selected.includes(nicho.value);
          return (
            <button
              key={nicho.value}
              type="button"
              onClick={() => toggle(nicho.value)}
              className={`flex flex-col items-center gap-3 px-4 py-6 transition-colors ${
                isSelected ? "bg-accent/10" : "hover:bg-surface-hover"
              }`}
            >
              <span className={isSelected ? "text-accent-bright" : "text-muted"}>
                <nicho.Icon />
              </span>
              <span
                className={`text-sm font-medium ${
                  isSelected ? "text-accent-bright" : "text-muted"
                }`}
              >
                {nicho.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
