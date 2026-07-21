import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CheckboxGroupField } from "@/components/fields/CheckboxGroupField";
import { TextAreaField } from "@/components/fields/TextAreaField";
import { METRICAS } from "@/lib/fieldOptions";

export default function MedicaoResultadosPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Mira"
        title="Medição de Resultados"
        description="O que não é medido não é gerenciado."
      />

      <div className="space-y-6">
        <Card>
          <CheckboxGroupField
            sectionId="mira-medicao"
            fieldKey="metricas_hoje"
            label="Quais métricas você acompanha hoje?"
            options={METRICAS}
          />
        </Card>

        <Card>
          <TextAreaField
            sectionId="mira-medicao"
            fieldKey="mudanca_por_numero"
            label="Já teve algum número que fez você mudar de estratégia?"
            placeholder="Ex: percebi que minha taxa de no-show era 40% e passei a confirmar reunião no dia anterior..."
          />
        </Card>
      </div>
    </div>
  );
}
