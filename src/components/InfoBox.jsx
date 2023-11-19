import * as React from "react";
import { useState } from "react";

import cheers from "../assests/champagnelights1-6.jpeg";
import fallpagne from "../assests/fallpagne.jpeg";
import nightpagne from "../assests/nightpagne.jpeg";
import cozy from "../assests/cozy.jpeg";
import gifts from "../assests/gifts.jpeg";
import eats from "../assests/eats-15.jpeg";
import beach from "../assests/beach.jpeg";
import family1 from "../assests/family1-3.jpeg";

import info from "./Info";

const InfoBox = () => {
  const [imageIndex, setIndex] = useState(0);
  const imgArray = [
    family1,
    fallpagne,
    cheers,
    nightpagne,
    cozy,
    gifts,
    eats,
    beach,
  ];
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
            <div
              className="textBox"
              style={{
                maxWidth: "580px",
                height: "auto",
                color: "white",
                padding: "1.5em",
                paddingTop: ".3em",
                backgroundColor: "#0d0806ba",
                textAlign: "left",
                flexWrap: "wrap",
                transition: "1s ease-in-out",
              }}
            >
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
                Click the button for more details!
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
