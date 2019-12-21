import React, { Component } from 'react';
import API from "../util/API";

class editEntry extends Component {
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
    }

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
        let timeData = {
            entryDate: this.state.entryDate,
            entryProjectName: localStorage.getItem("project_name"),
            entryTime: this.state.entryTime,
            entryDesc: this.state.entryDesc,
            entryClientName: localStorage.getItem("client_name"),
            ProjectId: localStorage.getItem("project_id")
        }
        console.log(timeData);
        this.addTimeEntry(timeData);
    };

    addTimeEntry = (data) => {
        API.addTimeEntry(data)
            .then(data => console.log(data))
            .catch(err => console.log(err))
        window.location.replace("/projectTimeTable");
    };

    handleCancel = event => {
        window.location.replace("/timeTable")
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h4>New Time Entry for {localStorage.getItem("client_name")} on the {localStorage.getItem("project_name")} project</h4>
                    <div className="container">
                        <div className="FormCenter">
                            <form onSubmit={this.handleSubmit} className="FormField">
                                <div className="FormField">
                                    <label for="entryDate">Date of Service</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="entryDate"
                                        name="entryDate"
                                        value={this.state.entryDate}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label for="entryTime">Time Spent</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="entryTime"
                                        placeholder="Enter time"
                                        name="entryTime"
                                        value={this.state.entryTime}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label for="entryDesc">Work Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="entryDesc"
                                        placeholder="Describe Services"
                                        name="entryDesc"
                                        value={this.state.entryDesc}
                                        onChange={this.handleChange} />
                                </div>
                                {/* <div className="form-check">
                                    <input className="form-check-input" type="radio" name="billed" id="billed" value="option1" unchecked></input>
                                    <label className="form-check-label" for="exampleRadios1">
                                        Billed?</label>
                                </div> */}
                                <br></br>
                                <button
                                    className="btn btn-sm btn-primary entrySubmit"
                                    onClick={this.handleSubmit}
                                >
                                    Submit{" "}
                                </button>
                                <button
                                    className="btn btn-sm btn-primary entryCancel"
                                    onClick={this.handleCancel}
                                >
                                    Cancel{" "}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default editEntry;

