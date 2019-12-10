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
        API.getAllProjects().then(res => {
            console.log("API request sent");
            this.setState({
                data: res.data
            })
        })
    };

    render() {
        return (
            <div>
                <h1>Client Projects</h1>
                {this.state.data.map(project => (
                    <div className="container-fluid card-space">
                        <div className="card">
                            <div className="card-header"><h3>{project.client_name}: {project.project_name}</h3></div>
                            <div className="card-body">
                                <span>{project.project_description}</span>
                                <br></br>
                                <span>Billing Unit: {project.billing_unit}</span>
                                <br></br>
                                <span>Billing Rate: {project.billing_rate}</span>
                                <br></br>
                                <span>Project ID: {project.project_id}</span>
                                <br></br>
                                <button className="btn btn-primary card-btn">Edit</button>
                                <button className="btn btn-primary card-btn">Delete</button>
                                <button className="btn btn-primary card-btn">Enter Time</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}

export default projectTable;
