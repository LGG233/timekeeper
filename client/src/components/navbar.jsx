import React from 'react';

// stateless functional component

const NavBar = props => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href='/'>
                Timekeeper{" "}
            </a>
            <div>
                <button className="btn newEntry"
                    onClick={function () {
                        window.location.replace("/Entry");
                    }}
                >
                    New time entry{" "}
                </button>
                <button className="btn newProject"
                    onClick={function () {
                        window.location.replace("/Project");
                    }}
                >
                    New project{" "}
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
                        window.location.replace("/timeTable");
                    }}
                >
                    View time entries{" "}
                </button>
                <button className="btn displayData"
                    onClick={function () {
                        window.location.replace("/projectTable");
                    }}
                >
                    View projects{" "}
                </button>
                <button className="btn displayData"
                    onClick={function () {
                        window.location.replace("/clientTable");
                    }}
                >
                    View clients{" "}
                </button>
            </div >
        </nav>);
}

export default NavBar;