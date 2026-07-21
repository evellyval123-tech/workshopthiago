import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export default function MindsetPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Mira"
        title="Mindset de Alta Performance"
        description="A mentalidade que separa amadores de profissionais."
      />

      <div className="space-y-4">
        <Card>
          <p className="font-semibold text-foreground mb-1">Autorresponsabilidade</p>
          <p className="text-sm text-muted">Você é o único responsável pelos seus resultados.</p>
        </Card>
        <Card>
          <p className="font-semibold text-foreground mb-1">Foco na jornada</p>
          <p className="text-sm text-muted">
            Construa uma carteira sólida, não apenas vendas pontuais.
          </p>
        </Card>
        <Card>
          <p className="font-semibold text-foreground mb-1">Postura de consultor</p>
          <p className="text-sm text-muted">Não peça favores, ofereça soluções.</p>
        </Card>
      </div>
    </div>
  );
}
