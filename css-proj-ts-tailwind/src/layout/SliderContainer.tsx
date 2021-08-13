import React from "react";
import Sliders from "../components/Sliders";
import PropertyName from "../components/PropertyName";

interface SliderInfo {
    name : string,
}

const SliderContainer:React.FC<SliderInfo> = ({name}) =>{

    return(
        <div className='slider_container'>
            <PropertyName cssProperty={name}/>
            <Sliders changelistener={null}/>
        </div>
    )
}

export default SliderContainer;