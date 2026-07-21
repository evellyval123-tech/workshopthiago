import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { EsforcoMetodoDiagram } from "@/components/sections/EsforcoMetodoDiagram";

export default function InicioEssencialPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Início"
        title="O que é essencial no sucesso da venda?"
        description="Produto → Método → Cliente. Sem método no meio, a distância entre os dois vira esforço puro."
      />

      <Card className="mb-6">
        <EsforcoMetodoDiagram />
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-foreground mb-3">O erro mais comum</h2>
        <p className="text-muted leading-relaxed">
          Corretor foca no produto primeiro (a tabela, a operadora, o preço). O método vem antes:
          como você encontra, qualifica e conduz o cliente é o que decide se o produto certo
          chega até ele.
        </p>
      </Card>
    </div>
  );
}
