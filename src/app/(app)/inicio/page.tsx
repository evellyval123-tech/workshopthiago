import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export default function InicioAberturaPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Início"
        title="A Máquina de Vender Planos"
        description="Se você não sabe o que faz pra vender, você não sabe vender."
      />

      <Card>
        <h2 className="text-lg font-semibold text-foreground mb-3">Por que isso importa</h2>
        <p className="text-muted leading-relaxed">
          A maioria dos corretores vende no feeling: liga, manda mensagem, espera o lead
          responder. Quem tem um método sabe exatamente o próximo passo — e por isso vende mais,
          com menos esforço.
        </p>
      </Card>
    </div>
  );
}
