const PILARES = [
  {
    letra: "S",
    titulo: "Sistemas",
    subtitulo: "CRM, Gestão, Financeiro, Ativação",
    descricao: "O uso de sistema mantém a constância.",
  },
  {
    letra: "A",
    titulo: "Agentes",
    subtitulo: "IA Generativa",
    descricao: "Sua melhor amiga: trabalha por você e otimiza teus resultados.",
  },
  {
    letra: "A",
    titulo: "Automações",
    subtitulo: "Mensagens, Fluxos e MKT",
    descricao: "Reduz o atrito, dá velocidade e apoia a rotina.",
  },
];

export function TecnologiaPilares() {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {PILARES.map((pilar) => (
        <div
          key={pilar.titulo}
          className="rounded-xl bg-background border border-border p-4 flex flex-col items-start"
        >
          <span className="h-10 w-10 rounded-full bg-accent/15 border border-accent-bright text-accent-bright font-display font-bold flex items-center justify-center mb-3">
            {pilar.letra}
          </span>
          <p className="font-semibold text-foreground">{pilar.titulo}</p>
          <p className="text-xs text-muted uppercase tracking-wide mb-2">{pilar.subtitulo}</p>
          <p className="text-sm text-muted">{pilar.descricao}</p>
        </div>
      ))}
    </div>
  );
}
