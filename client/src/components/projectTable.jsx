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
        API.getClientProjects(localStorage.getItem("client_name")).then(res => {
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

    render() {
        return (
            <div>
                <h1>Projects for {localStorage.getItem("client_name")}</h1>
                {this.state.data.map(project => (
                    <div className="container-fluid card-space">
                        <div className="card">
                            <div className="card-header"><h3>{project.project_name}</h3></div>
                            <div className="card-body">
                                <span>{project.project_description}</span>
                                <br></br>
                                <span>Billing Unit: {project.billing_unit}</span>
                                <br></br>
                                <span>Billing Rate: {project.billing_rate}</span>
                                <br></br>
                                <span>Project ID: {project.id}</span>
                                <br></br>
                                <button className="btn btn-primary card-btn">Edit</button>
                                <button className="btn btn-primary card-btn">Delete</button>
                                <button className="btn btn-primary card-btn" onClick={() => this.enterTimeClick(project.id, project.client_name, project.project_name)}>Enter Time</button>
                                <button className="btn btn-primary card-btn" onClick={() => this.viewProjectTime(project.id, project.client_name, project.project_name)}>View Time</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}

export default projectTable;
