import { optionLabel } from "@/lib/fieldOptions";

type Format = "text" | "array" | "currency" | "percent" | "option";

type FieldMeta = { key: string; label: string; format: Format };

export const RESUMO_FIELDS: Record<string, FieldMeta[]> = {
  "alvo-posicionamento": [{ key: "identidade", label: "Identidade", format: "text" }],
  "alvo-produtos": [{ key: "nichos", label: "Nichos", format: "array" }],
  "alvo-cliente-ideal": [
    { key: "cliente_dor_regiao", label: "Dor e região do cliente ideal", format: "text" },
    { key: "cliente_momento", label: "Momento do cliente ideal", format: "option" },
  ],
  "rota-geracao-demanda": [
    { key: "canais_hoje", label: "Canais usados hoje", format: "array" },
    { key: "gargalo_funil", label: "Gargalo do funil", format: "text" },
    { key: "indicacao_hoje", label: "Reconhecimento de indicação hoje", format: "text" },
  ],
  "rota-ampulheta": [
    { key: "amp_consciencia", label: "Consciência", format: "text" },
    { key: "amp_desejo", label: "Desejo", format: "text" },
    { key: "amp_recompensa", label: "Recompensa", format: "text" },
    { key: "amp_retencao", label: "Retenção", format: "text" },
    { key: "amp_engajamento", label: "Engajamento", format: "text" },
    { key: "amp_recomendacao", label: "Recomendação", format: "text" },
  ],
  "rota-rotina": [
    { key: "rotina_hoje", label: "Rotina hoje", format: "text" },
    { key: "rotina_bloco_falta", label: "Bloco que mais falha", format: "option" },
  ],
  "rota-cadencia": [
    { key: "cadencia_hoje", label: "Cadência hoje", format: "text" },
    { key: "cadencia_automatiza", label: "Como agenda follow-up", format: "option" },
  ],
  "mira-medicao": [
    { key: "metricas_hoje", label: "Métricas acompanhadas", format: "array" },
    { key: "metrica_decisao", label: "Mudança gerada por um número", format: "text" },
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

type MetaLinha = { faturado?: number | null };

export function summarizeMetas(sectionAnswers: Record<string, unknown> | undefined): {
  metaIdeal: number;
  metaReal: number;
} | null {
  if (!sectionAnswers) return null;
  const metaIdeal = typeof sectionAnswers.meta_ideal === "number" ? sectionAnswers.meta_ideal : 0;
  const linhas = Array.isArray(sectionAnswers.linhas) ? (sectionAnswers.linhas as MetaLinha[]) : [];
  const metaReal = linhas.reduce((sum, l) => sum + (l.faturado ?? 0), 0);
  if (metaIdeal === 0 && metaReal === 0) return null;
  return { metaIdeal, metaReal };
}
