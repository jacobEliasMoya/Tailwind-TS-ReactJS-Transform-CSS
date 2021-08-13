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
            {sliderVal}
            <Sliders changelistener={displayPropertyValue}/>
        </div>
    )
}

export default SliderContainer;