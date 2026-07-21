import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { TextAreaField } from "@/components/fields/TextAreaField";
import { RadioGroupField } from "@/components/fields/RadioGroupField";
import { CADENCIA_AUTOMATIZA } from "@/lib/fieldOptions";

export default function CadenciaContatosPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Rota"
        title="Cadência de Contatos"
        description="Lead que não recebe follow-up não vira venda — ele só esfria. Cadência é decidir, antes, quantas vezes e quando você vai insistir."
      />

      <div className="space-y-6">
        <Card>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Um padrão simples de follow-up
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            3 tentativas: a primeira mensagem no mesmo dia, a segunda 1 dia depois, a terceira 2 a
            3 dias depois. Cada uma com um motivo diferente pra escrever — não é só &ldquo;oi,
            tudo bem?&rdquo; de novo.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-background border border-border p-4">
              <p className="text-accent-bright font-display font-bold mb-1">1ª tentativa</p>
              <p className="text-sm text-muted">No mesmo dia do contato inicial</p>
            </div>
            <div className="rounded-xl bg-background border border-border p-4">
              <p className="text-accent-bright font-display font-bold mb-1">2ª tentativa</p>
              <p className="text-sm text-muted">1 dia depois</p>
            </div>
            <div className="rounded-xl bg-background border border-border p-4">
              <p className="text-accent-bright font-display font-bold mb-1">3ª tentativa</p>
              <p className="text-sm text-muted">2 a 3 dias depois</p>
            </div>
          </div>
        </Card>

        <Card>
          <TextAreaField
            sectionId="rota-cadencia"
            fieldKey="cadencia_hoje"
            label="Hoje, quantas vezes em média você tenta contato antes de desistir de um lead?"
          />
        </Card>

        <Card>
          <RadioGroupField
            sectionId="rota-cadencia"
            fieldKey="cadencia_automatiza"
            label="Você agenda esses follow-ups com antecedência ou lembra na hora?"
            options={CADENCIA_AUTOMATIZA}
          />
        </Card>
      </div>
    </div>
  );
}
