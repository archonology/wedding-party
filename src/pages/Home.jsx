import React, { useState } from "react";
import Player from "../components/Player";

const Home = () => {
  return (
    <>
      <div className="box">
        <div className="homeBanner1">
          <h2>Reed & Heidi's Post Wedding Party</h2>
          <p className="about">
            Heidi and Reed got married! Now it's time to party. Press play on
            the song below to get all the details!
          </p>
          <Player />
        </div>
      </div>
      <div className="homeBanner2">
        <h2>Where?</h2>
        <p className="about">Hoyt Lakes Community Center</p>
      </div>
      <div className="homeBanner3">
        <h2>When?</h2>
        <p className="about">October 5th, 2023</p>
      </div>
      <div className="homeBanner4">
        <h2>Lodging?</h2>
        <p className="about">Hoyt Lakes Country Inn</p>
      </div>
      <div className="homeBanner5"></div>
      <div className="homeBanner6"></div>
      <div className="homeBanner7"></div>
      <div className="homeBanner8"></div>
    </>
  );
};

export default Home;
