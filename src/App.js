import React, { Component } from "react";
import Timeline from "./Timeline";
import Slider from "./Slider";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="body">
        <div class="header">
          <h1>Trip to New Zealand</h1>
        </div>
        <div class="timeline">
          <Timeline />
        </div>
        <div class="slider">
          <Slider />
        </div>
      </div>
    );
  }
}

export default App;
