import { SectionHeader } from "@/components/ui/SectionHeader";
import { MetasForm } from "@/components/sections/MetasForm";

export default function MetasPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Alvo"
        title="Metas"
        description="A partir do seu ticket médio e da sua taxa de fechamento, calculamos exatamente quantas vendas e leads você precisa por mês."
      />
      <MetasForm />
    </div>
  );
}
