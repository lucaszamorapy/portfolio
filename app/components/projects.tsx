import { projectsItems } from "@/utils/lists";
import DividerQuen from "./divider-quen";
import ProjectCard from "./project-card";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <DividerQuen />
      <section id="projects" className="flex items-center flex-col">
        <div className="container w-full">
          <h1 className="flex text-white gap-5 text-4xl sm:text-6xl font-bold leading-tight ">
            Meus
            <span className="text-primary ">projetos</span>
          </h1>
          <div
            className="
              grid grid-cols-1
              gap-8
              sm:grid-cols-2
              lg:grid-cols-4
              mt-10
              "
          >
            {projectsItems.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
          <div className="flex mt-10 justify-center">
            <Link
              href={"https://github.com/lucaszamorapy?tab=repositories"}
              target="_blank"
            >
              <Button>
                <Plus />
                Veja mais
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
