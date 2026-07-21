import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { TextAreaField } from "@/components/fields/TextAreaField";

export default function PosicionamentoPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Alvo"
        title="Posicionamento"
        description="A identidade e o diferencial que fazem alguém escolher você em vez de qualquer outro corretor."
      />

      <Card>
        <TextAreaField
          sectionId="alvo-posicionamento"
          fieldKey="posicionamento"
          label="Como você se posiciona no mercado? O que te torna diferente?"
          placeholder="Ex: sou o corretor especialista em famílias que estão saindo do plano empresarial e precisam de um individual sem perder cobertura."
          rows={6}
        />
      </Card>
    </div>
  );
}
