import React from 'react'

export default function Paragraph(props) {
    return (
        <p className={props.paraClass}>
            {props.paragraphText}
        </p>
    )
}
