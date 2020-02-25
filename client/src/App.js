import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/navbar';
import './App.css';
import projectTimeTable from './components/projectTimeTable';
import timeTable from './components/timeTable';
import timeByDateTable from './components/timeByDateTable';
import projectTable from './components/projectTable';
import clientTable from './components/clientTable';
import Entry from './components/time-entry';
import Landing from './components/landing';
import Project from './components/project';
import clientDetail from './components/clientDetail';
import Client from './components/client';
// import API from './util/API';
import allProjects from './components/viewAllProjects';
import editClient from './components/editClient';
import editProject from './components/editProject';
import projectDetail from './components/projectDetail';
import editEntry from './components/editTimeEntry';

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <NavBar />
        <br />
        <div className="container-fluid MainPage">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/Entry" component={Entry} />
                <Route exact path="/timeTable" component={timeTable} />
                <Route exact path="/timeByDateTable" component={timeByDateTable} />
                <Route exact path="/viewAllProjects" component={allProjects} />
                <Route exact path="/projectTable" component={projectTable} />
                <Route exact path="/editClient" component={editClient} />
                <Route exact path="/editProject" component={editProject} />
                <Route exact path="/clientDetail" component={clientDetail} />
                <Route exact path="/projectDetail" component={projectDetail} />
                <Route exact path="/projectTimeTable" component={projectTimeTable} />
                <Route exact path="/clientTable" component={clientTable} />
                <Route exact path="/Project" component={Project} />
                <Route exact path="/editTimeEntry" component={editEntry} />
                <Route exact path="/Client" component={Client} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;

