import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MapIcon from "@material-ui/icons/Map";

function TopBar(props) {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton aria-label="Menu" onClick={() => props.onClick()}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          <MapIcon className="title" />
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default TopBar;
