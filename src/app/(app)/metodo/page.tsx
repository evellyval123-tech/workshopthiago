import { SectionHeader } from "@/components/ui/SectionHeader";
import { ResumoMetodo } from "@/components/sections/ResumoMetodo";

export default function MetodoPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Seu Método"
        title="Seu Método A.R.M."
        description="Tudo o que você construiu em Alvo, Rota e Mira, num só lugar."
      />
      <ResumoMetodo />
    </div>
  );
}
