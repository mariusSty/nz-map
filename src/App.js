import React, { Component } from "react";

import Timeline from "./Timeline";
import SideList from "./SideList";
import Slider from "./Slider";
import Map from "./Map";
import TopBar from "./TopBar";

import datas from "./datas.json";
import "./App.scss";
import theme from "./theme.js";

import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { MuiThemeProvider } from "@material-ui/core/styles";

import LoadingScreen from "react-loading-screen";

class App extends Component {
  constructor(props) {
    super(props);
    this.tokens = [];
    this.state = {
      title: datas.title,
      description: datas.description,
      steps: datas.steps,
      current: null,
      left: false
    };
    this.state.center = this.findCenter();
    this.loading = false;
  }

  renderTimeline() {
    return (
      <Timeline
        title={this.state.title}
        description={this.state.description}
        steps={this.state.steps}
        current={this.state.current}
        onClick={this.handleClick}
      />
    );
  }

  renderContainer() {
    if (this.state.current === null) {
      return (
        <Map
          steps={this.state.steps}
          center={this.state.center}
          onClick={this.handleClick}
        />
      );
    }
    return (
      <Slider
        key={this.state.current.order}
        current={this.state.current}
        onClick={this.handleClick}
      />
    );
  }

  render() {
    return (
      <LoadingScreen
        loading={this.loading}
        bgColor={theme.palette.primary.main}
        spinnerColor={theme.palette.primary.contrastText}
        textColor={theme.palette.primary.contrastText}
        logoSrc={datas.loadingPage.img}
        text={datas.loadingPage.text}
      >
        <MuiThemeProvider theme={theme}>
          <div className="body">
            <Hidden mdUp>
              <TopBar
                title={this.state.title}
                onClick={this.toggleDrawer(true)}
              />
            </Hidden>
            <Hidden smDown>
              <Grid
                className="timeline"
                style={{ backgroundColor: theme.palette.primary.main }}
                item
                xs={3}
              >
                {this.renderTimeline()}
              </Grid>
            </Hidden>
            <Grid container justify="flex-end">
              <Grid item xs={12} md={9}>
                {this.renderContainer()}
              </Grid>
            </Grid>
            <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer(false)}
                onKeyDown={this.toggleDrawer(false)}
              >
                <SideList steps={this.state.steps} onClick={this.handleClick} />
              </div>
            </Drawer>
          </div>
        </MuiThemeProvider>
      </LoadingScreen>
    );
  }

  handleClick = i => {
    if (this.state.current === this.state.steps[i] || i === undefined) {
      this.setState({
        current: null
      });
    } else {
      this.setState({
        current: this.state.steps[i]
      });
    }
  };

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

  toggleDrawer = open => () => {
    this.setState({
      left: open
    });
  };
}

export default App;
