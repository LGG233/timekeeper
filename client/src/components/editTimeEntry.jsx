import React, { Component } from 'react';
import API from "../util/API";
import moment from 'moment';

class Entry extends Component {
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

    componentDidMount() {
        console.log("component did mount");
        let id = localStorage.getItem("entry_id");
        API.getTimeEntry(id).then(res => {
            console.log("Searching for entry ID: " + id)
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
        let timeData = {
            entryTimeDOS: this.state.entryDate,
            entryProjectName: localStorage.getItem("project_name"),
            entryHours: this.state.entryTime,
            entryTimeDesc: this.state.entryDesc,
            entryClientName: localStorage.getItem("client_name"),
            ProjectId: localStorage.getItem("project_id")
        }
        let id = localStorage.getItem("entry_id");
        this.editEntry(id, timeData);
        window.location.replace("/projectTimeTable");
    };

    editEntry = (id, data) => {
        API.editEntry(id, data)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    };

    handleCancel = event => {
        window.location.replace("/timeTable")
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h4>Edit time entry for {localStorage.getItem("client_name")} on the {localStorage.getItem("project_name")} project</h4>
                    <div className="container">
                        <div className="FormCenter">
                            <form onSubmit={this.handleSubmit} className="FormField">
                                <div className="FormField">
                                    <label for="entryDate">Date of Service: {moment.utc(this.state.data.date_of_service).format("ll")}</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="entryDate"
                                        name="entryDate"
                                        placeholder={moment.utc(this.state.data.date_of_service).format("ll")}
                                        value={this.state.entryDate}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label for="entryTime">Time Spent: {this.state.data.hours}</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="entryTime"
                                        placeholder={this.state.data.hours}
                                        name="entryTime"
                                        value={this.state.entryTime}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label for="entryDesc">Work Description: {this.state.data.desc_of_work}</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="entryDesc"
                                        placeholder={this.state.data.desc_of_work}
                                        name="entryDesc"
                                        value={this.state.entryDesc}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="billed" id="billed" value="option1" unchecked></input>
                                    <label className="form-check-label" for="exampleRadios1">
                                        Billed?</label>
                                </div>
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

export default Entry;

