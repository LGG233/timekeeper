import React from 'react';

// stateless functional component

const NavBar = props => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href='/'>
                <h3>Timekeeper{" "}</h3>
            </a>
            <div>
                <button className="btn btn-sm displayData"
                    onClick={function () {
                        window.location.replace("/clientTable");
                    }}
                >
                    Clients{" "}
                </button>
                <button className="btn btn-sm newClient"
                    onClick={function () {
                        window.location.replace("/Client");
                    }}
                >
                    New client{" "}
                </button>
                <button className="btn btn-sm displayData"
                    onClick={function () {
                        window.location.replace("/viewAllProjects");
                    }}
                >
                    Projects{" "}
                </button>
                <button className="btn btn-sm displayData"
                    onClick={function () {
                        window.location.replace("/timeByDateTable");
                    }}
                >
                    Time by Date{" "}
                </button>
            </div >
        </nav>);
}

export default NavBar;