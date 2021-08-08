import React from 'react';

const Nav:React.FC = () => {
    return (
        <nav className='flex align-center justify-evenly flex-col w-40 min-h-100 text-white bg-purple-600 border-solid border-r-8  border-purple-400'>
           
            <i className='fa fa-bars text-center'></i>
            {/* updates */}
            <h1 className='transform rotate-90 '>Transform Your Css</h1>
        </nav>
    );
};

export default Nav;