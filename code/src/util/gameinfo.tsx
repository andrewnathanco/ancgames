import games from "../util/games.json";

export interface Game {
  name: string;
  category: string;
  version?: string;
  endpoint: string;
  description: string;
  colors: {
    dark: string;
    light: string;
  };
}

export const fetchGames = async () => {
  // get data from repo
  const promises = games.map((game) => {
    const repo = `https://raw.githubusercontent.com/${game.repo}/main/game.json`;
    return fetch(repo);
  });

  // get back all of the data from the original
  const resp = Promise.all(promises).then(async (responses) => {
    const all: Game[] = [];
    for (let res of responses) {
      const data: Game = await res.json();

      const existing = games.find(
        (game) => game.name.toLowerCase() == data.name.toLowerCase()
      );

      // mix back in the other data
      data.category = existing?.category ?? "all";
      all.push(data);
    }

    return all;
  });

  return resp;
};
