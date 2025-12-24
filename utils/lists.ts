import { Github, Instagram, Linkedin, LucideIcon } from "lucide-react";
import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siShadcnui,
  siVuedotjs,
  siNuxt,
  siVuetify,
  siLit,
  siTailwindcss,
  siTsnode,
  siExpress,
  siSequelize,
  siDotnet,
  siPython,
  siMysql,
  siDocker,
} from "simple-icons/icons";

interface NavItem {
  name: string;
  navigation: string;
}

export const navItems: NavItem[] = [
  {
    name: "Início",
    navigation: "home",
  },
  {
    name: "O Bruxo",
    navigation: "about",
  },
  {
    name: "Contratos",
    navigation: "projects",
  },
  {
    name: "Sinais",
    navigation: "technologies",
  },
  {
    name: "Contato",
    navigation: "contact",
  },
];

export interface ProjectsItem {
  name: string;
  description: string;
  link: string;
  imageUrl: string;
  techs: string[];
}

export const projectsItems: ProjectsItem[] = [
  {
    name: "Chat Hub",
    description:
      "ChatHub é um aplicativo web de chat que permite conversas online individuais ou em grupo. Com uma interface intuitiva, você pode adicionar amigos, iniciar conversas, criar grupos e interagir em tempo real.",
    link: "https://github.com/lucaszamorapy/chat-hub",
    imageUrl: "/projects/chat-hub.jpg",
    techs: [
      "Next",
      "TypeScript",
      "TailwindCSS",
      "ShadCN UI",
      "C#",
      "SignalR",
      "Entity Framework",
      "MySQL",
    ],
  },
  {
    name: "Deia Dashboad",
    description:
      "Sistema de gestão que auxilia o usuário a organizar seus pedidos, acompanhar o lucro obtido e comparar o desempenho entre diferentes meses.",
    link: "https://github.com/lucaszamorapy/deia-dashboard",
    imageUrl: "/projects/deia-dashboard.jpg",
    techs: [
      "Next",
      "TypeScript",
      "TailwindCSS",
      "ShadCN UI",
      "NodeTS",
      "Express",
      "Sequelize",
      "MySQL",
    ],
  },
  {
    name: "Keep Gaming",
    description:
      "Wiki de jogos utilizando a API do RAWG, inspirada no design e funcionalidades do site Flow Games.",
    link: "https://github.com/lucaszamorapy/keep-gaming",
    imageUrl: "/projects/keep-gaming.jpg",
    techs: ["React", "JavaScript", "TailwindCSS", "RAWG API"],
  },
  {
    name: "UBank",
    description:
      "Projeto pessoal da mentoria de UX/UI Design, onde eu desenvolvi uma Landing page no Figma para depois aplicar no código.",
    link: "https://github.com/lucaszamorapy/ubank",
    imageUrl: "/projects/ubank.jpg",
    techs: ["React", "JavaScript", "TailwindCSS", "Figma"],
  },
];

export interface TechItem {
  name: string;
  icon: string;
}

export const techsList: TechItem[] = [
  { name: "HTML", icon: siHtml5.svg },
  { name: "CSS", icon: siCss.svg },
  { name: "JavaScript", icon: siJavascript.svg },
  { name: "TypeScript", icon: siTypescript.svg },
  { name: "React", icon: siReact.svg },
  { name: "Next", icon: siNextdotjs.svg },
  { name: "ShadCN UI", icon: siShadcnui.svg },
  { name: "Vue", icon: siVuedotjs.svg },
  { name: "Nuxt", icon: siNuxt.svg },
  { name: "Vuetify", icon: siVuetify.svg },
  { name: "Lit", icon: siLit.svg },
  { name: "TailwindCSS", icon: siTailwindcss.svg },
  { name: "Node TS", icon: siTsnode.svg },
  { name: "Express", icon: siExpress.svg },
  { name: "Sequelize", icon: siSequelize.svg },
  { name: ".NET", icon: siDotnet.svg },
  { name: "Python", icon: siPython.svg },
  { name: "MySQL", icon: siMysql.svg },
  { name: "Docker", icon: siDocker.svg },
];

export interface FooterItem {
  link: string;
  icon: LucideIcon;
}

export const footerItems: FooterItem[] = [
  {
    link: "https://github.com/lucaszamorapy",
    icon: Github,
  },
  {
    link: "https://www.instagram.com/luscas.zamora",
    icon: Instagram,
  },
  {
    link: "https://www.linkedin.com/in/lucas-nicola-zamora/",
    icon: Linkedin,
  }
]
