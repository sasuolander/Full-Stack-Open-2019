import React from "react";

export const AlertBanner =({visible,name})=>{
const styleSheetBanner={display:visible}
    return(
        <div style={styleSheetBanner}>
            <p>{name} is allready in the list</p>
        </div>    )
}