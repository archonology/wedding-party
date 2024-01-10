import * as React from "react";
import { useState } from "react";
import info from "./Info";
import welcome from "../assests/wed4.jpeg";
import welcomeSM from "../assests/wed2.jpeg";
import when from "../assests/wed14.jpeg";
import whenSM from "../assests/wed1.jpeg";
import where from "../assests/wed3.jpeg";
import whereSM from "../assests/wed11.jpeg";
import lodge from "../assests/wed5.jpeg";
import lodgeSM from "../assests/wed9.jpeg";
import code from "../assests/family1-3.jpeg";
import codeSM from "../assests/alma.jpg";
import gifts from "../assests/wed16.jpeg";
import giftsSM from "../assests/wed8.jpeg";
import eats from "../assests/eats-15.jpeg";
import eatsSM from "../assests/snacks.jpeg";
import beach from "../assests/beach.jpeg";
import snowSM from "../assests/snow.jpeg";

const InfoBox = ({ boxStyle }) => {
  const breakpoint = 570;
  const [imageIndex, setIndex] = useState(0);

  let imgArray = [welcome, when, where, lodge, code, gifts, eats, beach];
  if (window.innerWidth < breakpoint) {
    imgArray = [
      welcomeSM,
      whenSM,
      whereSM,
      lodgeSM,
      codeSM,
      giftsSM,
      eatsSM,
      snowSM,
    ];
  } else {
    imgArray = [welcome, when, where, lodge, code, gifts, eats, beach];
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
              width: "100dvw",
              height: "100dvh",
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
                  fontSize: "2.5dvh",
                }}
              >
                {info[textIndex].preheading}
              </p>
              <h1
                style={{
                  fontSize: "3.5dvh",
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
                  fontSize: "2.1dvh",
                }}
              >
                {info[textIndex].details}
                <br />
                <hr />
                Click below or INFO above for more details!
              </p>
              <button
                className="proceed-btn"
                style={{ fontSize: "2.1dvh" }}
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
