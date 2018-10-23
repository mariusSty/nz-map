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
          dates: ["15/01/2018", "17/01/2018"],
          img: [
            "./img/1/abstract01.jpg",
            "./img/1/abstract02.jpg",
            "./img/1/abstract03.jpg"
          ],
          caption: ["Test", "Une image lel", "CC cv ?"],
          longitude: -36.8484,
          latitude: 174.7633
        },
        {
          order: 2,
          name: "Second",
          dates: ["18/01/2018"],
          img: ["./img/2/abstract04.jpg"],
          caption: ["Lalala"],
          longitude: -41.2864,
          latitude: 174.7762
        }
      ],
      current: null
    };
    this.state.center = this.findCenter();
  }

  renderTimeline() {
    return (
      <Timeline
        value={this.state.steps}
        current={this.state.current}
        onClick={i => this.handleClick(i)}
      />
    );
  }

  renderSlider(current) {
    return <Slider current={current} onClick={i => this.handleClick(i)} />;
  }

  renderMap() {
    return (
      <Map
        steps={this.state.steps}
        center={this.state.center}
        onClick={i => this.handleClick(i)}
      />
    );
  }

  renderSliderOrMap() {
    let current = this.state.current;
    if (current === null) {
      return this.renderMap();
    }
    return this.renderSlider(current);
  }

  render() {
    return (
      <div className="body">
        <div className="header">
          <h1>Trip to New Zealand</h1>
        </div>
        <div className="timeline">{this.renderTimeline()}</div>
        <div className="slider">{this.renderSliderOrMap()} </div>
      </div>
    );
  }

  handleClick(i) {
    if (this.state.current === this.state.steps[i] || i === undefined) {
      this.setState({
        current: null
      });
    } else {
      this.setState({
        current: this.state.steps[i]
      });
    }
  }

  findCenter() {
    const longitude = [];
    const latitude = [];

    for (let i = 0; i < this.state.steps.length; i++) {
      longitude.push(this.state.steps[i].longitude);
      latitude.push(this.state.steps[i].latitude);
    }
    const minLatitude = Math.min(...latitude);

    const maxLatitude = Math.max(...latitude);
    const midLatitude = (minLatitude + maxLatitude) / 2;
    const minLongitude = Math.min(...longitude);
    const maxLongitude = Math.max(...longitude);
    const midLongitude = (minLongitude + maxLongitude) / 2;

    return [midLatitude, midLongitude];
  }
}

export default App;
