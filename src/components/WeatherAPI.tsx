import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { WeatherResponse } from "../types/WeatherInterface";

interface LocationProps {
  lat: number;
  lon: number;
}

function WeatherAPI({ lat = 60.1699, lon = 24.9384 }: LocationProps) {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    fetchData();
  }, [lat]);
  const API_Key = "0592e322c614b6c0a7821d0cbd84d877";

  let fetchData = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=` +
          API_Key
      );
      let data = (await response.json()) as WeatherResponse;
      console.log(data?.weather);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={weather?.weather[0].icon} />
        <Card.Body>
          <Card.Title>{weather?.main.temp}</Card.Title>
          <Card.Text>{weather?.weather[0].description}</Card.Text>
          <Button variant="primary">{weather?.name}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WeatherAPI;
