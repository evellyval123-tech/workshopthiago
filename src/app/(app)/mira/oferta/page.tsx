import { SectionHeader } from "@/components/ui/SectionHeader";

const ITENS = [
  {
    nome: "Agente do Amanhã",
    descricao: "IA de atendimento direto no teu WhatsApp",
  },
  {
    nome: "Indicador do Amanhã",
    descricao: "Controle das indicações",
  },
  {
    nome: "CDA Chat",
    descricao: "Extensão que integra CRM, funil e follow-up automático no seu WhatsApp Web",
  },
  {
    nome: "Mentoria mensal",
    descricao: "Encontro mensal pra revisar sua aplicação do método e destravar o próximo nível",
  },
];

export default function OfertaPage() {
  return (
    <div>
      <SectionHeader eyebrow="Próximo nível" title="Comunidade Corretoras do Amanhã" />

      <div className="space-y-4">
        {ITENS.map((item) => (
          <div
            key={item.nome}
            className="rounded-2xl border border-accent-bright/40 bg-surface px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
          >
            <p className="font-display font-bold text-foreground sm:w-48 shrink-0">{item.nome}</p>
            <p className="text-muted flex-1">{item.descricao}</p>
          </div>
        ))}
      </div>

      <p className="text-center font-display font-bold text-xl text-foreground mt-8">
        6 meses por R$ 97,00 o mês, para os primeiros 20 inscritos
      </p>
    </div>
  );
}
