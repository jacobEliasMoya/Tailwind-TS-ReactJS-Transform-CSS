import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import DisplayDiv from "../components/DisplayDiv";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createEmptyStatement } from "typescript";

const OutputDisplayer :React.FC =()=>{

    const cssStyle = useAppSelector(state=>state.styleImp);

    const initialArr:Array<string> = [];

    const [styleArr,setStyleArr] = useState(initialArr);

    useEffect(()=>{
        if(cssStyle[0]){
            setStyleArr(prevarr=>[...prevarr,cssStyle[0]])
        }
    },[cssStyle])

    useEffect(()=>{
        console.log(styleArr);
    },[styleArr])

    return(
        <div className='output_displayer' >
            <div className="screen">
                <DisplayDiv />
            </div>
            <div className="button_container">
                <Button buttonText='View Code' onclick={null}/>
                <Button buttonText='Copy Code' onclick={null}/>
            </div>
        </div>
    )
}

export default OutputDisplayer;
