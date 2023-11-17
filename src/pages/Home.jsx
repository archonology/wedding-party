import React, { useState } from "react";
import Player from "../components/Player";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const Home = () => {
  // const [visibility, setVisibility] = useState({ display: "none" });
  // function showButton() {
  //   setVisibility({ display: "block" });
  // }
  return (
    <>
      <div className="box">
        <div className="lilBox">
          <div className="hb homeBanner1">
            <h1>Heidi & Reed's Post Wedding Party</h1>
            <p className="about">
              Heidi and Reed got married! Now it's time to party. Press play on
              the song below and scroll to get the details!
            </p>
            <Player />
          </div>
          <div className="hb homeBanner2">
            <h2>Where?</h2>
            <p className="about">
              Hoyt Lakes Community Center,
              <br />
              101 Kennedy Memorial Drive
              <br />
              Hoyt Lakes, MN 55750
            </p>
          </div>
          <div className="hb homeBanner3">
            <h2>When?</h2>
            <p className="about">
              3pm, October 5th
              <br />
              2024
            </p>
          </div>
          <div className="hb homeBanner4">
            <h2>Lodging?</h2>
            <p className="about">
              Hoyt Lakes Country Inn,
              <br />
              99 Kennedy Memorial Drive
              <br />
              Hoyt Lakes, MN 55750
            </p>
          </div>
          <div className="hb homeBanner5">
            <p className="about">
              We have a wedding Block of rooms reserved. If you call:
              <br />
              <span>(218) 225-3555</span>
              <br />
              and reserve a room before September 2024, you can snag one! And at
              a discount!
              <br />
              There is a pool. But they don't have a website. It was hacked by
              rogue online bingo pirates.
            </p>
          </div>
          <div className="hb homeBanner6">
            <h2>Attire?</h2>
            <p className="about">
              The Attire is 'champagne cozy',
              <br />
              so wear whatever you like to wear
              <br />
              when you're having champagne!
              <br />
              🍾🥂
            </p>
          </div>
          <div className="hb homeBanner7">
            <h2>Bring?</h2>
            <p className="about">
              Gifts are welcome, But we're at a crossroads and short on space,
              So cash gifts are the most welcome. You can use the gift button
              floating below if you wish!
            </p>
          </div>
          <div className="hb homeBanner8">
            <h2>Eats?</h2>
            <p className="about">
              Grilled foods, drinks, and treats provided! If you'd like to bring
              a dish, drink, or treat, please coordinate with Reed or Heidi.
            </p>
          </div>
        </div>
      </div>
      <div className="toTop">
        <button
          className="toTop-button"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
          }}
        >
          <KeyboardArrowUpIcon fontSize="large" />
        </button>
      </div>
    </>
  );
};

export default Home;
