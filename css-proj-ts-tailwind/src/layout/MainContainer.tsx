import React from "react";
import ControlContainer from "./ControlContainer";
import DisplayContainer from "./DisplayContainer";

const MainContainer: React.FC = () =>{
    return(
        <div className='outer-container'>
            <ControlContainer/>
            <DisplayContainer/>
        </div>
    )
}

export default MainContainer;