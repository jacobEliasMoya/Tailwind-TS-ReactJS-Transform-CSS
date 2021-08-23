import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { CssObj } from "../store/features/CssStyleSlice";
import { current } from "@reduxjs/toolkit";

const OutputDisplayer :React.FC =()=>{

    const cssStyle = useAppSelector(state=>state.styleImp);

    const initialArr:Boolean = false;

    const [styleArr,setStyleArr] = useState(initialArr);

    const [newObj,setNewObj] = useState({});

    const returnStyleArr = (mainStyle:string,mainValue:string) => {

        let splitArr = mainStyle.split('');
        splitArr[0] = splitArr[0].toLowerCase();
        let splitInd:number;
        let refinedProp:string; 

        splitArr.forEach(splitlem=>{
            if(splitlem === '-'){
                splitInd = splitArr.indexOf(splitlem);
                splitArr = splitArr.filter(elm=>elm !== '-');
                splitArr[splitInd] = splitArr[splitInd].toUpperCase();
            }
        })
        
        refinedProp = splitArr.join('');
        setNewObj(prev=>prev = {...prev,...{[refinedProp]:mainValue}});
    }

    useEffect(()=>{
        setStyleArr(true);
        if(cssStyle[0]){
            returnStyleArr(cssStyle[0].style,cssStyle[0].styleVal);
        }
    },[cssStyle,styleArr])

    return(
        <div className='output_displayer' >
            <div className="screen">
                <div style={cssStyle[0] ? newObj : undefined} className='display_div'>
                </div>
            </div>
            <div className="button_container">
                <Button buttonText='View Code' onclick={null}/>
                <Button buttonText='Copy Code' onclick={null}/>
            </div>
        </div>
    )
}

export default OutputDisplayer;
