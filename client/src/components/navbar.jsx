import React, { Component } from 'react';

// stateless functional component

const NavBar = props => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Time Keeper{" "}
            </a>
        </nav>);
}

export default NavBar;