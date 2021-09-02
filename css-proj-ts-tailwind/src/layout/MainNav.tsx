import React from "react";
import { useAppSelector } from "../app/hooks";
import Button from "../components/Button";
const MainNav:React.FC = () =>{

    const cssStyles = useAppSelector(state=>state.cssImp);

    return(
        <div className='navMenu'>
            {cssStyles.map(item=>{
                return <Button buttonText={item.name} onclick={null}/>
            })}
        </div>
    )
}

export default MainNav;