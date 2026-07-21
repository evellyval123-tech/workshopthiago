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
        title="Medição dos Resultados"
        description="Você não melhora o que não mede. A calibragem da mira depende de olhar pro número certo, não pro “sinto que tá indo bem”."
      />

      <div className="space-y-6">
        <Card>
          <h2 className="text-lg font-semibold text-foreground mb-3">O que vale medir</h2>
          <p className="text-muted leading-relaxed">
            Taxa de conversão por etapa do funil, valor total em negociação, quantos contatos
            estão parados em cada fase do Kanban, e quanto tempo em média um lead leva do primeiro
            contato até o fechamento.
          </p>
        </Card>

        <Card>
          <CheckboxGroupField
            sectionId="mira-medicao"
            fieldKey="metricas_hoje"
            label="Quais dessas você acompanha hoje, de alguma forma?"
            options={METRICAS}
          />
        </Card>

        <Card>
          <TextAreaField
            sectionId="mira-medicao"
            fieldKey="metrica_decisao"
            label="Da última vez que você olhou um número do seu funil, o que você mudou por causa dele?"
          />
        </Card>
      </div>
    </div>
  );
}
