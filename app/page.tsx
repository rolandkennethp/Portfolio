"use client";

import { useEffect, useState } from "react";
import FilmLoading from "./components/FilmLoading";
import OpeningCredits from "./components/OpeningCredits";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import FeaturedStories from "./components/FeaturedStories";
import Footer from "./components/Footer";
import AboutIntro from "./(routes)/about/AboutIntro";
import InfoCards from "./components/InfoCards";

export default function Home() {
  
  const [filmFinished, setFilmFinished] = useState(false);
  const [creditsFinished, setCreditsFinished] = useState(false);

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
    <main className="min-h-screen w-full bg-black">
      <Navbar />
      <Hero />
      <AboutIntro/>
      <InfoCards/>
      <FeaturedStories />
      <Footer />

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