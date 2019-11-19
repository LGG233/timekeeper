import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/navbar';
import './App.css';
import Table from './components/table';
import Entry from './components/time-entry';
import Landing from './components/landing';


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
                <Route exact path="/Table" component={Table} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;

