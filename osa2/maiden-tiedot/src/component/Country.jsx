import React from "react";

export const Country = ({
  country,
  capital,
  population,
  languages,
  temperature,
  wind,
  flag
}) => {
  console.log("language", languages);
  const language =
    languages === undefined ? (
      <li>empty</li>
    ) : (
      languages.map(it => <li>{it.name}</li>)
    );
  return (
    <React.Fragment>
      <h1>{country}</h1>
      <p>Capital {capital}</p>
      <p>Population is {population}</p>
      <h1>Languages:</h1>
      <ul>{language}</ul>
      <h1>Weather in {capital}</h1>
      <p>Temperature: {temperature}</p>
      <div />
      <img src={flag} />
      <p>wind: {wind}</p>
    </React.Fragment>
  );
};
