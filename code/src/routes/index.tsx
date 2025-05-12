import { Meta } from "@solidjs/meta";
import { JSXElement, createSignal } from "solid-js";
import { DocumentIcon, MovieIcon, StarIcon } from "../util/icons";
import { Game, games } from "../models/game";

export default function Home() {
  return (
    <>
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0"
      />
      <div class="relative flex flex-col space-y-6 p-8 max-w-128 h-full">
        <div class="flex flex-col space-y-2 w-fit">
          <div class="flex justify-between items-center">
            <div class="text-4xl font-bold">anc games</div>
          </div>
          <Description />
        </div>

        <ul class="flex flex-col space-y-2 rounded-lg">
          {games?.map((game) => {
            return <GameCard game={game} />;
          })}
        </ul>
      </div>
    </>
  );
}

function GameCard(props: { game: Game }) {
  return (
    <li
      class="active:shrink-sm hover:cursor-pointer rounded-xl flex space-x-4 p-4 border-2 bg-manhattan-50"
      style={{
        "border-color": props.game.colors.background,
        color: props.game.colors.background,
      }}
      onclick={() => {
        window.location.href = `https://ancgames.com${props.game.endpoint}`;
      }}
    >
      <div class="flex flex-col space-y-2">
        <div class="flex flex-col space-y-1">
          <div class="text-2xl">{props.game.name}</div>
          <div class="text-xs">{props.game.description}</div>
        </div>
        <div class="flex flex-row gap-2">
          {props.game.tags?.map((tag) => {
            switch (tag) {
              case "words":
                return <TagChip tag={tag} />;
              case "movies":
                return <TagChip tag={tag} />;
              default:
                return <TagChip tag={tag} />;
            }
          })}
        </div>
      </div>
    </li>
  );
}

function TagChip(props: { tag: string }) {
  return (
    <div class="text-xs bg-manhattan-100 rounded-full px-2 py-1 flex flex-row gap-2 items-center">
      {props.tag}
    </div>
  );
}

function Description() {
  return (
    <div class="text-lg font-normal">
      my name is{" "}
      <a
        href="https://bsky.app/profile/ancgames.com"
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
