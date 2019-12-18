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
                                <td>{project.billing_rate}</td>
                                <td>
                                    <button className="btn btn-primary card-btn">Edit</button>
                                    <button className="btn btn-primary card-btn">Delete</button>
                                    <button className="btn btn-primary card-btn">Enter Time</button>
                                    <button className="btn btn-primary card-btn">View Time</button>
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
