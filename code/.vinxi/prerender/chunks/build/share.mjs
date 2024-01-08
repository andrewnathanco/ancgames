import { createComponent, ssr, ssrHydrationKey, ssrAttribute, escape } from 'file:///Users/andrew/Documents/Dev/Projects/andrewnathanco/github/challenge/code/node_modules/solid-js/web/dist/server.js';
import { T as T$1, z, O, s, b } from './index-08505c67.mjs';
import { createContext, untrack, useContext } from 'file:///Users/andrew/Documents/Dev/Projects/andrewnathanco/github/challenge/code/node_modules/solid-js/dist/server.js';
import 'file:///Users/andrew/Documents/Dev/Projects/andrewnathanco/github/challenge/code/node_modules/@solid-primitives/storage/dist/index.js';
import 'file:///Users/andrew/Documents/Dev/Projects/andrewnathanco/github/challenge/code/node_modules/solid-js/store/dist/server.js';

function y(e, a) {
  if (e == null)
    throw new Error(a);
  return e;
}
function S(e, a) {
  const t = new URLSearchParams(e);
  Object.entries(a).forEach(([o, s]) => {
    s == null || s === "" ? t.delete(o) : t.set(o, String(s));
  });
  const r = t.toString();
  return r ? `?${r}` : "";
}
const k = createContext();
createContext();
const m = () => y(useContext(k), "Make sure your app is wrapped in a <Router />"), C = () => m().navigatorFactory(), j = () => m().location, A = () => {
  const e = j(), a = C(), t = (r, o) => {
    const s = untrack(() => e.pathname + S(e.search, r) + e.hash);
    a(s, { scroll: false, resolve: false, ...o });
  };
  return [e.query, t];
}, _ = ["<div", ' class="block"><div class="z-10 absolute top-0 left-0 right-0 bottom-0 justify-center items-center bg-black flex opacity-70"></div><div class="z-20 absolute top-0 left-0 right-0 bottom-0 bg-sun-50 flex m-4 rounded-lg"><div id="dialog-content" class="p-8 flex flex-col space-y-2 w-full"><div id="dialog-header" class="flex flex-col text-3xl space-y-2"><div class="text-xl italic"><a', ` class="underline">play today's game</a></div><div>`, '</div></div><div class="flex-1 flex flex-col justify-center items-center">', '</div><div class="flex flex-col space-y-2"><a href="', '" target="_blank" rel="noopener noreferrer" class="border-2 border-sahara-800 rounded-lg w-full p-2 text-sun-50 bg-sahara-800 flex items-center justify-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"></path></svg><div>Define</div></a></div></div></div></div>'];
function T() {
  var _a, _b, _c, _d;
  const [e, a] = A(), t = parseInt((_a = e.status) != null ? _a : "1"), r = parseInt((_b = e.word) != null ? _b : "0"), o = r <= b.length ? b[r] : b[0], s$1 = e.name;
  return ssr(_, ssrHydrationKey(), ssrAttribute("href", escape("/", true), false), t == z.UserWon ? `${(_c = escape(s$1)) != null ? _c : "They"} won` : t == z.ComputerWon ? `${(_d = escape(s$1)) != null ? _d : "They"} lost` : "", escape(createComponent(O, { get tiles() {
    return o.split("").map((p) => ({ letter: p, author: t == z.UserWon ? s.User : s.Computer }));
  } })), `https://www.merriam-webster.com/dictionary/${escape(o, true)}`);
}
const P = () => [createComponent(T$1, { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0" }), createComponent(T, {})];

export { P as default };
//# sourceMappingURL=share.mjs.map
