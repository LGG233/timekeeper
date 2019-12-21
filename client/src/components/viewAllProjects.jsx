import React, { Component } from 'react';
import API from "../util/API";
import "./table.css";

// Pseudocode
// 1) get data from db
// componentDidMount
// - query db with GET projects API call

// 2) Set up table to accept data
// loops through JSON package to display all data

// 3) button attached to row for editing that calls up modal 

// 4) button attached to row for deleting project and all associated time entries without deleting client

class allProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project_id: "",
            client_name: "",
            project_name: "",
            project_description: "",
            billing_type: "",
            billing_rate: "",
            billing_unit: "",
            data: []
        }
    }

    componentDidMount() {
        console.log("component did mount");
        API.getAllProjects().then(res => {
            console.log(res);
            this.setState({
                data: res.data
            })
        })
    };

    viewTime = (name, project, id) => {
        localStorage.setItem("client_name", name);
        localStorage.setItem("project_name", project);
        localStorage.setItem("project_id", id);
        window.location.replace("/projectTimeTable");
    };

    enterTimeClick = (id, name, project) => {
        localStorage.setItem("project_id", id);
        localStorage.setItem("client_name", name);
        localStorage.setItem("project_name", project);
        window.location.replace("/Entry");
    };

    editProject = (id) => {
        localStorage.setItem("project_id", id);
        window.location.replace("/editProject");
    };

    viewProjectDetail = (id) => {
        localStorage.setItem("project_id", id);
        window.location.replace("/projectDetail");
    };

    handleProjectDelete = (id) => {
        var result = window.confirm("Are you sure you want to delete this project?")
        if (result) {
            localStorage.setItem("project_id", id);
            API.deleteProject(id).then(res => {
                console.log("API request sent");
            })
            window.location.replace("/projectTable");
        }
    };

    render() {
        return (
            <div>
                <h4>Client Projects</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Client</th>
                            <th scope="col">Project</th>
                            <th scope="col">Description</th>
                            <th scope="col">Billing Type</th>
                            <th scope="col">Billing Unit</th>
                            <th scope="col">Billing Rate</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(project => (
                            <tr>
                                <th scope="row">{project.client_name}</th>
                                <td>{project.project_name}</td>
                                <td>{project.project_description}</td>
                                <td>{project.billing_type}</td>
                                <td>{project.billing_unit}</td>
                                <td>${project.billing_rate}</td>
                                <td>
                                    <button className="btn btn-sm btn-primary card-btn" onClick={() => this.viewProjectDetail(project.id)}>View Detail</button>
                                    <button className="btn btn-sm btn-primary card-btn" onClick={() => this.editProject(project.id)}>Edit Project</button>
                                    <button className="btn btn-sm btn-primary card-btn" onClick={() => this.handleProjectDelete(project.id)}>Delete Project</button>
                                    <button className="btn btn-sm btn-primary card-btn" onClick={() => this.enterTimeClick(project.id, project.client_name, project.project_name)}>Enter Time</button>
                                    <button className="btn btn-sm btn-primary card-btn" onClick={() => this.viewTime(project.client_name, project.project_name, project.id)}>View Time</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default allProjects;
