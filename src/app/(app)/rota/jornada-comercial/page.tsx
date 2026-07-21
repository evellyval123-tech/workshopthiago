import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { JornadaStaircase } from "@/components/sections/JornadaStaircase";

const ETAPAS = [
  {
    nome: "Base",
    descricao:
      "Sua carteira atual e sua lista de contatos frios. É daqui que sai boa parte da indicação, se você trabalhar isso de propósito.",
  },
  {
    nome: "Prospecção",
    descricao:
      "Primeiro contato com quem ainda não te conhece — via tráfego, indicação ou parceria.",
  },
  {
    nome: "Conexão",
    descricao:
      "O lead responde e a conversa começa. Aqui a velocidade de resposta já decide metade da venda.",
  },
  {
    nome: "No-Show",
    descricao:
      "Reunião marcada e o cliente não aparece. Ter uma cadência de recontato pronta evita perder o lead de vez.",
  },
  {
    nome: "Reunião",
    descricao:
      "Levantamento de necessidade de verdade: número de vidas, orçamento, o que já tem hoje e por que está insatisfeito.",
  },
  {
    nome: "Proposta",
    descricao:
      "Cotação personalizada — não a tabela genérica da operadora, mas a que responde à dor que ele te contou.",
  },
  {
    nome: "Negociação",
    descricao: "Contornar objeções de preço e prazo sem virar guerra de desconto.",
  },
  {
    nome: "Fechamento",
    descricao:
      "Assinatura e, principalmente, o início do pós-venda — é aqui que nasce a próxima indicação.",
  },
];

export default function JornadaComercialPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Rota"
        title="Jornada Comercial"
        description="O funil de 8 etapas que todo cliente percorre até fechar — e onde, na prática, o corretor mais perde venda."
      />

      <Card className="mb-6">
        <JornadaStaircase />
      </Card>

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
