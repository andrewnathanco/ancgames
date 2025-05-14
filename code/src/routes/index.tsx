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
      <div class="relative flex flex-col space-y-6 max-w-128 h-full">
        <div class="flex flex-col space-y-2 w-fit">
          <div class="flex justify-between items-center">
            <div class="text-4xl font-bold">ANC Games</div>
          </div>
          <Description />
        </div>

        <ul class="grid grid-cols-2 gap-2 rounded-lg">
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
      class="active:shrink-sm hover:cursor-pointer rounded-xl flex flex-col gap-4 p-4 border-2 bg-manhattan-50"
      style={{
        "border-color": props.game.colors.background,
        color: props.game.colors.background,
      }}
      onclick={() => {
        window.location.href = `https://ancgames.com${props.game.endpoint}`;
      }}
    >
      <div class="flex flex-col space-y-2">
        <div class="text-2xl">{props.game.name}</div>
        <div class="text-xs">{props.game.description}</div>
      </div>
      {props.game.image && (
        <div class="flex flex-col space-y-2 w-full items-center">
          <div class="flex flex-col space-y-2 w-full items-center">
            <img
              src={props.game.image}
              alt={props.game.name}
              class="w-36 h-36 object-cover rounded-md"
            />
          </div>
        </div>
      )}
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
      My name is Andrew and I make simple, daily games. If you enjoy please
      share with your friends.
    </div>
  );
}
