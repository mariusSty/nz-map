import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function Timeline(props) {
  let isActive;
  let classNameActive;
  const steps = props.value.map((steps, i) => {
    isActive = props.value[i] === props.current;
    classNameActive = isActive ? "active" : "";
    return (
      <li key={i}>
        <Button
          variant="outlined"
          color="secondary"
          className={classNameActive}
          onClick={() => props.onClick(i)}
        >
          {steps.name}
        </Button>
      </li>
    );
  });

  return (
    <div>
      <Typography variant="h5" color="secondary">
        Trip to New Zealand
      </Typography>
      <ul>{steps}</ul>
    </div>
  );
}

export default Timeline;
