import React, { useState, useEffect } from "react";
import "./css/App.css";
import { AddRecord } from "./component/AddRecord";
import { FilterBar } from "./component/FilterBar";
import { ListOfRecord } from "./component/ListOfRecord";
import { AlertBanner, RemovedBanner,AddedBanner } from "./component/AlertBanner";
import personService from "./service/personService";

export const App = () => {
  const [persons, setPersons] = useState([]),
    [name, setName] = useState(""),
    [phonenumber, setPhonenumber] = useState(""),
    [filter, setFilter] = useState(""),
    [visibleAlert, setVisibilityAlert] = useState("none"),
    [visibleRemove, setVisibilityRemove] = useState("none"),
    [removedName, setRemovedName] = useState(""),
    [visibleAdded, setVisibilityAdded] = useState("none"),
    [addedName, setAddedName] = useState("");

  useEffect(() => {
    personService.getAll().then(data => setPersons(data));
  }, []);

  const onChangeFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const onChangeName = event => {
    setVisibilityAlert("none");
    setVisibilityAdded("none")
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
      objectPerson = { id: id + 1, name: name, phonenumber: phonenumber };
    if (!persons.find(person => person.name === objectPerson.name)) {
      personService.create(objectPerson).then(data => {
        setAddedName(objectPerson.name)
        setVisibilityAdded("")
        setPersons([...persons, data]);
      });
    } else {
      setVisibilityAlert("");
    }
  };
  const onClickRemovePerson = event => {
    setVisibilityRemove("none");
    const id = event.target.value,
      removedNameLocal = persons.find(person => {
        return person.id == id;
      });

    setRemovedName(removedNameLocal.name);
    personService
      .remove(id)
      .then(response => {
        let array=persons.filter((value, index, arr) => {
          return value.id === id;
        });
        setPersons(array)
      })
      .catch(error => {
        setVisibilityRemove("");
       let array= persons.filter((value, index, arr) => {
          return value.id !== id;
        });
        setPersons(array)
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <h1>phonebook app</h1>
      <AlertBanner name={name} visible={visibleAlert} />
      <RemovedBanner name={removedName} visible={visibleRemove} />
      <AddedBanner name={addedName} visible={visibleAdded} />
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
