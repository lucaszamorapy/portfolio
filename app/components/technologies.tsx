"use client";
import { TechItem, techsList } from "@/utils/lists";
import DividerQuen from "./divider-quen";
import SvgIcon from "./ui/svg-icon";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";

const Technologies = () => {
  const [techs, setTechs] = useState<Array<TechItem>>(techsList);
  const [techsClone, setTechsClone] = useState<Array<TechItem>>(techsList);

  useEffect(() => {
    const loadTechs = () => {
      setTechs(techsList);
      setTechsClone(techsList);
    };
    loadTechs();
  }, []);

  const searchTechs = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    const filteredTechs = techsClone.filter((tech) =>
      tech.name.toLowerCase().includes(value)
    );
    setTechs(filteredTechs || techsClone);
  };
  return (
    <>
      <DividerQuen />
      <section id="technologies" className="flex items-center flex-col">
        <div className="container w-full">
          <div className="flex flex-col lg:items-center gap-10 lg:flex-row">
            <h1 className="flex flex-col gap-5 text-white text-4xl sm:text-6xl font-bold leading-tight lg:flex-row">
              Principais
              <span className="text-primary ">tecnologias</span>
            </h1>
            <Input
              placeholder="Pesquise aqui"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                searchTechs(e)
              }
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-10 mt-10">
            {techs.map((p: TechItem) => (
              <article
                key={p.name}
                className="
                group
                flex flex-col items-center justify-center
                gap-4
                w-full
                h-32 
                lg:h-44
                border border-secondary/40
                bg-background-secondary backdrop-blur
                transition-all duration-500
                hover:border-amber-400/60
              "
              >
                <SvgIcon
                  svg={p.icon}
                  className="
                      w-10 h-10
                      text-secondary
                      transition
                      group-hover:text-amber-400
                    "
                />

                <h3 className="text-sm font-semibold tracking-wide text-secondary text-center">
                  {p.name}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
