import * as React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import cheers from "../assests/champagnelights1-6.jpeg";
import sparkle from "../assests/champagnelights1-2.jpeg";
import champagne from "../assests/champagnelights1-11.jpeg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const useAudio = () => {
  const [audio] = useState(new Audio());
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  }, [playing]);

  return [playing, toggle];
};

const Home = () => {
  const theme = useTheme();
  const [playing, toggle] = useAudio();

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${champagne})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "10em",
        }}
      >
        <div
          className="textBox"
          style={{
            maxWidth: "600px",
            height: "auto",
            color: "white",
            padding: "1.5em",
            paddingTop: ".3em",
            backgroundColor: "#0d0806ba",
            textAlign: "left",
            // marginBottom: "30em",
          }}
        >
          <p
            style={{
              fontSize: "20px",
            }}
          >
            YOU AND YOUR FAMILY ARE INVITED
          </p>
          <h1
            style={{
              fontSize: "54px",
              fontWeight: "700",
              paddingRight: "1.1em",
              lineHeight: "1.4",
            }}
          >
            Heidi & Reed's
            <br />
            Post-Wedding Party
          </h1>
          <p
            className="about"
            style={{
              textAlign: "left",
              padding: ".3em 1em 1em 1em",
            }}
          >
            On 12/31/23, Heidi & Reed were married in their home with a small
            ceremony surrounded by their three daugthers and parents. They
            wanted a winter wedding by the fireplace, but wanted a big, cozy
            chamapagne and October wedding party in Heidi's home town of Hoyt
            Lakes, MN.
            <br />
            <hr />
            Click the button for more details!
          </p>
          <button className="proceed-btn">Details</button>
        </div>
        {/* <img src={cheers} alt="cheers with champagne" hero /> */}
        {/* <img src={sparkle} alt="champagne and sparklers" hero />
            <img src={champagnelight1} alt="champagne and stars" hero /> */}

        {/* <p className="about">
              Heidi and Reed got married! Now it's time to party. Press play on
              the song below and scroll to get the details!
            </p>
            <Player /> */}
      </div>
      {/* <div
        className="banner"
        style={{
          backgroundImage: `url(${sparkle})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      ></div> */}
      {/* <div className="hb homeBanner2">
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
          </div> */}

      <div className="toTop">
        <button
          className="toTop-button"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
          }}
        >
          <PlayArrowIcon sx={{ height: 30, width: 30 }} />
        </button>
      </div>
    </>
  );
};

export default Home;
