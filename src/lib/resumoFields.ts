import { optionLabel } from "@/lib/fieldOptions";

type Format = "text" | "array" | "currency" | "percent" | "option";

type FieldMeta = { key: string; label: string; format: Format };

export const RESUMO_FIELDS: Record<string, FieldMeta[]> = {
  "alvo-posicionamento": [{ key: "posicionamento", label: "Posicionamento", format: "text" }],
  "alvo-produtos": [{ key: "nichos", label: "Nichos", format: "array" }],
  "alvo-cliente-ideal": [
    { key: "dor_regiao", label: "Dor e região do cliente ideal", format: "text" },
    { key: "momento_decisao", label: "Momento de decisão", format: "option" },
  ],
  "alvo-metas": [
    { key: "faturamento_meta", label: "Meta de faturamento mensal", format: "currency" },
    { key: "ticket_medio", label: "Ticket médio", format: "currency" },
    { key: "taxa_fechamento", label: "Taxa de fechamento", format: "percent" },
  ],
  "rota-geracao-demanda": [
    { key: "canais_hoje", label: "Canais usados hoje", format: "array" },
    { key: "gargalo_funil", label: "Gargalo do funil", format: "text" },
    { key: "acao_indicacao", label: "Ação ao receber indicação", format: "text" },
  ],
  "rota-ampulheta": [
    { key: "consciencia", label: "Consciência", format: "text" },
    { key: "desejo", label: "Desejo", format: "text" },
    { key: "recompensa", label: "Recompensa", format: "text" },
    { key: "retencao", label: "Retenção", format: "text" },
    { key: "engajamento", label: "Engajamento", format: "text" },
    { key: "recomendacao", label: "Recomendação", format: "text" },
  ],
  "rota-rotina": [{ key: "rotina_atual", label: "Rotina atual", format: "text" }],
  "rota-cadencia": [{ key: "cadencia_atual", label: "Cadência atual", format: "text" }],
  "mira-medicao": [
    { key: "metricas_hoje", label: "Métricas acompanhadas", format: "array" },
    { key: "mudanca_por_numero", label: "Mudança gerada por um número", format: "text" },
  ],
};

export function formatFieldValue(format: Format, value: unknown): string | null {
  if (value === null || value === undefined) return null;

  if (format === "array") {
    if (!Array.isArray(value) || value.length === 0) return null;
    return value.map((v) => optionLabel(String(v))).join(", ");
  }

  if (format === "option") {
    if (typeof value !== "string" || value.trim().length === 0) return null;
    return optionLabel(value);
  }

  if (format === "currency") {
    if (typeof value !== "number") return null;
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  if (format === "percent") {
    if (typeof value !== "number") return null;
    return `${value}%`;
  }

  if (typeof value === "string" && value.trim().length > 0) return value;
  return null;
}
