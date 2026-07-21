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
        title="Geração de Demanda"
        description="O Flywheel do Sistema de Indicação."
      />

      <div className="space-y-6">
        <Card>
          <p className="text-muted leading-relaxed">
            O corretor atende um <strong className="text-foreground">Lead</strong> que veio de um{" "}
            <strong className="text-foreground">Indicador</strong>. Esse lead, satisfeito com o
            atendimento, vira um novo indicador — e indica outras pessoas. O ciclo se
            autoalimenta: quanto melhor o atendimento, mais indicações genuínas ele gera, sem
            depender só de prospecção fria todo mês.
          </p>
        </Card>

        <Card>
          <CheckboxGroupField
            sectionId="rota-geracao-demanda"
            fieldKey="canais_hoje"
            label="Quais canais você usa hoje para gerar demanda?"
            options={CANAIS}
          />
        </Card>

        <Card>
          <TextAreaField
            sectionId="rota-geracao-demanda"
            fieldKey="gargalo_funil"
            label="Onde está o maior gargalo do seu funil hoje?"
            placeholder="Ex: tenho leads mas não converto em reunião..."
          />
        </Card>

        <Card>
          <TextAreaField
            sectionId="rota-geracao-demanda"
            fieldKey="acao_indicacao"
            label="O que você faz hoje quando recebe uma indicação?"
            placeholder="Descreva o passo a passo real, do jeito que acontece hoje."
          />
        </Card>
      </div>
    </div>
  );
}
