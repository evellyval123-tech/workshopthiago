import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export default function CdaChatPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Mira"
        title="Tecnologia — CDA Chat"
        description="O corretor que usa tecnologia vai substituir o corretor que não usa. Aqui a tecnologia é o CRM que vive dentro do seu WhatsApp."
      />

      <div className="space-y-4">
        <Card>
          <p className="font-semibold text-foreground mb-1">O que é</p>
          <p className="text-sm text-muted">
            Uma extensão do WhatsApp Web com Kanban, ficha de cliente automática, etiquetas e
            métricas — tudo sem sair da conversa que você já teria de qualquer jeito.
          </p>
        </Card>
        <Card>
          <p className="font-semibold text-foreground mb-1">
            Exemplo — resposta pré-pronta com campo variável
          </p>
          <p className="text-sm text-muted">
            Cliente pergunta sobre carência pela quinta vez no dia. Em vez de digitar tudo de
            novo, você dispara uma resposta pronta que já puxa o nome e a idade daquele cliente
            específico, preenchidos automaticamente pela ficha dele.
          </p>
        </Card>
        <Card>
          <p className="font-semibold text-foreground mb-1">
            Exemplo — follow-up que não depende da sua memória
          </p>
          <p className="text-sm text-muted">
            Cliente pede pra falar amanhã. Você agenda ali mesmo, e a mensagem sai sozinha no
            horário certo — sem depender de você lembrar.
          </p>
        </Card>
        <Card>
          <p className="font-semibold text-foreground mb-1">Exemplo — visibilidade do funil</p>
          <p className="text-sm text-muted">
            O painel mostra quantos contatos estão em cada etapa do Kanban e quanto tempo cada um
            está parado ali.
          </p>
        </Card>
      </div>
    </div>
  );
}
