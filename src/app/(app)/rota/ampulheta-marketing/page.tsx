import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { TextAreaField } from "@/components/fields/TextAreaField";

const ETAPAS = [
  {
    key: "consciencia",
    label: "Consciência",
    placeholder: "Como as pessoas descobrem que você existe?",
  },
  {
    key: "desejo",
    label: "Desejo",
    placeholder: "O que faz alguém querer falar com você especificamente?",
  },
  {
    key: "recompensa",
    label: "Recompensa",
    placeholder: "O que o cliente sente que ganhou ao fechar com você?",
  },
  {
    key: "retencao",
    label: "Retenção",
    placeholder: "O que você faz pra manter esse cliente satisfeito depois da venda?",
  },
  {
    key: "engajamento",
    label: "Engajamento",
    placeholder: "Como você mantém contato com quem já é cliente?",
  },
  {
    key: "recomendacao",
    label: "Recomendação",
    placeholder: "Como você pede (ou facilita) a indicação?",
  },
];

export default function AmpulhetaMarketingPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Rota"
        title="Ampulheta do Marketing"
        description="Uma pergunta por etapa — da primeira vez que alguém ouve falar de você até o momento em que ele te indica pra outra pessoa."
      />

      <div className="space-y-6">
        {ETAPAS.map((etapa) => (
          <Card key={etapa.key}>
            <TextAreaField
              sectionId="rota-ampulheta"
              fieldKey={etapa.key}
              label={etapa.label}
              placeholder={etapa.placeholder}
              rows={3}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
