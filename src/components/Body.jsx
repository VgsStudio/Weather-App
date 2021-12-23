import React, { useState } from "react";
import Input from "./Body/Input";
import WeatherDays from "./Body/WeatherDays.jsx";

export default function Body() {
  const [cidade, setCidade] = useState();

  return (
    <div className="body">
      <Input />
      <h2 className="cidade">{cidade}</h2>
      <WeatherDays childChangeCidade={setCidade} />
    </div>
  );
}
