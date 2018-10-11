import React, { Component } from "react";
import Timeline from "./Timeline";
import Slider from "./Slider";

class App extends Component {
  render() {
    return (
      <div>
        <div class="header">
          <h1>Trip in New Zealand</h1>
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
