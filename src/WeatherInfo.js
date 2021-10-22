import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h2>{Math.round(props.data.temperature)}°</h2>
      <img
        src={props.data.icon}
        alt={props.data.description}
        className="icon"
      />
      <ul>
        <li className="text-capitalize">{props.data.description}</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind}mph</li>
      </ul>
    </div>
  );
}
