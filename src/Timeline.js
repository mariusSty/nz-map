import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import theme from "./theme.js";
import { MuiThemeProvider } from "@material-ui/core/styles";

function Timeline(props) {
  let isActive;
  let classNameActive;
  const steps = props.value.map((steps, i) => {
    isActive = props.value[i] === props.current;
    classNameActive = isActive ? "active" : "";
    return (
      <ListItem button key={i}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Typography color="secondary">#{steps.order}</Typography>
          <ListItemText
            disableTypography
            primary={
              <Typography type="body2" color="secondary">
                {steps.name}
              </Typography>
            }
            onClick={() => props.onClick(i)}
          />
          <span />
        </Grid>
      </ListItem>
    );
  });

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Typography variant="h5" color="secondary">
          Trip to New Zealand
        </Typography>
        <hr noshade="true" className="separator" />
        <List color="primary" className="list">
          {steps}
        </List>
      </div>
    </MuiThemeProvider>
  );
}

export default Timeline;
