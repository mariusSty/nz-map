import React from "react";
import Button from "@material-ui/core/Button";

function Timeline(props) {
  let isActive;
  let classNameActive;
  const steps = props.value.map((steps, i) => {
    isActive = props.value[i] === props.current;
    classNameActive = isActive ? "active" : "";
    return (
      <li key={i}>
        <Button
          variant="contained"
          color="primary"
          className={classNameActive}
          onClick={() => props.onClick(i)}
        >
          {steps.name}
        </Button>
      </li>
    );
  });

  return <ul>{steps}</ul>;
}

export default Timeline;
