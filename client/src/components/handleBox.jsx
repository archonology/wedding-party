import { useState } from "react";

const handleBox = () => {
  const boxstyle1 = {
    maxWidth: "980px",
    height: "auto",
    color: "#fef3f3",
    padding: "1.5em",
    paddingTop: ".3em",
    backgroundColor: "#0d0806ba",
    textAlign: "left",
    flexWrap: "wrap",
    transition: "1s ease-in-out",
  };

  const boxstyle2 = {
    width: "2vh",
    height: "auto",
    color: "#0d0806ba",
    padding: "1.5em",
    paddingTop: ".3em",
    backgroundColor: "black",
    textAlign: "left",
    flexWrap: "wrap",
    transition: "1s ease-in-out",
  };
  const [clicked, setClicked] = useState(false);
  const [boxStyle, setBoxStyle] = useState(boxstyle1);
  if (clicked) {
    setBoxStyle(boxstyle2);
    setClicked(false);
  } else {
    setBoxStyle(boxstyle1);
    setClicked(true);
  }
};

export default handleBox(boxStyle);