import React, { Component } from 'react';
import API from '../util/API';

class editClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entryClientName: "",
            entryClientContact: "",
            entryContactEmail: "",
            entryClientServices: "",
            data: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        console.log("component did mount");
        let id = localStorage.getItem("client_id");
        console.log(id);
        API.getOneClient(id).then(res => {
            console.log("Searching for client ID: " + id)
            this.setState({
                data: res.data[0]
            });
            console.log(this.state.data.client_name);
            console.log(this.state.data.contact_email);
            console.log(this.state.data.client_services);
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
        let clientData = {
            entryClientName: this.state.entryClientName,
            entryClientContact: this.state.entryClientContact,
            entryContactEmail: this.state.entryContactEmail,
            entryClientServices: this.state.entryClientServices
        }
        let id = localStorage.getItem("client_id");
        console.log(clientData.entryClientContact);
        this.editClient(id, clientData);
        window.location.replace("/clientDetail");
    };

    editClient = (id, data) => {
        API.editClient(id, data)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="jumbotron">
                            <h3 className="jumboBanner">Edit Client: {localStorage.getItem("client_name")}</h3>
                            <p>{this.state.data.client_contact}</p>
                            <p>{this.state.data.contact_email}</p>
                            <p>{this.state.data.client_services}</p>
                        </div>
                    </div>
                    <div className="col md 6 editClientPage">
                        <div className="FormCenter">
                            <form onSubmit={this.handleSubmit} className="FormField">
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="ClientName">Client Name</label>
                                    <input
                                        type="text"
                                        id="ClientName"
                                        className="FormField__Input"
                                        placeholder="Client Name"
                                        name="entryClientName"
                                        body={localStorage.getItem("client_name")}
                                        value={this.state.entryClientName}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="ClientContact">Client Contact</label>
                                    <input
                                        type="text"
                                        id="ClientContact"
                                        className="FormField__Input"
                                        placeholder="Client Contact"
                                        name="entryClientContact"
                                        value={this.state.entryClientContact}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="Clientname">Contact Email</label>
                                    <input
                                        type="email"
                                        id="Contactemail"
                                        className="FormField__Input"
                                        placeholder="Contact Email"
                                        name="entryContactEmail"
                                        value={this.state.entryContactEmail}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="Clientservices">Client Services</label>
                                    <input
                                        type="text"
                                        id="Clientservices"
                                        className="FormField__Input"
                                        placeholder="Client Services"
                                        name="entryClientServices"
                                        value={this.state.entryClientServices}
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

export default editClient;
