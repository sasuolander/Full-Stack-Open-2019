import React, { useState } from "react";

export const FindCountry = ({ onChange, country, countries }) => {
  return (
    <React.Fragment>
      find country <input onChange={onChange} value={country} />
      <div>{countries}</div>
    </React.Fragment>
  );
};
