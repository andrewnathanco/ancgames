import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { Meta, MetaProvider, Title } from "@solidjs/meta";

export default function App() {
  return (
    <Router
      base={import.meta.env.SERVER_BASE_URL}
      root={(props) => (
        <>
          <MetaProvider>
            <Title>ANC Games</Title>
            <Meta name="description" content="Daily puzzles" />
            <Meta
              name="keywords"
              content="ANCGames, daily puzzles, puzzle games, brain games, online puzzles, daily challenge, wordle, nytgames, the crossword, nyt, anc"
            />
            <Meta name="author" content="Andrew Cohen" />
            <Suspense>{props.children}</Suspense>
          </MetaProvider>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
