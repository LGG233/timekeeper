import React, { Component } from 'react';
import API from "../util/API";
import "./table.css";
import moment from 'moment';

// Pseudocode
// 3) button attached to row for editing that calls up modal 

class timeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entry_id: "",
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
        API.getAllTime().then(res => {
            console.log("API request sent");
            this.setState({
                data: res.data
            })
        })
    };

    handleDeleteClick = (id) => {
        localStorage.setItem("entry_id", id);
        API.deleteTimeEntry(localStorage.getItem("entry_id")).then(res => {
            this.setState({
                data: res.data
            });
        })
        localStorage.removeItem("entry_id");
        window.location.replace("/timeTable", this.props)

    }


    render() {
        return (
            <div>
                <h1>Time Entries</h1>
                {this.state.data.map(time => (
                    <div className="container card-space">
                        <div className="card">
                            <div className="card-header"><h3>{time.client_name}: {time.project_name}</h3></div>
                            <div className="card-body">
                                <span>{time.desc_of_work}</span>
                                <br></br>
                                <span>Date: {moment.utc(time.date_of_service).format("ll")}</span>
                                <br></br>
                                <span>Time: {time.hours}</span>
                                <br></br>
                                <span>Time entry ID: {time.entry_id}</span>
                                <br></br>
                                <button className="btn btn-primary card-btn">Edit</button>
                                <button className="btn btn-primary card-btn" onClick={() => this.handleDeleteClick(time.entry_id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}

export default timeTable;
