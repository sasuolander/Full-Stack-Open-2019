import React,{} from "react"


export const FindCountry =({onChange,country,response})=>{
console.log("response",response.map(it=>{return it["name"]}))
const countries=response.map(it=>{return  <p> {it["name"]}</p>});
    return(
        <React.Fragment>
find country <input onChange={onChange} value={country}></input>

<div>

    {countries}
</div>
    </React.Fragment>
    )
   
}