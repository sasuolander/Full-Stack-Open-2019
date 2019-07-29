import React, { useEffect, useState } from "react";
import "./App.css";
import { Country } from "./component/Country";
import { FindCountry } from "./component/FindCountry";
import Axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [response, setResponse] = useState([]);
  const onChange = event => {
    const { value } = event.target;
    setName(value);
    //https://www.apixu.com/
    Axios.get("https://restcountries.eu/rest/v2/name/" + value).then(
      response => {
        setResponse(response.data);
      }
    );
  };

  const countries =
    response.map(it => {
      return it["name"];
    }).length > 3 ? (
      <p>be more specific</p>
    ) : (
      response.map(it => {
        return <p> {it["name"]}</p>;
      })
    );

  const country =
    response.map(it => {
      return it["name"];
    }).length >= 1 ? (
      <Country
        country={response[0].name}
        capital={response[0].capital}
        population={response[0].population}
        languages={response[0].languages}
        temperature={"dummy"}
        wind={"dummy"}
        flag={response[0].flag}
      />
    ) : (
      <p />
    );

  return (
    <React.Fragment>
      <FindCountry
        onChange={onChange}
        country={name}
        countries={countries}
        response={response}
      />

      {country}
    </React.Fragment>
  );
};

export default App;
