import { SectionHeader } from "@/components/ui/SectionHeader";
import { MindsetRows } from "@/components/sections/MindsetRows";

export default function MindsetPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Mira"
        title="Mindset de Alta Performance"
        description="A mentalidade que separa amadores de profissionais."
      />

      <MindsetRows />
    </div>
  );
}
