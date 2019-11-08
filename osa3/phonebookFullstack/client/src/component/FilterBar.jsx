import React from "react"

export const FilterBar =({onChange,filter})=>{
    return (
        <form className="filter-body">
            filter show with <input value={filter} onChange={onChange}/><br/>
        </form>
    )
}