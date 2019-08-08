import React,{useState,useEffect} from "react"
import Axios from "axios"

const baseUrl="http://localhost:3001/persons";
const getAll=()=>{
    return Axios.get(baseUrl)
}
const create=(payload)=>{
    return Axios.post(baseUrl,payload)}
const update=(payload,id)=>{
    return Axios.put(`${baseUrl}/${id}`,payload)
}
const remove=(id)=>{
return Axios.delete(`${baseUrl}/${id}`)
}

export default {
    getAll,
    create,
    update,
    remove
}