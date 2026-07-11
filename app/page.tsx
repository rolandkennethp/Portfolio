"use client";

import { useEffect, useState } from "react";
import FilmLoading from "./components/FilmLoading";
import OpeningCredits from "./components/OpeningCredits";
import Portfolio from "./components/Portfolio";

export default function Home() {
  const [filmFinished, setFilmFinished] = useState(false);
  const [creditsFinished, setCreditsFinished] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFilmFinished(true);
    }, 2500);

    const timer2 = setTimeout(() => {
      setCreditsFinished(true);
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <main>
      <Portfolio />

      {!creditsFinished && (
        <OpeningCredits
          visible={filmFinished}
          finished={creditsFinished}
        />
      )}

      {!filmFinished && (
        <FilmLoading />
      )}
    </main>
  );
}