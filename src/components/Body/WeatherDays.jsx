import React from "react";
// import data from "../../teste.json";

export default function WeatherDays(props) {
  console.log('ta chegando:', props.data)
  let forecast = props.data.results.forecast.slice(0, 5);
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
