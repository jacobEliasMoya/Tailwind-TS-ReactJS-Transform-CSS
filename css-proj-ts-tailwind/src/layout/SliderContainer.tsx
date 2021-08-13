import React, { useState } from "react";
import Sliders from "../components/Sliders";
import PropertyName from "../components/PropertyName";

interface SliderInfo {
    name : string,
}

const SliderContainer:React.FC<SliderInfo> = ({name}) =>{


    const [sliderVal,setSliderVal] = useState(0); 
    
    const displayPropertyValue = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setSliderVal( parseInt(event.target.value));        
    }

    return(
        <div className='slider_container'>
            <PropertyName cssProperty={name}/>
            <h1 className='slider_value'>{sliderVal}</h1>
            <select name="" id="">
                <option value="px">PX</option>
                <option value="em">EM</option>
                <option value="rem">REM</option>
                <option value="vw">VW</option>
                <option value="vh">VH</option>
                <option value="percent">%</option>
            </select>
            <Sliders changelistener={displayPropertyValue}/>
        </div>
    )
}

export default SliderContainer;