import React from "react";
import Icon from "./Icon";
import PropertyName from "./PropertyName";

const PropertyDisplay:React.FC=()=>{
    return (
        <div>
            <Icon faClass='fa fa-arrow-circle-left'/>
            <PropertyName cssProperty='Property'/>
            <Icon faClass='fa fa-arrow-circle-right'/>
        </div>
    )
}

export default PropertyDisplay;