import React, { Component } from "react";
import Timeline from "./Timeline";
import Slider from "./Slider";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: Array(6).fill(null),
      current: "Hello"
    };
  }

  handleClick(i) {
    this.setState({
      current: i
    });
  }

  renderTimeline() {
    return (
      <Timeline value={this.state.steps} onClick={i => this.handleClick(i)} />
    );
  }

  renderSlider() {
    return <Slider value={this.state.current} />;
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
