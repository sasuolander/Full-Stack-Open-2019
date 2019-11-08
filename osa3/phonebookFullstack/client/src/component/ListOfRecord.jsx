import React from "react";

export const ListOfRecord = ({ persons,onClickRemovePerson }) => {
  
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
    <div className="person-table-body">
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
    </div>
  );
};
