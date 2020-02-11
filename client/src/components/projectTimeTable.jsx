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
    };

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
        var result = window.confirm("Are you sure you want to delete this time entry?")
        if (result) {
            localStorage.setItem("entry_id", id);
            API.deleteTimeEntry(id).then(res => {
                this.setState({
                    data: res.data
                });
            })
            localStorage.removeItem("entry_id");
            window.location.replace("/projectTimeTable")
        }
    };

    addNewProject = (id, name) => {
        localStorage.setItem("client_id", id);
        localStorage.setItem("client_name", name);
        window.location.replace("/Project");
    };

    enterTimeClick = (id, name, project) => {
        localStorage.setItem(this.state.data.ProjectId, id);
        localStorage.setItem(this.state.data.client_name, name);
        localStorage.setItem(this.state.data.project_name, project);
        window.location.replace("/Entry");
    };

    editTime = (id) => {
        localStorage.setItem("entry_id", id);
        window.location.replace("/editTimeEntry");
    };

    render() {
        return (
            <div>
                <h4>Time entries for {localStorage.getItem("client_name")} on {localStorage.getItem("project_name")} project</h4>
                <button className="btn btn-sm btn-secondary card-btn" onClick={() => this.enterTimeClick(this.state.data.ProjectId, this.state.data.client_name, this.state.data.project_name)}>Enter Time on this Project</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Hours</th>
                            <th scope="col">Work Performed</th>
                            {/* <th scope="col">Billed?</th> */}
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(time => (
                            <tr>
                                <th scope="row">{moment.utc(time.date_of_service).format("ll")}</th>
                                <td>{time.hours}</td>
                                <td>{time.desc_of_work}</td>
                                {/* <td></td> */}
                                <td>
                                    <button className="btn btn-sm btn-secondary card-btn" onClick={() => this.editTime(time.id)}>Edit Entry</button>
                                    <button className="btn btn-sm btn-secondary card-btn" onClick={() => this.handleDeleteClick(time.id)}>Delete Entry</button>
                                    {/* <button className="btn btn-sm btn-primary card-btn" onClick={() => this.enterTimeClick(time.ProjectId, time.client_name, time.project_name)}>Enter Time on this Project</button> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default projectTimeTable;
