import Image from "next/image";

export default function Hero() {
  const WHATSAPP = "https://wa.me/5518996233971?text=Olá%20Beatriz!%20Quero%20informações%20sobre%20os%20planos.";
  const heroGradient = {
    background: "linear-gradient(135deg, #4B0082 0%, #7A1FA2 45%, #4D00FF 100%)"
  };

  return (
    <section style={heroGradient} className="pt-28 pb-20">
      <div className="container px-4 pt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 text-sm text-white/90">
              <span className="w-2 h-2 rounded-full bg-emerald-400 block" />
              Consultora Oficial Vivo — Atendimento PAP
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Conectando sua casa com <span className="text-white/90">internet rápida</span> e planos que cabem no seu bolso.
            </h1>

            <p className="text-white/80 max-w-xl">
              Olá — eu sou a Beatriz. Atendo Presidente Prudente com planos Vivo Fibra, Vivo Móvel e combos. Me envie seu CEP e eu verifico disponibilidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" style={{ background: "#4D00FF" }} className="inline-flex justify-center items-center gap-3 text-white px-5 py-3 rounded-full shadow-lg w-full sm:w-auto text-center">
                📞 Falar no WhatsApp
              </a>
              <a href="#plans" className="inline-flex justify-center items-center gap-2 border border-white/10 text-white/90 px-4 py-2 rounded-lg hover:bg-white/5 w-full sm:w-auto text-center">
                Ver planos
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-sm">
              <div className="card-blur p-3 text-sm">
                <div className="font-semibold">Verifico disponibilidade</div>
                <div className="text-white/80 text-xs">Me envie o CEP que eu confirmo a cobertura</div>
              </div>
              <div className="card-blur p-3 text-sm">
                <div className="font-semibold">Atendimento PAP</div>
                <div className="text-white/80 text-xs">Visito sua casa para explicar planos e instalar</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-xs sm:max-w-md rounded-3xl overflow-hidden shadow-2xl" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))" }}>
              <Image src="/images/image1.jpg" alt="Beatriz" width={800} height={800} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
