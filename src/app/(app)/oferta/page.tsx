import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const PRODUTOS = [
  {
    nome: "Sistema de Indicação",
    descricao:
      "O motor de Geração de Demanda do seu método Rota — transforma cliente satisfeito em novo indicador, de forma estruturada e repetível.",
  },
  {
    nome: "CDA Chat",
    descricao:
      "O CRM de WhatsApp da sua Mira — Kanban, ficha de cliente, respostas pré-prontas e follow-up automático.",
  },
  {
    nome: "Agente do Amanhã",
    descricao:
      "A automação da sua Mira — IA que atende e qualifica leads 24h por dia, direto no WhatsApp.",
  },
];

export default function OfertaPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Corretoras do Amanhã"
        title="Leve o seu Método A.R.M. adiante"
        description="As ferramentas que sustentam, na prática, tudo o que você acabou de construir."
      />

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {PRODUTOS.map((produto) => (
          <Card key={produto.nome}>
            <p className="font-display font-bold text-accent-bright mb-2">{produto.nome}</p>
            <p className="text-sm text-muted">{produto.descricao}</p>
          </Card>
        ))}
      </div>

      <Card className="text-center">
        <p className="text-sm text-muted mb-1">Os 3 produtos, juntos</p>
        <p className="font-display text-3xl font-bold text-foreground mb-4">
          R$ 197<span className="text-lg text-muted">/mês</span>
        </p>
        <p className="text-sm text-muted">
          Fale com seu gestor ou com a Corretoras do Amanhã pra ativar.
        </p>
      </Card>
    </div>
  );
}
