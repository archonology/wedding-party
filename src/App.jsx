import { useState } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const boxstyle1 = {
    maxWidth: "580px",
    height: "auto",
    color: "#fef3f3",
    padding: "1.5em",
    paddingTop: ".3em",
    backgroundColor: "#0d0806ba",
    textAlign: "left",
    flexWrap: "wrap",
    zIndex: 0,
    transition: "1.5s ease-in-out",
  };

  const boxstyle2 = {
    width: "10px",
    height: "auto",
    color: "#0d0806ba",
    padding: "1.5em",
    paddingTop: ".3em",
    backgroundColor: "black",
    textAlign: "left",
    flexWrap: "wrap",
    zIndex: 0,
    transition: "1.5s ease-in-out",
  };
  const [clicked, setClicked] = useState(false);
  const [boxStyle, setBoxStyle] = useState(boxstyle1);

  const handleBox = () => {
    if (clicked) {
      setBoxStyle(boxstyle2);
      setClicked(false);
    } else {
      setBoxStyle(boxstyle1);
      setClicked(true);
    }
  };
  return (
    <>
      <ThemeProvider theme={darkTheme} boxStyle={boxStyle}>
        <Header />
        <div className="donate">
          <a
            href="https://buy.stripe.com/3csbIR2S89s03oA002"
            target="_blank"
            rel="nonreferrer"
          >
            <button className="donate-button">Give</button>
          </a>
        </div>
        <Home boxStyle={boxStyle} />
        <Footer />
        <div className="moveText">
          <button className="move-button" onClick={() => handleBox()}>
            {clicked ? (
              <>
                <ArrowBackIosIcon sx={{ height: 30, width: 30 }} />
              </>
            ) : (
              <>
                <ArrowForwardIosIcon sx={{ height: 30, width: 30 }} />
              </>
            )}
          </button>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
