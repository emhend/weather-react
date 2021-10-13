import React from "react";
import ReactDom from "react-dom";

import "./styles.css";
import Search from "./Search";

function App() {
  return (
    <div className="web">
      <div className="App">
        <h1>Weather App</h1>
        <Search />
      </div>
      <footer className="footer">
        <a href="https://github.com/emhend/weather-react">Open Source Code</a>{" "}
        by <a href="https://lemieuxcodes.com/">Emily Henderson</a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
