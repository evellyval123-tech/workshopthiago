const ETAPAS = [
  "Base",
  "Prospecção",
  "Conexão",
  "No-Show",
  "Reunião",
  "Proposta",
  "Negociação",
  "Fechamento",
];

const START_X = 50;
const END_X = 790;
const START_Y = 190;
const END_Y = 40;
const ICON_OFFSET = 78;
const LABEL_OFFSET = 122;

function point(i: number) {
  const t = i / (ETAPAS.length - 1);
  return {
    x: START_X + t * (END_X - START_X),
    y: START_Y + t * (END_Y - START_Y),
  };
}

function HouseIcon() {
  return (
    <g stroke="#00FFC4" strokeWidth={1.5} fill="none" strokeLinejoin="round" strokeLinecap="round">
      <path d="M2 11 12 3l10 8" />
      <path d="M4.5 9.5V21h15V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </g>
  );
}

function SearchIcon() {
  return (
    <g stroke="#00FFC4" strokeWidth={1.5} fill="none" strokeLinecap="round">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.8-4.8" />
    </g>
  );
}

function ChatIcon() {
  return (
    <g stroke="#00FFC4" strokeWidth={1.5} fill="none" strokeLinejoin="round" strokeLinecap="round">
      <path d="M3 5.5h18v11H9l-4 3.5v-3.5H3v-11Z" />
      <circle cx="8.3" cy="11" r="0.9" fill="#00FFC4" stroke="none" />
      <circle cx="12" cy="11" r="0.9" fill="#00FFC4" stroke="none" />
      <circle cx="15.7" cy="11" r="0.9" fill="#00FFC4" stroke="none" />
    </g>
  );
}

function CalendarXIcon() {
  return (
    <g stroke="#00FFC4" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="1.6" />
      <path d="M3 9.5h18M7.5 3v4M16.5 3v4" />
      <path d="m9.5 13.5 5 5m0-5-5 5" />
    </g>
  );
}

function PeopleIcon() {
  return (
    <g stroke="#00FFC4" strokeWidth={1.5} fill="none" strokeLinecap="round">
      <circle cx="8.5" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.5-5.5 5.5-5.5S14 16.7 14 20" />
      <circle cx="16.5" cy="8" r="2.6" />
      <path d="M14.8 14.8c3-.3 5.2 2 5.2 5.2" />
    </g>
  );
}

function DocumentIcon() {
  return (
    <g stroke="#00FFC4" strokeWidth={1.5} fill="none" strokeLinejoin="round" strokeLinecap="round">
      <path d="M6 2.5h9l4 4V21H6V2.5Z" />
      <path d="M15 2.5v4h4" />
      <path d="M9 12.5h7M9 16h7M9 9h4" />
    </g>
  );
}

function HandshakeIcon() {
  return (
    <g stroke="#00FFC4" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12.5 6 9l3.5 2.5L14 8l4 3" />
      <path d="m10 13 3 2.3a1.5 1.5 0 0 0 2-2.2L11.5 9.5" />
      <path d="M2 12.5v4L5 19l3-2" />
      <path d="M22 11v4l-3 3-3-2" />
    </g>
  );
}

function CheckCircleIcon() {
  return (
    <g stroke="#00FFC4" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.3 2.7 2.7L16 9.5" />
    </g>
  );
}

const ICONS = [
  HouseIcon,
  SearchIcon,
  ChatIcon,
  CalendarXIcon,
  PeopleIcon,
  DocumentIcon,
  HandshakeIcon,
  CheckCircleIcon,
];

export function JornadaStaircase() {
  const points = ETAPAS.map((_, i) => point(i));
  const linePath = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg
      viewBox="0 0 840 340"
      className="w-full h-auto"
      role="img"
      aria-label="Jornada comercial em 8 etapas ascendentes"
    >
      <polyline points={linePath} fill="none" stroke="#17362A" strokeWidth={3} />
      {points.map((p, i) => {
        const Icon = ICONS[i];
        const iconY = p.y + ICON_OFFSET;
        return (
          <g key={ETAPAS[i]}>
            <line
              x1={p.x}
              y1={p.y + 16}
              x2={p.x}
              y2={iconY - 15}
              stroke="#00FFC4"
              strokeOpacity={0.5}
              strokeWidth={1.5}
            />
            <circle cx={p.x} cy={p.y + 16} r={2} fill="#00FFC4" />

            <circle
              cx={p.x}
              cy={p.y}
              r={17}
              fill="rgba(0,255,196,0.08)"
              stroke="#00FFC4"
              strokeWidth={1.8}
            />
            <text
              x={p.x}
              y={p.y + 5}
              textAnchor="middle"
              fontSize={13}
              fontWeight={700}
              fill="#EAF6F1"
              fontFamily="var(--font-display), sans-serif"
            >
              {i + 1}
            </text>

            <g transform={`translate(${p.x - 12}, ${iconY - 12})`}>
              <Icon />
            </g>

            <text
              x={p.x}
              y={p.y + LABEL_OFFSET}
              textAnchor="middle"
              fontSize={13}
              fontWeight={600}
              fill="#EAF6F1"
            >
              {ETAPAS[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
