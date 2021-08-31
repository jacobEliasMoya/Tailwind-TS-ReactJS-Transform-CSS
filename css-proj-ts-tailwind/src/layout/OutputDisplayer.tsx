import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { useAppSelector } from "../app/hooks";

const OutputDisplayer :React.FC =()=>{

    const cssStyle = useAppSelector(state=>state.styleImp);


    const initialArr:Boolean = false;

    const [styleArr,setStyleArr] = useState<Boolean>(initialArr);
    const [newObj,setNewObj] = useState({});
    const [saveStyleAttribute,setSaveStyleAttribute] = useState<String>('No styles added yet.');
    const [codeView,setCodeView] = useState<Boolean>(false);


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
        const displayDiv:HTMLDivElement|null = document.querySelector('.display_div');
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

    const saveStyleFunc = () => {
        const displayDiv:HTMLDivElement|null = document.querySelector('.display_div');
        let val = displayDiv?.getAttribute('style');
        let newVal:string;
        if(val){
            newVal=val;
            setSaveStyleAttribute(newVal);
        }
    }

    const viewCode = () =>{
        return (<div className='styleOutput' >{'.element { \n'  + saveStyleAttribute.replaceAll('; ', '; \n') + '\n}'}</div>)
    }

    const triggerCodeViewer = () => {
        setCodeView(prev=>!prev);
        saveStyleFunc();
    }

    const resetToDefalt = () => {
        setNewObj({});
        setSaveStyleAttribute('');
    }

    const returnStyleDiv = () =>{
        return (<div style={cssStyle[0] ? newObj : undefined} className='display_div'></div>)
    }

    useEffect(()=>{
        setStyleArr(true);
        cssStyle[0] ? returnStyleArr(cssStyle[0].style,cssStyle[0].styleVal) : console.log();

    },[cssStyle,styleArr])

    return(
        <div className='output_displayer' >
            <div className="screen">
                {!codeView ? returnStyleDiv() : viewCode()}
            </div>
            <div className="button_container">
                {!codeView ? <Button buttonText='View Styles' onclick={triggerCodeViewer}/> : <Button buttonText='View Div' onclick={triggerCodeViewer}/>}
                <Button buttonText='Copy Styles' onclick={copyCode}/>
                <Icon faClass='fa fa-history' onclick={resetToDefalt} />
            </div>
        </div>
    )
}

export default OutputDisplayer;
