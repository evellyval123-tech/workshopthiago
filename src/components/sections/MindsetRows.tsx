function TargetArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
      <circle cx="11" cy="13" r="8" stroke="currentColor" strokeWidth={1.3} />
      <circle cx="11" cy="13" r="4.3" stroke="currentColor" strokeWidth={1.3} />
      <circle cx="11" cy="13" r="1" fill="currentColor" />
      <path d="M14 10 20 4M20 4h-4M20 4v4" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GrowthBarsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
      <path d="M4 20v-4M9.5 20v-8M15 20v-5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M4 12.5 9.5 8l3 2.5L20 4" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 4H20v4.5" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PersonStarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
      <circle cx="10" cy="8.5" r="3.4" stroke="currentColor" strokeWidth={1.4} />
      <path d="M4 20c0-3.9 2.7-6.3 6-6.3s6 2.4 6 6.3" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
      <path
        d="m18.3 13.6.9 1.8 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3.9-1.8Z"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PRINCIPIOS = [
  {
    n: "01",
    Icon: TargetArrowIcon,
    titulo: "Autorresponsabilidade",
    descricao: "Você é o único responsável pelos seus resultados.",
  },
  {
    n: "02",
    Icon: GrowthBarsIcon,
    titulo: "Foco na jornada",
    descricao: "Construa uma carteira sólida, não apenas vendas pontuais.",
  },
  {
    n: "03",
    Icon: PersonStarIcon,
    titulo: "Postura de consultor",
    descricao: "Não peça favores, ofereça soluções.",
  },
];

export function MindsetRows() {
  return (
    <div className="space-y-4">
      {PRINCIPIOS.map((principio) => (
        <div
          key={principio.n}
          className="relative rounded-2xl border border-accent-bright/30 bg-surface p-5 sm:p-6 flex items-center gap-5 overflow-hidden"
        >
          <div className="h-20 w-20 shrink-0 rounded-full border border-accent-bright/50 bg-background flex items-center justify-center text-accent-bright shadow-[0_0_18px_rgba(0,255,196,0.28)]">
            <principio.Icon />
          </div>
          <span className="h-14 w-px bg-border shrink-0" />
          <div>
            <p className="font-display font-bold text-xl text-foreground mb-2">
              {principio.titulo}
            </p>
            <span className="block h-0.5 w-9 bg-accent-bright mb-2" />
            <p className="text-muted">{principio.descricao}</p>
          </div>
          <span className="pointer-events-none select-none absolute right-6 top-1/2 -translate-y-1/2 font-display font-black text-6xl text-foreground/5">
            {principio.n}
          </span>
        </div>
      ))}
    </div>
  );
}
