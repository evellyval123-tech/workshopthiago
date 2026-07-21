"use client";

import { useMemo } from "react";
import { NumberField } from "@/components/fields/NumberField";
import { useSectionField } from "@/context/ProgressoContext";
import { Card } from "@/components/ui/Card";

const SECTION_ID = "alvo-metas";

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function MetasForm() {
  const [faturamentoMeta] = useSectionField(SECTION_ID, "faturamento_meta");
  const [ticketMedio] = useSectionField(SECTION_ID, "ticket_medio");
  const [taxaFechamento] = useSectionField(SECTION_ID, "taxa_fechamento");

  const faturamento = typeof faturamentoMeta === "number" ? faturamentoMeta : 0;
  const ticket = typeof ticketMedio === "number" ? ticketMedio : 0;
  const taxa = typeof taxaFechamento === "number" ? taxaFechamento : 0;

  const { vendasNecessarias, leadsNecessarios } = useMemo(() => {
    const vendas = ticket > 0 ? faturamento / ticket : 0;
    const leads = taxa > 0 ? vendas / (taxa / 100) : 0;
    return { vendasNecessarias: vendas, leadsNecessarios: leads };
  }, [faturamento, ticket, taxa]);

  const canCalculate = faturamento > 0 && ticket > 0 && taxa > 0;

  async function handleDownloadPdf() {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Metas — Método A.R.M.", 20, 24);

    doc.setFontSize(11);
    let y = 40;
    const lines = [
      `Meta de faturamento mensal: ${formatBRL(faturamento)}`,
      `Ticket médio: ${formatBRL(ticket)}`,
      `Taxa de fechamento: ${taxa}%`,
      "",
      `Vendas necessárias por mês: ${vendasNecessarias.toFixed(1)}`,
      `Leads necessários por mês: ${leadsNecessarios.toFixed(1)}`,
    ];
    lines.forEach((line) => {
      doc.text(line, 20, y);
      y += 10;
    });

    doc.save("metas-metodo-arm.pdf");
  }

  return (
    <div className="space-y-6">
      <Card>
        <div className="grid sm:grid-cols-3 gap-4">
          <NumberField
            sectionId={SECTION_ID}
            fieldKey="faturamento_meta"
            label="Meta de faturamento mensal"
            prefix="R$"
            placeholder="20000"
          />
          <NumberField
            sectionId={SECTION_ID}
            fieldKey="ticket_medio"
            label="Ticket médio por venda"
            prefix="R$"
            placeholder="250"
          />
          <NumberField
            sectionId={SECTION_ID}
            fieldKey="taxa_fechamento"
            label="Taxa de fechamento"
            suffix="%"
            placeholder="20"
          />
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-foreground mb-4">O que você precisa fazer</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl bg-background border border-border p-4">
            <p className="text-xs text-muted uppercase tracking-wide mb-1">
              Vendas necessárias / mês
            </p>
            <p className="text-2xl font-display font-bold text-accent-bright">
              {canCalculate ? vendasNecessarias.toFixed(1) : "—"}
            </p>
          </div>
          <div className="rounded-xl bg-background border border-border p-4">
            <p className="text-xs text-muted uppercase tracking-wide mb-1">
              Leads necessários / mês
            </p>
            <p className="text-2xl font-display font-bold text-accent-bright">
              {canCalculate ? leadsNecessarios.toFixed(1) : "—"}
            </p>
          </div>
        </div>

        <button
          onClick={handleDownloadPdf}
          disabled={!canCalculate}
          className="rounded-xl bg-accent hover:bg-accent-bright hover:text-background text-background font-semibold px-5 py-3 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Baixar Metas em PDF
        </button>
      </Card>
    </div>
  );
}
