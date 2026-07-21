"use client";

import { useMemo } from "react";
import { useSectionField } from "@/context/ProgressoContext";
import { Card } from "@/components/ui/Card";

const SECTION_ID = "alvo-metas";

type Linha = {
  operadora: string;
  eficiencia: number | null;
  eficacia: number | null;
  vendido: number | null;
  faturado: number | null;
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
  vendido: null,
  faturado: null,
}));

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function ratio(numerator: number, denominator: number): number | null {
  if (!denominator) return null;
  return numerator / denominator;
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
      return [...arr, { operadora: "", eficiencia: null, eficacia: null, vendido: null, faturado: null }];
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
    const vendido = linhas.reduce((sum, l) => sum + (l.vendido ?? 0), 0);
    const faturado = linhas.reduce((sum, l) => sum + (l.faturado ?? 0), 0);
    return { eficiencia, eficacia, vendido, faturado };
  }, [linhas]);

  const metaReal = totais.faturado;
  const metaAtingida = metaIdeal > 0 && metaReal >= metaIdeal;

  async function handleDownloadPdf() {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Metas — Método A.R.M.", 20, 20);

    doc.setFontSize(10);
    let y = 34;
    doc.text("Operadora / Eficiência / Eficácia / Ticket Médio / Alavanca / Vendido / Faturado", 20, y);
    y += 8;

    linhas.forEach((l) => {
      const ticketMedio = ratio(l.faturado ?? 0, l.eficacia ?? 0);
      const alavanca = ratio(l.eficiencia ?? 0, l.eficacia ?? 0);
      const linha = `${l.operadora || "-"} / ${l.eficiencia ?? 0} / ${l.eficacia ?? 0} / ${
        ticketMedio !== null ? formatBRL(ticketMedio) : "-"
      } / ${alavanca !== null ? alavanca.toFixed(1) : "-"} / ${formatBRL(l.vendido ?? 0)} / ${formatBRL(
        l.faturado ?? 0
      )}`;
      doc.text(linha, 20, y);
      y += 7;
    });

    y += 6;
    doc.setFontSize(12);
    doc.text(`Meta Ideal: ${formatBRL(metaIdeal)}`, 20, y);
    y += 8;
    doc.text(`Meta Real: ${formatBRL(metaReal)}`, 20, y);

    doc.save("metas-metodo-arm.pdf");
  }

  return (
    <div className="space-y-6">
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[800px]">
            <thead>
              <tr className="text-left text-xs text-muted uppercase tracking-wide border-b border-border">
                <th className="py-2 pr-3">Operadora</th>
                <th className="py-2 pr-3">Eficiência</th>
                <th className="py-2 pr-3">Eficácia</th>
                <th className="py-2 pr-3">Ticket Médio</th>
                <th className="py-2 pr-3">Alavanca</th>
                <th className="py-2 pr-3">Vendido (R$)</th>
                <th className="py-2 pr-3">Faturado (R$)</th>
                <th className="py-2 pr-3">Porcentagem</th>
                <th className="py-2" />
              </tr>
            </thead>
            <tbody>
              {linhas.map((linha, i) => {
                const ticketMedio = ratio(linha.faturado ?? 0, linha.eficacia ?? 0);
                const alavanca = ratio(linha.eficiencia ?? 0, linha.eficacia ?? 0);
                const porcentagem = metaIdeal > 0 ? ((linha.faturado ?? 0) / metaIdeal) * 100 : null;

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
                    <td className="py-2 pr-3 text-muted">
                      {ticketMedio !== null ? formatBRL(ticketMedio) : "—"}
                    </td>
                    <td className="py-2 pr-3 text-muted">
                      {alavanca !== null ? alavanca.toFixed(1) : "—"}
                    </td>
                    <td className="py-2 pr-3">
                      <input
                        type="number"
                        value={linha.vendido ?? ""}
                        onChange={(e) =>
                          updateLinha(i, {
                            vendido: e.target.value === "" ? null : Number(e.target.value),
                          })
                        }
                        className="w-24 bg-background border border-border rounded-lg px-2 py-1.5 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </td>
                    <td className="py-2 pr-3">
                      <input
                        type="number"
                        value={linha.faturado ?? ""}
                        onChange={(e) =>
                          updateLinha(i, {
                            faturado: e.target.value === "" ? null : Number(e.target.value),
                          })
                        }
                        className="w-24 bg-background border border-border rounded-lg px-2 py-1.5 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </td>
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
                <td className="py-2 pr-3 text-muted">
                  {ratio(totais.faturado, totais.eficacia) !== null
                    ? formatBRL(ratio(totais.faturado, totais.eficacia)!)
                    : "—"}
                </td>
                <td className="py-2 pr-3 text-muted">
                  {ratio(totais.eficiencia, totais.eficacia) !== null
                    ? ratio(totais.eficiencia, totais.eficacia)!.toFixed(1)
                    : "—"}
                </td>
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
