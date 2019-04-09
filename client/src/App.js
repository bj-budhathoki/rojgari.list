import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import JobDetails from "./components/JobDetails/JobDetails";
import PostJob from "./Pages/PostJob";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/job/:title" exact component={JobDetails} />
          <Route path="/post-a-job" exact component={PostJob} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
