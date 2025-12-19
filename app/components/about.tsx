"use client";
import DividerQuen from "./divider-quen";
import { Button } from "./ui/button";
import { Download, Github } from "lucide-react";
import Link from "next/link";
import AboutCard from "./about-card";

const About = () => {
  return (
    <>
      <DividerQuen />
      <section id="about" className="flex items-center flex-col">
        <div className="container">
          <div className="grid items-center grid-cols-1 lg:grid-cols-[350px_1fr] lg:items-start gap-10 lg:gap-24">
            <AboutCard />
            <div className="flex flex-col gap-10">
              <h1 className="flex text-white gap-5 text-4xl sm:text-6xl  font-bold leading-tight ">
                Sobre
                <span className="text-primary ">Mim</span>
              </h1>
              <p className="text-white ">
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
                <span className="text-secondary">Naughty Dog</span> e{" "}
                <span className="text-secondary">CD Projekt Red</span>. Esses
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
