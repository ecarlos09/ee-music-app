import React from 'react';
import { NavLink } from 'react-router-dom';

import { BackButton } from '../../components'

const NavBar = () => {
    return (
        <>
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/about" activeClassName="current">About</NavLink>
            <NavLink to="/music" activeClassName="current">Music</NavLink>
            <NavLink to="/support" activeClassName="current">Support</NavLink>
            <NavLink to="/contact" activeClassName="current">Contact</NavLink>
            <BackButton />

        </>
    )
}

export default NavBar;