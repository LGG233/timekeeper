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

    // componentDidMount = (id) => {
    //     console.log("component did mount");
    //     console.log(localStorage.getItem("client_name"));
    //     console.log(localStorage.getItem("client_id"));
    //     console.log(localStorage.getItem("project_id"));
    //     console.log(localStorage.getItem("project_name"));
    // console.log(res.data[0].client_name);
    // console.log(this.state.client_name);
    // API.getTimeEntry(localStorage.getItem("client_id")).then(res => {
    //     console.log("API request sent");
    //     this.setState({
    //         data: res.data
    //     })
    // })
    // };

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
        window.location.replace("/timeTable");
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="FormField">
                <div className="form-group">
                    <h4>New Time Entry for {localStorage.getItem("client_name")} on {localStorage.getItem("project_name")} </h4>
                    <label for="entryDate">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="entryDate"
                        placeholder="Enter date"
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

