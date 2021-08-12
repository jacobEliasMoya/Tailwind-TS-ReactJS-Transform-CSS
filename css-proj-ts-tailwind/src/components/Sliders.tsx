import React from "react";

interface ChangeEvent {
    changelistener : any //will change to more specfic type at a later time, better understanding needed
}

const Sliders:React.FC<ChangeEvent> = ({changelistener}) => {
    return(
        <input onChange={changelistener} type="range" min='1' max='100' className='rangeSlider'/>
    );
}

export default Sliders;