import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h2>{Math.round(props.data.temperature)}°</h2>
      <hr />
      <h1>
        <WeatherIcon code={props.data.icon} size={72} />
      </h1>
      <ul>
        <li>{props.data.description}</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind}mph</li>
      </ul>
    </div>
  );
}
