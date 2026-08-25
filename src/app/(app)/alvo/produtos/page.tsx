import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { NichoIconGrid } from "@/components/sections/NichoIconGrid";

export default function ProdutosPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Alvo"
        title="Produtos — crie nichos pra vender mais"
        description="A maioria dos corretores vende pra “todo mundo que aparecer”, e isso é o que mais mata a conversão."
      />

      <Card>
        <NichoIconGrid />
      </Card>
    </div>
  );
}
