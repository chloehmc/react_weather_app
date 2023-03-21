import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
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
      <h1>Amsterdam</h1>
      <p>Monday, March 20, 00:00</p>
      <p className="description">Rainy</p>
      <div className="row">
        <div className="col-6">
          {" "}
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="icon"
          ></img>{" "}
          <span className="temperature">0</span>
          <span className="unit">°C</span>
        </div>

        <div className="col-6">
          <ul>
            <li>Feels like: 0 °C</li>
            <li>Humidity: 0 % </li>
            <li>Wind: 0km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
