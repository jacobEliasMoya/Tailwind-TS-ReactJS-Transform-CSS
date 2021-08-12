import React from "react";
import Button from "../components/Button";

const OutputDisplayer :React.FC =()=>{
    return(
        <div className='output_displayer' >
            <div className="screen"></div>
            <div className="button_container">
                <Button buttonText='View Code' onclick={null}/>
                <Button buttonText='Copy Code' onclick={null}/>
            </div>
        </div>
    )
}

export default OutputDisplayer;
