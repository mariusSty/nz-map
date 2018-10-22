import React from "react";

function Timeline(props) {
  let isActive;
  let classNameActive;
  const steps = props.value.map((steps, i) => {
    isActive = props.value[i] === props.current;
    classNameActive = isActive ? "active" : "";
    return (
      <li key={i}>
        <button
          className={"step " + classNameActive}
          onClick={() => props.onClick(i)}
        >
          {steps.name}
        </button>
      </li>
    );
  });

  return <ul>{steps}</ul>;
}

export default Timeline;
