import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/navbar';
import './App.css';
import timeTable from './components/timeTable';
import projectTable from './components/projectTable';
import clientTable from './components/clientTable';
import Entry from './components/time-entry';
import Landing from './components/landing';
import Project from './components/project';
import Client from './components/client';
import API from './util/API';


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
                <Route exact path="/projectTable" component={projectTable} />
                <Route exact path="/clientTable" component={clientTable} />
                <Route exact path="/Project" component={Project} />
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

