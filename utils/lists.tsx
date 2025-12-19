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
    navigation: "tecnologies",
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
