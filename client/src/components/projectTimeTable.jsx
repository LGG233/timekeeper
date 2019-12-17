import React, { Component } from 'react';
import API from "../util/API";
import "./table.css";
import moment from 'moment';

// Pseudocode
// 3) button attached to row for editing that calls up modal 

class projectTimeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            project_name: "",
            client_name: "",
            date_of_service: "",
            hours: "",
            desc_of_work: "",
            data: []
        }
    }

    componentDidMount() {
        console.log("component did mount");
        let id = localStorage.getItem("project_id");
        console.log(id);
        API.getProjectTime(id).then(res => {
            console.log("Searching for time for " + id)
            this.setState({
                data: res.data
            });
        })
    };

    handleDeleteClick = (id) => {
        localStorage.setItem("entry_id", id);
        console.log(id)
        API.deleteTimeEntry(id).then(res => {
            this.setState({
                data: res.data
            });
        })
        localStorage.removeItem("entry_id");
        window.location.replace("/projectTimeTable")
    }

    addNewProject = (id, name) => {
        localStorage.setItem("client_id", id);
        localStorage.setItem("client_name", name);
        window.location.replace("/Project");
    }


    render() {
        return (
            <div>
                <h1>Time Entries for {localStorage.getItem("client_name")} on {localStorage.getItem("project_name")}</h1>
                {this.state.data.map(time => (
                    <div className="container card-space">
                        <div className="card">
                            {/* <div className="card-header"><h3>{time.project_name}</h3></div> */}
                            <div className="card-body">
                                <span>{moment.utc(time.date_of_service).format("ll")}</span>
                                <br></br>
                                <span>{time.hours} hours</span>
                                <br></br>
                                <span>{time.desc_of_work}</span>
                                <br></br>
                                <span>Entry ID: {time.id}</span>
                                <br></br>
                                <button className="btn btn-primary card-btn">Edit</button>
                                <button className="btn btn-primary card-btn" onClick={() => this.handleDeleteClick(time.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}

export default projectTimeTable;
