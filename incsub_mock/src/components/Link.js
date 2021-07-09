import React from 'react'

export default function Link(props) {
    return (
        <a href={props.linkhref} target={props.targettype} rel={props.reltype}>
            {props.linktext}
        </a>
    )
}
