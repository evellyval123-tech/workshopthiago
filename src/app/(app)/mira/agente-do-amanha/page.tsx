import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export default function AgenteDoAmanhaPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Mira"
        title="Automação — Agente do Amanhã"
        description="Automação não é sobre substituir você — é sobre garantir que nenhum lead espere."
      />

      <div className="space-y-4">
        <Card>
          <p className="font-semibold text-foreground mb-1">O que é</p>
          <p className="text-sm text-muted">
            Uma IA conectada ao seu WhatsApp profissional que faz o atendimento e a qualificação
            inicial de todo lead novo, 24 horas por dia, treinada com base nas respostas que você
            mesmo dá num formulário sobre como você atende.
          </p>
        </Card>
        <Card>
          <p className="font-semibold text-foreground mb-1">Como funciona na prática</p>
          <p className="text-sm text-muted">
            O lead chega, a IA conversa, pergunta o que precisa saber (número de vidas, idade, o
            que busca) e já organiza tudo — você entra só pra fazer a cotação e fechar.
          </p>
        </Card>
        <Card>
          <p className="font-semibold text-foreground mb-1">Quando você quiser assumir</p>
          <p className="text-sm text-muted">
            Basta você entrar na conversa manualmente que o atendimento automático para na hora —
            o controle continua sendo seu.
          </p>
        </Card>
      </div>
    </div>
  );
}
