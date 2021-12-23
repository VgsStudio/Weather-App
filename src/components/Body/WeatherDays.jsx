import React, { useEffect } from "react";
import data from "../../teste.json";

export default function WeatherDays(props) {
  const fetchData = () => {
    return fetch(
      "https://api.hgbrasil.com/weather?key=e3bfc7bb&user_ip=remote",
      { mode: "no-cors" }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  props.childChangeCidade(data[0].results.city);

  let forecast = data[0].results.forecast.slice(0, 5);
  function getForecastDays() {
    return forecast.map((days) => {
      return (
        <div key={days.weekday} className="days">
          <div className="date">{days.date}</div>
          <div className="imgForecast">
            <img
              src={require(`../assets/${days.condition}.png`)}
              alt={days.description}
              className="imgDays"
            />
          </div>
          <div className="temperature">
            <div className="min">{days.min}°</div>
            <div className="max">{days.max}°</div>
          </div>
        </div>
      );
    });
  }

  return <div className="forecast">{getForecastDays()}</div>;
}
