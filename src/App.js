import React from "react";
import Weather from "./Weather";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Weather defaultCity="Austin" />
    </div>
  );
}
