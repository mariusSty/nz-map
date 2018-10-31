import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import theme from "./theme.js";
import { MuiThemeProvider } from "@material-ui/core/styles";
import MapIcon from "@material-ui/icons/Map";

function Timeline(props) {
  let isActive;
  let classNameActive;
  const steps = props.value.map((steps, i) => {
    isActive = props.value[i] === props.current;
    classNameActive = isActive ? " active" : "";
    return (
      <ListItem
        button
        className={"list-item" + classNameActive}
        key={i}
        onClick={() => props.onClick(i)}
      >
        <Typography>#{steps.order}</Typography>
        <ListItemText
          disableTypography
          primary={<Typography>{steps.name}</Typography>}
        />
      </ListItem>
    );
  });

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Typography variant="h5">
          <MapIcon className="title" />
          <b>Trip to New Zealand</b>
        </Typography>
        <Typography className="description" variant="body1">
          Site ayant pour but de répértorier mes photos durant mon voyage en
          Nouvelle-Zélande
        </Typography>
        <List className="list">{steps}</List>
      </div>
    </MuiThemeProvider>
  );
}

export default Timeline;
