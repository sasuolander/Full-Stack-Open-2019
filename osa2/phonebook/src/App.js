import React, { useState,useEffect } from "react";
import "./css/App.css";
import { AddRecord } from "./component/AddRecord";
import { FilterBar } from "./component/FilterBar";
import { ListOfRecord } from "./component/ListOfRecord";

import Axios from "axios"

export const App = () => {
  const 
  [persons, setPersons] = useState([]),
    [name, setName] = useState(""),
    [phonenumber, setPhonenumber] = useState(""),
    [filter, setFilter] = useState("");

useEffect( ()=>{
let mounted =true
  const loadData= async ()=>{
    const url="http://localhost:3001/persons" 
    const data= await Axios.get(url).then((response)=>{
      console.log("getPersons ",response.data)
      return response.data
  })
    console.log(data)
    if(mounted){
      setPersons(data)
    }
 }
 loadData()
 return ()=>{
  mounted = false;
 }
},[])

  
 

  const onChangeFilter = event => {
    const {value}=event.target
    setFilter(value)
  };

  const onChangeName = event => {
    const { value } = event.target
    setName(value)
  };
  const onChangePhonenumber = event => {
    const { value } = event.target
    setPhonenumber(value)
  };
  
  const onClickPerson = event => {
    event.preventDefault();
    const id = persons.length,
     objectPerson = { id: id, name: name, phonenumber: phonenumber };

    if (!persons.find(person=>person.name===objectPerson.name)){
      setPersons([...persons, objectPerson]);
    }else{
      alert(`${objectPerson.name} is allready in the list`)
    }
    
  };

  

  return (
    <React.Fragment>
      <h1>phonebook app</h1>
      <FilterBar onChange={onChangeFilter} filter={filter}/>
      <AddRecord
        onChangeName={onChangeName}
        onChangePhonenumber={onChangePhonenumber}
        onClick={onClickPerson}
        name={name}
        phonenumber={phonenumber}
      />
      <ListOfRecord persons={persons.filter(person=>person.name!==filter)} />
    </React.Fragment>
  );
};
