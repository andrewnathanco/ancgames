import { BskyIcon, GithubIcon, InstagramIcon } from "../../util/icons";

export function Footer() {
  return (
    <div class="relative flex flex-row space-y-6 p-8 w-128 bottom-0 left-0">
      <div class="flex flex-row gap-2 items-center justify-between w-full">
        <div class=" flex flex-row items-center gap-2">
          <div class="flex flex-row items-center justify-end gap-4">
            A Pickup, LLC Product
          </div>
          <div class="size-1 bg-manhattan-500 rounded-full"></div>
          <div class="flex flex-row items-center justify-end gap-4">2025</div>
        </div>
        <div class="flex flex-row items-center justify-end gap-4">
          <a
            href="https://bsky.app/profile/ancgames.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BskyIcon />
          </a>
          <a
            href="https://github.com/andrewnathanco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.instagram.com/andrewnathanco/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
