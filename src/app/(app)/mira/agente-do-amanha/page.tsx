import { SectionHeader } from "@/components/ui/SectionHeader";
import { AgenteFeatureRows } from "@/components/sections/AgenteFeatureRows";

export default function AgenteDoAmanhaPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Mira"
        title="Automação — Agente do Amanhã"
        description="Automação não é sobre substituir você — é sobre garantir que nenhum lead espere."
      />

      <AgenteFeatureRows />
    </div>
  );
}
