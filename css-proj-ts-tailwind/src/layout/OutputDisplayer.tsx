import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { useAppSelector } from "../app/hooks";

const OutputDisplayer :React.FC =()=>{

    const cssStyle = useAppSelector(state=>state.styleImp);

    const displayDiv:HTMLDivElement|null = document.querySelector('.display_div');

    const initialArr:Boolean = false;

    const [styleArr,setStyleArr] = useState<Boolean>(initialArr);

    const [newObj,setNewObj] = useState({});

    const [saveStyleAttribute,setSaveStyleAttribute] = useState<String>('');

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

 

    const copyCode = async () => {
        let val = displayDiv?.getAttribute('style');
        let newVal:string;
        if(val){
            newVal = val;
            if(navigator.clipboard){
                await navigator.clipboard.writeText(newVal);
                let text = await navigator.clipboard.readText();
                setSaveStyleAttribute(text);
            }
        }

    }

    const viewCode = () =>{
        console.log(saveStyleAttribute.split('; '))
    }

    const resetToDefalt = () => {
        setNewObj({});
        setSaveStyleAttribute('');
    }

    useEffect(()=>{
        setStyleArr(true);
        cssStyle[0] ? returnStyleArr(cssStyle[0].style,cssStyle[0].styleVal) : console.log();

    },[cssStyle,styleArr])

    useEffect(()=>{
        saveStyleAttribute !== '' ? viewCode() : console.log();
    },[saveStyleAttribute])

    return(
        <div className='output_displayer' >
            <div className="screen">
                <div style={cssStyle[0] ? newObj : undefined} className='display_div'>
                </div>
            </div>
            <div className="button_container">
                <Button buttonText='View Styles' onclick={null}/>
                <Button buttonText='Copy Styles' onclick={copyCode}/>
                <Icon faClass='fa fa-history' onclick={resetToDefalt} />
            </div>
        </div>
    )
}

export default OutputDisplayer;
