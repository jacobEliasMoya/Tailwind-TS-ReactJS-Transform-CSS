import React from "react";

type stylings = any;

const DisplayDiv:React.FC<stylings> = ({stylings}) =>{
    return (
        <div style={stylings} className='display_div'>
        </div>
    )
}

export default DisplayDiv;