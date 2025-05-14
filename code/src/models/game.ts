export interface Game {
  name: string;
  description: string;
  endpoint: string;
  repo: string;
  category: string;
  icon?: string;
  colors: {
    background: string;
    text: string;
  };
  tags?: string[];
  image?: string;
}

export const games: Game[] = [
  {
    name: "Grid",
    description: "Connect tiles to earn points.",
    endpoint: "/grid",
    repo: "andrewnathanco/grid",
    category: "new",
    icon: "/svg/grid.svg",
    image: "/games/grid.png",
    colors: {
      background: "#86480d",
      text: "#431d05",
    },
    tags: ["new", "beta"],
  },
  {
    name: "Splotch",
    description: "Find the ingredients for the color.",
    endpoint: "/splotch",
    repo: "andrewnathanco/splotch",
    category: "new",
    image: "/games/splotch.png",
    colors: {
      background: "#4C646D",
      text: "#ecc8af",
    },
    tags: ["color"],
  },
  {
    name: "Mural",
    description: "Reveal tiles to find the movie.",
    endpoint: "/mural",
    repo: "andrewnathanco/mural",
    category: "movies",
    icon: "/svg/mural.svg",
    colors: {
      background: "#AF6458",
      text: "#ecc8af",
    },
    image: "/games/mural.png",
    tags: ["movies"],
  },
  {
    name: "Guess",
    endpoint: "/guess",
    description: "Guess the computer's secret word.",
    repo: "andrewnathanco/guess",
    image: "/games/guess.png",
    category: "words",
    icon: "/svg/guess.svg",
    colors: {
      background: "#755B38",
      text: "#ecc8af",
    },
    tags: ["words"],
  },
  {
    name: "Challenge",
    endpoint: "/challenge",
    description: "Spell a word one letter at a time.",
    repo: "andrewnathanco/challenge",
    image: "/games/challenge.png",
    category: "words",
    icon: "/svg/challenge.svg",
    colors: {
      background: "#292524",
      text: "#ecc8af",
    },
    tags: ["words"],
  },
  {
    name: "Pastel",
    endpoint: "/pastel",
    description: "Get as close to the color as you can.",
    repo: "andrewnathanco/pastel",
    image: "/games/pastel.png",
    category: "color",
    icon: "/svg/pastel.svg",
    colors: {
      background: "#191716",
      text: "#ecc8af",
    },
    tags: ["color"],
  },
];
