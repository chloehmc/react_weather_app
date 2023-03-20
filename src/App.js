import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="App-container">
      

        <Weather />

      </div>
      <footer>
        <small>
          <a
            href="https://github.com/chloehmc/react_weather_app"
            target="_blank"
            rel="noreferrer"
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
