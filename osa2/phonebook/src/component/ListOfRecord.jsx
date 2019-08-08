import React from "react";

export const ListOfRecord = ({ persons,onClickRemovePerson }) => {
    console.log("ListOfRecord",persons)
  const list = persons.map(person => {
    return (
      <tr key={person.id}>
        <td>{person.name}</td>
        <td>{person.phonenumber}</td>
        <td><button onClick={onClickRemovePerson} value={person.id}>delete</button></td>
      </tr>
    );
  });
  return (
    <React.Fragment>
      <p>table</p>
      <table>
        <thead>
        <tr>
        <th>name</th>
          <th>phonenumber</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {list}
        </tbody>
      </table>
    </React.Fragment>
  );
};
