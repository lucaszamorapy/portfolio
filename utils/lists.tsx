interface NavItem {
  name: string;
  navigation: string;
  type: "external" | "internal";
}

export const navItems: NavItem[] = [
  {
    name: "Início",
    navigation: "/",
    type: "external",
  },
  {
    name: "O Bruxo",
    navigation: "about",
    type: "internal",
  },
  {
    name: "Contratos",
    navigation: "/projects",
    type: "external",
  },
  {
    name: "Sinais",
    navigation: "tecnologies",
    type: "internal",
  },
  {
    name: "Contato",
    navigation: "contact",
    type: "internal",
  },
];
