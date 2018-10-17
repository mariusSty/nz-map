import React from "react";

function Timeline(props) {
  const steps = props.value.map((steps, i) => {
    return (
      <li key={i}>
        <button className="step" onClick={() => props.onClick(i)}>
          {steps.name}
        </button>
      </li>
    );
  });

  return <ul>{steps}</ul>;
}

export default Timeline;
