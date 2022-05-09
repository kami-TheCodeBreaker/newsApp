import "./App.css";

import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key={"general"}
                  pageSize="9"
                  country="in"
                  category="general"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  key={"business"}
                  pageSize="9"
                  country="in"
                  category="business"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  key={"sports"}
                  pageSize="9"
                  country="in"
                  category="sports"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key={"entertainment"}
                  pageSize="9"
                  country="in"
                  category="entertainment"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  key={"health"}
                  pageSize="9"
                  country="in"
                  category="health"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  key={"science"}
                  pageSize="9"
                  country="in"
                  category="science"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  key={"technology"}
                  pageSize="9"
                  country="in"
                  category="technology"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
