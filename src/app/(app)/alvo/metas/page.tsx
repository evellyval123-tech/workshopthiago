import { SectionHeader } from "@/components/ui/SectionHeader";
import { MetasTable } from "@/components/sections/MetasTable";

export default function MetasPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Alvo"
        title="Metas — controle seus resultados"
        description="Preencha por operadora pra ver sua meta calculada automaticamente. Você pode baixar essa aba em PDF no final."
      />
      <MetasTable />
    </div>
  );
}
