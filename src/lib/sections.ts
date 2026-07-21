export type Cluster = "inicio" | "alvo" | "rota" | "mira" | "metodo";

export type SectionDef = {
  id: string;
  cluster: Cluster;
  title: string;
  path: string;
  /** Seções somente-conteúdo não contam para o indicador de progresso. */
  hasForm: boolean;
  /** Chaves de `answers[id]` que precisam estar preenchidas para a seção contar como respondida. */
  requiredKeys: string[];
};

export const CLUSTER_LABELS: Record<Cluster, string> = {
  inicio: "Início",
  alvo: "Alvo",
  rota: "Rota",
  mira: "Mira",
  metodo: "Seu Método",
};

/** Texto do divisor exibido na sidebar, acima de cada pilar (Alvo/Rota/Mira). */
export const CLUSTER_DIVIDERS: Partial<Record<Cluster, string>> = {
  alvo: "Definindo o ALVO",
  rota: "Traçando a ROTA",
  mira: "Calibrando a MIRA",
};

export const SECTIONS: SectionDef[] = [
  {
    id: "inicio-abertura",
    cluster: "inicio",
    title: "A Máquina de Vender Planos",
    path: "/inicio",
    hasForm: false,
    requiredKeys: [],
  },
  {
    id: "inicio-essencial",
    cluster: "inicio",
    title: "O que é essencial no sucesso da venda?",
    path: "/inicio/essencial",
    hasForm: false,
    requiredKeys: [],
  },
  {
    id: "inicio-metodo-arm",
    cluster: "inicio",
    title: "O Método A.R.M.",
    path: "/inicio/metodo-arm",
    hasForm: false,
    requiredKeys: [],
  },
  {
    id: "inicio-dor",
    cluster: "inicio",
    title: "Qual é a sua maior dor vendendo planos hoje?",
    path: "/inicio/dor",
    hasForm: true,
    requiredKeys: ["dor_principal"],
  },
  {
    id: "alvo-posicionamento",
    cluster: "alvo",
    title: "Posicionamento",
    path: "/alvo/posicionamento",
    hasForm: true,
    requiredKeys: ["identidade"],
  },
  {
    id: "alvo-produtos",
    cluster: "alvo",
    title: "Produtos",
    path: "/alvo/produtos",
    hasForm: true,
    requiredKeys: ["nichos"],
  },
  {
    id: "alvo-cliente-ideal",
    cluster: "alvo",
    title: "Cliente Ideal",
    path: "/alvo/cliente-ideal",
    hasForm: true,
    requiredKeys: ["cliente_dor_regiao", "cliente_momento"],
  },
  {
    id: "alvo-metas",
    cluster: "alvo",
    title: "Metas",
    path: "/alvo/metas",
    hasForm: true,
    requiredKeys: ["meta_ideal"],
  },
  {
    id: "rota-jornada",
    cluster: "rota",
    title: "Jornada Comercial",
    path: "/rota/jornada-comercial",
    hasForm: false,
    requiredKeys: [],
  },
  {
    id: "rota-geracao-demanda",
    cluster: "rota",
    title: "Geração de Demanda",
    path: "/rota/geracao-demanda",
    hasForm: true,
    requiredKeys: ["canais_hoje", "gargalo_funil", "indicacao_hoje"],
  },
  {
    id: "rota-ampulheta",
    cluster: "rota",
    title: "Ampulheta do Marketing",
    path: "/rota/ampulheta-marketing",
    hasForm: true,
    requiredKeys: [
      "amp_consciencia",
      "amp_desejo",
      "amp_recompensa",
      "amp_retencao",
      "amp_engajamento",
      "amp_recomendacao",
    ],
  },
  {
    id: "rota-rotina",
    cluster: "rota",
    title: "Rotina do Trabalho Diário",
    path: "/rota/rotina-diaria",
    hasForm: true,
    requiredKeys: ["rotina_hoje", "rotina_bloco_falta"],
  },
  {
    id: "rota-cadencia",
    cluster: "rota",
    title: "Cadência de Contatos",
    path: "/rota/cadencia-contatos",
    hasForm: true,
    requiredKeys: ["cadencia_hoje", "cadencia_automatiza"],
  },
  {
    id: "mira-cda-chat",
    cluster: "mira",
    title: "Tecnologia — CDA Chat",
    path: "/mira/cda-chat",
    hasForm: false,
    requiredKeys: [],
  },
  {
    id: "mira-agente",
    cluster: "mira",
    title: "Automação — Agente do Amanhã",
    path: "/mira/agente-do-amanha",
    hasForm: false,
    requiredKeys: [],
  },
  {
    id: "mira-mindset",
    cluster: "mira",
    title: "Mindset de Alta Performance",
    path: "/mira/mindset",
    hasForm: false,
    requiredKeys: [],
  },
  {
    id: "mira-medicao",
    cluster: "mira",
    title: "Medição dos Resultados",
    path: "/mira/medicao-resultados",
    hasForm: true,
    requiredKeys: ["metricas_hoje", "metrica_decisao"],
  },
  {
    id: "mira-movimento",
    cluster: "mira",
    title: "Construa um Movimento",
    path: "/mira/construa-um-movimento",
    hasForm: false,
    requiredKeys: [],
  },
  {
    id: "metodo-resumo",
    cluster: "metodo",
    title: "Seu Método A.R.M.",
    path: "/metodo",
    hasForm: false,
    requiredKeys: [],
  },
  {
    id: "oferta",
    cluster: "metodo",
    title: "Oferta",
    path: "/oferta",
    hasForm: false,
    requiredKeys: [],
  },
];

export function getSection(id: string): SectionDef | undefined {
  return SECTIONS.find((s) => s.id === id);
}

export function sectionsByCluster(cluster: Cluster): SectionDef[] {
  return SECTIONS.filter((s) => s.cluster === cluster);
}

function isFilled(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "number") return !Number.isNaN(value);
  return true;
}

export function isSectionComplete(
  section: SectionDef,
  answers: Record<string, Record<string, unknown>>
): boolean {
  if (!section.hasForm) return false;
  const sectionAnswers = answers[section.id] ?? {};
  return section.requiredKeys.every((key) => isFilled(sectionAnswers[key]));
}
