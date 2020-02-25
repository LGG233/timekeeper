import React, { Component } from 'react';
import API from "../util/API";
import "./table.css";

// 3) button attached to row for editing that calls up modal 

class projectTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project_id: "",
            client_name: "",
            client_id: "",
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
        let client = localStorage.getItem("client_name");
        API.getClientProjects(client).then(res => {
            console.log(res);
            this.setState({
                data: res.data
            })
        })
    };

    viewClientTime = (id, name) => {
        localStorage.setItem("client_id", id);
        localStorage.setItem("client_name", name);
        API.getClientTime(id).then(res => {
            this.setState({
                data: res.data
            });
        })
        window.location.replace("/timeTable", this.props);
    }

    viewProjectTime = (id, name, project) => {
        localStorage.setItem("project_id", id);
        localStorage.setItem("client_name", name);
        localStorage.setItem("project_name", project);
        window.location.replace("/projectTimeTable");
    }

    enterTimeClick = (id, name, project) => {
        localStorage.setItem("project_id", id);
        localStorage.setItem("client_name", name);
        localStorage.setItem("project_name", project);
        window.location.replace("/Entry");
    }

    editProject = (id) => {
        localStorage.setItem("project_id", id);
        window.location.replace("/editProject");
    }

    handleProjectDelete = (id) => {
        var result = window.confirm("Are you sure you want to delete this project?")
        if (result) {
            localStorage.setItem("project_id", id);
            API.deleteProject(id).then(res => {
                console.log("API request sent");
            })
            window.location.replace("/projectTable");
        }
    }

    viewProjectDetail = (id) => {
        localStorage.setItem("project_id", id);
        window.location.replace("/projectDetail");
    }

    addNewProject = (id, name) => {
        localStorage.setItem("client_id", id);
        localStorage.setItem("client_name", name);
        window.location.replace("/Project");
    };

    render() {
        return (
            <div>
                <h4>Projects for {localStorage.getItem("client_name")}</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Project</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(project => (
                            <div key={project.id}>
                                <tr>
                                    <th scope="row">{project.project_name}</th>
                                    <td>
                                        <button className="btn btn-sm btn-secondary card-btn" onClick={() => this.viewProjectDetail(project.id)}>Detail</button>
                                        <button className="btn btn-sm btn-secondary card-btn" onClick={() => this.editProject(project.id)}>Edit</button>
                                        <button className="btn btn-sm btn-secondary card-btn" onClick={() => this.handleProjectDelete(project.id)}>Delete</button>
                                        <button className="btn btn-sm btn-secondary card-btn" onClick={() => this.enterTimeClick(project.id, project.client_name, project.project_name)}>Enter Time</button>
                                        <button className="btn btn-sm btn-secondary card-btn" onClick={() => this.viewProjectTime(project.id, project.client_name, project.project_name)}>View Time</button>
                                    </td>
                                </tr>
                            </div>
                        ))}
                    </tbody>
                </table >

            </div >
        );
    }
}

export default projectTable;
