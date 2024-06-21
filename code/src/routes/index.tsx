import { Meta } from "@solidjs/meta";
import { Theme, ThemeToggler, getTheme } from "../util/theme";
import { JSXElement, createSignal } from "solid-js";
import { DocumentIcon, MovieIcon, StarIcon } from "../util/icons";
import games from "../util/games.json";
import { Game } from "../util/gameinfo";
import { c } from "vinxi/dist/types/lib/logger";

interface GameCategory {
  name: string;
  icon: JSXElement;
}

const gamerows: GameCategory[] = [
  {
    name: "new",
    icon: <StarIcon />,
  },
  {
    name: "words",
    icon: <DocumentIcon />,
  },
  {
    name: "movies",
    icon: <MovieIcon />,
  },
];

export default function Home() {
  const [theme, setTheme] = createSignal(getTheme());

  return (
    <>
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0"
      />
      <div class="relative flex flex-col space-y-6 p-8 max-w-128 h-full">
        <div class="flex flex-col space-y-2 w-fit">
          <div class="flex justify-between items-center">
            <div class="text-4xl">anc games</div>
            <ThemeToggler theme={[theme, setTheme]} />
          </div>
          <Description />
        </div>

        <ul class="flex flex-col space-y-2 rounded-lg justify-center -m-4">
          {gamerows.map((row) => {
            return (
              <li class="flex flex-col space-y-2 dark:bg-burst-900 bg-manhattan-200 p-2 rounded-xl">
                <div class="flex space-x-2 rounded-xl px-2 py-1 dark:bg-burst-800 bg-manhattan-400 text-lg items-center">
                  {row.icon}
                  <div>{row.name}</div>
                </div>
                <ul class="flex space-x-2 ">
                  {games
                    .filter(
                      (game) =>
                        game.category.toLowerCase() == row.name.toLowerCase()
                    )
                    ?.map((game) => {
                      return (
                        <li
                          class="active:shrink-sm hover:cursor-pointer rounded-xl flex justify-center items-end space-x-4 p-2 dark:text-gray-200 text-manhattan-100"
                          style={{
                            "background-color":
                              theme() == Theme.DARK
                                ? game.colors.background.dark
                                : game.colors.background.light,
                          }}
                          onclick={() => {
                            window.location.href = `https://ancgames.com${game.endpoint}`;
                          }}
                        >
                          <div>
                            <div class="text-2xl">{game.name}</div>
                            <div class="text-xs">{game.description}</div>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

function Description() {
  return (
    <div class="text-lg">
      my name is{" "}
      <a
        href="https://www.threads.net/@andrewnathanco"
        target="_blank"
        rel="noopener noreferrer"
        class="underline"
      >
        andrew
      </a>{" "}
      and i make simple, daily games. if you enjoy please share with your
      friends.{" "}
      <a class="underline" href="mailto:cohen.andrew.n+ancgames@gmail.com">
        email
      </a>{" "}
      me if you have suggestions or have an idea for a game.
    </div>
  );
}
