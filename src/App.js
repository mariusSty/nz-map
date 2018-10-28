import React, { Component } from "react";
import Timeline from "./Timeline";
import Slider from "./Slider";
import Map from "./Map";
import "./App.scss";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#000000" },
    secondary: { main: "#ffffff" }
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          order: 1,
          name: "First",
          dates: ["15/01/2018", "17/01/2018"],
          img: [
            "./img/1/abstract01.jpg",
            "./img/1/abstract02.jpg",
            "./img/1/abstract03.jpg"
          ],
          caption: ["Test", "Une image lel", "CC cv ?"],
          longitude: -36.8484,
          latitude: 174.7633
        },
        {
          order: 2,
          name: "Second",
          dates: ["18/01/2018"],
          img: ["./img/2/abstract04.jpg"],
          caption: ["Lalala"],
          longitude: -41.2864,
          latitude: 174.7762
        }
      ],
      current: null,
      left: false
    };
    this.state.center = this.findCenter();
  }

  renderTimeline() {
    return (
      <Timeline
        value={this.state.steps}
        current={this.state.current}
        onClick={i => this.handleClick(i)}
      />
    );
  }

  renderSlider(current) {
    return <Slider current={current} onClick={i => this.handleClick(i)} />;
  }

  renderMap() {
    return (
      <Map
        steps={this.state.steps}
        center={this.state.center}
        onClick={i => this.handleClick(i)}
      />
    );
  }

  renderSliderOrMap() {
    let current = this.state.current;
    if (current === null) {
      return this.renderMap();
    }
    return this.renderSlider(current);
  }

  render() {
    const sideList = (
      <List className="list">
        {this.state.steps.map((step, i) => (
          <ListItem button key={i}>
            <ListItemText
              primary={step.name}
              onClick={() => this.handleClick(i)}
            />
          </ListItem>
        ))}
      </List>
    );

    return (
      <MuiThemeProvider theme={theme}>
        <div className="body">
          <Hidden mdUp>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Menu"
                  onClick={this.toggleDrawer("left", true)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h4" color="inherit">
                  Trip to New Zealand
                </Typography>
              </Toolbar>
            </AppBar>
          </Hidden>
          <Grid container>
            <Hidden smDown>
              <Grid className="timeline" item xs={3}>
                {this.renderTimeline()}
              </Grid>
            </Hidden>
            <Grid item xs={12} md={9}>
              {this.renderSliderOrMap()}
            </Grid>
          </Grid>
          <Drawer
            open={this.state.left}
            onClose={this.toggleDrawer("left", false)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer("left", false)}
              onKeyDown={this.toggleDrawer("left", false)}
            >
              {sideList}
            </div>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }

  handleClick(i) {
    if (this.state.current === this.state.steps[i] || i === undefined) {
      this.setState({
        current: null
      });
    } else {
      this.setState({
        current: this.state.steps[i]
      });
    }
  }

  findCenter() {
    const longitude = [];
    const latitude = [];

    for (let i = 0; i < this.state.steps.length; i++) {
      longitude.push(this.state.steps[i].longitude);
      latitude.push(this.state.steps[i].latitude);
    }
    const minLatitude = Math.min(...latitude);

    const maxLatitude = Math.max(...latitude);
    const midLatitude = (minLatitude + maxLatitude) / 2;
    const minLongitude = Math.min(...longitude);
    const maxLongitude = Math.max(...longitude);
    const midLongitude = (minLongitude + maxLongitude) / 2;

    return [midLatitude, midLongitude];
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
}

export default App;
