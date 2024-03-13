import { useState } from "react";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Create from "./pages/Create";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "vite/modulepreload-polyfill";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("id_token");
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  // link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
    // transition: ".3s ease-in-out",
    visibility: "visible"
  };

  const boxstyle2 = {
      visibility: "hidden"
  };
  const [clicked, setClicked] = useState(false);
  const [boxStyle, setBoxStyle] = useState(boxstyle1);

  const handleBox = () => {
    if (clicked) {
      setBoxStyle(boxstyle1);
      setClicked(false);
    } else {
      setBoxStyle(boxstyle2);
      setClicked(true);
    }
  };
  return (
    <>
      {/* <ApolloProvider client={client}> */}
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
      {/* </ApolloProvider> */}
    </>
  );
}

export default App;
