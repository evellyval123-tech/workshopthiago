import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export default function CdaChatPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Mira"
        title="Tecnologia — CDA Chat"
        description="O CRM de WhatsApp feito pra corretor de plano de saúde."
      />

      <div className="space-y-6">
        <Card>
          <p className="text-muted leading-relaxed mb-6">
            O CDA Chat organiza toda a sua conversa comercial dentro do WhatsApp: um{" "}
            <strong className="text-foreground">Kanban</strong> visual do seu funil, uma{" "}
            <strong className="text-foreground">ficha de cliente</strong> completa por contato,{" "}
            <strong className="text-foreground">respostas pré-prontas</strong> com campo
            variável (nome, plano, valor) e <strong className="text-foreground">follow-up automático</strong>{" "}
            pra ninguém esfriar no funil. No fim, você acompanha{" "}
            <strong className="text-foreground">métricas de funil</strong> em tempo real.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl bg-background border border-border p-4">
              <p className="font-semibold text-foreground mb-1">
                1. Organizar leads por etapa
              </p>
              <p className="text-sm text-muted">
                Arraste um contato do WhatsApp direto pra etapa &quot;Reunião marcada&quot; e
                nunca mais perca de vista quem está esperando resposta.
              </p>
            </div>
            <div className="rounded-xl bg-background border border-border p-4">
              <p className="font-semibold text-foreground mb-1">2. Resposta em segundos</p>
              <p className="text-sm text-muted">
                Um cliente pergunta sobre carência? Uma resposta pré-pronta já preenche o nome e
                o plano dele automaticamente.
              </p>
            </div>
            <div className="rounded-xl bg-background border border-border p-4">
              <p className="font-semibold text-foreground mb-1">3. Follow-up que não falha</p>
              <p className="text-sm text-muted">
                Lead não respondeu em 2 dias? O CDA Chat dispara o follow-up automático antes de
                você precisar lembrar.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
