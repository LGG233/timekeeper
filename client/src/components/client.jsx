import React, { Component } from 'react';

class Client extends Component {
    state = {}
    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="entryClientName">Client</label>
                    <input type="text" class="form-control" id="entryClientName" placeholder="Enter name of client"></input>
                </div>
                <div className="form-group">
                    <label for="entryClientContact">Client Contact</label>
                    <input type="text" class="form-control" id="entryClientContact" placeholder="Enter Contact Name"></input>
                </div>
                <div className="form-group">
                    <label for="entryContactEmail">Contact Email</label>
                    <input type="email" class="form-control" id="entryContactEmail" placeholder="Enter client contact email"></input>
                </div>
                <div className="form-group">
                    <label for="entryClientServices">Description</label>
                    <input type="text" class="form-control" id="entryClientServices" placeholder="Describe services for client"></input>
                </div>
                <button className="btn projectCancel">
                    Cancel{" "}
                </button>
                <button className="btn projectSubmit">
                    Submit{" "}
                </button>
            </form>
        );
    }
}

export default Client;

