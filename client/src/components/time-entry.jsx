import React, { Component } from 'react';

class Entry extends Component {
    state = {}
    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="entryDate">Date</label>
                    <input type="date" class="form-control" id="entryDate" placeholder="Enter date"></input>
                </div>
                <div className="form-group">
                    <label for="entryTime">Time</label>
                    <input type="text" class="form-control" id="entryTime" placeholder="Enter time"></input>
                </div>
                <div className="form-group">
                    <label for="entryClient">Client</label>
                    <input type="text" class="form-control" id="entryClient" placeholder="Enter Client"></input>
                </div>
                <div className="form-group">
                    <label for="entryDesc">Description</label>
                    <input type="text" class="form-control" id="entryDesc" placeholder="Describe Services"></input>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="billed" id="billed" value="option1" unchecked></input>
                    <label className="form-check-label" for="exampleRadios1">
                        Billed?</label>
                </div>
                <button className="btn entryCancel">
                    Cancel{" "}
                </button>
                <button className="btn entrySubmit">
                    Submit{" "}
                </button>
            </form>
        );
    }
}

export default Entry;

