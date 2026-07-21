import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { TextAreaField } from "@/components/fields/TextAreaField";

export default function InicioDorPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Início"
        title="Qual é a sua maior dor vendendo planos hoje?"
        description="Responda com sinceridade — isso vira o ponto de partida do seu método."
      />

      <Card>
        <TextAreaField
          sectionId="inicio-dor"
          fieldKey="dor_principal"
          label=""
          placeholder="Em uma frase, qual é a sua maior dificuldade hoje?"
          rows={5}
        />
      </Card>
    </div>
  );
}
