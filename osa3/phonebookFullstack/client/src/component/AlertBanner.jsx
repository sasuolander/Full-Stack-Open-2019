import React from "react";

export const AlertBanner =({visible,name})=>{
const styleSheetBanner={display:visible}
    return(
        <div style={styleSheetBanner} className="styleSheetBanner">
            <p >{name} is already in the list</p>
        </div>    )
}

export const RemovedBanner =({visible,name})=>{
    const styleSheetBanner={display:visible}
        return(
            <div style={styleSheetBanner} className="styleSheetBanner">
                <p > Information of {name} is already removed </p>
            </div>    )
    }
    export const AddedBanner =({visible,name})=>{
        const styleSheetBanner={display:visible}
            return(
                <div style={styleSheetBanner} className="styleSheetBanner">
                    <p >{name} is added</p>
                </div>    )
        }