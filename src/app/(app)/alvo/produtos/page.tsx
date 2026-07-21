import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CheckboxGroupField } from "@/components/fields/CheckboxGroupField";
import { NICHOS } from "@/lib/fieldOptions";

export default function ProdutosPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Alvo"
        title="Produtos — crie nichos pra vender mais"
        description="A maioria dos corretores vende pra “todo mundo que aparecer” — e isso é o que mais mata a conversão."
      />

      <Card>
        <CheckboxGroupField
          sectionId="alvo-produtos"
          fieldKey="nichos"
          label="Quais nichos te dão o melhor resultado hoje?"
          options={NICHOS}
        />
      </Card>
    </div>
  );
}
