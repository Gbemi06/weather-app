import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Button, Card, Form, FormControl } from "react-bootstrap";
import UserLocation from "./UserLocation";

function Login() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("it worked");
    //fetchLocationData();
    setQuery("");
  };

  return (
    <div>
      {" "}
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
    </div>
  );
}

export default Login;
