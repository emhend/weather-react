import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "343e26b3ffb2c17a61d6a1123defd48c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="App">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city..."
              className="form"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="button" />
          </form>
          <p className="date">
            <FormattedDate date={weatherData.date} />
          </p>
          <WeatherInfo data={weatherData} />
        </div>
        <footer className="footer">
          <a href="https://github.com/emhend/weather-react">Open Source Code</a>{" "}
          by <a href="https://lemieuxcodes.com/">Emily Henderson</a>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
