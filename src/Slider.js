import React, { Component } from "react";

class Slider extends Component {
  render() {
    return <div>{this.props.current.name}</div>;
  }
}

export default Slider;
