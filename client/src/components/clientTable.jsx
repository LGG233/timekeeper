import React, { Component } from 'react';
import API from "../util/API";
import "./table.css";


// Pseudocode
// 3) button attached to row for editing that calls up modal 

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
    };

    componentDidMount() {
        console.log("component did mount");
        API.getAllClients().then(res => {
            console.log("API request sent");
            this.setState({
                data: res.data
            })
        })

    };

    viewClientProjects = (id, name) => {
        localStorage.setItem("client_id", id);
        localStorage.setItem("client_name", name);
        window.location.replace("/projectTable");
    };

    viewClientDetail = (id, name) => {
        localStorage.setItem("client_id", id);
        localStorage.setItem("client_name", name);
        window.location.replace("/clientDetail");
    };

    editClient = (id, name) => {
        localStorage.setItem("client_id", id);
        localStorage.setItem("client_name", name);
        window.location.replace("/editClient");
    };

    handleClientDelete = (id) => {
        var result = window.confirm("Are you sure you want to delete this client?")
        if (result) {
            localStorage.setItem("client_id", id);
            API.deleteClient(id).then(res => {
                console.log("API request sent");
            })
            window.location.replace("/clientTable");
        }
    };

    addNewProject = (id, name) => {
        localStorage.setItem("client_id", id);
        localStorage.setItem("client_name", name);
        window.location.replace("/Project");
    };

    viewTime = (name) => {
        localStorage.setItem("client_name", name);
        window.location.replace("/timeTable");
    };

    render() {
        return (
            <div>
                <h4>Clients</h4>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(client => (
                            <tr>
                                <th scope="row">{client.client_name}</th>
                                <td>
                                    <button className="btn btn-secondary btn-sm card-btn" onClick={() => this.viewClientDetail(client.id, client.client_name)}>Detail</button>
                                    <button className="btn btn-secondary btn-sm card-btn" onClick={() => this.viewClientProjects(client.id, client.client_name)}>Projects</button>
                                    <button className="btn btn-secondary btn-sm card-btn" onClick={() => this.addNewProject(client.id, client.client_name)}>New Project</button>
                                    <button className="btn btn-secondary btn-sm card-btn" onClick={() => this.viewTime(client.client_name)}>Time</button>
                                    <button className="btn btn-secondary btn-sm card-btn" onClick={() => this.editClient(client.id, client.client_name)}>Edit</button>
                                    <button className="btn btn-secondary btn-sm card-btn" onClick={() => this.handleClientDelete(client.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default clientTable;
