import "./App.css";
import LoadingBar from "react-top-loading-bar";
import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  pageSize = 9;
  state = {
    progress:10,
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar setProgress={this.setProgress} />
          <LoadingBar
            color="#FFA500"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key={"general"}
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  key={"business"}
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  key={"sports"}
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key={"entertainment"}
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  key={"health"}
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  key={"science"}
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  key={"technology"}
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
