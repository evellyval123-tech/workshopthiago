import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { TextAreaField } from "@/components/fields/TextAreaField";

export default function CadenciaContatosPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Rota"
        title="Cadência de Contatos"
        description="O padrão de follow-up que evita que um lead esfrie."
      />

      <div className="space-y-6">
        <Card>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-background border border-border p-4">
              <p className="text-accent-bright font-display font-bold mb-1">1º follow-up</p>
              <p className="text-sm text-muted">No mesmo dia do contato inicial</p>
            </div>
            <div className="rounded-xl bg-background border border-border p-4">
              <p className="text-accent-bright font-display font-bold mb-1">2º follow-up</p>
              <p className="text-sm text-muted">1 dia depois</p>
            </div>
            <div className="rounded-xl bg-background border border-border p-4">
              <p className="text-accent-bright font-display font-bold mb-1">3º follow-up</p>
              <p className="text-sm text-muted">2 a 3 dias depois</p>
            </div>
          </div>
        </Card>

        <Card>
          <TextAreaField
            sectionId="rota-cadencia"
            fieldKey="cadencia_atual"
            label="Como está a sua cadência de contatos hoje?"
            placeholder="Você segue algum padrão de follow-up? Quantas tentativas faz antes de desistir de um lead?"
            rows={5}
          />
        </Card>
      </div>
    </div>
  );
}
