import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input placeholder="Enter a city" className="form-control" />
                  </div>
                  <div className="col-3">
                  <input type="submit" value="Search" className="btn btn-primary" />
                  </div>
        </div>
      </form>
      <h1>Amsterdam</h1>
      <h4>Monday, March 20, 00:00</h4>
      <h5>Rainy</h5>
      <div className="row">
        <div className="col-6">
          {" "}
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="icon"
          ></img>{" "}
          0 °C
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
