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
const START_Y = 230;
const END_Y = 40;

function point(i: number) {
  const t = i / (ETAPAS.length - 1);
  return {
    x: START_X + t * (END_X - START_X),
    y: START_Y + t * (END_Y - START_Y),
  };
}

export function JornadaStaircase() {
  const points = ETAPAS.map((_, i) => point(i));
  const linePath = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg viewBox="0 0 840 290" className="w-full h-auto" role="img" aria-label="Jornada comercial em 8 etapas ascendentes">
      <polyline points={linePath} fill="none" stroke="#17362A" strokeWidth={3} />
      {points.map((p, i) => (
        <g key={ETAPAS[i]}>
          <circle cx={p.x} cy={p.y} r={16} fill="#0BA982" stroke="#00FFC4" strokeWidth={1.5} />
          <text
            x={p.x}
            y={p.y + 5}
            textAnchor="middle"
            fontSize={13}
            fontWeight={700}
            fill="#07140F"
            fontFamily="var(--font-display), sans-serif"
          >
            {i + 1}
          </text>
          <text
            x={p.x}
            y={p.y + 34}
            textAnchor="middle"
            fontSize={11}
            fontWeight={600}
            fill="#EAF6F1"
          >
            {ETAPAS[i]}
          </text>
        </g>
      ))}
    </svg>
  );
}
