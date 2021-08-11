import React from "react";
import { useAppDispatch } from "../app/hooks";
import Button from "../components/Button";
import { beginApp } from "../store/features/StartAppSlice";

const IntroMenu:React.FC = () => {

    const dispatch = useAppDispatch();

    const handleClick = () =>{
        dispatch(beginApp());
    }

    return(
        <div>
            <h1>Lets Transform Your CSS Today!</h1>
            <p>I began this project with the <span className='keyword'>inexperienced</span> CSS developer in mind. We all started out not knowing the difference between key properies, but now <span>that will change!</span> I was that developer when I first began and thought that needed to change.</p>
            <p>Welcome to the change!</p>
            <Button onclick={handleClick}/>
        </div>
    )
}

export default IntroMenu;