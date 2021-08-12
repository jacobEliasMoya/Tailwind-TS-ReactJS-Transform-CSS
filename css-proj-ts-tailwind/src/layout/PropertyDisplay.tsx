import React from "react";
import Icon from "../components/Icon";
import PropertyName from "../components/PropertyName";
import SliderContainer from "./SliderContainer";
const PropertyDisplay:React.FC=()=>{
    return (
        <div className='property_display'>
            <div className="property_name">
                <Icon faClass='fa fa-backward'/>
                <PropertyName cssProperty='Property'/>
                <Icon faClass='fa fa-forward'/>
            </div>
            <div className='main_slider_container'>
                <SliderContainer/>

            </div>
        </div>
    )
}

export default PropertyDisplay;