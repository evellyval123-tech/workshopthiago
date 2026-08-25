import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const SLIDO_URL =
  "https://app.sli.do/event/wAA2Kfui8efd5o1hAKEeD6/embed/polls/b8a63c05-607a-4a3e-a373-cb4311768197";

export default function SlidoPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Slido"
        title="Participe da enquete ao vivo"
        description="Abra o link ou aponte a câmera do celular pro QR code pra responder as enquetes durante a apresentação."
      />

      <Card className="flex flex-col items-center text-center gap-6">
        <div className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-xl overflow-hidden border border-border bg-white">
          <Image src="/img/slido-qrcode.jpeg" alt="QR code do Slido" fill className="object-contain" />
        </div>

        <a
          href={SLIDO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-accent hover:bg-accent-bright hover:text-background text-background font-semibold px-6 py-3 transition-colors break-all"
        >
          Abrir o Slido
        </a>
      </Card>
    </div>
  );
}
