import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export default function ConstruaUmMovimentoPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Mira"
        title="Construa um Movimento"
        description="Método vira movimento quando tem causa, narrativa, inimigo e herói."
      />

      <div className="space-y-4">
        <Card>
          <p className="font-semibold text-foreground mb-1">Causa</p>
          <p className="text-sm text-muted">
            O motivo maior por trás da sua venda — não é &ldquo;vender plano&rdquo;, é garantir
            que famílias não fiquem desamparadas na hora que mais precisam.
          </p>
        </Card>
        <Card>
          <p className="font-semibold text-foreground mb-1">Narrativa</p>
          <p className="text-sm text-muted">
            A história que você conta sobre por que faz o que faz — o que te trouxe até aqui e
            por que isso importa pro seu cliente.
          </p>
        </Card>
        <Card>
          <p className="font-semibold text-foreground mb-1">Inimigo</p>
          <p className="text-sm text-muted">
            Aquilo que seu método combate: a venda sem método, o corretor que some depois do
            fechamento, o plano errado empurrado pelo caminho mais fácil.
          </p>
        </Card>
        <Card>
          <p className="font-semibold text-foreground mb-1">Herói</p>
          <p className="text-sm text-muted">
            O cliente é o herói da história — você é o guia que garante que ele tome a decisão
            certa.
          </p>
        </Card>
      </div>
    </div>
  );
}
