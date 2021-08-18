import React from "react"

type IconProps = {
    faClass:string,
    onclick:any
}

const Icon:React.FC<IconProps> = ({faClass,onclick}) => {
    return(
        <i onClick={onclick} className={faClass}>
        </i>
    )
} 

export default Icon;