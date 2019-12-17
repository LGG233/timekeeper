import React, { Component } from 'react';
import API from '../util/API';

class editProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entryProjectClient: "",
            entryProjectName: "",
            entryProjectDesc: "",
            entryBillingType: "",
            entryBillingRate: "",
            entryBillingUnit: "",
            ClientId: "",
            data: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        console.log("component did mount");
        let id = localStorage.getItem("project_id");
        console.log(id);
        API.getOneProject(id).then(res => {
            console.log("Searching for client ID: " + id)
            this.setState({
                data: res.data[0]
            });
        })
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
        let id = localStorage.getItem("project_id");
        this.editProject(id, projectData);
        window.location.replace("/projectDetail");
    };

    editProject = (id, data) => {
        API.editProject(id, data)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="jumbotron">
                            <h3 className="jumboBanner">Edit {localStorage.getItem("client_name")} Project: {this.state.data.project_name}</h3>
                            <p>Project Description: {this.state.data.project_description}</p>
                            <p>Billing Type: {this.state.data.billing_type}</p>
                            <p>Billing Rate: ${this.state.data.billing_rate} / unit</p>
                            <p>Billing Unit: {this.state.data.billing_unit}</p>
                        </div>
                    </div>
                    <div className="col md 6 editClientPage">
                        <div className="FormCenter">
                            <form onSubmit={this.handleSubmit} className="FormField">
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="ProjectName">Project Name: </label>
                                    <input
                                        type="text"
                                        id="ProjectName"
                                        className="FormField__Input"
                                        name="entryProjectName"
                                        value={this.state.entryProjectName}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="ProjectDesc">Description: </label>
                                    <input
                                        type="text"
                                        id="ProjectDesc"
                                        className="FormField__Input"
                                        name="entryProjectDesc"
                                        value={this.state.entryProjectDesc}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="BillingType">Billing Type: </label>
                                    <input
                                        type="text"
                                        id="BillingType"
                                        className="FormField__Input"
                                        name="entryBillingType"
                                        value={this.state.entryBillingType}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="BillingRate">Billing Rate ($): </label>
                                    <input
                                        type="text"
                                        id="Billing Rate"
                                        className="FormField__Input"
                                        name="entryBillingRate"
                                        value={this.state.entryBillingRate}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="BillingUnit">Billing Unit: </label>
                                    <input
                                        type="text"
                                        id="BillingUnit"
                                        className="FormField__Input"
                                        name="entryBillingUnit"
                                        value={this.state.entryBillingUnit}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </form>
                            <button
                                className="btn projectSubmit"
                                onClick={this.handleSubmit}
                            >
                                <h4>Submit </h4>
                            </button >
                            <button className="btn projectCancel">
                                Cancel{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default editProject;
