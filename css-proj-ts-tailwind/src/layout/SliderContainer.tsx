import React from "react";
import Sliders from "../components/Sliders";
import PropertyName from "../components/PropertyName";
import { useAppSelector } from "../app/hooks";

const SliderContainer:React.FC = () =>{

    const cssProps = useAppSelector((state)=>state.cssImp);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        cssProps.forEach(option=>{
            console.log(option)
        })
    }

    return(
        <div className='slider_container'>
            <PropertyName cssProperty='asdx'/>
            <Sliders changelistener={handleChange}/>
        </div>
    )
}

export default SliderContainer;