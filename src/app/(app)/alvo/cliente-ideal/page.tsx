import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { TextAreaField } from "@/components/fields/TextAreaField";
import { RadioGroupField } from "@/components/fields/RadioGroupField";
import { MOMENTOS } from "@/lib/fieldOptions";

export default function ClienteIdealPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Alvo"
        title="Cliente Ideal"
        description="Quem é a pessoa que seu método atende melhor?"
      />

      <div className="space-y-6">
        <Card>
          <TextAreaField
            sectionId="alvo-cliente-ideal"
            fieldKey="dor_regiao"
            label="Qual a principal dor do seu cliente ideal e em qual região ele está?"
            placeholder="Ex: famílias em bairros de classe média em SP preocupadas com o custo crescente do plano..."
            rows={5}
          />
        </Card>

        <Card>
          <RadioGroupField
            sectionId="alvo-cliente-ideal"
            fieldKey="momento_decisao"
            label="Em que momento ele decide contratar?"
            options={MOMENTOS}
          />
        </Card>
      </div>
    </div>
  );
}
