import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { CssObj } from "../store/features/CssStyleSlice";
import { current } from "@reduxjs/toolkit";

const OutputDisplayer :React.FC =()=>{

    const cssStyle = useAppSelector(state=>state.styleImp);

    const initialArr:Array<CssObj> = [];

    const [styleArr,setStyleArr] = useState(initialArr);


    useEffect(()=>{
        if(cssStyle[0]){
            setStyleArr(prevarr=>prevarr.splice(0,1,cssStyle[0]))
        }
    },[cssStyle])

    useEffect(()=>{
        console.log(styleArr[0]);
    },[styleArr])

    return(
        <div className='output_displayer' >
            <div  className="screen">
                <div style={{width:`${styleArr[0] ? styleArr[0].styleVal :'10px'}`}} className='display_div'>
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
