import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { ProjectsItem } from "@/utils/lists";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  project: ProjectsItem;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article
      className="
        group relative
        w-full 
        h-130
        overflow-hidden
        border border-secondary/40
        bg-background-secondary backdrop-blur
        flex flex-col
        transition-all duration-500
        hover:border-amber-400/60
      "
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="
            object-cover grayscale-20
            transition duration-700
            group-hover:scale-105 group-hover:grayscale-0
          "
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>

      <div className="flex flex-col gap-5 p-5 flex-1">
        <h3
          className="
            text-xl font-semibold tracking-wide
            text-secondary
          "
        >
          {project.name}
        </h3>
        <p className="text-sm text-white leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="pt-2">
          <Link
            href={project.link}
            target="_blank"
            className="
              inline-flex items-center gap-2
              text-sm text-white font-medium
              transition
              hover:text-secondary
            "
          >
            <Github size={16} />
            Ver no GitHub
          </Link>
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;
