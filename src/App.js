import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Weather city="London" />
    </div>
  );
}

export default App;
