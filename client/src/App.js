import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import JobDetails from "./components/JobDetails/JobDetails";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/job/:title" exact component={JobDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
