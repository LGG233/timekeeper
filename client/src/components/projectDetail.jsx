import React, { Component } from 'react';
import API from "../util/API";
import "./table.css";


// Pseudocode
// 3) button attached to row for editing that calls up modal 

// 4) button attached to row for deleting client and all associated project and time entries 

class projectDetail extends Component {
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
    };

    componentDidMount() {
        console.log("component did mount");
        let id = localStorage.getItem("project_id");
        API.getOneProject(id).then(res => {
            console.log("API request sent");
            this.setState({
                data: res.data
            })
        })
    };

    editProject = (id) => {
        localStorage.setItem("project_id", id);
        window.location.replace("/editProject");
    };

    handleProjectDelete = (id) => {
        localStorage.setItem("project_id", id);
        API.deleteProject(id).then(res => {
            console.log("API request sent");
        })
        window.location.replace("/projectTable");
    };

    viewTime = (id) => {
        localStorage.setItem("project_id", id);
        window.location.replace("/timeTable");
    };

    enterTimeClick = (id, name, project) => {
        localStorage.setItem("project_id", id);
        localStorage.setItem("client_name", name);
        localStorage.setItem("project_name", project);
        window.location.replace("/Entry");
    };

    render() {
        return (
            <div>
                <h1>Project Detail</h1>
                {this.state.data.map(project => (
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header"><h3>{project.client_name}</h3></div>
                            <div className="card-body">
                                <span>Name: {project.project_name} </span>
                                <br></br>
                                <span>Description: {project.project_description}</span>
                                <br></br>
                                <span>Billing Type: {project.billing_type}</span>
                                <br></br>
                                <span>Billing Rate: {project.billing_rate}</span>
                                <br></br>
                                <span>Billing Unit: {project.billing_unit}</span>
                                <br></br>
                                <button className="btn btn-sm btn-primary card-btn" onClick={() => this.viewTime(project.id)}>View Time</button>
                                <button className="btn btn-sm btn-primary card-btn" onClick={() => this.enterTimeClick(project.id, project.client_name, project.project_name)}>Enter Time</button>
                                <button className="btn btn-sm btn-primary card-btn" onClick={() => this.editProject(project.id)}>Edit Project</button>
                                <button className="btn btn-sm btn-primary card-btn" onClick={() => this.handleProjectDelete(project.id)}>Delete Project</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default projectDetail;
