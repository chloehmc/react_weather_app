import "./App.css";
import Weather from "./Weather";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Amsterdam" />

      <footer>
        <small>
          <a
            href="https://github.com/chloehmc/react_weather_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Open source code
          </a>{" "}
          by Chloe Comstock
        </small>
      </footer>
    </div>
  );
}
