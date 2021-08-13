import React from "react";
import Button from "../components/Button";
import DisplayDiv from "../components/DisplayDiv";

const OutputDisplayer :React.FC =()=>{

    return(
        <div className='output_displayer' >
            <div className="screen">
                <DisplayDiv />
            </div>
            <div className="button_container">
                <Button buttonText='View Code' onclick={null}/>
                <Button buttonText='Copy Code' onclick={null}/>
            </div>
        </div>
    )
}

export default OutputDisplayer;
