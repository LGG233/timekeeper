import React, { Component } from 'react';

class Project extends Component {
    state = {}
    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="entryProjectName">Project</label>
                    <input type="text" class="form-control" id="entryProjectName" placeholder="Enter name for project"></input>
                </div>
                <div className="form-group">
                    <label for="entryProjectClient">Client</label>
                    <input type="text" class="form-control" id="entryProjectClient" placeholder="Enter Client"></input>
                </div>
                <div className="form-group">
                    <label for="entryProjectDesc">Description</label>
                    <input type="text" class="form-control" id="entryProjectDesc" placeholder="Describe Services"></input>
                </div>
                <div className="form-group">
                    <label for="billingType">Description</label>
                    <input type="text" class="form-control" id="billingType" placeholder="Hourly or By Project"></input>
                </div>
                <div className="form-group">
                    <label for="billingRate">Description</label>
                    <input type="text" class="form-control" id="billingRate" placeholder="Enter Billing Rate"></input>
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

export default Project;

