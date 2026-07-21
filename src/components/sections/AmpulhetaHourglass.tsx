const ETAPAS = [
  { label: "Consciência", width: 100 },
  { label: "Desejo", width: 81 },
  { label: "Recompensa", width: 64 },
  { label: "Receita", width: 42 },
  { label: "Retenção", width: 64 },
  { label: "Engajamento", width: 81 },
  { label: "Recomendação", width: 100 },
];

export function AmpulhetaHourglass() {
  return (
    <div className="flex flex-col items-center gap-1.5 py-2">
      {ETAPAS.map((etapa) => (
        <div
          key={etapa.label}
          style={{ width: `${etapa.width}%` }}
          className={`rounded-full border px-4 py-2 text-center text-xs sm:text-sm font-semibold tracking-wide transition-all ${
            etapa.label === "Receita"
              ? "bg-accent-bright/15 border-accent-bright text-accent-bright"
              : "bg-background border-border text-foreground/85"
          }`}
        >
          {etapa.label.toUpperCase()}
        </div>
      ))}
    </div>
  );
}
