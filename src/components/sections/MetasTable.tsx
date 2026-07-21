"use client";

import { useMemo } from "react";
import { useSectionField } from "@/context/ProgressoContext";
import { Card } from "@/components/ui/Card";

const SECTION_ID = "alvo-metas";

type Linha = {
  operadora: string;
  eficiencia: number | null;
  eficacia: number | null;
  ticketMedio: number | null;
  alavanca: number | null;
};

const LINHAS_PADRAO: Linha[] = [
  "Unimed",
  "Hapvida",
  "Sulamérica",
  "Humana",
  "Bradesco",
].map((operadora) => ({
  operadora,
  eficiencia: null,
  eficacia: null,
  ticketMedio: null,
  alavanca: null,
}));

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function average(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}

/** Vendido = Ticket Médio × Eficácia. Faturado = Vendido × Alavanca. */
function vendidoDe(linha: Linha): number {
  return (linha.ticketMedio ?? 0) * (linha.eficacia ?? 0);
}
function faturadoDe(linha: Linha): number {
  return vendidoDe(linha) * (linha.alavanca ?? 0);
}

export function MetasTable() {
  const [linhasRaw, setLinhas] = useSectionField(SECTION_ID, "linhas");
  const [metaIdealRaw, setMetaIdeal] = useSectionField(SECTION_ID, "meta_ideal");

  const linhas: Linha[] = Array.isArray(linhasRaw) ? (linhasRaw as Linha[]) : LINHAS_PADRAO;
  const metaIdeal = typeof metaIdealRaw === "number" ? metaIdealRaw : 0;

  function updateLinha(index: number, patch: Partial<Linha>) {
    setLinhas((prev: unknown) => {
      const arr = Array.isArray(prev) ? (prev as Linha[]) : LINHAS_PADRAO;
      return arr.map((linha, i) => (i === index ? { ...linha, ...patch } : linha));
    });
  }

  function addLinha() {
    setLinhas((prev: unknown) => {
      const arr = Array.isArray(prev) ? (prev as Linha[]) : LINHAS_PADRAO;
      return [
        ...arr,
        { operadora: "", eficiencia: null, eficacia: null, ticketMedio: null, alavanca: null },
      ];
    });
  }

  function removeLinha(index: number) {
    setLinhas((prev: unknown) => {
      const arr = Array.isArray(prev) ? (prev as Linha[]) : LINHAS_PADRAO;
      return arr.filter((_, i) => i !== index);
    });
  }

  const totais = useMemo(() => {
    const eficiencia = linhas.reduce((sum, l) => sum + (l.eficiencia ?? 0), 0);
    const eficacia = linhas.reduce((sum, l) => sum + (l.eficacia ?? 0), 0);
    const ticketMedio = average(
      linhas.map((l) => l.ticketMedio).filter((v): v is number => typeof v === "number")
    );
    const alavanca = average(
      linhas.map((l) => l.alavanca).filter((v): v is number => typeof v === "number")
    );
    const vendido = ticketMedio * eficacia;
    const faturado = vendido * alavanca;
    return { eficiencia, eficacia, ticketMedio, alavanca, vendido, faturado };
  }, [linhas]);

  const metaReal = linhas.reduce((sum, l) => sum + faturadoDe(l), 0);
  const metaAtingida = metaIdeal > 0 && metaReal >= metaIdeal;

  async function handleDownloadPdf() {
    const { jsPDF } = await import("jspdf");
    const autoTable = (await import("jspdf-autotable")).default;

    const BG: [number, number, number] = [7, 20, 15]; // --background
    const SURFACE: [number, number, number] = [14, 36, 29]; // --surface
    const BORDER: [number, number, number] = [23, 54, 42]; // --border
    const FOREGROUND: [number, number, number] = [234, 246, 241]; // --foreground
    const MUTED: [number, number, number] = [143, 179, 166]; // --muted
    const ACCENT_BRIGHT: [number, number, number] = [0, 255, 196]; // --accent-bright

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    doc.setFillColor(...BG);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    doc.setTextColor(...MUTED);
    doc.setFontSize(10);
    doc.text("CORRETORAS DO AMANHÃ", 14, 16);

    doc.setTextColor(...FOREGROUND);
    doc.setFontSize(20);
    doc.text("Metas — Método A.R.M.", 14, 27);

    autoTable(doc, {
      startY: 34,
      head: [["Operadora", "Eficiência", "Eficácia", "Ticket Médio", "Alavanca", "Vendido", "Faturado", "%"]],
      body: linhas.map((l) => [
        l.operadora || "-",
        String(l.eficiencia ?? 0),
        String(l.eficacia ?? 0),
        formatBRL(l.ticketMedio ?? 0),
        String(l.alavanca ?? 0),
        formatBRL(vendidoDe(l)),
        formatBRL(faturadoDe(l)),
        metaIdeal > 0 ? `${((faturadoDe(l) / metaIdeal) * 100).toFixed(2)}%` : "—",
      ]),
      foot: [[
        "TOTAL",
        String(totais.eficiencia),
        String(totais.eficacia),
        formatBRL(totais.ticketMedio),
        totais.alavanca.toFixed(1),
        formatBRL(totais.vendido),
        formatBRL(totais.faturado),
        metaIdeal > 0 ? `${((totais.faturado / metaIdeal) * 100).toFixed(2)}%` : "—",
      ]],
      theme: "grid",
      styles: {
        fillColor: SURFACE,
        textColor: FOREGROUND,
        lineColor: BORDER,
        lineWidth: 0.1,
        fontSize: 9,
      },
      headStyles: { fillColor: BORDER, textColor: ACCENT_BRIGHT, fontStyle: "bold" },
      footStyles: { fillColor: BORDER, textColor: ACCENT_BRIGHT, fontStyle: "bold" },
      margin: { left: 14, right: 14 },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const finalY = (doc as any).lastAutoTable.finalY + 14;

    doc.setDrawColor(...BORDER);
    doc.setFillColor(...SURFACE);
    doc.roundedRect(14, finalY, pageWidth - 28, 26, 3, 3, "FD");

    doc.setFontSize(10);
    doc.setTextColor(...MUTED);
    doc.text("META IDEAL", 22, finalY + 10);
    doc.text("META REAL", pageWidth / 2 + 8, finalY + 10);

    doc.setFontSize(14);
    doc.setTextColor(...FOREGROUND);
    doc.text(formatBRL(metaIdeal), 22, finalY + 19);
    const RED: [number, number, number] = [248, 113, 113];
    doc.setTextColor(...(metaAtingida ? ACCENT_BRIGHT : RED));
    doc.text(formatBRL(metaReal), pageWidth / 2 + 8, finalY + 19);

    doc.save("metas-metodo-arm.pdf");
  }

  return (
    <div className="space-y-6">
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[860px]">
            <thead>
              <tr className="text-left text-xs text-muted uppercase tracking-wide border-b border-border">
                <th className="py-2 pr-3">Operadora</th>
                <th className="py-2 pr-3">Eficiência</th>
                <th className="py-2 pr-3">Eficácia</th>
                <th className="py-2 pr-3">Ticket Médio</th>
                <th className="py-2 pr-3">Alavanca</th>
                <th className="py-2 pr-3">Vendido</th>
                <th className="py-2 pr-3">Faturado</th>
                <th className="py-2 pr-3">Porcentagem</th>
                <th className="py-2" />
              </tr>
            </thead>
            <tbody>
              {linhas.map((linha, i) => {
                const vendido = vendidoDe(linha);
                const faturado = faturadoDe(linha);
                const porcentagem = metaIdeal > 0 ? (faturado / metaIdeal) * 100 : null;

                return (
                  <tr key={i} className="border-b border-border/60">
                    <td className="py-2 pr-3">
                      <input
                        type="text"
                        value={linha.operadora}
                        onChange={(e) => updateLinha(i, { operadora: e.target.value })}
                        placeholder="Operadora"
                        className="w-32 bg-background border border-border rounded-lg px-2 py-1.5 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </td>
                    <td className="py-2 pr-3">
                      <input
                        type="number"
                        value={linha.eficiencia ?? ""}
                        onChange={(e) =>
                          updateLinha(i, {
                            eficiencia: e.target.value === "" ? null : Number(e.target.value),
                          })
                        }
                        className="w-20 bg-background border border-border rounded-lg px-2 py-1.5 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </td>
                    <td className="py-2 pr-3">
                      <input
                        type="number"
                        value={linha.eficacia ?? ""}
                        onChange={(e) =>
                          updateLinha(i, {
                            eficacia: e.target.value === "" ? null : Number(e.target.value),
                          })
                        }
                        className="w-20 bg-background border border-border rounded-lg px-2 py-1.5 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </td>
                    <td className="py-2 pr-3">
                      <input
                        type="number"
                        value={linha.ticketMedio ?? ""}
                        onChange={(e) =>
                          updateLinha(i, {
                            ticketMedio: e.target.value === "" ? null : Number(e.target.value),
                          })
                        }
                        className="w-24 bg-background border border-border rounded-lg px-2 py-1.5 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </td>
                    <td className="py-2 pr-3">
                      <input
                        type="number"
                        value={linha.alavanca ?? ""}
                        onChange={(e) =>
                          updateLinha(i, {
                            alavanca: e.target.value === "" ? null : Number(e.target.value),
                          })
                        }
                        className="w-20 bg-background border border-border rounded-lg px-2 py-1.5 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </td>
                    <td className="py-2 pr-3 text-muted">{formatBRL(vendido)}</td>
                    <td className="py-2 pr-3 text-muted">{formatBRL(faturado)}</td>
                    <td className="py-2 pr-3 text-muted">
                      {porcentagem !== null ? `${porcentagem.toFixed(2)}%` : "—"}
                    </td>
                    <td className="py-2">
                      <button
                        onClick={() => removeLinha(i)}
                        className="text-muted hover:text-red-400 transition-colors"
                        aria-label="Remover linha"
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr className="font-semibold text-foreground">
                <td className="py-2 pr-3">TOTAL</td>
                <td className="py-2 pr-3">{totais.eficiencia}</td>
                <td className="py-2 pr-3">{totais.eficacia}</td>
                <td className="py-2 pr-3 text-muted">{formatBRL(totais.ticketMedio)}</td>
                <td className="py-2 pr-3 text-muted">{totais.alavanca.toFixed(1)}</td>
                <td className="py-2 pr-3">{formatBRL(totais.vendido)}</td>
                <td className="py-2 pr-3">{formatBRL(totais.faturado)}</td>
                <td className="py-2 pr-3">
                  {metaIdeal > 0 ? `${((totais.faturado / metaIdeal) * 100).toFixed(2)}%` : "—"}
                </td>
                <td className="py-2" />
              </tr>
            </tbody>
          </table>
        </div>

        <button
          onClick={addLinha}
          className="mt-4 text-sm text-accent-bright hover:underline"
        >
          + Adicionar operadora
        </button>
      </Card>

      <Card>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <label className="block">
            <span className="block text-sm font-medium text-foreground mb-2">Meta Ideal</span>
            <div className="flex items-center rounded-xl bg-background border border-border px-4 py-3 focus-within:ring-2 focus-within:ring-accent">
              <span className="text-muted mr-2">R$</span>
              <input
                type="number"
                className="w-full bg-transparent text-foreground focus:outline-none"
                placeholder="15000"
                value={metaIdeal || ""}
                onChange={(e) => setMetaIdeal(e.target.value === "" ? null : Number(e.target.value))}
              />
            </div>
          </label>

          <div>
            <span className="block text-sm font-medium text-foreground mb-2">Meta Real</span>
            <div
              className={`rounded-xl border px-4 py-3 font-semibold ${
                metaAtingida
                  ? "bg-accent/15 border-accent text-accent-bright"
                  : "bg-red-500/10 border-red-500/40 text-red-400"
              }`}
            >
              {formatBRL(metaReal)}
            </div>
          </div>
        </div>

        <button
          onClick={handleDownloadPdf}
          className="rounded-xl bg-accent hover:bg-accent-bright hover:text-background text-background font-semibold px-5 py-3 transition-colors"
        >
          Baixar PDF desta aba
        </button>
      </Card>
    </div>
  );
}
