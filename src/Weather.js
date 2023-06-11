import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
 // let [icon, setIcon] = useState("");

  function showForecast(response) {
    setTemp(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setDescription(response.data.weather[0].description);
   // setIcon(response.data.weather[0].icon);
  }

  function handleSubmit(event) {
    event.preventDefault();
         let apiKey = "42776befd778795724824300403642a2";
    let unit = "metric";
    let headlineURL = "https://api.openweathermap.org/data/2.5/weather?";
    let url = `${headlineURL}q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(showForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <h1>Weather App</h1>;
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
        <input
          type="search"
          className="w-100"
          placeholder="Enter a city..."
          autoFocus="on"
          onChange={updateCity}
        ></input></div>
        <div className="col-3">
        <input  type="submit" className="btn btn-primary w-100"  value="Search"></input>
      </div>
      </div>
      </form>
      <div className="row">
        <div className="col-6">
          <ul>
          <h2>London {temp} ºC</h2></ul>
        </div>
      <div className="List col-6">
        <ul>
          <li>Description: {description}</li>
          <li>Humidity: {humidity} %</li>
          <li>Wind: {wind} km/h</li>
        </ul>
        </div>
      </div>
    </div>
  );
  }