import React, { Component } from 'react';
import API from '../util/API';

class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entryClientName: "",
            entryClientContact: "",
            entryContactEmail: "",
            entryClientServices: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log(clientData.entryClientContact);
        this.addNewClient(clientData);
        window.location.replace("/clientTable");
    };

    addNewClient = (data) => {
        API.addNewClient(data)
            .then(data => console.log(data))
            .then(window.location.replace("/clientTable"))
            .catch(err => console.log(err))
    };

    handleCancel = event => {
        window.location.replace("/clientTable")
    };


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h4>New Client</h4>
                    <div className="container">
                        <div className="FormCenter">
                            <form onSubmit={this.handleSubmit} className="FormField">
                                <div className="FormField">
                                    <label for="entryClientName">Client Name</label>
                                    <input
                                        type="text"
                                        id="entryClientName"
                                        className="form-control"
                                        placeholder="Enter client Name"
                                        name="entryClientName"
                                        value={this.state.entryClientName}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label for="entryClientContact">Client Contact</label>
                                    <input
                                        type="text"
                                        id="entryClientContact"
                                        className="form-control"
                                        placeholder="Enter name of client contact"
                                        name="entryClientContact"
                                        value={this.state.entryClientContact}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label for="entryContactEmail">Contact Email</label>
                                    <input
                                        type="email"
                                        id="entryContactEmail"
                                        className="form-control"
                                        placeholder="Enter email of client contact"
                                        name="entryContactEmail"
                                        value={this.state.entryContactEmail}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label for="entryClientServices">Client Services</label>
                                    <input
                                        type="text"
                                        id="entryClientServices"
                                        className="form-control"
                                        placeholder="Enter services that will be provided to client"
                                        name="entryClientServices"
                                        value={this.state.entryClientServices}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </form>
                            <br></br>
                            <button
                                className="btn btn-sm btn-primary projectSubmit"
                                onClick={this.handleSubmit}
                            >
                                Submit{" "}
                            </button >
                            <button
                                className="btn btn-sm btn-primary projectCancel"
                                onClick={this.handleCancel}
                            >
                                Cancel{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Client;


            // <form>
            //     <div className="form-group">
            //         <label for="entryClientName">Client</label>
            //         <input type="text" class="form-control" id="entryClientName" placeholder="Enter name of client"></input>
            //     </div>
            //     <div className="form-group">
            //         <label for="entryClientContact">Client Contact</label>
            //         <input type="text" class="form-control" id="entryClientContact" placeholder="Enter Contact Name"></input>
            //     </div>
            //     <div className="form-group">
            //         <label for="entryContactEmail">Contact Email</label>
            //         <input type="email" class="form-control" id="entryContactEmail" placeholder="Enter client contact email"></input>
            //     </div>
            //     <div className="form-group">
            //         <label for="entryClientServices">Description</label>
            //         <input type="text" class="form-control" id="entryClientServices" placeholder="Describe services for client"></input>
            //     </div>
            // </form >
            //     );
