function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <rect x="3.5" y="8" width="17" height="11" rx="1.6" stroke="currentColor" strokeWidth={1.5} />
      <path d="M8.5 8V6.4A1.4 1.4 0 0 1 9.9 5h4.2a1.4 1.4 0 0 1 1.4 1.4V8" stroke="currentColor" strokeWidth={1.5} />
      <path d="M3.5 12.5h17" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="m3 11 18-7-7 18-2.5-7L3 11Z"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M4 12a8 8 0 0 1 13.657-5.657L20 8M20 8V4M20 8h-4M20 12a8 8 0 0 1-13.657 5.657L4 16m0 0v4m0-4h4"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M4 13v-1a8 8 0 0 1 16 0v1"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <rect x="3" y="13" width="4" height="6" rx="1.4" stroke="currentColor" strokeWidth={1.6} />
      <rect x="17" y="13" width="4" height="6" rx="1.4" stroke="currentColor" strokeWidth={1.6} />
      <path d="M19 19v1a2 2 0 0 1-2 2h-3" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

function Node({
  Icon,
  titulo,
  descricao,
  style,
}: {
  Icon: () => React.JSX.Element;
  titulo: string;
  descricao: string;
  style: React.CSSProperties;
}) {
  return (
    <div
      className="absolute w-[150px] sm:w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-accent-bright/40 bg-surface px-4 py-5 text-center shadow-[0_0_24px_rgba(0,255,196,0.12)]"
      style={style}
    >
      <div className="mx-auto mb-3 h-12 w-12 rounded-full border border-accent-bright/60 flex items-center justify-center text-accent-bright shadow-[0_0_14px_rgba(0,255,196,0.3)]">
        <Icon />
      </div>
      <p className="font-display font-bold text-foreground">{titulo}</p>
      <span className="mx-auto mt-1 mb-2 block h-px w-6 bg-accent-bright/50" />
      <p className="text-xs text-muted">{descricao}</p>
    </div>
  );
}

function Tag({
  Icon,
  label,
  style,
}: {
  Icon: () => React.JSX.Element;
  label: string;
  style: React.CSSProperties;
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 rounded-full border border-accent-bright/40 bg-surface px-3 py-1.5 text-xs text-foreground/90 whitespace-nowrap shadow-[0_0_14px_rgba(0,255,196,0.15)]"
      style={style}
    >
      <span className="text-accent-bright">
        <Icon />
      </span>
      {label}
    </div>
  );
}

export function FlywheelDiagram() {
  return (
    <div className="relative w-full aspect-[4/3.1] max-w-2xl mx-auto">
      <svg viewBox="0 0 400 310" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <marker
            id="fw-arrow"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 Z" fill="#00FFC4" />
          </marker>
        </defs>
        <path
          d="M235,78 Q315,105 300,168"
          stroke="#00FFC4"
          strokeWidth={2}
          markerEnd="url(#fw-arrow)"
        />
        <path
          d="M298,222 Q200,275 102,222"
          stroke="#00FFC4"
          strokeWidth={2}
          markerEnd="url(#fw-arrow)"
        />
        <path
          d="M100,168 Q85,105 165,78"
          stroke="#00FFC4"
          strokeWidth={2}
          markerEnd="url(#fw-arrow)"
        />
      </svg>

      <div className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-display font-bold text-2xl sm:text-3xl text-foreground">Flywheel</p>
        <p className="text-accent-bright text-sm mt-1">Sistema de Indicação</p>
      </div>

      <Node
        Icon={PersonIcon}
        titulo="Indicador"
        descricao="Quem recomenda"
        style={{ left: "50%", top: "16%" }}
      />
      <Node
        Icon={PersonIcon}
        titulo="Lead"
        descricao="Quem chega pelo sistema"
        style={{ left: "82%", top: "68%" }}
      />
      <Node
        Icon={BriefcaseIcon}
        titulo="Corretor"
        descricao="Quem atende e converte"
        style={{ left: "18%", top: "68%" }}
      />

      <Tag Icon={SendIcon} label="Indica um contato" style={{ left: "84%", top: "34%" }} />
      <Tag Icon={HeadsetIcon} label="Recebe atendimento" style={{ left: "50%", top: "92%" }} />
      <Tag Icon={RefreshIcon} label="Cliente satisfeito indica de novo" style={{ left: "16%", top: "34%" }} />
    </div>
  );
}
