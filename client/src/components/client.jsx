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
    };

    addNewClient = (data) => {
        API.addNewClient(data)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="jumbotron">
                            <h3 className="jumboBanner">Create a Client</h3>
                        </div>
                    </div>
                    <div className="col md 6 newClientPage">
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
