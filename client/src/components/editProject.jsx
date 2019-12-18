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

    handleCancel = event => {
        window.location.replace("/clientTable")
    };


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h4>Edit {this.state.data.project_name} project for {this.state.data.client_name}</h4>
                    <div className="container">
                        <div className="FormCenter">
                            <form onSubmit={this.handleSubmit} className="FormField">
                                <div className="FormField">
                                    <label htmlFor="entryProjectName">Project Name: {this.state.data.project_name}</label>
                                    <input
                                        type="text"
                                        id="entryProjectName"
                                        className="form-control"
                                        placeholder={this.state.data.project_name}
                                        name="entryProjectName"
                                        value={this.state.entryProjectName}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label htmlFor="entryProjectDesc">Description: {this.state.data.project_description}</label>
                                    <input
                                        type="text"
                                        id="entryProjectDesc"
                                        className="form-control"
                                        placeholder={this.state.data.project_description}
                                        name="entryProjectDesc"
                                        value={this.state.entryProjectDesc}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label htmlFor="entryBillingType">Billing Type: {this.state.data.billing_type}</label>
                                    <input
                                        type="text"
                                        id="entryBillingType"
                                        className="form-control"
                                        placeholder={this.state.data.billing_type}
                                        name="entryBillingType"
                                        value={this.state.entryBillingType}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label htmlFor="entryBillingRate">Billing Rate: ${this.state.data.billing_rate}</label>
                                    <input
                                        type="text"
                                        id="entryBillingRate"
                                        className="form-control"
                                        placeholder={this.state.data.billing_rate}
                                        name="entryBillingRate"
                                        value={this.state.entryBillingRate}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label htmlFor="entryBillingUnit">Billing Unit: {this.state.data.billing_unit}</label>
                                    <input
                                        type="text"
                                        id="entryBillingUnit"
                                        className="form-control"
                                        placeholder={this.state.data.billing_unit}
                                        name="entryBillingUnit"
                                        value={this.state.entryBillingUnit}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </form>
                            <br></br>
                            <button
                                className="btn btn-primary projectSubmit"
                                onClick={this.handleSubmit}
                            >
                                Submit{" "}
                            </button >
                            <button
                                className="btn btn-primary projectCancel"
                                onClick={this.handleCancel}>
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
