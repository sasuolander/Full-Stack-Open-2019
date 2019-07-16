import React,{useState,useEffect} from "react"
import Axios from "axios"

const loadData=(url,setPersons)=>{
    const [Isloaded, setIsloaded]=useState("");

    

      if(Isloaded===true){
          return "seuccess"
      }else {
          return "fail"
      }

}


export default {}