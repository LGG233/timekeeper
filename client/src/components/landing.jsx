import React, { Component } from 'react';

class Landing extends Component {
    state = {}
    render() {
        return (
            <div>
                <h4>
                    Welcome to Timekeeper, the simple way to track billable time
                </h4>
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
                        window.location.replace("/Table");
                    }}
                >
                    View time entries{" "}
                </button>
            </div >
        );
    }
}

export default Landing;
