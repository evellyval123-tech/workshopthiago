import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { TextAreaField } from "@/components/fields/TextAreaField";
import { RadioGroupField } from "@/components/fields/RadioGroupField";
import { ROTINA_BLOCOS } from "@/lib/fieldOptions";

const BLOCOS = [
  "Reunião matinal (revisão do dia anterior e planejamento)",
  "Prospecção (primeiro bloco, contatos novos)",
  "Tratamento de leads (quem já está em conversa)",
  "Revisão de resultados",
  "Relacionamento com a carteira (aqui é onde você pede e acompanha indicação)",
  "Segundo bloco de prospecção e tratamento",
  "Fechamento do dia, com revisão do CRM",
];

export default function RotinaDiariaPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Rota"
        title="Rotina do Trabalho Diário"
        description="Método sem rotina é intenção. A diferença entre corretor que cresce e corretor que estagna geralmente está no que ele faz entre 8h e 18h, todo dia — não só quando “dá vontade”."
      />

      <div className="space-y-6">
        <Card>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Um esqueleto de rotina que funciona
          </h2>
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
            fieldKey="rotina_hoje"
            label="Como está distribuído o seu dia hoje?"
            rows={6}
          />
        </Card>

        <Card>
          <RadioGroupField
            sectionId="rota-rotina"
            fieldKey="rotina_bloco_falta"
            label="Qual bloco você mais pula ou esquece?"
            options={ROTINA_BLOCOS}
          />
        </Card>
      </div>
    </div>
  );
}
