import React, { Component } from "react";

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Hello"
    };
  }
  render() {
    return (
      <li>
        <button
          className="step"
          onClick={() => this.setState({ value: "Click" })}
        >
          {this.state.value}
        </button>
      </li>
    );
  }
}

export default Timeline;
