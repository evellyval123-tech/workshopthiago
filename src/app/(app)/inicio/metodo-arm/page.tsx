import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export default function InicioMetodoArmPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Início"
        title="O Método A.R.M."
        description="Alvo, Rota e Mira — o raciocínio por trás de todo corretor que vende com consistência."
      />

      <Card>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-background border border-border p-4">
            <p className="text-accent-bright font-display font-bold mb-1">Alvo</p>
            <p className="text-sm text-muted">
              Pra quem e o quê você vende: posicionamento, produtos, cliente ideal, metas.
            </p>
          </div>
          <div className="rounded-xl bg-background border border-border p-4">
            <p className="text-accent-bright font-display font-bold mb-1">Rota</p>
            <p className="text-sm text-muted">
              Como você chega até esse cliente, todo dia: geração de demanda, jornada comercial,
              rotina.
            </p>
          </div>
          <div className="rounded-xl bg-background border border-border p-4">
            <p className="text-accent-bright font-display font-bold mb-1">Mira</p>
            <p className="text-sm text-muted">
              O que garante consistência: tecnologia, automação e mentalidade.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
