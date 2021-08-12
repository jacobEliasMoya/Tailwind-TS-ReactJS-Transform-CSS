import React from "react";
import Icon from "../components/Icon";
import PropertyName from "../components/PropertyName";
import SliderContainer from "./SliderContainer";

const PropertyDisplay:React.FC=()=>{
    return (
        <div className='property_display'>
            <div className="property_name">
                <Icon faClass='fa fa-arrow-circle-left'/>
                <PropertyName cssProperty='Property'/>
                <Icon faClass='fa fa-arrow-circle-right'/>
            </div>
            <div className='main_slider_container'>
                <SliderContainer/>
                <SliderContainer/>
                <SliderContainer/>
                <SliderContainer/>
                <SliderContainer/>
                <SliderContainer/>
            </div>
        </div>
    )
}

export default PropertyDisplay;