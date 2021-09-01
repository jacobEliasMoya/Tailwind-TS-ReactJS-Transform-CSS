import React from 'react';
import Icon from '../components/Icon';
import { useAppDispatch } from '../app/hooks';
import { triggerNav } from '../store/features/MainNavSlice';

const Nav:React.FC = () => {

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(triggerNav());
    }

    return (
        <nav >
            <Icon onclick={handleClick} faClass='fa fa-bars'/>
            <h1>Transform Your Css</h1>
        </nav>
    );
};

export default Nav;