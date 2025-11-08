"use client";

import React, { useEffect, useState } from "react";

export default function Header({ whatsappLink, instagram }: { whatsappLink: string; instagram: string }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.body.scrollHeight;

      const isPastHalf = scrollTop > documentHeight / 2;
      setIsVisible(!isPastHalf);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-opacity duration-500 ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="container flex flex-col sm:flex-row items-center justify-between py-4 px-4 gap-4 sm:gap-0">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">B</div>
          <div>
            <div className="text-lg font-semibold text-white">Beatriz | Consultora Vivo</div>
            <div className="text-sm text-white/70">Presidente Prudente • Atendimento PAP</div>
          </div>
        </div>

        <nav className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a href={instagram} target="_blank" rel="noreferrer" style={{ background: "#4D00FF" }} className="text-sm px-4 py-2 rounded-full text-white font-medium hover:opacity-95 transition w-full sm:w-auto text-center">Instagram</a>
        </nav>
      </div>
    </header>
  );
}
