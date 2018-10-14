import React, { Component } from "react";

class Timeline extends Component {
  render() {
    return (
      <li>
        <button className="step" onClick={() => console.log("click")}>
          {this.props.value}
        </button>
      </li>
    );
  }
}

export default Timeline;
