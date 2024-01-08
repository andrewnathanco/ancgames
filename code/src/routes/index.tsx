import {
  type Component,
  createSignal,
  createContext,
  createEffect,
} from "solid-js";
import { Meta } from "@solidjs/meta";

interface Game {
  name: string;
  icon: string;
  link: string;
  description: string;
  color?: string;
}

const App: Component = () => {
  // dialog context
  return (
    <>
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0"
      />
      <div class="flex flex-col space-y-6 p-8 max-w-128">
        <div class="flex flex-col space-y-2 w-fit">
          <div class="text-4xl">anc games</div>
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
            <a
              class="underline"
              href="mailto:cohen.andrew.n+ancgames@gmail.com"
            >
              email
            </a>{" "}
            me if you have suggestions or have an idea for a game.
          </div>
        </div>

        <div class="flex flex-col space-y-2 rounded-lg hover:cursor-pointer">
          <div
            id="needed-for-colors"
            class="
          hidden
          
          "
          ></div>
          <GameCard
            class="hover:bg-sun-50"
            game={{
              name: "mural",
              icon: "/svg/mural.svg",
              link: "/mural",
              description: "flip tiles to reveal a movie poster",
              color: "desert-sand-100",
            }}
          />
          <GameCard
            class="hover:bg-desert-sand-100"
            game={{
              name: "challenge",
              icon: "/svg/challenge.svg",
              link: "/challenge",
              description: "spell a word one letter at a time",
              color: "sun-50",
            }}
          />
        </div>
      </div>
    </>
  );
};

function GameCard(props: { game: Game; class: any }) {
  return (
    <a
      class={`flex space-x-4 items-center border-2 rounded-lg p-2 border-wine-900 hover:cursor-pointer hover:bg-${
        props.game.color ?? "bg-manhattan-300"
      }`}
      href={props.game.link}
    >
      <div class="w-16 h-16">
        <img src={props.game.icon} />
      </div>
      <div class="">
        <div class="text-2xl">{props.game.name}</div>
        <div>{props.game.description}</div>
      </div>
    </a>
  );
}

export default App;
