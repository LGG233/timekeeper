import React, { Component } from "react";
import API from "../util/API";
import "./table.css";
import moment from "moment";

class timeByDateTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      project_name: "",
      client_name: "",
      date_of_service: "",
      hours: "",
      desc_of_work: "",
      startDate: "",
      dateRange: "",
      dateData: [],
      data: [],
    };
  }

  componentDidMount() {
    let startDate = localStorage.getItem("start_date");
    let dateRange = localStorage.getItem("date_range");
    let dateData = {
      startDate,
      dateRange,
    };
    console.log("componentDidMount loaded");
    console.log("Data sent back end", dateData);
    API.getAllTime(dateData).then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  handleDeleteClick = (id) => {
    var result = window.confirm(
      "Are you sure you want to delete this time entry?"
    );
    if (result) {
      localStorage.setItem("entry_id", id);
      API.deleteTimeEntry(id).then((res) => {
        this.setState({
          data: res.data,
        });
      });
      localStorage.removeItem("entry_id");
      window.location.replace("/projectTimeTable");
    }
  };

  enterTimeClick = (id, name, project) => {
    localStorage.setItem(this.state.data.ProjectId, id);
    localStorage.setItem(this.state.data.client_name, name);
    localStorage.setItem(this.state.data.project_name, project);
    window.location.replace("/Entry");
  };

  editTime = (id) => {
    localStorage.setItem("entry_id", id);
    window.location.replace("/editTimeEntry");
  };

  render() {
    return (
      <div>
        <h4>Time Entries by Date</h4>
        <button
          className="btn btn-sm btn-secondary card-btn"
          onClick={() => window.location.replace("/viewAllProjects")}
        >
          Enter Time
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Client</th>
              <th scope="col">Project</th>
              <th scope="col">Hours</th>
              <th scope="col">Work Performed</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((time) => (
              <tr>
                <th scope="row">
                  {moment.utc(time.date_of_service).format("l")}
                </th>
                <td>{time.client_name}</td>
                <td>{time.project_name}</td>
                <td>{time.hours}</td>
                <td>{time.desc_of_work}</td>
                <td>
                  <button
                    className="btn btn-sm btn-secondary card-btn"
                    onClick={() => this.editTime(time.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-secondary card-btn"
                    onClick={() => this.handleDeleteClick(time.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default timeByDateTable;
