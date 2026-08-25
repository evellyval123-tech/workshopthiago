function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="5" y="4" width="14" height="17" rx="1.6" stroke="currentColor" strokeWidth={1.4} />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth={1.4} />
      <path d="m8.3 12.3 1.6 1.6 3.3-3.4M8.3 17.3h6.4" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="3" y="5" width="18" height="16" rx="1.6" stroke="currentColor" strokeWidth={1.4} />
      <path d="M3 9.5h18M7.5 3v4M16.5 3v4" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth={1.4} />
      <path d="m20 20-4.8-4.8" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth={1.4} />
      <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  );
}

function BarsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M6 18v-4M12 18V9M18 18v-7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M2 12.5 6 9l3.5 2.5L14 8l4 3" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
      <path d="m10 13 3 2.3a1.5 1.5 0 0 0 2-2.2L11.5 9.5" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12.5v4L5 19l3-2M22 11v4l-3 3-3-2" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M3 5.5h18v11H9l-4 3.5v-3.5H3v-11Z" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="8.3" cy="11" r="0.9" fill="currentColor" />
      <circle cx="12" cy="11" r="0.9" fill="currentColor" />
      <circle cx="15.7" cy="11" r="0.9" fill="currentColor" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.4} />
      <path d="m8 12.3 2.7 2.7L16 9.5" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const COLUNA_ESQUERDA = [
  { n: 1, Icon: CalendarIcon, titulo: "Reunião matinal", descricao: "Revisão do dia anterior e planejamento." },
  { n: 2, Icon: SearchIcon, titulo: "Prospecção", descricao: "Primeiro bloco, contatos novos." },
  { n: 3, Icon: PersonIcon, titulo: "Tratamento de leads", descricao: "Quem já está em conversa." },
  { n: 4, Icon: BarsIcon, titulo: "Revisão de resultados", descricao: "" },
];

const COLUNA_DIREITA = [
  { n: 5, Icon: HandshakeIcon, titulo: "Relacionamento com a carteira", descricao: "Aqui é onde você pede e acompanha indicação." },
  { n: 6, Icon: ChatIcon, titulo: "Segundo bloco de prospecção", descricao: "e tratamento." },
  { n: 7, Icon: CheckCircleIcon, titulo: "Fechamento do dia", descricao: "Com revisão do CRM." },
];

function IconRing({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-14 w-14 shrink-0 rounded-full border border-accent-bright/60 bg-surface flex items-center justify-center text-accent-bright shadow-[0_0_16px_rgba(0,255,196,0.25)]">
      {children}
    </div>
  );
}

function Coluna({ passos }: { passos: typeof COLUNA_ESQUERDA }) {
  return (
    <div className="space-y-1">
      {passos.map((passo, i) => (
        <div key={passo.n} className="flex items-stretch gap-4">
          <div className="flex flex-col items-center">
            <IconRing>
              <passo.Icon />
            </IconRing>
            {i < passos.length - 1 && (
              <span className="flex-1 w-px bg-accent-bright/40 my-1" />
            )}
          </div>
          <div className="flex-1 rounded-2xl border border-border bg-background/40 px-5 py-4 flex items-start gap-3 mb-3">
            <span className="font-display font-bold text-2xl text-accent-bright shrink-0">
              {passo.n}
            </span>
            <div>
              <p className="font-semibold text-foreground">{passo.titulo}</p>
              {passo.descricao && <p className="text-sm text-muted">{passo.descricao}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function RotinaTimeline() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 sm:p-8">
      <div className="flex items-center gap-4 mb-8">
        <IconRing>
          <ClipboardIcon />
        </IconRing>
        <div>
          <p className="font-display font-bold text-xl text-foreground">
            Um esqueleto de rotina
          </p>
          <p className="text-accent-bright text-xs font-semibold tracking-widest">
            QUE FUNCIONA
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-x-10">
        <Coluna passos={COLUNA_ESQUERDA} />
        <Coluna passos={COLUNA_DIREITA} />
      </div>
    </div>
  );
}
