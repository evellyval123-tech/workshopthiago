import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const PRODUTOS = [
  {
    nome: "Sistema de Indicação",
    descricao:
      "Cada cliente satisfeito vira porta de entrada pro próximo — o Flywheel corretor → indicador → lead.",
  },
  {
    nome: "CDA Chat",
    descricao:
      "CRM de WhatsApp: Kanban, ficha de cliente, follow-up automático e métricas do seu funil.",
  },
  {
    nome: "Agente do Amanhã",
    descricao: "IA de atendimento 24h.",
  },
];

export default function OfertaPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Seu Método"
        title="A Máquina Completa"
        description="Os 3 produtos que sustentam o método que você acabou de montar."
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
        <p className="font-display text-3xl font-bold text-foreground mb-2">
          R$ 197<span className="text-lg text-muted">/mês</span>
        </p>
        <p className="text-accent-bright font-semibold mb-4">
          R$ 97 pros 20 primeiros inscritos
        </p>
        <p className="text-sm text-muted">
          Fale com seu gestor ou com a Corretoras do Amanhã pra ativar.
        </p>
      </Card>
    </div>
  );
}
