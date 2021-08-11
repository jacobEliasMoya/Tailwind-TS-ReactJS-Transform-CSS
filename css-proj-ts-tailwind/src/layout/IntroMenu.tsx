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
        <div className='intro_menu'>
            <div>
                <h1>Lets Transform Your CSS!</h1>
                <p>I began this project with the <span className='keyword'>inexperienced</span> CSS developer in mind. We all started out not knowing the difference between key properies, but now <span className='keyword'>that will change!</span> I was that developer when I first began and thought that needed to change.</p>
                <p className='keyword'>Welcome to the change!</p>
                <Button buttonText='Start App' onclick={handleClick}/>
            </div>
            <div className='outer box-container'>
                <div className='box one'></div>
                <div className='box two'></div>
                <div className='box three'></div>
                <div className='box four'></div>
                <div className='box five'></div>
            </div>
        </div>
    )
}

export default IntroMenu;