import { SectionHeader } from "@/components/ui/SectionHeader";
import { AgenteFeatureRows } from "@/components/sections/AgenteFeatureRows";

export default function AgenteDoAmanhaPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Mira"
        title="Automação — Agente do Amanhã"
        description="Nenhum lead deveria esperar você abrir o WhatsApp. A automação garante isso, 24 horas por dia."
      />

      <AgenteFeatureRows />
    </div>
  );
}
