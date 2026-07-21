"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CLUSTER_LABELS, sectionsByCluster, type Cluster } from "@/lib/sections";
import { useProgresso } from "@/context/ProgressoContext";
import { createClient } from "@/lib/supabase/client";

const CLUSTER_ORDER: Cluster[] = ["inicio", "alvo", "rota", "mira", "metodo"];

export function Sidebar({ userEmail }: { userEmail: string }) {
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
    <aside className="w-72 shrink-0 h-screen sticky top-0 border-r border-border bg-surface/40 flex flex-col">
      <div className="px-6 py-6 border-b border-border">
        <p className="font-display font-bold text-lg text-foreground">Método A.R.M.</p>
        <p className="text-xs text-muted mt-1">Corretoras do Amanhã</p>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        {CLUSTER_ORDER.map((cluster) => (
          <div key={cluster}>
            <p className="px-2 mb-2 text-xs font-semibold tracking-widest uppercase text-muted">
              {CLUSTER_LABELS[cluster]}
            </p>
            <ul className="space-y-1">
              {sectionsByCluster(cluster).map((section) => {
                const active = pathname === section.path;
                const done = section.hasForm && isComplete(section);
                return (
                  <li key={section.id}>
                    <Link
                      href={section.path}
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
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="px-6 py-4 border-t border-border">
        <p className="text-xs text-muted truncate mb-3">{userEmail}</p>
        <button
          onClick={handleLogout}
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Sair
        </button>
      </div>
    </aside>
  );
}
