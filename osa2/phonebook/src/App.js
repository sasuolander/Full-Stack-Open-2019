import React, { useState, useEffect } from "react";
import "./css/App.css";
import { AddRecord } from "./component/AddRecord";
import { FilterBar } from "./component/FilterBar";
import { ListOfRecord } from "./component/ListOfRecord";
import { AlertBanner } from "./component/AlertBanner";
import personService from "./service/personService";

export const App = () => {
  const [persons, setPersons] = useState([]),
    [name, setName] = useState(""),
    [phonenumber, setPhonenumber] = useState(""),
    [filter, setFilter] = useState(""),
    [visible, setVisibility] = useState("none");

  const url = "http://localhost:3001/persons";

  useEffect(() => {
    personService.getAll().then(response => {
      setPersons(response.data);
    });
  }, []);

  const onChangeFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const onChangeName = event => {
    setVisibility("none");
    const { value } = event.target;
    setName(value);
  };
  const onChangePhonenumber = event => {
    const { value } = event.target;
    setPhonenumber(value);
  };

  const onClickPerson = event => {
    event.preventDefault();
    const id = persons.length,
      objectPerson = { id: id, name: name, phonenumber: phonenumber };

    if (!persons.find(person => person.name === objectPerson.name)) {
      personService.create(objectPerson).then(response => {
        setPersons([...persons, response.data]);
      });
    } else {
      setVisibility("");
    }
  };
  const onClickRemovePerson = event => {
    event.preventDefault();
    const id = event.target.value;
    persons.filter((value, index, arr) => {
      console.log(value.id);
      return value.id === id;
    });
    personService.remove(id);
  };

  return (
    <React.Fragment>
      <h1>phonebook app</h1>
      <AlertBanner name={name} visible={visible} />
      <FilterBar onChange={onChangeFilter} filter={filter} />
      <AddRecord
        onChangeName={onChangeName}
        onChangePhonenumber={onChangePhonenumber}
        onClick={onClickPerson}
        name={name}
        phonenumber={phonenumber}
      />

      <ListOfRecord
        persons={persons.filter(person => person.name !== filter)}
        onClickRemovePerson={onClickRemovePerson}
      />
    </React.Fragment>
  );
};
