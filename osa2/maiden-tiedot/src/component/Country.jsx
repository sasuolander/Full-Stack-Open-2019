import React,{} from "react"

export const Country =({country,capital,population,language,temperature,wind,flag})=>{


    return(
        <React.Fragment>
            <h1>{country}</h1>
            <p>{capital}</p>
            <p>{population}</p>
            <h1>{language}</h1>
            <ul>
                <li>dummy</li>
            </ul>
            <h1>Weather in {country}</h1>
            <p>temperature: {temperature}</p>
            <div ></div>
            <img src={flag}/>
            <p>wind: {wind}</p>

        </React.Fragment>
    )
}