import React from "react"

type IconProps = {
    faClass:string
}

const Icon:React.FC<IconProps> = ({faClass}) => {
    return(
        <i className={faClass}>
        </i>
    )
} 

export default Icon;