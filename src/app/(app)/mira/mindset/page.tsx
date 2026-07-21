import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export default function MindsetPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Mira"
        title="Mindset de Alta Performance"
        description="A postura que sustenta o método quando ele fica difícil de seguir."
      />

      <div className="space-y-4">
        <Card>
          <p className="font-semibold text-foreground mb-1">Autorresponsabilidade</p>
          <p className="text-sm text-muted">
            Resultado ruim não é sobre o mercado, a região ou o cliente — é sobre o que você fez
            ou deixou de fazer dentro do seu método. Só quem assume isso consegue ajustar a rota.
          </p>
        </Card>
        <Card>
          <p className="font-semibold text-foreground mb-1">Foco na jornada</p>
          <p className="text-sm text-muted">
            Um &ldquo;não&rdquo; não é o fim — é uma etapa da Jornada Comercial. Corretor de alta
            performance
            olha pro processo inteiro, não só pro fechamento.
          </p>
        </Card>
        <Card>
          <p className="font-semibold text-foreground mb-1">Postura de consultor</p>
          <p className="text-sm text-muted">
            Você não empurra plano — você diagnostica a necessidade do cliente e recomenda a
            solução certa. Essa postura é o que sustenta indicação de verdade.
          </p>
        </Card>
      </div>
    </div>
  );
}
