import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `the weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "343e26b3ffb2c17a61d6a1123defd48c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Loader
      type="Puff"
      color="#cc2626"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
