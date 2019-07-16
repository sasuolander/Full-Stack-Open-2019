import React,{useEffect,useState} from 'react';
import './App.css';
import {Country} from "./component/Country"
import {FindCountry} from "./component/FindCountry"
import Axios from "axios"

const  App=() =>{
  const [name, setName]=useState("")
  const [response,setResponse]=useState([])

const url ="https://restcountries.eu/rest/v2/name/{name}"
const onChange=(event)=>{
 const {value}= event.target;
 setName(value)

 Axios.get("https://restcountries.eu/rest/v2/name/"+value).then(response=>{
   setResponse(response.data)
   console.log(response.data)
 })
}




  return (
    <React.Fragment>
      <FindCountry
        onChange={onChange}
        country={name}
        response={response}
      />
      <Country
      country={"dummy"}
      capital={"dummy"}
      population={"dummy"}
      language={"dummy"}
      temperature={"dummy"}
      wind={"dummy"}
      flag={""}
      />
    </React.Fragment>
  );
}

export default App;
