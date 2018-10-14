import React, { Component } from "react";
import Timeline from "./Timeline";
import Slider from "./Slider";
import "./App.scss";

class App extends Component {
  render() {
    const i = "Hello";
    return (
      <div className="body">
        <div className="header">
          <h1>Trip to New Zealand</h1>
        </div>
        <div className="timeline">
          <Timeline value={i} />
        </div>
        <div className="slider">
          <Slider />
        </div>
      </div>
    );
  }
}

export default App;
