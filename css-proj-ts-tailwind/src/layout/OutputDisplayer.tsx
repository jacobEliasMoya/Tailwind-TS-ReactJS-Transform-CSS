import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import DisplayDiv from "../components/DisplayDiv";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const OutputDisplayer :React.FC =()=>{

    const initialArr:Array<string> = [];

    const [styleArr,setStyleArr] = useState(initialArr);

    const cssStyle = useAppSelector(state=>state.styleImp);

    useEffect(()=>{
        setTimeout(() => {
            setStyleArr(oldArr=>[...oldArr,cssStyle[0]]);
            console.log(styleArr)
        }, 100);
    },[cssStyle])

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
