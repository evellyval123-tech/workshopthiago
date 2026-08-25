import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ProgressoProvider } from "@/context/ProgressoContext";
import { AppShell } from "@/components/AppShell";
import { SectionNav } from "@/components/SectionNav";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: progresso } = await supabase
    .from("progresso")
    .select("answers")
    .eq("user_id", user.id)
    .maybeSingle();

  return (
    <ProgressoProvider userId={user.id} initialAnswers={progresso?.answers ?? {}}>
      <AppShell userEmail={user.email ?? ""}>
        {children}
        <SectionNav />
      </AppShell>
    </ProgressoProvider>
  );
}
