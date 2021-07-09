import React from 'react'

export default function Input(props) {
    return (
        <input onSubmit={props.submitform} value={props.inputValue} placeholder={props.inputPlaceholder} type={props.inputType} className={props.inputClass}/>
    )
}
