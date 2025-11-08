export default function WhatsAppFloat({ whatsappLink }: { whatsappLink: string; }) {
  return (
    <div className="whatsapp-float">
      <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp" className="inline-flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] text-white hover:scale-105 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.92 11.92 0 0 0 12 0a11.92 11.92 0 0 0-8.52 3.48A11.92 11.92 0 0 0 0 12c0 2.06.54 4.08 1.57 5.86L0 24l6.46-1.54A11.92 11.92 0 0 0 12 24c3.2 0 6.19-1.24 8.52-3.48A11.92 11.92 0 0 0 24 12c0-3.2-1.24-6.19-3.48-8.52zM12 22c-2.22 0-4.3-.7-6.05-1.9l-.44-.27-3.82.91.92-3.78-.28-.44A9.6 9.6 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z"/></svg>
      </a>
    </div>
  );
}
