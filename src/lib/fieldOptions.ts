export const NICHOS = [
  { value: "individual", label: "Individual" },
  { value: "adesao", label: "Adesão" },
  { value: "pme", label: "PME" },
  { value: "grandes_contas", label: "Grandes Contas" },
];

export const CLIENTE_MOMENTOS = [
  { value: "decide_sozinho", label: "Decide sozinho" },
  { value: "precisa_aprovacao", label: "Precisa aprovação de outra pessoa" },
  { value: "problema_operadora", label: "Já teve problema com a operadora atual" },
  { value: "trocando_corretor", label: "Está trocando de corretor" },
];

export const CANAIS = [
  { value: "trafego_pago", label: "Tráfego pago" },
  { value: "indicacao_ativa", label: "Indicação ativa" },
  { value: "parcerias", label: "Parcerias (contadores/RH)" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "nenhum_estruturado", label: "Nenhum estruturado" },
];

export const ROTINA_BLOCOS = [
  { value: "prospeccao", label: "Prospecção" },
  { value: "tratamento_leads", label: "Tratamento de leads" },
  { value: "relacionamento_indicacao", label: "Relacionamento-indicação" },
  { value: "revisao_resultados", label: "Revisão de resultados" },
];

export const CADENCIA_AUTOMATIZA = [
  { value: "agendo_antecedencia", label: "Agendo com antecedência" },
  { value: "lembro_na_hora", label: "Lembro na hora, quando dá" },
  { value: "sem_estrutura", label: "Não faço follow-up estruturado" },
];

export const METRICAS = [
  { value: "taxa_conversao", label: "Taxa de conversão" },
  { value: "tempo_medio_fechamento", label: "Tempo médio de fechamento" },
  { value: "valor_em_negociacao", label: "Valor total em negociação" },
  { value: "nenhuma_estruturada", label: "Nenhuma métrica estruturada" },
];

const ALL_OPTIONS = [
  ...NICHOS,
  ...CLIENTE_MOMENTOS,
  ...CANAIS,
  ...ROTINA_BLOCOS,
  ...CADENCIA_AUTOMATIZA,
  ...METRICAS,
];

const LABEL_BY_VALUE = new Map(ALL_OPTIONS.map((opt) => [opt.value, opt.label]));

export function optionLabel(value: string): string {
  return LABEL_BY_VALUE.get(value) ?? value;
}
