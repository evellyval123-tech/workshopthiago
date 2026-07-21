function Pill({
  x,
  y,
  label,
  variant = "default",
}: {
  x: number;
  y: number;
  label: string;
  variant?: "default" | "accent";
}) {
  const width = 130;
  const height = 48;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={height / 2}
        fill={variant === "accent" ? "rgba(0,255,196,0.12)" : "#0E241D"}
        stroke={variant === "accent" ? "#00FFC4" : "#17362A"}
        strokeWidth={1.5}
      />
      <text
        x={x + width / 2}
        y={y + height / 2 + 5}
        textAnchor="middle"
        fontSize={15}
        fontWeight={700}
        fill={variant === "accent" ? "#00FFC4" : "#EAF6F1"}
        fontFamily="var(--font-display), sans-serif"
      >
        {label}
      </text>
    </g>
  );
}

export function EsforcoMetodoDiagram() {
  return (
    <svg viewBox="0 0 760 320" className="w-full h-auto" role="img" aria-label="Sem método, Produto e Cliente exigem muito esforço. Com método, a conexão é direta.">
      {/* Linha 1: sem método */}
      <text x="20" y="24" fontSize="11" fontWeight={700} letterSpacing="1.5" fill="#8FB3A6">
        SEM MÉTODO
      </text>
      <path
        d="M150,90 L215,68 L280,112 L345,68 L410,112 L475,68 L540,112 L610,90"
        fill="none"
        stroke="#f87171"
        strokeWidth={2.5}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <text x="380" y="48" textAnchor="middle" fontSize="13" fontWeight={700} letterSpacing="1" fill="#f87171">
        MUITO ESFORÇO
      </text>
      <Pill x={20} y={66} label="Produto" />
      <Pill x={610} y={66} label="Cliente" />

      {/* Linha 2: com método */}
      <text x="20" y="184" fontSize="11" fontWeight={700} letterSpacing="1.5" fill="#00FFC4">
        COM MÉTODO
      </text>
      <path
        d="M150,250 Q235,250 300,220"
        fill="none"
        stroke="#00FFC4"
        strokeWidth={2.5}
        strokeDasharray="2 8"
        strokeLinecap="round"
      />
      <path
        d="M460,220 Q525,250 610,250"
        fill="none"
        stroke="#00FFC4"
        strokeWidth={2.5}
        strokeDasharray="2 8"
        strokeLinecap="round"
      />
      <Pill x={20} y={226} label="Produto" />
      <Pill x={315} y={196} label="Método" variant="accent" />
      <Pill x={610} y={226} label="Cliente" />
    </svg>
  );
}
