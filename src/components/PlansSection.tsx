import PlanCard from "./PlanCard";

export default function PlansSection() {
  const planos = [
    {
      nome: "Vivo Pós(50GB) + Fibra 500MB",
      preco: "R$ 160,00/mês",
      imagem: "/images/plano4.jpg",
      descricao: "Velocidade e estabilidade para toda a sua casa.",
    },
    {
      nome: "Vivo Pós(20GB) + Fibra 300MB",
      preco: "R$ 130,00/mês",
      imagem: "/images/plano5.jpg",
      descricao: "Ideal para quem precisa de alta performance e streaming.",
    },
    {
      nome: "Vivo Total 700MB + Pós(70GB)",
      preco: "R$ 170,00/mês",
      imagem: "/images/plano3.jpg",
      descricao: "Internet, TV e celular em um único plano completo.",
    },
  ];

  return (
    <section id="planos" className="bg-slate-900 text-center py-16">
      <h2 className="text-4xl font-bold text-[#660099] mb-12">Nossos Planos</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {planos.map((plano, i) => (
          <PlanCard
            key={i}
            nome={plano.nome}
            preco={plano.preco}
            imagem={plano.imagem}
            descricao={plano.descricao}
          />
        ))}
      </div>
    </section>
  );
}
