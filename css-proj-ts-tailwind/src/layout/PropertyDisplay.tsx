import React from "react";
import Icon from "../components/Icon";
import PropertyName from "../components/PropertyName";
import SliderContainer from "./SliderContainer";
import { useAppSelector } from "../app/hooks";

const PropertyDisplay:React.FC=()=>{

    const cssProps = useAppSelector((state)=>state.cssImp);

    const returnSliderCont = (item:string) => {
        return (<SliderContainer name={`${item}`}/>)
    }

    return (
        <div className='property_display'>
            <div className="property_name">
                <Icon faClass='fa fa-backward'/>
                <PropertyName cssProperty='Property'/>
                <Icon faClass='fa fa-forward'/>
            </div>
            <div className='main_slider_container'>
                {cssProps.map(item=>returnSliderCont(item.name))}
            </div>
        </div>
    )
}

export default PropertyDisplay;