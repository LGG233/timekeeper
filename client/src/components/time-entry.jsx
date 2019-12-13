import React, { Component } from 'react';
import API from "../util/API";

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

    componentDidMount = (id) => {
        console.log("component did mount");
        API.getTimeEntry(localStorage.getItem("client_id")).then(res => {
            console.log("API request sent");
            this.setState({
                data: res.data
            })
            console.log(localStorage.getItem("client_name"));
            console.log(localStorage.getItem("client_id"));
            console.log(res.data[0].client_name);
            console.log(this.state.client_name);
        })
    };


    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="entryDate">Date</label>
                    <input type="date" class="form-control" id="entryDate" placeholder="Enter date"></input>
                </div>
                <div className="form-group">
                    <label for="entryTime">Time</label>
                    <input type="text" class="form-control" id="entryTime" placeholder="Enter time"></input>
                </div>
                <div className="form-group">
                    <label for="entryClient">Client</label>
                    <input type="text" class="form-control" id="entryClient" placeholder="Enter Client"></input>
                </div>
                <div className="form-group">
                    <label for="entryDesc">Description</label>
                    <input type="text" class="form-control" id="entryDesc" placeholder="Describe Services"></input>
                </div>
                <div className="form-group">
                    <label for="clientName">Client Name</label>
                    <input type="text" class="form-control" id="clientName">{this.state.data.client_name}</input>
                </div>
                <div className="form-group">
                    <label for="projectId">Project ID</label>
                    <input type="text" class="form-control" id="projectId">{this.state.project_id}</input>
                </div>
                <div className="form-group">
                    <label for="clientName">Project Name</label>
                    <input type="text" class="form-control" id="projectName">{this.project_name}</input>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="billed" id="billed" value="option1" unchecked></input>
                    <label className="form-check-label" for="exampleRadios1">
                        Billed?</label>
                </div>
                <button className="btn entryCancel">
                    Cancel{" "}
                </button>
                <button className="btn entrySubmit">
                    Submit{" "}
                </button>
            </form>
        );
    }
}

export default Entry;

// API.addTimeEntry(localStorage.getItem("client_id")).then(res => {
//     this.setState({
//         data: res.data
//     });
// })
// localStorage.removeItem("entry_id");
