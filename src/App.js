import "./App.css";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";
import  Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = function() {
  const [progress, setProgress] = useState(10)
  const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSize =9;
    return (
      <div>
        <Router>
          <Navbar setProgress={setProgress} />
          <LoadingBar
            color="#FFA500"
            progress={progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key={"general"}
                  pageSize={pageSize}
                  country="in"
                  category="general"
                  apiKey={apiKey}
                  setProgress={setProgress}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  key={"business"}
                  pageSize={pageSize}
                  country="in"
                  category="business"
                  apiKey={apiKey}
                  setProgress={setProgress}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  key={"sports"}
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                  apiKey={apiKey}
                  setProgress={setProgress}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key={"entertainment"}
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                  apiKey={apiKey}
                  setProgress={setProgress}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  key={"health"}
                  pageSize={pageSize}
                  country="in"
                  category="health"
                  apiKey={apiKey}
                  setProgress={setProgress}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  key={"science"}
                  pageSize={pageSize}
                  country="in"
                  category="science"
                  apiKey={apiKey}
                  setProgress={setProgress}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  key={"technology"}
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                  apiKey={apiKey}
                  setProgress={setProgress}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
}
export default App;