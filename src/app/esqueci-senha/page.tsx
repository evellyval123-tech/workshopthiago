"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function EsqueciSenhaPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/redefinir-senha`,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSent(true);
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
          <h1 className="text-xl font-semibold text-foreground">Esqueci minha senha</h1>

          {sent ? (
            <p className="text-sm text-muted">
              Se esse e-mail estiver cadastrado, enviamos um link pra você criar uma nova senha.
              Confira sua caixa de entrada.
            </p>
          ) : (
            <>
              <p className="text-sm text-muted">
                Digite o e-mail da sua conta e enviamos um link pra redefinir a senha.
              </p>

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

              {error && <p className="text-sm text-red-400">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-accent hover:bg-accent-bright hover:text-background text-background font-semibold py-3 transition-colors disabled:opacity-50"
              >
                {loading ? "Enviando…" : "Enviar link"}
              </button>
            </>
          )}

          <p className="text-center text-sm text-muted">
            <Link href="/login" className="text-accent-bright hover:underline">
              Voltar pro login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
