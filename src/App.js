import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListEmployeeComponent}></Route>
              <Route
                path="/employees"
                component={ListEmployeeComponent}
              ></Route>
              <Route
                path="/add-employee"
                component={CreateEmployeeComponent}
              ></Route>
              <Route
                path="/update-employee/:id"
                component={UpdateEmployeeComponent}
              ></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
