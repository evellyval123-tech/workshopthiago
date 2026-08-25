function ConscienciaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
      <circle cx="12" cy="9" r="3.4" stroke="currentColor" strokeWidth={1.4} />
      <path d="M5.5 21c0-4 3-6.4 6.5-6.4s6.5 2.4 6.5 6.4" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M12 1.5v2M6.5 3.3l1.2 1.7M17.5 3.3l-1.2 1.7" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
    </svg>
  );
}

function DesejoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
      <path
        d="M12 20.5s-8-4.9-8-11A4.7 4.7 0 0 1 12 6.4 4.7 4.7 0 0 1 20 9.5c0 6.1-8 11-8 11Z"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RecompensaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
      <rect x="3" y="9.5" width="18" height="11" rx="1" stroke="currentColor" strokeWidth={1.4} />
      <path d="M3 9.5h18v3.5H3z" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" />
      <path d="M12 9.5v11" stroke="currentColor" strokeWidth={1.4} />
      <path
        d="M12 9.5c0-2.5-1.6-4.5-3.6-4.5S5.5 6.5 8 8.2c.9.6 2.1 1 4 1.3ZM12 9.5c0-2.5 1.6-4.5 3.6-4.5S18.5 6.5 16 8.2c-.9.6-2.1 1-4 1.3Z"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReceitaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.4} />
      <path d="M12 6.5v11M9.3 15.2c0 1.2 1.2 2.1 2.7 2.1s2.7-.8 2.7-1.9c0-2.9-5.4-1.6-5.4-4.4 0-1.1 1.2-1.9 2.7-1.9s2.7.8 2.7 1.9" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
    </svg>
  );
}

function RetencaoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
      <path
        d="M4 12a8 8 0 0 1 13.657-5.657L20 8M20 8V4M20 8h-4M20 12a8 8 0 0 1-13.657 5.657L4 16m0 0v4m0-4h4"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EngajamentoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth={1.4} />
      <circle cx="17" cy="9.5" r="2.3" stroke="currentColor" strokeWidth={1.4} />
      <path d="M3 20c0-3.6 2.7-5.8 6-5.8s6 2.2 6 5.8" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M15.5 14.6c2.5.4 4 2.3 4 5.4" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  );
}

function RecomendacaoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
      <path d="M3 5.5h18v10.5H9.5L5 20v-4H3v-10.5Z" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" />
      <path
        d="m12 8-1.1 2.2-2.4.3 1.8 1.7-.4 2.4 2.1-1.1 2.1 1.1-.4-2.4 1.8-1.7-2.4-.3L12 8Z"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ETAPAS = [
  { label: "Consciência", width: 100, Icon: ConscienciaIcon },
  { label: "Desejo", width: 84, Icon: DesejoIcon },
  { label: "Recompensa", width: 68, Icon: RecompensaIcon },
  { label: "Receita", width: 46, Icon: ReceitaIcon },
  { label: "Retenção", width: 68, Icon: RetencaoIcon },
  { label: "Engajamento", width: 84, Icon: EngajamentoIcon },
  { label: "Recomendação", width: 100, Icon: RecomendacaoIcon },
];

export function AmpulhetaHourglass() {
  return (
    <div className="flex flex-col items-center gap-2.5 py-2">
      {ETAPAS.map((etapa) => {
        const isReceita = etapa.label === "Receita";
        return (
          <div
            key={etapa.label}
            style={{ width: `${etapa.width}%` }}
            className={`flex items-center gap-3 rounded-full border px-5 py-3 transition-all ${
              isReceita
                ? "bg-accent-bright border-accent-bright shadow-[0_0_22px_rgba(0,255,196,0.45)]"
                : "bg-background border-border"
            }`}
          >
            <span className={isReceita ? "text-background" : "text-accent-bright"}>
              <etapa.Icon />
            </span>
            <span className={`h-4 w-px shrink-0 ${isReceita ? "bg-background/40" : "bg-border"}`} />
            <span
              className={`text-xs sm:text-sm font-bold tracking-wide ${
                isReceita ? "text-background" : "text-foreground"
              }`}
            >
              {etapa.label.toUpperCase()}
            </span>
          </div>
        );
      })}
    </div>
  );
}
