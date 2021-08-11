import React from "react";

interface CSSPropName {
    cssProperty:string
}

const PropertyName:React.FC<CSSPropName> = ({cssProperty}) =>{
    return(
        <h1>{cssProperty}</h1>
    )
}

export default PropertyName;