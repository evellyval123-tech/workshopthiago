import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CheckboxGroupField } from "@/components/fields/CheckboxGroupField";
import { TextAreaField } from "@/components/fields/TextAreaField";
import { CANAIS } from "@/lib/fieldOptions";

export default function GeracaoDemandaPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Rota"
        title="Geração de Demanda — nunca fique sem leads"
        description="De onde vieram seus últimos 10 leads? Se a resposta for “indicação, mas eu não fiz nada pra isso acontecer”, esse é o seu maior buraco."
      />

      <div className="space-y-6">
        <Card>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            O Flywheel do Sistema de Indicação
          </h2>
          <p className="text-muted leading-relaxed">
            Três pessoas, um ciclo que se autoalimenta: o <strong className="text-foreground">Corretor</strong> atende
            um <strong className="text-foreground">Lead</strong> que chegou através de um{" "}
            <strong className="text-foreground">Indicador</strong>. Se esse atendimento for bom,
            o Lead vira cliente — e o cliente satisfeito vira o próximo Indicador. O corretor não
            precisa gerar demanda do zero toda semana: ele estrutura o ciclo pra que a própria
            carteira produza os próximos leads.
          </p>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Por que a maioria não faz isso de propósito
          </h2>
          <p className="text-muted leading-relaxed">
            Corretor pede indicação de forma genérica (&ldquo;me indica alguém aí&rdquo;) e não
            acompanha quem indicou nem recompensa quem trouxe um lead bom. Sem registro, sem
            recompensa, o ciclo não gira sozinho — depende da sorte.
          </p>
        </Card>

        <Card>
          <CheckboxGroupField
            sectionId="rota-geracao-demanda"
            fieldKey="canais_hoje"
            label="Quais canais você já usa hoje?"
            options={CANAIS}
          />
        </Card>

        <Card>
          <TextAreaField
            sectionId="rota-geracao-demanda"
            fieldKey="gargalo_funil"
            label="Em qual etapa da jornada comercial você mais perde cliente hoje?"
          />
        </Card>

        <Card>
          <TextAreaField
            sectionId="rota-geracao-demanda"
            fieldKey="indicacao_hoje"
            label="Hoje, quando um cliente te indica alguém, o que você faz pra reconhecer isso?"
          />
        </Card>
      </div>
    </div>
  );
}
