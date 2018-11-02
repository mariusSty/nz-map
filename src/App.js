import React, { Component } from "react";

import Timeline from "./Timeline";
import SideList from "./SideList";
import Slider from "./Slider";
import Map from "./Map";
import TopBar from "./TopBar";

import data from "./data.json";
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
    this.state = {
      title: data.title,
      steps: data.steps,
      current: null,
      left: false,
      center: this.findCenter()
    };
    this.state.center = this.findCenter();
    for (let i = 0; i < this.state.steps.length; i++) {
      for (let j = 0; j < this.state.steps[i].img.length; j++) {
        this.getImgSize(i, j, this.state.steps[i].img[j]);
      }
    }
  }

  renderTimeline() {
    return (
      <Timeline
        value={this.state.steps}
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
    return <Slider current={this.state.current} onClick={this.handleClick} />;
  }

  render() {
    console.log("render");
    const loading = this.checkImageLoaded();

    return (
      <LoadingScreen
        loading={loading}
        bgColor={theme.palette.primary.main}
        spinnerColor={theme.palette.primary.contrastText}
        textColor={theme.palette.primary.contrastText}
        logoSrc="./loader.gif"
        text="Patience ! Ça charge, mon p'tit pote :) :) :)"
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

  getImgSize(step, img, imgSrc) {
    let newImg = new Image();
    newImg.onload = () => {
      let height = newImg.height;
      let width = newImg.width;

      let dimensions = this.state.steps.slice();
      dimensions[step].imgWidth[img] = width;
      dimensions[step].imgHeight[img] = height;
      this.setState({ steps: dimensions });

      this.getThumbnailSize(step, img, height, width);
    };
    newImg.src = imgSrc;
  }

  getThumbnailSize(step, img, height, width) {
    let thumbnailHeight = 180;
    let thumbnailWidth = (thumbnailHeight * width) / height;

    let dimensionsThumbnail = this.state.steps.slice();
    dimensionsThumbnail[step].thumbnailWidth[img] = thumbnailWidth;
    dimensionsThumbnail[step].thumbnailHeight[img] = thumbnailHeight;
    this.setState({ steps: dimensionsThumbnail });
  }

  checkImageLoaded() {
    let countImage = 0;
    let countLoad = 0;
    for (let i = 0; i < this.state.steps.length; i++) {
      countImage += this.state.steps[i].img.length;
      countLoad += this.state.steps[i].imgWidth.length;
    }

    if (countImage === countLoad) {
      return false;
    }
    return true;
  }

  toggleDrawer = open => () => {
    this.setState({
      left: open
    });
  };
}

export default App;
