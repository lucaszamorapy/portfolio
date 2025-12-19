"use client";
import DividerQuen from "./divider-quen";
import Image from "next/image";
import { Button } from "./ui/button";
import { Download, Github } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <DividerQuen />
      <section id="about" className="flex items-center flex-col">
        <div className="container">
          <div className="grid items-center grid-cols-1 lg:grid-cols-[350px_1fr] lg:items-start gap-10 lg:gap-24">
            <div className="flex flex-col gap-5">
              <div className="relative lg:w-87.5 h-100 border border-secondary/40">
                <Image
                  src="/lucas_terno.png"
                  alt="Foto Perfil"
                  fill
                  sizes="(max-width: 1024px) 100vw, 300px"
                  className="object-cover shadow-[0_0_40px_rgba(212,175,55,0.15)]"
                />
              </div>
              <span className="text-witcher-text text-center text-sm lg:text-left">
                Ouça a <span className="text-primary">trilha sonora</span> que
                me inspira enquanto desenvolvo:
              </span>
              <iframe
                src="https://open.spotify.com/embed/playlist/67YTZ2cx1tDL2G5Lftub6h?theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="encrypted-media;"
                className="rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              />
            </div>

            <div className="flex flex-col gap-10">
              <h1 className="flex text-witcher-text gap-5 text-4xl sm:text-6xl font-bold leading-tight animate-hero [animation-delay:0.2s]">
                Sobre
                <span className="text-primary animate-hero [animation-delay:0.2s]">
                  Mim
                </span>
              </h1>
              <p className="text-witcher-text">
                Sou desenvolvedor Full Stack, com foco e especialização em
                Next.js, atuando na área há cerca de 2 a 3 anos. Ao longo desse
                período, venho consolidando minha experiência no desenvolvimento
                de aplicações web modernas, buscando sempre soluções bem
                estruturadas, performáticas e alinhadas às boas práticas.
                <br />
                <br />
                Tenho perfil proativo e sou movido por aprendizado contínuo.
                Estudar, testar novas abordagens e aprofundar conhecimentos
                fazem parte da minha rotina, o que me permite evoluir
                tecnicamente e assumir responsabilidades cada vez maiores nos
                projetos em que atuo.
                <br />
                <br />
                Além do desenvolvimento, sou apaixonado por videogames,
                especialmente pelos títulos da{" "}
                <span className="text-primary">Naughty Dog</span> e{" "}
                <span className="text-primary">CD Projekt Red</span>. Esses
                universos reforçaram em mim a importância da experiência do
                usuário, da atenção aos detalhes e da construção de soluções bem
                pensadas — princípios que levo para o meu trabalho como
                desenvolvedor.
              </p>
              <div className="flex items-center gap-10">
                <Link href={"/CV.pdf"} download>
                  <Button>
                    <Download />
                    Currículo
                  </Button>
                </Link>
                <Link href={"https://github.com/lucaszamorapy"} target="_blank">
                  <Button>
                    <Github />
                    Git Hub
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
