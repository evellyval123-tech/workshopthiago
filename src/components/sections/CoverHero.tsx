import Image from "next/image";

export function CoverHero() {
  return (
    <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] rounded-2xl overflow-hidden border border-border mb-8">
      <Image
        src="/img/inicio-bg.png"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

      <Image
        src="/img/logo-corretoras-do-amanha.png"
        alt="Corretoras do Amanhã"
        width={433}
        height={122}
        className="absolute top-5 left-5 sm:top-8 sm:left-8 w-28 sm:w-36 h-auto"
      />

      <Image
        src="/img/thiago-cutout.png"
        alt="Thiago Eugênio"
        width={1651}
        height={2477}
        priority
        className="absolute right-2 sm:right-8 bottom-0 h-full w-auto object-contain object-bottom"
      />

      <div className="absolute bottom-0 left-0 p-5 sm:p-8 max-w-[60%] sm:max-w-[55%]">
        <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
          A Máquina de Vender Planos
        </h1>
        <p className="text-accent-bright text-sm sm:text-base mt-3">
          Se você não sabe o que faz pra vender, você não sabe vender!
        </p>
      </div>
    </div>
  );
}
