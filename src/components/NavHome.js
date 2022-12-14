import React from 'react';
import { NavLink } from 'react-router-dom';
import  HomePic from '../assets/home.png'

const NavHome = () => {
    return (
        <div>
            <NavLink to='/'>
                <header>
                <img className='topNav' src={HomePic} alt=''></img>
                </header>
            </NavLink>
        </div>
    );
}

export default NavHome;