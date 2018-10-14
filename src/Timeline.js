import React, { Component } from "react";

class Timeline extends Component {
  render() {
    const steps = this.props.value.map((steps, i) => {
      return (
        <li key={i}>
          <button className="step" onClick={() => this.props.onClick(i)}>
            {i}
          </button>
        </li>
      );
    });

    return <ul>{steps}</ul>;
  }
}

export default Timeline;
