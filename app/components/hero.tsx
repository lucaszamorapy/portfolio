"use client";
import Link from "next/link";
import DividerQuen from "./divider-quen";
import { Button } from "./ui/button";
import { useParallax } from "../hooks/use-parallax";

export default function Hero() {
  const offsetTitle = useParallax(0.04);
  const offsetRune = useParallax(0.02);
  return (
    <>
      <div style={{ transform: `translateY(${offsetRune}px)` }}>
        <DividerQuen />
      </div>
      <section className="relative flex items-center justify-center text-zinc-400 overflow-hidden">
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <span className="text-sm tracking-widest text-witcher-text uppercase">
            Saudações, me chamo
          </span>

          <h1
            style={{ transform: `translateY(${offsetTitle}px)` }}
            className="flex text-witcher-text items-center justify-center gap-5 mt-4 text-4xl sm:text-6xl font-bold leading-tight animate-hero [animation-delay:0.2s]"
          >
            Lucas
            <span className="text-primary animate-hero [animation-delay:0.2s]">
              Zamora
            </span>
          </h1>

          <p className="mt-6 text-witcher-text text-md animate-hero [animation-delay:0.2s] lg:text-lg">
            Técnólogo em Análise e Desenvolvimento de Sistemas, Desenvolvedor
            Full Stack especializado em transformar sistemas caóticos em
            soluções eficientes.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <Button>
              <Link href={"#about"}>Começar caçada</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
