interface PlanoCardProps {
  nome: string;
  preco: string;
  imagem: string;
  descricao: string;
}

export default function PlanCard({ nome, preco, imagem, descricao }: PlanoCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform">
      <img src={imagem} alt={nome} className="w-full h-52 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#660099]">{nome}</h3>
        <p className="text-gray-600 my-3">{descricao}</p>
        <p className="text-[#e6007e] font-semibold text-lg mb-4">{preco}</p>
        <button className="w-full bg-[#660099] text-white py-3 rounded-full font-semibold hover:opacity-90 transition">
          Assinar agora
        </button>
      </div>
    </div>
  );
}
