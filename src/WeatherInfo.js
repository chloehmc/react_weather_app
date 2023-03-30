import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div>
        <FormattedDate date={props.data.date} />
      </div>
      <p className="description text-capitalize">{props.data.description}</p>
      <div className="row">
        <div className="col-6">
          {" "}
          <img src={props.data.icon} alt="props.data.description"></img>{" "}
          <WeatherTemperature celsius={props.data.temperature} />
        </div>

        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.data.feelsLike)}°C</li>
            <li>Humidity: {props.data.humidity}% </li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
