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
        let id = localStorage.getItem("client_id");
        console.log(id);
        API.getOneClient(id).then(res => {
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

    handleCancel = event => {
        window.location.replace("/clientTable")
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
                    <h4>Edit Client: {this.state.data.client_name}</h4>
                    <div className="container">
                        <div className="FormCenter">
                            <form onSubmit={this.handleSubmit} className="FormField">
                                <div className="FormField">
                                    <label htmlFor="entryClientName">Client Name: {this.state.data.client_name}</label>
                                    <input
                                        type="text"
                                        id="entryClientName"
                                        className="form-control"
                                        placeholder={this.state.data.client_name}
                                        name="entryClientName"
                                        value={this.state.entryClientName}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label htmlFor="entryClientContact">Client Contact: {this.state.data.client_contact}</label>
                                    <input
                                        type="text"
                                        id="entryClientContact"
                                        className="form-control"
                                        placeholder={this.state.data.client_contact}
                                        name="entryClientContact"
                                        value={this.state.entryClientContact}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label htmlFor="entryContactEmail">Contact Email: {this.state.data.contact_email}</label>
                                    <input
                                        type="email"
                                        id="entryContactEmail"
                                        className="form-control"
                                        placeholder={this.state.data.contact_email}
                                        name="entryContactEmail"
                                        value={this.state.entryContactEmail}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label htmlFor="entryClientServices">Client Services: {this.state.data.client_services}</label>
                                    <input
                                        type="text"
                                        id="entryClientServices"
                                        className="form-control"
                                        placeholder={this.state.data.client_services}
                                        name="entryClientServices"
                                        value={this.state.entryClientServices}
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

export default editClient;
