import React from "react";
import Button from "../components/Button";
import DisplayDiv from "../components/DisplayDiv";

const OutputDisplayer :React.FC =()=>{

    const styles= {
        borderRadius:'1rem'
    }

    return(
        <div className='output_displayer' >
            <div className="screen">
                <DisplayDiv stylings={styles} />
            </div>
            <div className="button_container">
                <Button buttonText='View Code' onclick={null}/>
                <Button buttonText='Copy Code' onclick={null}/>
            </div>
        </div>
    )
}

export default OutputDisplayer;
