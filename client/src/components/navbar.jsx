import React from 'react';

// stateless functional component

const NavBar = props => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href='/'>
                Timekeeper{" "}
            </a>
        </nav>);
}

export default NavBar;