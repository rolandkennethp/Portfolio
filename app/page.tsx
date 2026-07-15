"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import FilmLoading from "./components/FilmLoading";
import OpeningCredits from "./components/OpeningCredits";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import FeaturedStories from "./components/FeaturedStories";
import Footer from "./components/Footer";
import AboutIntro from "./(routes)/about/AboutIntro";
import InfoCards from "./components/InfoCards";

const INTRO_SESSION_KEY = "intro-seen";

export default function Home() {
  const [hasSeenIntro, setHasSeenIntro] = useState<boolean | null>(null);
  const [filmFinished, setFilmFinished] = useState(false);
  const [creditsFinished, setCreditsFinished] = useState(false);

  useLayoutEffect(() => {
    const seen = sessionStorage.getItem(INTRO_SESSION_KEY) === "true";
    setHasSeenIntro(seen);

    if (seen) {
      setFilmFinished(true);
      setCreditsFinished(true);
    }
  }, []);

  useEffect(() => {
    if (!creditsFinished) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [creditsFinished]);

  useEffect(() => {
    // Only run the intro sequence the first time this session
    if (hasSeenIntro !== false) return;

    const timer1 = setTimeout(() => {
      setFilmFinished(true);
    }, 2500);

    const timer2 = setTimeout(() => {
      setCreditsFinished(true);
      sessionStorage.setItem(INTRO_SESSION_KEY, "true");
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [hasSeenIntro]);

  // Avoid rendering anything until we know whether the intro should play
  if (hasSeenIntro === null) {
    return <main className="min-h-screen w-full bg-black" />;
  }

  return (
    <main className="min-h-screen w-full bg-black">
      <Navbar />
      <Hero />
      <AboutIntro />
      <InfoCards />
      <FeaturedStories />
      <Footer />

      {!creditsFinished && (
        <OpeningCredits visible={filmFinished} finished={creditsFinished} />
      )}

      {!filmFinished && <FilmLoading />}
    </main>
  );
}
