import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { TextAreaField } from "@/components/fields/TextAreaField";
import { RadioGroupField } from "@/components/fields/RadioGroupField";
import { CLIENTE_MOMENTOS } from "@/lib/fieldOptions";

export default function ClienteIdealPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Alvo"
        title="Cliente Ideal — pra quem você vende?"
        description="Público-alvo → Persona → Cliente Ideal. Quanto mais fundo, menos energia desperdiçada com lead errado."
      />

      <div className="space-y-6">
        <Card>
          <TextAreaField
            sectionId="alvo-cliente-ideal"
            fieldKey="cliente_dor_regiao"
            label="Dor + região: qual problema você resolve, e onde?"
            placeholder="Ex: famílias que perderam o plano empresarial, na zona sul de SP..."
            rows={5}
          />
        </Card>

        <Card>
          <RadioGroupField
            sectionId="alvo-cliente-ideal"
            fieldKey="cliente_momento"
            label="Seu cliente ideal hoje..."
            options={CLIENTE_MOMENTOS}
          />
        </Card>
      </div>
    </div>
  );
}
