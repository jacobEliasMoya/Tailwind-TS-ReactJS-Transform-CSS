import React from "react";
import Sliders from "../components/Sliders";
import PropertyName from "../components/PropertyName";

const SliderContainer:React.FC = () =>{

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    return(
        <div className='slider_container'>
            <PropertyName cssProperty='width'/>
            <Sliders changelistener={handleChange}/>
        </div>
    )
}

export default SliderContainer;