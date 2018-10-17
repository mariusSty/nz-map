import React, { Component } from "react";
import Timeline from "./Timeline";
import Slider from "./Slider";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          order: 1,
          name: "First"
        },
        {
          order: 2,
          name: "Second"
        }
      ],
      current: null
    };
  }

  renderTimeline() {
    return (
      <Timeline value={this.state.steps} onClick={i => this.handleClick(i)} />
    );
  }

  renderSlider() {
    let current = this.state.current;
    if (current === null) {
      current = this.state.steps[0];
    }
    return <Slider steps={this.state.steps} current={current} />;
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

  handleClick(i) {
    this.setState({
      current: this.state.steps[i]
    });
  }
}

export default App;
