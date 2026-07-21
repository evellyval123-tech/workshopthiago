import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export default function ConstruaUmMovimentoPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Mira"
        title="Construa um Movimento"
        description="Encontre uma causa. Construa uma narrativa. Lute contra um inimigo. Apresente um herói."
      />

      <Card>
        <p className="font-semibold text-foreground mb-1">Sua causa</p>
        <p className="text-sm text-muted">
          Corretor que vende plano de saúde não vende apólice — vende proteção pra família do
          cliente.
        </p>
      </Card>
    </div>
  );
}
