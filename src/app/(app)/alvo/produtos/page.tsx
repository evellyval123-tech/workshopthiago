import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CheckboxGroupField } from "@/components/fields/CheckboxGroupField";
import { NICHOS } from "@/lib/fieldOptions";

export default function ProdutosPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Alvo"
        title="Produtos"
        description="Em qual nicho de plano de saúde você concentra a sua venda?"
      />

      <Card>
        <CheckboxGroupField
          sectionId="alvo-produtos"
          fieldKey="nichos"
          label="Selecione um ou mais nichos"
          options={NICHOS}
        />
      </Card>
    </div>
  );
}
