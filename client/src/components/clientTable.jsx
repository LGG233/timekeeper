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

    viewClientDetail = (id, name) => {
        localStorage.setItem("client_id", id);
        localStorage.setItem("client_name", name);
        window.location.replace("/clientDetail");
    }

    editClient = (id, name) => {
        localStorage.setItem("client_id", id);
        localStorage.setItem("client_name", name);
        window.location.replace("/editClient");
    }

    handleClientDelete = (id) => {
        localStorage.setItem("client_id", id);
        API.deleteClient(id).then(res => {
            console.log("API request sent");
        })
        window.location.replace("/clientTable");
    }


    render() {
        return (
            <div>
                <h1>Clients</h1>
                {this.state.data.map(client => (
                    <div className="container-fluid">
                        <div className="row">
                            <span id="client-list"><ul><li><h5>{client.client_name}</h5></li></ul></span>
                            <button className="btn btn-outline-secondary btn-sm card-btn" onClick={() => this.viewClientDetail(client.id, client.client_name)}>View Detail</button>
                            <button className="btn btn-outline-secondary btn-sm card-btn" onClick={() => this.viewClientProjects(client.id, client.client_name)}>View Projects</button>
                            <button className="btn btn-outline-secondary btn-sm card-btn" onClick={() => this.addNewProject(client.id, client.client_name)}>New Project</button>
                            <button className="btn btn-outline-secondary btn-sm card-btn">View Time</button>
                            <button className="btn btn-outline-secondary btn-sm card-btn" onClick={() => this.editClient(client.id, client.client_name)}>Edit Client</button>
                            <button className="btn btn-outline-secondary btn-sm card-btn" onClick={() => this.handleClientDelete(client.id)}>Delete Client</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default clientTable;
