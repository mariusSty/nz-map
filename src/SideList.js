import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function SideList(props) {
  return (
    <List>
      {props.steps.map((step, i) => (
        <ListItem button key={i}>
          <ListItemText primary={step.name} onClick={() => props.onClick(i)} />
        </ListItem>
      ))}
    </List>
  );
}
export default SideList;
