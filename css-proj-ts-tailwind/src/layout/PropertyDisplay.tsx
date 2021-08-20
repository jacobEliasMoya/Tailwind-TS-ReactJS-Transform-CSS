import React, { useEffect, useState } from "react";
import Icon from "../components/Icon";
import PropertyName from "../components/PropertyName";
import SliderContainer from "./SliderContainer";
import { useAppSelector } from "../app/hooks";

const PropertyDisplay:React.FC=()=>{

    const cssProps = useAppSelector((state)=>state.cssImp);

    let key=0;

    let key2=cssProps.length;

    const [displayCssPropKey, setNewPropKey] = useState(0);

    const incrementKey = () => {
        if(displayCssPropKey === cssProps.length-1){
            setNewPropKey(0);
        } else {
            setNewPropKey(prevkey=> prevkey+1);
        }
    }

    const decrementKey = () => {
        if(displayCssPropKey>0){
            setNewPropKey(prevkey=> prevkey-1);
        } else if(displayCssPropKey===0){
            setNewPropKey(cssProps.length-1);
        }
    }

    return (
        <div className='property_display'>
            <div className="property_name">
                <Icon onclick={decrementKey} faClass='fa fa-backward'/>
                {cssProps.map(item=>{
                    if(cssProps.indexOf(item) === displayCssPropKey){
                        return <PropertyName key={key2+=1} cssProperty={item.name}/>
                    }
                })}
                <Icon onclick={incrementKey} faClass='fa fa-forward'/>
            </div>
            <div className='main_slider_container'>
                {cssProps.map(item=>{
                    if(cssProps.indexOf(item) === displayCssPropKey){
                        return <SliderContainer key={key+=1} name={`${item.name}`}/>
                    }
                })}
            </div>
        </div>
    )
}

export default PropertyDisplay;