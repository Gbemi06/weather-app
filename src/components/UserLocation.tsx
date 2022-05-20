import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Button, Card, Form, FormControl } from "react-bootstrap";
import { LocationResponse } from "../types/LocationInterface";
import WeatherAPI from "./WeatherAPI";

function UserLocation() {
  const [location, setLocation] = useState<LocationResponse[]>([]);
  const [query, setQuery] = useState("");

  //const navigate = useNavigate();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("it worked");
    fetchLocationData();
    setQuery("");
  };

  /*useEffect(() => {
    fetchLocationData();
  }, []);*/

  const API_Key = "0592e322c614b6c0a7821d0cbd84d877";

  const fetchLocationData = async () => {
    let response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=` +
        API_Key
    );
    let data = (await response.json()) as LocationResponse[];
    console.log(data);
    setLocation(data);
  };
  console.log(location);
  return (
    <>
      <Form className=" w-70 my-4">
        <FormControl
          type="search"
          placeholder="Search by City"
          className="me-2"
          aria-label="Search"
          value={query}
          onChange={handleSearch}
        />
        <Button variant="outline-success" onClick={handleSubmit}>
          Search
        </Button>
      </Form>
      <div>
        <Card>
          <Card.Body>
            <Card.Text>
              {location[0]?.country} - {location[0]?.state} -{" "}
            </Card.Text>
            <Button variant="primary">{location[0]?.name}</Button>
          </Card.Body>
        </Card>
      </div>
      <WeatherAPI lat={location[0]?.lat} lon={location[0]?.lon} />
    </>
  );
}

export default UserLocation;
