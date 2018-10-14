import React, { Component } from "react";

class Timeline extends Component {
  render() {
    const steps = this.props.value.map((steps, i) => {
      return (
        <li key={i}>
          <button className="step">{i}</button>
        </li>
      );
    });

    return <ul>{steps}</ul>;
  }
}

export default Timeline;
