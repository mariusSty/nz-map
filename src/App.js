import React, { Component } from "react";
import Timeline from "./Timeline";
import Slider from "./Slider";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Hello"
    };
  }

  renderTimeline() {
    return <Timeline value={this.state.value} />;
  }

  renderSlider() {
    return <Slider value={this.state.value} />;
  }

  render() {
    return (
      <div className="body">
        <div className="header">
          <h1>Trip to New Zealand</h1>
        </div>
        <div className="timeline">{this.renderTimeline()}</div>
        <div className="slider">{this.renderSlider()} </div>
      </div>
    );
  }
}

export default App;
