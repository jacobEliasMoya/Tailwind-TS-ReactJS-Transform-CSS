import React from "react";

interface OnClicker {
    onclick:any
}

const Button:React.FC<OnClicker> = ({onclick}) => {
    return(
        <button onClick={onclick}>button</button>
    )
};

export default Button;