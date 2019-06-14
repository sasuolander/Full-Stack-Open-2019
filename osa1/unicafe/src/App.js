import React, { useState, useEffect } from "react";
import { Statistics, Button } from "./component/UnicafeComponent";
import "./App.css";

const App = () => {
  //state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const goodHandler = () => {
    setGood(good + 1);
    //console.log(good)
    setTotalCount(totalCount + 1);
    setTotalValue(totalValue + 1);
  };
  const neutralHandler = () => {
    setNeutral(neutral + 1);
    setTotalCount(totalCount + 1);
  };
  const badHandler = () => {
    setBad(bad + 1);
    setTotalCount(totalCount + 1);
    setTotalValue(totalValue - 1);
  };

  const styleResort = {
    display: totalCount > 0 ? "" : "none"
  };
  const styleHint = {
    display: !totalCount > 0 ? "" : "none"
  };
  const styleTable = {
    //align:"center"
  };

  const styleB = {
    padding: "10px 10px 10px 10px"
  };
  const styleButton = {
    padding: "0px 0px 10px 0px"
  };

  return (
    <React.Fragment>
      <h1>give feedback</h1>

      <Button
        style={styleButton}
        goodHandler={goodHandler}
        neutralHandler={neutralHandler}
        badHandler={badHandler}
      />
      <b style={styleB}>statistics</b>

      <p style={styleHint}>no feed back given</p>

      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        style={styleResort}
        totalcount={totalCount}
        totalvalue={totalValue}
      />
    </React.Fragment>
  );
};

export default App;
