import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { TextAreaField } from "@/components/fields/TextAreaField";

export default function InicioPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Início"
        title="A Máquina de Vender Planos"
        description="Se você não sabe o que faz pra vender, você não sabe vender."
      />

      <div className="space-y-6">
        <Card>
          <h2 className="text-lg font-semibold text-foreground mb-3">O essencial da venda</h2>
          <p className="text-muted leading-relaxed">
            Toda venda consistente segue uma ordem. Primeiro vem o{" "}
            <strong className="text-foreground">Método</strong> — o jeito repetível que você
            usa pra vender. Depois o <strong className="text-foreground">Cliente</strong> — pra
            quem esse método é direcionado. Só então o{" "}
            <strong className="text-foreground">Produto</strong> — o que você efetivamente
            vende. Corretor que inverte essa ordem — sai vendendo produto sem método nem cliente
            definido — vende por sorte, não por processo.
          </p>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            O Método A.R.M. — visão geral
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-background border border-border p-4">
              <p className="text-accent-bright font-display font-bold mb-1">Alvo</p>
              <p className="text-sm text-muted">Pra quem você vende e o que você vende.</p>
            </div>
            <div className="rounded-xl bg-background border border-border p-4">
              <p className="text-accent-bright font-display font-bold mb-1">Rota</p>
              <p className="text-sm text-muted">Como você chega até o cliente, todo dia.</p>
            </div>
            <div className="rounded-xl bg-background border border-border p-4">
              <p className="text-accent-bright font-display font-bold mb-1">Mira</p>
              <p className="text-sm text-muted">O que garante a sua consistência.</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Qual é a sua maior dor vendendo planos hoje?
          </h2>
          <TextAreaField
            sectionId="inicio"
            fieldKey="maior_dor"
            label=""
            placeholder="Escreva livremente. Isso vai te ajudar a enxergar onde o seu método precisa ser mais forte."
            rows={5}
          />
        </Card>
      </div>
    </div>
  );
}
