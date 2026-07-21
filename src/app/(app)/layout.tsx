import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ProgressoProvider } from "@/context/ProgressoContext";
import { Sidebar } from "@/components/Sidebar";
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
      <div className="flex min-h-screen">
        <Sidebar userEmail={user.email ?? ""} />
        <main className="flex-1 px-6 py-10 sm:px-12 sm:py-14 max-w-4xl">
          {children}
          <SectionNav />
        </main>
      </div>
    </ProgressoProvider>
  );
}
