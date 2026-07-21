"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export function AuthForm({ mode }: { mode: "login" | "cadastro" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } =
      mode === "login"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/inicio");
    router.refresh();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <p className="font-display font-bold text-2xl text-foreground">Método A.R.M.</p>
          <p className="text-sm text-muted mt-1">Corretoras do Amanhã</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-surface border border-border rounded-2xl p-8 space-y-5"
        >
          <h1 className="text-xl font-semibold text-foreground">
            {mode === "login" ? "Entrar" : "Criar conta"}
          </h1>

          <label className="block">
            <span className="block text-sm font-medium text-foreground mb-2">E-mail</span>
            <input
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-xl bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium text-foreground mb-2">Senha</span>
            <input
              type="password"
              required
              minLength={6}
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              className="w-full rounded-xl bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-accent hover:bg-accent-bright hover:text-background text-background font-semibold py-3 transition-colors disabled:opacity-50"
          >
            {loading ? "Aguarde…" : mode === "login" ? "Entrar" : "Criar conta"}
          </button>

          <p className="text-center text-sm text-muted">
            {mode === "login" ? (
              <>
                Não tem conta?{" "}
                <Link href="/cadastro" className="text-accent-bright hover:underline">
                  Criar conta
                </Link>
              </>
            ) : (
              <>
                Já tem conta?{" "}
                <Link href="/login" className="text-accent-bright hover:underline">
                  Entrar
                </Link>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
