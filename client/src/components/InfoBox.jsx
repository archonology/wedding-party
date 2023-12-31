import * as React from "react";
import { useState } from "react";
import cheers from "../assests/champagnelights1-6.jpeg";
import fallpagne from "../assests/fallpagne.jpeg";
import nightpagne from "../assests/nightpagne.jpeg";
import cozy from "../assests/cozy.jpeg";
import gifts from "../assests/gifts.jpeg";
import eats from "../assests/eats-15.jpeg";
import party from "../assests/party.jpeg";
import beach from "../assests/beach.jpeg";
import family1 from "../assests/family1-3.jpeg";
import info from "./Info";
import snow from "../assests/snow.jpeg";
import trampo from "../assests/trampo.jpg";
import alma from "../assests/alma.jpg";
import hr from "../assests/hr.jpg";
import smgifts from "../assests/smgifts.jpg";
import fallcolors from "../assests/fallcolors.jpg";
import fallcolorsm from "../assests/fallcolorsm.jpeg";
import hotel from "../assests/hotel.jpeg";
import hotelsm from "../assests/hotelsm.jpeg";
import sparkle from "../assests/sparkleschamp.jpeg";
import snacks from "../assests/snacks.jpeg";

const InfoBox = ({ boxStyle }) => {
  const breakpoint = 570;
  const [imageIndex, setIndex] = useState(0);

  let imgArray = [
    family1,
    fallcolors,
    cozy,
    nightpagne,
    sparkle,
    gifts,
    eats,
    beach,
  ];
  if (window.innerWidth < breakpoint) {
    imgArray = [hr, fallcolorsm, trampo, hotelsm, alma, smgifts, snacks, snow];
  } else {
    imgArray = [
      family1,
      fallcolors,
      cozy,
      hotel,
      sparkle,
      gifts,
      eats,
      beach,
    ];
  }

  const [textIndex, setTextIndex] = useState(0);

  const handleNext = function (e) {
    e.preventDefault();
    if (imageIndex === imgArray.length - 1) {
      setIndex(imageIndex - (imgArray.length - 1));
    } else {
      setIndex(imageIndex + 1);
    }
    if (textIndex === info.length - 1) {
      setTextIndex(textIndex - (info.length - 1));
    } else {
      setTextIndex(textIndex + 1);
    }
  };

  return (
    <>
      {info[textIndex] ? (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${imgArray[imageIndex]})`,
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
              transition: "1.5s ease-in-out",
            }}
          >
            <div className="textBox" style={boxStyle}>
              <p
                style={{
                  fontSize: "2.5vh",
                }}
              >
                {info[textIndex].preheading}
              </p>
              <h1
                style={{
                  fontSize: "3.5vh",
                  fontWeight: "700",
                  lineHeight: "1.4",
                }}
              >
                {info[textIndex].heading1}
                <br />
                {info[textIndex].heading2}
              </h1>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "2.1vh",
                }}
              >
                {info[textIndex].details}
                <br />
                <hr />
                Click below or INFO above for more details!
              </p>
              <button
                className="proceed-btn"
                style={{ fontSize: "2.1vh" }}
                onClick={(e) => handleNext(e)}
              >
                {info[textIndex].btnText}
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default InfoBox;
