"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CLUSTER_DIVIDERS, CLUSTER_LABELS, sectionsByCluster, type Cluster } from "@/lib/sections";
import { useProgresso } from "@/context/ProgressoContext";
import { createClient } from "@/lib/supabase/client";

const CLUSTER_ORDER: Cluster[] = ["inicio", "alvo", "rota", "mira", "metodo"];

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

export function TopBar({ userEmail, onExpand }: { userEmail: string; onExpand: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isComplete } = useProgresso();
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 h-16 flex items-center justify-between px-4 sm:px-6 border-b border-border bg-surface/90 backdrop-blur">
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground/80 hover:bg-surface-hover transition-colors"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <MenuIcon />
          <span className="font-display font-bold text-sm text-foreground">Método A.R.M.</span>
        </button>
        <button
          onClick={handleLogout}
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Sair
        </button>
      </header>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />
          <div className="fixed top-16 inset-x-0 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border bg-surface shadow-xl">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
              <button
                onClick={() => {
                  onExpand();
                  setMenuOpen(false);
                }}
                className="mb-5 text-xs font-semibold text-accent-bright hover:underline"
              >
                Fixar menu lateral
              </button>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                {CLUSTER_ORDER.map((cluster) => {
                  const divider = CLUSTER_DIVIDERS[cluster];
                  return (
                    <div key={cluster}>
                      <p className="mb-2 text-[11px] font-semibold tracking-widest uppercase text-accent-bright">
                        {divider ?? CLUSTER_LABELS[cluster]}
                      </p>
                      <ul className="space-y-1">
                        {sectionsByCluster(cluster).flatMap((section) => {
                          const active = pathname === section.path;
                          const done = section.hasForm && isComplete(section);
                          const item = (
                            <li key={section.id}>
                              <Link
                                href={section.path}
                                onClick={() => setMenuOpen(false)}
                                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                                  active
                                    ? "bg-accent/15 text-accent-bright"
                                    : "text-foreground/80 hover:bg-surface-hover"
                                }`}
                              >
                                <span
                                  className={`h-1.5 w-1.5 rounded-full shrink-0 ${
                                    done ? "bg-accent-bright" : "bg-border"
                                  }`}
                                  aria-hidden
                                />
                                <span className="truncate">{section.title}</span>
                              </Link>
                            </li>
                          );

                          if (section.id === "inicio-metodo-arm") {
                            return [
                              item,
                              <li key="slido">
                                <Link
                                  href="/slido"
                                  onClick={() => setMenuOpen(false)}
                                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                                    pathname === "/slido"
                                      ? "bg-accent/15 text-accent-bright"
                                      : "text-foreground/80 hover:bg-surface-hover"
                                  }`}
                                >
                                  <span
                                    className="h-1.5 w-1.5 rounded-full shrink-0 bg-border"
                                    aria-hidden
                                  />
                                  <span className="truncate">Slido</span>
                                </Link>
                              </li>,
                            ];
                          }

                          return [item];
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 pt-4 border-t border-border text-xs text-muted truncate">
                {userEmail}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
