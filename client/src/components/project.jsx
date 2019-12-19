import React, { Component } from 'react';
import API from "../util/API";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entryProjectClient: "",
            entryProjectName: "",
            entryProjectDesc: "",
            entryBillingType: "",
            entryBillingRate: "",
            entryBillingUnit: "",
            ClientId: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleChange = event => {
        let target = event.target;
        let name = target.name;

        this.setState({
            [name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(localStorage.getItem("client_name"));
        console.log(this.state);
        let projectData = {
            entryProjectName: this.state.entryProjectName,
            entryProjectClient: localStorage.getItem("client_name"),
            entryProjectDesc: this.state.entryProjectDesc,
            entryBillingType: this.state.entryBillingType,
            entryBillingRate: this.state.entryBillingRate,
            entryBillingUnit: this.state.entryBillingUnit,
            ClientId: localStorage.getItem("client_id")
        }
        console.log(projectData);
        this.addNewProject(projectData);
    };

    addNewProject = (data) => {
        API.addNewProject(data)
            .then(data => console.log(data))
            .catch(err => console.log(err))
        window.location.replace("/projectTable");
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="FormField">
                <div className="form-group">
                    <h4>New Project for {localStorage.getItem("client_name")} </h4>
                    <div>
                        <label for="entryProjectName">Project</label>
                        <input
                            type="text"
                            className="form-control"
                            id="entryProjectName"
                            placeholder="Enter name for project"
                            name="entryProjectName"
                            value={this.state.entryProjectName}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="entryProjectClient">Client</label>
                        <input
                            type="text"
                            className="form-control"
                            id="entryProjectClient"
                            placeholder="Enter Client"
                            name="entryProjectClient"
                            value={this.state.entryProjectClient}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="entryProjectDesc">Project Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="entryProjectDesc"
                            placeholder="Describe Services"
                            name="entryProjectDesc"
                            value={this.state.entryProjectDesc}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="entryBillingType">Billing Type</label>
                        <input
                            type="text"
                            className="form-control"
                            id="entryBillingType"
                            placeholder="Hourly or By Project"
                            name="entryBillingType"
                            value={this.state.entryBillingType}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="entryBillingRate">Billing Rate</label>
                        <input
                            type="text"
                            className="form-control"
                            id="entryBillingRate"
                            placeholder="Enter Billing Rate"
                            name="entryBillingRate"
                            value={this.state.entryBillingRate}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="entryBillingUnit">Billing Unit</label>
                        <input
                            type="text"
                            className="form-control"
                            id="entryBillingUnit"
                            placeholder="Enter Billing Unit"
                            name="entryBillingUnit"
                            value={this.state.entryBillingUnit}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <button className="btn btn-sm projectCancel">
                    Cancel{" "}
                </button>
                <button className="btn btn-sm projectSubmit"
                    onClick={this.handleSubmit}
                >
                    Submit{" "}
                </button>
            </form>
        );
    }
}

export default Project;

