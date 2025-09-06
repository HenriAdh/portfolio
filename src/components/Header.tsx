"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-lg py-2 shadow-lg"
          : "bg-primary/80 backdrop-blur-md py-4"
      }`}
    >
      {/* Elementos decorativos de forma */}
      <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-accent/20 blur-xl pointer-events-none"></div>
      <div className="absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-lg rotate-45 opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent relative group"
        >
          Henrique Adhmann Pires
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Menu para desktop */}
        <nav className="hidden md:flex space-x-1 relative">
          <Link
            href="#inicio"
            className="px-4 py-2 rounded-lg relative overflow-hidden group hover:bg-foreground/5 transition-all duration-300"
          >
            <span className="relative z-10">Início</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            href="#sobre"
            className="px-4 py-2 rounded-lg relative overflow-hidden group hover:bg-foreground/5 transition-all duration-300"
          >
            <span className="relative z-10">Sobre</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            href="#projetos"
            className="px-4 py-2 rounded-lg relative overflow-hidden group hover:bg-foreground/5 transition-all duration-300"
          >
            <span className="relative z-10">Projetos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            href="#contato"
            className="px-4 py-2 rounded-lg relative overflow-hidden group hover:bg-foreground/5 transition-all duration-300"
          >
            <span className="relative z-10">Contato</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          {/* Elemento decorativo */}
          <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-0.5 h-8 bg-gradient-to-b from-accent to-transparent opacity-70"></div>
        </nav>

        {/* Botão menu mobile */}
        <button
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <span
            className={`block w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-foreground rounded-full my-1.5 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
            }`}
          ></span>

          {/* Efeito de fundo no hover */}
          <div className="absolute inset-0 rounded-full bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300"></div>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex flex-col space-y-3 relative">
            {/* Elemento decorativo */}
            <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-accent to-transparent opacity-50 rounded-full"></div>

            <Link
              href="#inicio"
              className="pl-6 py-3 rounded-r-lg transition-all duration-300 hover:bg-foreground/5 hover:translate-x-2 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Início</span>
              <div className="absolute left-0 top-0 w-1 h-0 bg-accent rounded-r-full transition-all duration-300 group-hover:h-full"></div>
            </Link>
            <Link
              href="#sobre"
              className="pl-6 py-3 rounded-r-lg transition-all duration-300 hover:bg-foreground/5 hover:translate-x-2 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Sobre</span>
              <div className="absolute left-0 top-0 w-1 h-0 bg-accent rounded-r-full transition-all duration-300 group-hover:h-full"></div>
            </Link>
            <Link
              href="#projetos"
              className="pl-6 py-3 rounded-r-lg transition-all duration-300 hover:bg-foreground/5 hover:translate-x-2 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Projetos</span>
              <div className="absolute left-0 top-0 w-1 h-0 bg-accent rounded-r-full transition-all duration-300 group-hover:h-full"></div>
            </Link>
            <Link
              href="#contato"
              className="pl-6 py-3 rounded-r-lg transition-all duration-300 hover:bg-foreground/5 hover:translate-x-2 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Contato</span>
              <div className="absolute left-0 top-0 w-1 h-0 bg-accent rounded-r-full transition-all duration-300 group-hover:h-full"></div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
