function IconRing({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-20 w-20 shrink-0">
      <div className="absolute inset-0 rounded-full border border-accent-bright/40" />
      <div className="absolute inset-2 rounded-full border border-accent-bright/70 shadow-[0_0_18px_rgba(0,255,196,0.35)] flex items-center justify-center text-accent-bright">
        {children}
      </div>
    </div>
  );
}

function AlvoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.3} />
      <path d="M12 1v3M12 20v3M1 12h3M20 12h3" stroke="currentColor" strokeWidth={1.3} />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth={1.3} />
      <path
        d="M12 10.3a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Z"
        stroke="currentColor"
        strokeWidth={1.2}
      />
      <path
        d="M9 15.2c.5-1.2 1.6-1.9 3-1.9s2.5.7 3 1.9"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
    </svg>
  );
}

function RotaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
      <path
        d="M6 5a2.2 2.2 0 1 1 0 4.4A2.2 2.2 0 0 1 6 5Z"
        stroke="currentColor"
        strokeWidth={1.3}
      />
      <path
        d="M6 9.4v2.4c0 3.6 8 2.6 8 6v1.4"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeDasharray="1.5 3"
        strokeLinecap="round"
      />
      <path
        d="M14 15.8h3.4v3.4H14v-3.4Z"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MiraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={1.3} />
      <circle cx="12" cy="12" r="4.8" stroke="currentColor" strokeWidth={1.3} />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" />
      <path d="M12 1.2v3.4M12 19.4v3.4M1.2 12h3.4M19.4 12h3.4" stroke="currentColor" strokeWidth={1.3} />
    </svg>
  );
}

function BarsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M6 18v-4M12 18V9M18 18v-7"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

const PILARES = [
  {
    titulo: "Alvo",
    Icon: AlvoIcon,
    descricao: "Pra quem e o quê você vende: posicionamento, produtos, cliente ideal, metas.",
  },
  {
    titulo: "Rota",
    Icon: RotaIcon,
    descricao: "Como você chega até esse cliente, todo dia: geração de demanda, jornada comercial, rotina.",
  },
  {
    titulo: "Mira",
    Icon: MiraIcon,
    descricao: "O que garante consistência: tecnologia, automação e mentalidade.",
  },
];

export function MetodoArmDiagram() {
  return (
    <div className="rounded-2xl border border-border bg-surface px-6 py-10 sm:px-10 sm:py-12">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="h-px w-10 bg-accent-bright/40" />
          <span className="h-1 w-1 rounded-full bg-accent-bright" />
          <p className="text-xs font-semibold tracking-[0.3em] text-accent-bright">MÉTODO</p>
          <span className="h-1 w-1 rounded-full bg-accent-bright" />
          <span className="h-px w-10 bg-accent-bright/40" />
        </div>
        <h1 className="font-display font-bold text-5xl sm:text-6xl text-foreground tracking-wide">
          A
          <span className="text-accent-bright">.</span>
          R
          <span className="text-accent-bright">.</span>
          M
          <span className="text-accent-bright">.</span>
        </h1>
        <p className="text-muted mt-4 max-w-xl mx-auto">
          <strong className="text-foreground">Alvo, Rota e Mira</strong>: o raciocínio por trás
          de todo corretor que vende com consistência.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch gap-6 sm:gap-0">
        {PILARES.flatMap((pilar, i) => {
          const card = (
            <div
              key={pilar.titulo}
              className="flex-1 basis-0 rounded-2xl border border-accent-bright/30 bg-background/60 px-6 py-8 flex flex-col items-center text-center"
            >
              <IconRing>
                <pilar.Icon />
              </IconRing>
              <p className="font-display font-bold text-xl text-foreground mt-5 mb-1">
                {pilar.titulo}
              </p>
              <span className="h-px w-8 bg-accent-bright/50 mb-3" />
              <p className="text-sm text-muted max-w-[220px]">{pilar.descricao}</p>
            </div>
          );

          if (i === PILARES.length - 1) return [card];

          const arrow = (
            <div
              key={`arrow-${pilar.titulo}`}
              className="hidden sm:flex items-center px-3 text-accent-bright shrink-0"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-bright mr-1" />
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path
                  d="M4 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          );

          return [card, arrow];
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="h-11 w-11 rounded-full border border-accent-bright/70 shadow-[0_0_18px_rgba(0,255,196,0.35)] flex items-center justify-center text-accent-bright">
          <BarsIcon />
        </div>
      </div>
    </div>
  );
}
