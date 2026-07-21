export const NICHOS = [
  { value: "individual", label: "Individual" },
  { value: "adesao", label: "Adesão" },
  { value: "pme", label: "PME" },
  { value: "grandes_contas", label: "Grandes Contas" },
];

export const MOMENTOS = [
  { value: "primeira_vez", label: "Contratando pela 1ª vez" },
  { value: "trocando", label: "Trocando de plano" },
  { value: "perdendo_empresarial", label: "Perdendo o plano empresarial" },
  { value: "reajuste", label: "Insatisfeito com reajuste" },
];

export const CANAIS = [
  { value: "indicacao", label: "Indicação" },
  { value: "redes_sociais", label: "Redes sociais" },
  { value: "trafego_pago", label: "Tráfego pago" },
  { value: "prospeccao_ativa", label: "Prospecção ativa" },
  { value: "carteira", label: "Carteira/base atual" },
  { value: "parcerias", label: "Parcerias" },
];

export const METRICAS = [
  { value: "leads_gerados", label: "Leads gerados" },
  { value: "taxa_conversao", label: "Taxa de conversão" },
  { value: "ticket_medio", label: "Ticket médio" },
  { value: "no_show", label: "Taxa de no-show" },
  { value: "indicacoes", label: "Indicações recebidas" },
  { value: "nenhuma", label: "Não acompanho nenhuma métrica hoje" },
];

const ALL_OPTIONS = [...NICHOS, ...MOMENTOS, ...CANAIS, ...METRICAS];

const LABEL_BY_VALUE = new Map(ALL_OPTIONS.map((opt) => [opt.value, opt.label]));

export function optionLabel(value: string): string {
  return LABEL_BY_VALUE.get(value) ?? value;
}
