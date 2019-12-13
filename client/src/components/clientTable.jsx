import React, { Component } from 'react';
import API from "../util/API";
import "./table.css";


// Pseudocode
// 3) button attached to row for editing that calls up modal 

// 4) button attached to row for deleting client and all associated project and time entries 

class clientTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            client_name: "",
            client_contact: "",
            contact_email: "",
            client_services: "",
            data: []
        }
    }

    componentDidMount() {
        console.log("component did mount");
        API.getAllClients().then(res => {
            console.log("API request sent");
            this.setState({
                data: res.data
            })
        })

    }

    viewClientProjects = (id, name) => {
        localStorage.setItem("client_id", id);
        localStorage.setItem("client_name", name);
        window.location.replace("/projectTable");
    }

    enterTimeClick = (id, name) => {
        localStorage.setItem("client_id", id);
        localStorage.setItem("client_name", name);
        window.location.replace("/Entry");
    }

    addNewProject = (id, name) => {
        localStorage.setItem("client_id", id);
        localStorage.setItem("client_name", name);
        window.location.replace("/Project");
    }

    render() {
        return (
            <div>
                <h1>Clients</h1>
                {this.state.data.map(client => (
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header"><h3>{client.client_name}</h3></div>
                            <div className="card-body">
                                <span>Contact: {client.client_contact}: {client.contact_email}</span>
                                <br></br>
                                <span>Services: {client.client_services}</span>
                                <br></br>
                                <span>Client ID: {client.id}</span>
                                <br></br>
                                <button className="btn btn-primary card-btn">View Time</button>
                                <button className="btn btn-primary card-btn" onClick={() => this.enterTimeClick(client.id, client.client_name)}>Enter Time</button>
                                {/* <button className="btn btn-primary card-btn" onClick={() => this.handleDeleteClick(time.entry_id)}>Delete</button> */}
                                <button className="btn btn-primary card-btn" onClick={() => this.viewClientProjects(client.id, client.client_name)}>View Projects</button>
                                <button className="btn btn-primary card-btn" onClick={() => this.addNewProject(client.id, client.client_name)}>New Project</button>
                                <button className="btn btn-primary card-btn">Edit Client</button>
                                <button className="btn btn-primary card-btn">Delete Client</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default clientTable;
