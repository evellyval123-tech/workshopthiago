function XCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.6} />
      <path d="m9 9 6 6M15 9l-6 6" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.6} />
      <path d="m8 12.5 2.5 2.5L16 9" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M12 3 3.5 7.5 12 12l8.5-4.5L12 3Z" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" />
      <path d="M3.5 7.5v9L12 21m0-9v9m8.5-13.5v9L12 21" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth={1.5} />
      <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M12 4 2.5 20h19L12 4Z" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" />
      <path d="M12 10.5v4.2" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
      <circle cx="12" cy="17.3" r="0.9" fill="currentColor" />
    </svg>
  );
}

function TangleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M4 8c3-3 5 3 8 0s5 3 8 0M4 16c3-3 5 3 8 0s5 3 8 0"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  );
}

function BatteryLowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <rect x="2.5" y="8" width="16" height="8" rx="1.6" stroke="currentColor" strokeWidth={1.4} />
      <path d="M20.5 10.5v3" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
      <rect x="4.3" y="10" width="2.4" height="4" fill="currentColor" />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.4} />
      <path d="M9.5 9.3a2.5 2.5 0 1 1 3.8 2.1c-.9.6-1.3 1-1.3 2" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
      <circle cx="12" cy="16.7" r="0.9" fill="currentColor" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.4} />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.1 5.9l-1.5 1.5M7.4 16.6l-1.5 1.5M18.1 18.1l-1.5-1.5M7.4 7.4 5.9 5.9"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function Pill({ label, Icon }: { label: string; Icon: () => React.JSX.Element }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 shrink-0">
      <span className="text-foreground/80">
        <Icon />
      </span>
      <span className="font-display font-bold text-foreground text-sm sm:text-base whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

const DOR_ICONS = [WarningIcon, TangleIcon, BatteryLowIcon, QuestionIcon, ClockIcon];

export function EsforcoMetodoDiagram() {
  return (
    <div className="space-y-4">
      {/* Painel: Sem Método */}
      <div className="rounded-2xl border border-red-500/30 bg-background/40 p-5 sm:p-6">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
          <div className="flex items-center gap-2 text-red-400">
            <XCircleIcon />
            <p className="font-display font-bold text-sm tracking-wide">SEM MÉTODO</p>
          </div>
          <p className="hidden sm:block font-display font-bold text-sm tracking-wide text-red-400">
            MUITO ESFORÇO
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Pill label="Produto" Icon={BoxIcon} />

          <div className="flex-1 min-w-[120px]">
            <div className="hidden sm:flex justify-between px-2 mb-1">
              {DOR_ICONS.map((Icon, i) => (
                <div key={i} className="flex flex-col items-center text-red-400">
                  <Icon />
                  <span className="w-px h-3 border-l border-dashed border-red-400/60 mt-1" />
                </div>
              ))}
            </div>
            <svg viewBox="0 0 600 50" className="w-full h-auto" preserveAspectRatio="none">
              <path
                d="M0,25 L60,8 L120,42 L180,8 L240,42 L300,8 L360,42 L420,8 L480,42 L540,8 L600,25"
                fill="none"
                stroke="#f87171"
                strokeWidth={2.5}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <Pill label="Cliente" Icon={PersonIcon} />
        </div>
      </div>

      {/* Painel: Com Método */}
      <div className="rounded-2xl border border-accent-bright/30 bg-background/40 p-5 sm:p-6">
        <div className="flex items-center gap-2 text-accent-bright mb-6">
          <CheckCircleIcon />
          <p className="font-display font-bold text-sm tracking-wide">COM MÉTODO</p>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <Pill label="Produto" Icon={BoxIcon} />

          <div className="hidden sm:flex flex-1 items-center max-w-[80px]">
            <span className="flex-1 border-t-2 border-dashed border-accent-bright/60" />
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-accent-bright shrink-0">
              <path d="M4 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="shrink-0 h-36 w-36 sm:h-40 sm:w-40 rounded-full border-2 border-accent-bright flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(0,255,196,0.35)]">
            <span className="text-accent-bright mb-1">
              <GearIcon />
            </span>
            <p className="font-display font-bold text-lg text-foreground">Método</p>
            <p className="text-accent-bright text-[11px] leading-tight mt-1 px-2">
              Processos • Rotinas
              <br />
              Ferramentas • Mentalidade
            </p>
          </div>

          <div className="hidden sm:flex flex-1 items-center max-w-[80px]">
            <span className="flex-1 border-t-2 border-dashed border-accent-bright/60" />
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-accent-bright shrink-0">
              <path d="M4 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <Pill label="Cliente" Icon={PersonIcon} />
        </div>
      </div>
    </div>
  );
}
