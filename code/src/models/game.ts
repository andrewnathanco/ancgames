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
}

export const games: Game[] = [
  {
    name: "Grid",
    description: "Connect tiles to earn points.",
    endpoint: "/grid",
    repo: "andrewnathanco/grid",
    category: "new",
    icon: "/svg/grid.svg",
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
    colors: {
      background: "#4C646D",
      text: "#ecc8af",
    },
    tags: ["colors"],
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
    tags: ["movies"],
  },
  {
    name: "Guess",
    endpoint: "/guess",
    description: "Guess the computer's secret word.",
    repo: "andrewnathanco/guess",
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
    category: "words",
    icon: "/svg/challenge.svg",
    colors: {
      background: "#292524",
      text: "#ecc8af",
    },
    tags: ["words"],
  },
];
