import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { TextAreaField } from "@/components/fields/TextAreaField";
import { RadioGroupField } from "@/components/fields/RadioGroupField";
import { CADENCIA_AUTOMATIZA } from "@/lib/fieldOptions";
import { CadenciaTimeline } from "@/components/sections/CadenciaTimeline";

export default function CadenciaContatosPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Rota"
        title="Cadência de Contatos"
        description="Lead que não recebe follow-up não vira venda — ele só esfria. Cadência é decidir, antes, quantas vezes e quando você vai insistir."
      />

      <div className="space-y-6">
        <CadenciaTimeline />

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
