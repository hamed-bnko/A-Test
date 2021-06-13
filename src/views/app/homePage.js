import React from "react";
import NavBars from "../common/navBars";
import MainSection from "./components/mainSections";
import OurThemsSection from "./components/ourTeamsSection";
import GamesSection from "./components/gamesSection";

const HomePage = () => {
  return (
    <>
      <MainSection />
      <OurThemsSection />
      <GamesSection />
    </>
  );
};

export default HomePage;
