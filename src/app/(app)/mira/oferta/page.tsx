import { SectionHeader } from "@/components/ui/SectionHeader";

const ITENS = [
  {
    nome: "Agente do Amanhã",
    descricao: "IA direta no teu WhatsApp",
    preco: "R$ 997,00",
    periodo: "ANUAL",
  },
  {
    nome: "Indicação 4.0",
    descricao: "Controle das indicações",
    preco: "R$ 997,00",
    periodo: "ANUAL",
  },
  {
    nome: "WhatsApp Prime",
    descricao: "WhatsApp Web turbinado",
    preco: "R$ 997,00",
    periodo: "ANUAL",
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
            <div className="text-right sm:w-36 shrink-0">
              <p className="font-display font-bold text-lg text-foreground">{item.preco}</p>
              <p className="text-xs tracking-widest text-muted">{item.periodo}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center font-semibold text-foreground mt-8">
        Para os primeiros 20 inscritos
      </p>
    </div>
  );
}
