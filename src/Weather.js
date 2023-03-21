import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      city: response.data.city,
      feelsLike: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
    });

    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
            <p><FormattedDate date={weatherData.date}/></p>
        <p className="description text-capitalize">{weatherData.description}</p>
        <div className="row">
          <div className="col-6">
            {" "}
            <img
              src={weatherData.icon}
              alt="weatherData.description"
            ></img>{" "}
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>

          <div className="col-6">
            <ul>
              <li>Feels like: {Math.round(weatherData.feelsLike)}°C</li>
              <li>Humidity: {weatherData.humidity}% </li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=06740ta7fb3c0b6bo8bced4f1a40e926&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
