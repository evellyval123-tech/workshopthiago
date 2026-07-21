"use client";

import Link from "next/link";
import { useProgresso } from "@/context/ProgressoContext";
import { Card } from "@/components/ui/Card";
import { CLUSTER_LABELS, sectionsByCluster, type Cluster } from "@/lib/sections";
import { RESUMO_FIELDS, formatFieldValue } from "@/lib/resumoFields";

const PILARES: Cluster[] = ["alvo", "rota", "mira"];

export function ResumoMetodo() {
  const { answers } = useProgresso();

  return (
    <div className="space-y-10">
      {PILARES.map((cluster) => {
        const sections = sectionsByCluster(cluster).filter((s) => s.hasForm);

        return (
          <div key={cluster}>
            <h2 className="font-display text-2xl font-bold text-accent-bright mb-4">
              {CLUSTER_LABELS[cluster]}
            </h2>

            <div className="space-y-4">
              {sections.map((section) => {
                const fields = RESUMO_FIELDS[section.id] ?? [];
                const sectionAnswers = answers[section.id] ?? {};

                const rows = fields
                  .map((f) => ({
                    label: f.label,
                    value: formatFieldValue(f.format, sectionAnswers[f.key]),
                  }))
                  .filter((r) => r.value !== null);

                return (
                  <Card key={section.id}>
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-semibold text-foreground">{section.title}</p>
                      <Link
                        href={section.path}
                        className="text-xs text-muted hover:text-accent-bright transition-colors"
                      >
                        Editar
                      </Link>
                    </div>

                    {rows.length === 0 ? (
                      <p className="text-sm text-muted italic">Ainda não respondido.</p>
                    ) : (
                      <dl className="space-y-2">
                        {rows.map((row) => (
                          <div key={row.label}>
                            <dt className="text-xs text-muted uppercase tracking-wide">
                              {row.label}
                            </dt>
                            <dd className="text-sm text-foreground/90">{row.value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
