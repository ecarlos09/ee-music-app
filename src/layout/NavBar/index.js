import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

import { BackButton, ForwardButton } from '../../components'

const NavBar = () => {
    return (
        <nav>
            <div className="links">
                <NavLink exact to="/" activeClassName="current">Home</NavLink>
                <NavLink to="/about" activeClassName="current">About</NavLink>
                <NavLink to="/music" activeClassName="current">Music</NavLink>
                <NavLink to="/support" activeClassName="current">Support</NavLink>
                <NavLink to="/contact" activeClassName="current">Contact</NavLink>
            </div>

            <div className="history">
                <BackButton />
                <ForwardButton />
            </div>

        </nav>

    )
}

export default NavBar;