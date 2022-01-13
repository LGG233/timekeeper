import React, { Component } from "react";
import "./table.css";
import moment from "moment";

class timeByDateParameters extends Component {
  constructor() {
    super();
    this.state = {
      startDate: "",
      endDate: "",
      data: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleChange = (event) => {
    let target = event.target;
    let name = target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let start = moment(this.state.startDate);
    let end = moment(this.state.endDate);
    let range = end - start;
    let newRange = range / (24 * 60 * 60 * 1000);
    localStorage.setItem("start_date", this.state.startDate);
    localStorage.setItem("date_range", newRange);
    window.location.replace("/timeByDateRangeTable");
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h4>Dates to Search </h4>
          <div className="container">
            <div className="FormCenter">
              <form onSubmit={this.handleSubmit} className="FormField">
                <div className="FormField">
                  <label for="startDate">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="startDate"
                    name="startDate"
                    value={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="FormField">
                  <label for="endDate">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="endDate"
                    name="endDate"
                    value={this.state.endDate}
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  className="btn btn-sm btn-secondary entrySubmit"
                  onClick={this.handleSubmit}
                >
                  Submit{" "}
                </button>
                <button
                  className="btn btn-sm btn-secondary entryCancel"
                  onClick={this.handleCancel}
                >
                  Cancel{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default timeByDateParameters;
