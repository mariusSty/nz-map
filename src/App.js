import React, { Component } from "react";
import Timeline from "./Timeline";
import Slider from "./Slider";
import Map from "./Map";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          order: 1,
          name: "First",
          img: [
            "./img/1/abstract01.jpg",
            "./img/1/abstract02.jpg",
            "./img/1/abstract03.jpg"
          ],
          longitude: "-36.8484",
          latitude: "174.7633"
        },
        {
          order: 2,
          name: "Second",
          img: ["./img/2/abstract04.jpg"],
          longitude: "-41.2864",
          latitude: "174.7762"
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
    return <Slider current={current} />;
  }

  renderMap() {
    return <Map steps={this.state.steps} />;
  }

  render() {
    return (
      <div className="body">
        <div className="header">
          <h1>Trip to New Zealand</h1>
        </div>
        <div className="timeline">{this.renderTimeline()}</div>
        <div className="slider">{this.renderSlider()} </div>
        {/* <div className="slider">{this.renderMap()} </div> */}
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
