function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <path d="m3 11 18-7-7 18-2.5-7L3 11Z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function TextBubbleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <path d="M3 5.5h18v11H9l-4 3.5v-3.5H3v-11Z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round" />
      <path d="M6.5 9.3h11M6.5 12.3h7" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  );
}

function CalendarDotsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <rect x="3" y="5" width="18" height="16" rx="1.6" stroke="currentColor" strokeWidth={1.5} />
      <path d="M3 9.5h18M7.5 3v4M16.5 3v4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      <circle cx="8" cy="14" r="0.9" fill="currentColor" />
      <circle cx="12" cy="14" r="0.9" fill="currentColor" />
      <circle cx="16" cy="14" r="0.9" fill="currentColor" />
      <circle cx="8" cy="17.3" r="0.9" fill="currentColor" />
      <circle cx="12" cy="17.3" r="0.9" fill="currentColor" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.5} />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const TENTATIVAS = [
  { n: 1, Icon: TextBubbleIcon, titulo: "1ª tentativa", descricao: "No mesmo dia do contato inicial" },
  { n: 2, Icon: CalendarDotsIcon, titulo: "2ª tentativa", descricao: "1 dia depois" },
  { n: 3, Icon: ClockIcon, titulo: "3ª tentativa", descricao: "2 a 3 dias depois" },
];

export function CadenciaTimeline() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 sm:p-8">
      <div className="flex items-start gap-4 mb-10">
        <div className="h-16 w-16 shrink-0 rounded-full border border-accent-bright/60 bg-background flex items-center justify-center text-accent-bright shadow-[0_0_18px_rgba(0,255,196,0.3)]">
          <SendIcon />
        </div>
        <div>
          <p className="font-display font-bold text-xl text-foreground mb-2">
            Um padrão simples de follow-up
          </p>
          <p className="text-muted leading-relaxed">
            3 tentativas: a primeira mensagem no mesmo dia, a segunda 1 dia depois, a terceira 2 a
            3 dias depois. Cada uma com um motivo diferente pra escrever, não é só &ldquo;oi,
            tudo bem?&rdquo; de novo.
          </p>
        </div>
      </div>

      <div className="flex items-start">
        {TENTATIVAS.flatMap((t, i) => {
          const item = (
            <div key={t.n} className="flex-1 basis-0 flex flex-col items-center text-center">
              <div className="relative">
                <div className="h-16 w-16 rounded-full border border-accent-bright/60 bg-background flex items-center justify-center text-accent-bright shadow-[0_0_16px_rgba(0,255,196,0.25)]">
                  <t.Icon />
                </div>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-background">
                  {t.n}
                </span>
              </div>
              <div className="mt-6 rounded-xl border border-border bg-background/40 px-4 py-4 w-full">
                <p className="font-display font-bold text-accent-bright">{t.titulo}</p>
                <span className="block h-px w-8 bg-border mx-auto my-2" />
                <p className="text-sm text-muted">{t.descricao}</p>
              </div>
            </div>
          );

          if (i === TENTATIVAS.length - 1) return [item];

          const connector = (
            <div key={`c-${t.n}`} className="flex items-center mt-8 px-1">
              <span className="w-6 sm:w-10 border-t border-dotted border-accent-bright/60" />
              <span className="h-2 w-2 rounded-full bg-accent-bright shrink-0" />
              <span className="w-6 sm:w-10 border-t border-dotted border-accent-bright/60" />
            </div>
          );

          return [item, connector];
        })}
      </div>
    </div>
  );
}
