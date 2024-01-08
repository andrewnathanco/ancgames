import { createComponent, ssr, ssrHydrationKey, escape } from 'file:///Users/andrew/Documents/Dev/Projects/andrewnathanco/github/challenge/code/node_modules/solid-js/web/dist/server.js';
import { createContext, createSignal, createEffect, useContext, onCleanup } from 'file:///Users/andrew/Documents/Dev/Projects/andrewnathanco/github/challenge/code/node_modules/solid-js/dist/server.js';
import { A as A$1, U, W, F as F$1, $ as $$1, T, S as S$1, J as J$1, O as O$1, z, X as X$1, N, b, s, w, Q as Q$1, P } from './index-08505c67.mjs';
import 'file:///Users/andrew/Documents/Dev/Projects/andrewnathanco/github/challenge/code/node_modules/@solid-primitives/storage/dist/index.js';
import 'file:///Users/andrew/Documents/Dev/Projects/andrewnathanco/github/challenge/code/node_modules/solid-js/store/dist/server.js';

async function R() {
  const e = {}.VITE_DB_URL, t = await (await fetch(`${e}/GET/challenge_games-played`)).json(), n = parseInt(t.GET);
  return Number.isNaN(n) ? void 0 : n;
}
const O = ["<div", ' class="flex flex-col space-y-2"><div class="flex space-x-2 justify-center items-center"><div class="text-4xl">Challenge #<!--$-->', '<!--/--></div><div id="game-version" class="font-semibold w-min h-min text-stack-700 text-xs border-2 px-1 border-stack-700 rounded-lg">', "</div></div><!--$-->", "<!--/--></div>"], Z = ["<div", ' class="flex flex-col space-y-1 items-start"><div id="games-played" class="text-contessa-500 text-4xl">', '</div><div class="text-md">Have Played</div></div>'];
function F() {
  var _a;
  const [e, s] = A$1(), [t, n] = createSignal(void 0), [d, b] = createSignal((_a = {}.VITE_VERSION) != null ? _a : "v0.1.0");
  return createEffect(() => {
    W() != e.game_key && (localStorage.removeItem("challenge_game"), s(F$1()));
  }), createEffect(() => {
    R().then((w) => {
      n(w);
    });
  }), ssr(O, ssrHydrationKey(), escape(e.game_key), escape(d()), t() ? ssr(Z, ssrHydrationKey(), escape(t())) : escape([]));
}
const B = createContext();
function Y(e) {
  const [s, t] = createSignal(false), n = [s, { close() {
    t(false);
  }, open() {
    t(true);
  } }];
  return createComponent(B.Provider, { value: n, get children() {
    return e.children;
  } });
}
function C() {
  return useContext(B);
}
const J = ["<button", ' class="', '">', "</button>"], Q = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], X = ["A", "S", "D", "F", "G", "H", "J", "K", "L"], q = ["Z", "X", "C", "V", "B", "N", "M"];
function $(e) {
  const [s, t] = A$1(), n = e.letter;
  return ssr(J, ssrHydrationKey(), `${s.available_letters.includes(n.toLowerCase()) ? "bg-stack-400 border-stack-400 text-sun-50" : ""} ${s.available_letters.includes(n.toLowerCase()) ? "" : "bg-stack-200 border-stack-200 text-sun-50"} w-8 h-16 rounded-lg cursor-pointer border-2 `, escape(n));
}
function ee() {
  return Q.map((e) => createComponent($, { get letter() {
    return e.toString();
  } }));
}
function te() {
  return X.map((e) => createComponent($, { get letter() {
    return e.toString();
  } }));
}
function se() {
  return q.map((e) => createComponent($, { get letter() {
    return e.toString();
  } }));
}
const re = ["<div", ' id="keyboard" class="p-4 flex flex-col space-y-1 w-full items-center text-sm text-mallard-900"><div id="top-row" class="flex flex-row space-between space-x-1">', '</div><div id="middle-row" class="flex flex-row space-between space-x-1">', '</div><div id="bottom-row" class="flex flex-row space-between space-x-1"><button class="border-2 p-1 h-16 bg-stack-400 border-stack-400 text-sun-50 rounded-lg cursor-pointer items-center justify-center flex">ENTER</button><!--$-->', '<!--/--><button class="border-2 w-12 h-16 bg-stiletto-600 border-stiletto-600 text-sun-50 rounded-lg cursor-pointer justify-center items-center flex"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z" clip-rule="evenodd"></path></svg></button></div></div>'];
function le() {
  const [e, s$1] = A$1(), [t, n] = U(), [d, { open: b$1 }] = C();
  createEffect(() => {
    let a = e.current_tiles.map((o) => o.letter.toLowerCase()).join("");
    if (b.includes(a) && t.status == z.Current) {
      let m = { status: e.current_tiles[e.current_tiles.length - 1].author == s.User ? z.ComputerWon : z.UserWon, tiles: e.current_tiles };
      n(m), s$1("sessions", (D) => [...D, m]), b$1();
    }
  });
  const w$1 = () => {
    let a = !e.available_letters.includes(e.selected_letter), u = t.status == z.Current;
    a || !u || e.selected_letter != w && (s$1("current_tiles", (o) => {
      const m = { author: s.User, letter: e.selected_letter };
      return [...o, m, ...Q$1([...e.current_tiles, m])];
    }), s$1("selected_letter", w), s$1("available_letters", P(e.current_tiles.map((o) => o.letter).join("").toLowerCase())));
  }, y = () => {
    if (!(t.status == z.Current))
      return;
    if (e.selected_letter !== w) {
      s$1("selected_letter", w);
      return;
    }
    e.current_tiles.length > e.starting_tiles.length && (s$1("current_tiles", (o) => [...o.slice(0, -2)]), s$1("available_letters", P(e.current_tiles.map((o) => o.letter).join("").toLowerCase())));
  }, _ = (a) => {
    a.preventDefault();
    const u = a.code;
    if (u.startsWith("Key")) {
      const o = u.slice(3);
      s$1("selected_letter", o.charAt(0).toLowerCase() || "");
    }
    u === "Enter" && w$1(), u === "Backspace" && y();
  };
  return createEffect(() => {
    window.addEventListener("keydown", _), onCleanup(() => {
      window.removeEventListener("keydown", _);
    });
  }), ssr(re, ssrHydrationKey(), escape(createComponent(ee, {})), escape(createComponent(te, {})), escape(createComponent(se, {})));
}
const ne = ["<div", ' class="flex flex-col justify-between space-y-2 h-full w-full"><!--$-->', "<!--/--><!--$-->", '<!--/--><div class="w-full flex space-x-1"><button class="flex items-center space-x-2 justify-center rounded-lg p-2 bg-stone-700 text-sun-50 w-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg><div>Reset</div></button><!--$-->', "<!--/--></div><!--$-->", "<!--/--></div>"], oe = ["<a", ' href="', '" target="_blank" rel="noopener noreferrer" class="border-2 border-sahara-800 rounded-lg w-full p-2 text-sun-50 bg-sahara-800 flex items-center justify-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"></path></svg><div>Define</div></a>'], A = ["<button", ' class="flex items-center space-x-2 justify-center rounded-lg p-2 bg-stiletto-600 text-sun-50 w-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"></path></svg><div>Challenge</div></button>'], S = ["<button", ' class="border-2 border-mallard-700 rounded-lg w-full p-2 text-sun-50 bg-mallard-700 flex items-center justify-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"></path></svg><div>Stats</div></button>'];
function ae() {
  C();
  let [e, s] = U(), [t, n] = A$1();
  return ssr(ne, ssrHydrationKey(), escape(createComponent(O$1, {})), escape(createComponent(le, {})), e.status != z.Current ? ssr(oe, ssrHydrationKey(), `https://www.merriam-webster.com/dictionary/${escape(t.current_tiles.map((d) => d.letter.toLowerCase()).join(""), true)}`) : A[0] + ssrHydrationKey() + A[1], e.status != z.Current && e.status != z.Challenge ? S[0] + ssrHydrationKey() + S[1] : escape([]));
}
const ie = ["<div", ' class="', '"><div class="z-10 absolute top-0 left-0 right-0 bottom-0 justify-center items-center bg-black flex opacity-70"></div><div class="z-20 absolute top-0 left-0 right-0 bottom-0 bg-sun-50 flex m-4 rounded-lg"><div id="dialog-content" class="p-8 flex flex-col space-y-2 w-full"><div id="dialog-header" class="flex justify-between items-center text-3xl w-full"><div>', '</div><button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg></button></div><div class="flex-1 flex flex-col justify-center items-center">', '</div><div class="flex flex-col space-y-2"><div id="timer" class="flex flex-col space-y-1 items-center"><div id="time" class="text-3xl">', '</div><div id="text" class="text-2xl">Next Challenge</div></div><button class="border-2 border-stone-700 rounded-lg w-full p-2 text-sun-50 bg-stone-700 flex items-center justify-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clip-rule="evenodd"></path></svg><div>Try Again</div></button><button class="border-2 border-mallard-700 rounded-lg w-full p-2 text-sun-50 bg-mallard-700 flex items-center justify-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clip-rule="evenodd"></path></svg><div>Share</div></button><a href="', '" target="_blank" rel="noopener noreferrer" class="border-2 border-sahara-800 rounded-lg w-full p-2 text-sun-50 bg-sahara-800 flex items-center justify-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"></path></svg><div>Define</div></a></div></div></div></div>'];
function ce() {
  const [e, s] = A$1(), [t, n] = U(), [d, { open: b, close: w }] = C(), [y, _] = createSignal(X$1());
  return createEffect(() => {
    setInterval(() => {
      _(X$1());
    }, 1e3);
  }), ssr(ie, ssrHydrationKey(), `${d() ? "" : "hidden"} ${d() ? "block" : ""}`, t.status == z.UserWon ? "You Won" : t.status == z.ComputerWon ? "Computer Won" : "", t.status != z.Current ? escape(createComponent(O$1, { get tiles() {
    return e.current_tiles.map((a) => ({ ...a, author: N(e.current_tiles[e.current_tiles.length - 1].author) }));
  } })) : escape([]), escape(y()), `https://www.merriam-webster.com/dictionary/${escape(e.current_tiles.map((a) => a.letter.toLowerCase()).join(""), true)}`);
}
const de = ["<div", ' class="w-full flex h-full flex-col justify-center items-center"><div class="flex text-lg justify-between flex-col p-4 space-y-4 h-full text-stack-700 w-96"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></div></div>"], pe = () => {
  let e = createSignal(false), [s, t] = A$1(), [n, d] = U();
  return createContext(e, { name: "info_dialog" }), createEffect(() => {
    s.game_key != W() && (localStorage.removeItem("challenge_game"), localStorage.removeItem("challenge_session"), t({ ...F$1() }), d($$1())), t("game_key", W());
  }), [createComponent(T, { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0" }), createComponent(S$1, { get children() {
    return createComponent(J$1, { get children() {
      return createComponent(Y, { get children() {
        return ssr(de, ssrHydrationKey(), escape(createComponent(F, {})), escape(createComponent(ae, {})), escape(createComponent(ce, {})));
      } });
    } });
  } })];
};

export { pe as default };
//# sourceMappingURL=index.mjs.map
