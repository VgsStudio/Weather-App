import React, { useState, useEffect } from "react";
import Input from "./Body/Input";
import WeatherDays from "./Body/WeatherDays.jsx";

export default function Body() {
  const [cidade, setCidade] = useState('São Paulo,SP');
  const [data, setData] = useState();

  const fetchData = () => {
    let url = ''
    if(cidade === ''){
      url = `https://api.hgbrasil.com/weather?format=json-cors&key=ccf3a146`
    }else{
      url = `https://api.hgbrasil.com/weather?format=json-cors&key=ccf3a146&city_name=${cidade}`
    }
    return fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, [cidade]);

  return (
    <div className="body">
      <Input childChangeCidade={(value) => setCidade(value)}/>
      <h2 className="cidade">{cidade}</h2>
      {data?
        <WeatherDays data={data}/>
        :
        <div>Loading...</div>
      }
      
    </div>
  );
}
