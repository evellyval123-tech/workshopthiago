function ChatSparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
      <path
        d="M4 12.5a7 7 0 1 1 3.3 6L4 19.5l1-3.3A6.9 6.9 0 0 1 4 12.5Z"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      <circle cx="8.3" cy="12.3" r="0.8" fill="currentColor" />
      <circle cx="11" cy="12.3" r="0.8" fill="currentColor" />
      <circle cx="13.7" cy="12.3" r="0.8" fill="currentColor" />
      <path
        d="M18 3.5 18.6 5l1.5.6-1.5.6-.6 1.5-.6-1.5L16 5.6l1.4-.6.6-1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FlowchartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
      <rect x="9" y="3" width="6" height="5" rx="0.6" stroke="currentColor" strokeWidth={1.4} />
      <rect x="2.5" y="16" width="6" height="5" rx="0.6" stroke="currentColor" strokeWidth={1.4} />
      <rect x="9" y="16" width="6" height="5" rx="0.6" stroke="currentColor" strokeWidth={1.4} />
      <rect x="15.5" y="16" width="6" height="5" rx="0.6" stroke="currentColor" strokeWidth={1.4} />
      <path d="M12 8v4M5.5 16v-2a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth={1.4} />
    </svg>
  );
}

function HandCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
      <path
        d="M3 15c1.6-1.1 3.6-1.1 5.2-.2l2.7 1.4c1 .5 2.1.8 3.2.8H18"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 15.3v3.2c0 .8.6 1.4 1.4 1.4h.2c1.6 0 3.1-.4 4.5-1.2l1-.6"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="7" r="4" stroke="currentColor" strokeWidth={1.4} />
      <path d="m16.3 7 1.1 1.1L19.7 6" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ETAPAS = [
  {
    n: "01",
    Icon: ChatSparkleIcon,
    titulo: "O que é",
    descricao:
      "Uma IA conectada ao seu WhatsApp profissional que faz o atendimento e a qualificação inicial de todo lead novo, 24 horas por dia.",
  },
  {
    n: "02",
    Icon: FlowchartIcon,
    titulo: "Como funciona na prática",
    descricao:
      "O lead chega, a IA conversa, pergunta o que precisa saber (número de vidas, idade, o que busca) e já organiza tudo — você entra só pra fazer a cotação e fechar.",
  },
  {
    n: "03",
    Icon: HandCheckIcon,
    titulo: "Quando você quiser assumir",
    descricao:
      "Basta você entrar na conversa manualmente que o atendimento automático para na hora — o controle continua sendo seu.",
  },
];

export function AgenteFeatureRows() {
  return (
    <div className="space-y-4">
      {ETAPAS.map((etapa) => (
        <div
          key={etapa.n}
          className="rounded-2xl border border-accent-bright/30 bg-surface p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-5"
        >
          <div className="h-20 w-20 shrink-0 rounded-2xl border border-accent-bright/50 bg-background flex items-center justify-center text-accent-bright shadow-[0_0_20px_rgba(0,255,196,0.3)]">
            <etapa.Icon />
          </div>
          <div>
            <span className="inline-block rounded-lg border border-accent-bright/40 bg-background px-2.5 py-1 text-accent-bright font-display font-bold text-sm mb-2">
              {etapa.n}
            </span>
            <p className="font-display font-bold text-lg text-foreground mb-1">{etapa.titulo}</p>
            <p className="text-sm text-muted leading-relaxed">{etapa.descricao}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
