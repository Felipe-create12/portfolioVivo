import "./globals.css";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Beatriz — Consultora Vivo",
  description: "Beatriz - Consultora Vivo em Presidente Prudente. Atendimento PAP.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const WHATSAPP = "https://wa.me/5518996233971?text=Olá%20Beatriz!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos.";
  const INSTAGRAM = "https://instagram.com/consultora_vivobeatriz";

  return (
    <html lang="pt-BR">
      {/* add page-level body classes here (avoid @apply on body) */}
      <body className="bg-slate-900 text-white">
        <Header whatsappLink={WHATSAPP} instagram={INSTAGRAM} />
        {children}
        <WhatsAppFloat whatsappLink={WHATSAPP} />
      </body>
    </html>
  );
}
