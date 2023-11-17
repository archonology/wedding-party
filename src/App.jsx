import { useState } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
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
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
