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
  typography: {
    useNextVariants: true
  },
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
          name: "Auckland",
          dates: ["06/10/2018", "09/10/2018"],
          img: [
            "./img/Auckland/IMG_0543.JPG",
            "./img/Auckland/IMG_0544.JPG",
            "./img/Auckland/IMG_0545.JPG",
            "./img/Auckland/IMG_0547.JPG",
            "./img/Auckland/IMG_0548.JPG",
            "./img/Auckland/IMG_0549.JPG",
            "./img/Auckland/IMG_0550.JPG",
            "./img/Auckland/IMG_0552.JPG",
            "./img/Auckland/IMG_0553.JPG",
            "./img/Auckland/IMG_0554.JPG",
            "./img/Auckland/IMG_0555.JPG"
          ],
          imgHeight: [],
          imgWidth: [],
          thumbnailHeight: [],
          thumbnailWidth: [],
          caption: [],
          longitude: -36.848461,
          latitude: 174.763336
        },
        {
          order: 2,
          name: "Whangarei",
          dates: ["09/10/2018", "17/01/2018"],
          img: [
            "./img/Whangarei/IMG_0561.JPG",
            "./img/Whangarei/IMG_0562.JPG",
            "./img/Whangarei/IMG_0563.JPG",
            "./img/Whangarei/IMG_0567.JPG",
            "./img/Whangarei/IMG_0579.JPG",
            "./img/Whangarei/IMG_0581.JPG",
            "./img/Whangarei/IMG_0582.JPG",
            "./img/Whangarei/IMG_0584.JPG",
            "./img/Whangarei/IMG_0585.JPG",
            "./img/Whangarei/IMG_0589.JPG",
            "./img/Whangarei/IMG_0595.JPG",
            "./img/Whangarei/IMG_0596.jpg"
          ],
          imgHeight: [],
          imgWidth: [],
          thumbnailHeight: [],
          thumbnailWidth: [],
          caption: [],
          longitude: -35.725113,
          latitude: 174.323715
        },
        {
          order: 3,
          name: "Paihia",
          dates: ["15/01/2018", "17/01/2018"],
          img: [
            "./img/Paihia/IMG_0618.JPG",
            "./img/Paihia/IMG_0619.JPG",
            "./img/Paihia/IMG_0624.JPG",
            "./img/Paihia/IMG_0625.JPG",
            "./img/Paihia/IMG_0652.JPG",
            "./img/Paihia/IMG_0654.JPG"
          ],
          imgHeight: [],
          imgWidth: [],
          thumbnailHeight: [],
          thumbnailWidth: [],
          caption: [],
          longitude: -35.2821,
          latitude: 174.091
        },
        {
          order: 4,
          name: "Kaeo",
          dates: ["15/01/2018", "17/01/2018"],
          img: [
            "./img/Kaeo/IMG_0666.JPG",
            "./img/Kaeo/IMG_0667.JPG",
            "./img/Kaeo/IMG_0668.JPG",
            "./img/Kaeo/IMG_0671.JPG",
            "./img/Kaeo/IMG_0672.JPG",
            "./img/Kaeo/IMG_0673.JPG",
            "./img/Kaeo/IMG_0674.JPG",
            "./img/Kaeo/IMG_0679.JPG",
            "./img/Kaeo/IMG_0680.JPG",
            "./img/Kaeo/IMG_0681.JPG",
            "./img/Kaeo/IMG_0682.JPG",
            "./img/Kaeo/IMG_0683.JPG",
            "./img/Kaeo/IMG_0695.JPG",
            "./img/Kaeo/IMG_0700.JPG",
            "./img/Kaeo/IMG_0701.JPG",
            "./img/Kaeo/IMG_0706.JPG",
            "./img/Kaeo/IMG_0718.JPG",
            "./img/Kaeo/IMG_0720.JPG"
          ],
          imgHeight: [],
          imgWidth: [],
          thumbnailHeight: [],
          thumbnailWidth: [],
          caption: [],
          longitude: -35.1005,
          latitude: 173.781
        },
        {
          order: 5,
          name: "Ahipara",
          dates: ["18/01/2018"],
          img: [
            "./img/Ahipara/IMG_0721.JPG",
            "./img/Ahipara/IMG_0723.JPG",
            "./img/Ahipara/IMG_0724.JPG",
            "./img/Ahipara/IMG_0725.JPG",
            "./img/Ahipara/IMG_0726.JPG",
            "./img/Ahipara/IMG_0729.JPG",
            "./img/Ahipara/IMG_0735.JPG"
          ],
          imgHeight: [],
          imgWidth: [],
          thumbnailHeight: [],
          thumbnailWidth: [],
          caption: [],
          longitude: -35.1713,
          latitude: 173.153
        },
        {
          order: 6,
          name: "Cape Reinga",
          dates: ["15/01/2018", "17/01/2018"],
          img: [
            "./img/Cape Reinga/IMG_0739.JPG",
            "./img/Cape Reinga/IMG_0740.JPG",
            "./img/Cape Reinga/IMG_0742.JPG",
            "./img/Cape Reinga/IMG_0744.JPG",
            "./img/Cape Reinga/IMG_0745.JPG",
            "./img/Cape Reinga/IMG_0749.JPG",
            "./img/Cape Reinga/IMG_0751.JPG"
          ],
          imgHeight: [],
          imgWidth: [],
          thumbnailHeight: [],
          thumbnailWidth: [],
          caption: [],
          longitude: -34.44176,
          latitude: 172.70085
        }
      ],
      current: null,
      left: false
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

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
}

export default App;
