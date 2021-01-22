import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <a className="brand-logo left">mockAPI</a>

                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/get">Get</Link></li>
                    <li><Link to="/create">Create</Link></li>
                    <li><Link to="/list">List</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;