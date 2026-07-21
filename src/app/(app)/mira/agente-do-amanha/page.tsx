import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export default function AgenteDoAmanhaPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Mira"
        title="Automação — Agente do Amanhã"
        description="Inteligência artificial no WhatsApp, treinada pra sua operação."
      />

      <Card>
        <p className="text-muted leading-relaxed">
          O Agente do Amanhã é uma IA que atende e qualifica leads no WhatsApp{" "}
          <strong className="text-foreground">24 horas por dia</strong> — inclusive fora do seu
          horário comercial. Ele é treinado a partir de um formulário sobre o seu negócio (seus
          planos, sua região, seu tom de voz) e assume a conversa inicial até o ponto certo de
          qualificação. A partir daí, você entra manualmente pra fechar — o agente nunca some com
          a venda, só tira o trabalho repetitivo de triagem das suas mãos.
        </p>
      </Card>
    </div>
  );
}
