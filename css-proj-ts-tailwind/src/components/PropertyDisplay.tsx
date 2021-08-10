import React from "react";
import Icon from "./Icon";
import PropertyName from "./PropertyName";

const PropertyDisplay:React.FC=()=>{
    return (
        <div>
            <Icon faClass='poop'/>
            <PropertyName/>
            <Icon faClass='poop'/>
        </div>
    )
}

export default PropertyDisplay;