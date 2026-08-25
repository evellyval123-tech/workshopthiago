import Image from "next/image";

export default function ConstruaUmMovimentoPage() {
  return (
    <div className="space-y-6">
      <div className="relative w-full aspect-[1536/1024] rounded-2xl overflow-hidden border border-border">
        <Image
          src="/img/construa-um-movimento.png"
          alt="Construa um Movimento — Encontre uma causa, construa uma narrativa, lute contra um inimigo, apresente um herói."
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative w-full aspect-[1358/761] rounded-2xl overflow-hidden border border-border">
        <Image
          src="/img/thiago-eugenio-colagem.jpeg"
          alt="Colagem de fotos de Thiago Eugênio — Corretoras do Amanhã"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
