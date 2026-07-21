import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { TextAreaField } from "@/components/fields/TextAreaField";

export default function PosicionamentoPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Alvo"
        title="Posicionamento"
        description="Segurança vem do que você transmite: clareza, consistência e condução."
      />

      <Card>
        <TextAreaField
          sectionId="alvo-posicionamento"
          fieldKey="identidade"
          label="Qual a sua identidade? Por que fecham com você e não com o concorrente ou direto na operadora?"
          placeholder="Descreva o que te diferencia de verdade."
          rows={6}
        />
      </Card>
    </div>
  );
}
