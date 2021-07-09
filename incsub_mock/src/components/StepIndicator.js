import React from 'react'

export default function StepIndicator(props) {
    return (
        <div className='step_indicator'>
            <h3>Step {props.currentStep} of 3</h3>
            <div className='curstep one'></div>
            <div className='curstep two'></div>
            <div className='curstep three'></div>
        </div>
    )
}
