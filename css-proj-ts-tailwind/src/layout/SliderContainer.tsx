import React, { useEffect, useState } from "react";
import Sliders from "../components/Sliders";
import PropertyName from "../components/PropertyName";
import {getCssStyle} from '../store/features/CssStyleSlice';
import {useAppDispatch} from '../app/hooks';
import Button from '../components/Button';

interface SliderInfo {
    name : string,
}

const SliderContainer:React.FC<SliderInfo> = ({name}) =>{


    const dispatch = useAppDispatch();
    const [sliderVal,setSliderVal] = useState(0); 
    const [valueOperator,setValueOperator] = useState('px'); 
    
    const displayPropertyValue = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setSliderVal( parseInt(event.target.value));      
    }

    const handleSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) =>{
        setValueOperator(event.target.value);
    }

    const obtainStyleString = (stylname:string,styleval:number,valop:string) => {
        dispatch(getCssStyle(`${stylname}:${styleval}${valop}`));
    }
    
    const addStyle = () =>{
        if(sliderVal!==0){
            obtainStyleString(name,sliderVal,valueOperator);
        } else {
            return;
        }
    }

    useEffect(()=>{
    },[sliderVal])
    
    return(
        <div className='slider_container'>
            <span>
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
            </span>
            <span>
                <Button onclick={addStyle} buttonText='Add Style'/>
            </span>


        </div>
    )
}

export default SliderContainer;