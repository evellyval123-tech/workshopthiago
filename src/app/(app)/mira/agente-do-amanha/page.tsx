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

      <p className="text-sm text-muted mt-6">
        <span className="font-semibold text-foreground">Link:</span>{" "}
        <a
          href="https://agente.corretorasdoamanha.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-bright hover:underline"
        >
          Agente do Amanhã
        </a>
      </p>
    </div>
  );
}
