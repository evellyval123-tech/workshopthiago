import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { TextAreaField } from "@/components/fields/TextAreaField";

const BLOCOS = [
  "Reunião matinal — alinhamento do dia, metas e prioridades",
  "Prospecção — bloco dedicado a gerar novos contatos",
  "Tratamento de leads — resposta e qualificação dos leads em aberto",
  "Relacionamento/indicação — contato com a base e pedido de indicação",
  "Fechamento do dia — revisão do funil e planejamento do dia seguinte",
];

export default function RotinaDiariaPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Rota"
        title="Rotina do Trabalho Diário"
        description="O esqueleto de uma rotina comercial consistente."
      />

      <div className="space-y-6">
        <Card>
          <ol className="space-y-3">
            {BLOCOS.map((bloco, i) => (
              <li key={bloco} className="flex gap-3 text-sm">
                <span className="text-accent-bright font-display font-bold shrink-0">
                  {i + 1}
                </span>
                <span className="text-muted">{bloco}</span>
              </li>
            ))}
          </ol>
        </Card>

        <Card>
          <TextAreaField
            sectionId="rota-rotina"
            fieldKey="rotina_atual"
            label="Como é a sua rotina hoje, na prática?"
            placeholder="Descreva um dia de trabalho real, do jeito que ele acontece hoje — não como você gostaria que fosse."
            rows={6}
          />
        </Card>
      </div>
    </div>
  );
}
