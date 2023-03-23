import React from "react";
import "./WeatherForecast.css"

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-days">Thu</div>
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" />{" "}
          <div className="WeatherForecast-max"> High: 10°C </div>
          <div className="WeatherForecast-min"> Low: 5°C </div>
        </div>
      </div>
    </div>
  );
}
