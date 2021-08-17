import React, { useEffect, useState } from "react";
import Sliders from "../components/Sliders";
import PropertyName from "../components/PropertyName";
import {getCssStyle} from '../store/features/CssStyleSlice';
import {useAppDispatch,useAppSelector} from '../app/hooks';

interface SliderInfo {
    name : string,
}

const SliderContainer:React.FC<SliderInfo> = ({name}) =>{


    const dispatch = useAppDispatch();
    const cssStyle =  useAppSelector(state=>state.styleImp);
    
    const [sliderVal,setSliderVal] = useState(0); 
    const [valueOperator,setValueOperator] = useState('px'); 
    
    const displayPropertyValue = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setSliderVal( parseInt(event.target.value));        
    }

    const handleSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) =>{
        setValueOperator(event.target.value);
    }

    const obtainStyleString = () => {
        dispatch(getCssStyle(`${name}:${sliderVal}${valueOperator}`));
        console.log(cssStyle)
    }
                 
    return(
        <div onChange={obtainStyleString} className='slider_container'>
            <PropertyName cssProperty={name}/>
            <h1 className='slider_value'>{sliderVal}</h1>
            <select onChange={handleSelectChange} name="" id="">
                <option value="px">PX</option>
                <option value="em">EM</option>
                <option value="rem">REM</option>
                <option value="vw">VW</option>
                <option value="vh">VH</option>
                <option value="%">%</option>
            </select>
            <Sliders changelistener={displayPropertyValue}/>
        </div>
    )
}

export default SliderContainer;