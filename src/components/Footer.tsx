export default function Footer() {
  return (
    <footer className="py-10 mt-12 border-t border-white/6">
      <div className="container text-center">
        <div className="text-sm text-white/70">© {new Date().getFullYear()} Beatriz - Consultora Vivo</div>
        <div className="text-xs text-white/50 mt-2">Atendimento PAP • Presidente Prudente</div>
      </div>
    </footer>
  );
}
