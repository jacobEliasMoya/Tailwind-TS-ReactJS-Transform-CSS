import React from "react";
import { useAppSelector } from "../app/hooks";
import Button from "../components/Button";
import { useAppDispatch } from '../app/hooks';
import { triggerNav } from '../store/features/MainNavSlice';

const MainNav:React.FC = () =>{

    const cssStyles = useAppSelector(state=>state.cssImp);

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(triggerNav());
    }

    return(
        <div className='navMenu'>
            {cssStyles.map(item=>{
                return <Button buttonText={item.name} onclick={handleClick}/>
            })}
        </div>
    )
}

export default MainNav;