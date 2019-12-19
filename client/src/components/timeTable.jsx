import React, { Component } from 'react';
import API from "../util/API";
import "./table.css";
import moment from 'moment';

// Pseudocode
// 3) button attached to row for editing that calls up modal 

class timeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            project_name: "",
            client_name: "",
            date_of_service: "",
            hours: "",
            desc_of_work: "",
            ProjectId: "",
            data: []
        }
    }

    componentDidMount() {
        console.log("component did mount");
        let id = localStorage.getItem("client_name");
        API.getClientTime(id).then(res => {
            console.log("API request sent");
            this.setState({
                data: res.data
            })
        })
    };

    handleDeleteClick = (id) => {
        var result = window.confirm("Are you sure you want to delete this time entry?")
        if (result) {
            localStorage.setItem("entry_id", id);
            API.deleteTimeEntry(localStorage.getItem("entry_id")).then(res => {
                this.setState({
                    data: res.data
                });
            })
        }
        localStorage.removeItem("entry_id");
        window.location.replace("/timeTable", this.props)
    }

    editTime = (id, name, id2) => {
        localStorage.setItem("entry_id", id);
        localStorage.setItem("project_name", name);
        localStorage.setItem("project_id", id2)
        window.location.replace("/editTimeEntry");
    }

    addNewProject = (id, name) => {
        localStorage.setItem("client_id", id);
        localStorage.setItem("client_name", name);
        window.location.replace("/Project");
    };

    // editTime = (id, name) => {
    //     localStorage.setItem("entry_id", id);
    //     localStorage.setItem("project_name", name)
    //     window.location.replace("/editTimeEntry");
    // };

    render() {
        return (
            <div>
                <h1>Time Entries for {localStorage.getItem("client_name")}</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Project</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Work performed</th>
                            <th scope="col">Billed?</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(time => (
                            <tr>
                                <th scope="row">{time.project_name}</th>
                                <td>{moment.utc(time.date_of_service).format("ll")}</td>
                                <td>{time.hours}</td>
                                <td>{time.desc_of_work}</td>
                                <td></td>
                                <td>
                                    <button className="btn btn-sm btn-primary card-btn" onClick={() => this.editTime(time.id, time.project_name, time.ProjectId)}>Edit Entry</button>
                                    <button className="btn btn-sm btn-primary card-btn" onClick={() => this.handleDeleteClick(time.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default timeTable;
