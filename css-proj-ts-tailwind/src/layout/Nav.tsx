import React from 'react';
import Icon from '../components/Icon';

const Nav:React.FC = () => {
    return (
        <nav >
            <Icon onclick={null} faClass='fa fa-bars'/>
            <h1>Transform Your Css</h1>
        </nav>
    );
};

export default Nav;