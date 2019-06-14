import React from "react";

export const Statistics = ({
  good,
  neutral,
  bad,
  style,
  totalcount,
  totalvalue,
  styleTable
}) => (
  <table style={styleTable} align-Text="left">
    <tbody style={style}>
      <tr>
        <th>good</th>
        <td>{good}</td>
      </tr>
      <tr>
        <th>neutral</th>
        <td>{neutral}</td>
      </tr>
      <tr>
        <th>bad</th>
        <td>{bad}</td>
      </tr>
    </tbody>
    <tbody style={style}>
      <tr>
        <th>all</th>
        <td>{totalcount}</td>
      </tr>
      <tr>
        <th>average</th>
        <td>
          {" "}
          {isNaN(totalvalue / totalcount)
            ? 0
            : (totalvalue / totalcount).toFixed(2)}
        </td>
      </tr>
      <tr>
        <th>positive</th>
        <td>
          {" "}
          {isNaN(good / totalcount)
            ? 0
            : ((good / totalcount) * 100).toFixed(2) + "%"}{" "}
        </td>
      </tr>
    </tbody>
  </table>
);

export const Button = ({ goodHandler, neutralHandler, badHandler, style }) => (
  <div style={style}>
    <button onClick={goodHandler}>good</button>
    <button onClick={neutralHandler}>neutral</button>
    <button onClick={badHandler}>bad</button>
  </div>
);
