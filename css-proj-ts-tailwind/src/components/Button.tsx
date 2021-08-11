import React, { MouseEventHandler } from "react";

interface OnClicker {
    onclick: MouseEventHandler<HTMLButtonElement>,
    buttonText:string
}

const Button:React.FC<OnClicker> = ({onclick,buttonText}) => {
    return(
        <button onClick={onclick}>{buttonText}</button>
    )
};

export default Button;