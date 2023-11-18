import * as React from "react";
import { useEffect, useState } from "react";

import cheers from "../assests/champagnelights1-6.jpeg";
import sparkle from "../assests/champagnelights1-2.jpeg";
import champagne from "../assests/champagnelights1-11.jpeg";
import family1 from "../assests/family1-3.jpeg";
import family2 from "../assests/family2-13.jpeg";
import family4 from "../assests/family2-15.jpeg";
import family5 from "../assests/family2-16.jpeg";
import handr from "../assests/handr-14.jpeg";

import info from "./Info";

const InfoBox = () => {
  const [imageIndex, setIndex] = useState(0);
  const imgArray = [champagne, sparkle, family1, family4, handr];
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
              transition: "2s ease-in-out",
            }}
          >
            <div
              className="textBox"
              style={{
                maxWidth: "650px",
                minWidth: "395px",
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
                  fontSize: "21px",
                }}
              >
                {info[textIndex].preheading}
              </p>
              <h1
                style={{
                  fontSize: "44px",
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
                  fontSize: "20px",
                }}
              >
                {info[textIndex].details}
                <br />
                <hr />
                Click the button for more details!
              </p>
              <button className="proceed-btn" onClick={(e) => handleNext(e)}>
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
