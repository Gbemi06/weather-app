import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { WeatherResponse } from "../types/WeatherInterface";

function ForecastAPI() {
  const [forecast, setForecast] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    fetchData();
  }, []);
  const API_Key = "0592e322c614b6c0a7821d0cbd84d877";

  let fetchData = async () => {
    let response = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast/daily?lat=60.1699&lon=24.9384&cnt=14&appid=" +
        API_Key
    );
    let data = await response.json();
    console.log(data);
    // setForecast(data);
  };
  return <div>hello</div>;
}

export default ForecastAPI;
