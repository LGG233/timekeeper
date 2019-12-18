import React from 'react';

// stateless functional component

const NavBar = props => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href='/'>
                <h3>Timekeeper{" "}</h3>
            </a>
            <div>
                <button className="btn displayData"
                    onClick={function () {
                        window.location.replace("/clientTable");
                    }}
                >
                    Clients{" "}
                </button>
                <button className="btn newClient"
                    onClick={function () {
                        window.location.replace("/Client");
                    }}
                >
                    New client{" "}
                </button>
                <button className="btn displayData"
                    onClick={function () {
                        window.location.replace("/viewAllProjects");
                    }}
                >
                    Projects{" "}
                </button>
            </div >
        </nav>);
}

export default NavBar;