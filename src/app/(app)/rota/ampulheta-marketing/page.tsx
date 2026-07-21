import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { TextAreaField } from "@/components/fields/TextAreaField";

const ETAPAS = [
  {
    key: "amp_consciencia",
    label: "Consciência: como as pessoas descobrem que você existe?",
  },
  {
    key: "amp_desejo",
    label: "Desejo: por que elas quereriam falar com você, e não com outro corretor?",
  },
  {
    key: "amp_recompensa",
    label: "Recompensa: o que acontece quando elas fecham com você?",
  },
  {
    key: "amp_retencao",
    label: "Retenção: o que você faz pra manter o cliente satisfeito depois da venda?",
  },
  {
    key: "amp_engajamento",
    label: "Engajamento: como você mantém contato ao longo do ano (não só na renovação)?",
  },
  {
    key: "amp_recomendacao",
    label: "Recomendação: o que faz um cliente te indicar pra alguém?",
  },
];

export default function AmpulhetaMarketingPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Rota"
        title="Ampulheta do Marketing"
        description="Consciência → Desejo → Recompensa → Retenção → Engajamento → Recomendação."
      />

      <div className="space-y-6">
        {ETAPAS.map((etapa) => (
          <Card key={etapa.key}>
            <TextAreaField
              sectionId="rota-ampulheta"
              fieldKey={etapa.key}
              label={etapa.label}
              rows={3}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
