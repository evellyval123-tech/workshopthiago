import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const ETAPAS = [
  {
    nome: "Base",
    descricao: "Sua carteira de contatos e clientes atuais — o ponto de partida de tudo.",
  },
  {
    nome: "Prospecção",
    descricao: "Busca ativa por novos contatos que ainda não sabem que precisam de você.",
  },
  {
    nome: "Conexão",
    descricao: "Primeiro contato real — criar rapport antes de qualquer oferta.",
  },
  {
    nome: "No-Show",
    descricao: "Tratamento de quem marcou e não apareceu — recuperar, não descartar.",
  },
  {
    nome: "Reunião",
    descricao: "Diagnóstico da dor e do momento do cliente, cara a cara.",
  },
  {
    nome: "Proposta",
    descricao: "Apresentação do plano certo pra dor identificada na reunião.",
  },
  {
    nome: "Negociação",
    descricao: "Ajustes finos de condição, sem abrir mão do posicionamento.",
  },
  {
    nome: "Fechamento",
    descricao: "Confirmação da venda e início do relacionamento pós-venda.",
  },
];

export default function JornadaComercialPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Rota"
        title="Jornada Comercial"
        description="As 8 etapas que todo cliente percorre até fechar com você."
      />

      <div className="space-y-4">
        {ETAPAS.map((etapa, i) => (
          <Card key={etapa.nome} className="flex gap-4 items-start">
            <span className="font-display font-bold text-accent-bright text-xl w-8 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="font-semibold text-foreground mb-1">{etapa.nome}</p>
              <p className="text-sm text-muted">{etapa.descricao}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
