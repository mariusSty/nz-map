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
import theme from "./theme.js";
import { MuiThemeProvider } from "@material-ui/core/styles";
import MapIcon from "@material-ui/icons/Map";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          order: 1,
          name: "Auckland",
          dates: ["06/10/2018", "08/10/2018"],
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
          caption: [
            "Silverfern Backpackers (1/2)",
            "Silverfern Backpackers (2/2)",
            "Mount Eden (1/5)",
            "Mount Eden (2/5)",
            "Mount Eden (3/5)",
            "Mount Eden (4/5)",
            "Mount Eden (5/5)",
            "Bruce Lee Sushi (1/2)",
            "Bruce Lee Sushi (2/2)",
            "Auckland War Memorial Museum (1/2)",
            "Auckland War Memorial Museum (2/2)"
          ],
          longitude: -36.848461,
          latitude: 174.763336
        },
        {
          order: 2,
          name: "Whangarei",
          dates: ["09/10/2018", "13/10/2018"],
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
          caption: [
            "The Cell Block Backpackers (1/3)",
            "The Cell Block Backpackers (2/3)",
            "The Cell Block Backpackers (3/3)",
            "Abbey Caves",
            "Skatepark Whangarei (1/2)",
            "Skatepark Whangarei (2/2)",
            "Mair Park (1/6)",
            "Mair Park (2/6)",
            "Mair Park (3/6)",
            "Mair Park (4/6)",
            "Mair Park (5/6)",
            "Mair Park (6/6)"
          ],
          longitude: -35.725113,
          latitude: 174.323715
        },
        {
          order: 3,
          name: "Paihia",
          dates: ["14/10/2018", "18/10/2018"],
          img: [
            "./img/Paihia/IMG_0611.JPG",
            "./img/Paihia/IMG_0618.JPG",
            "./img/Paihia/IMG_0619.JPG",
            "./img/Paihia/IMG_0624.JPG",
            "./img/Paihia/IMG_0625.JPG",
            "./img/Paihia/IMG_0626.JPG",
            "./img/Paihia/IMG_0652.JPG",
            "./img/Paihia/IMG_0654.JPG"
          ],
          imgHeight: [],
          imgWidth: [],
          thumbnailHeight: [],
          thumbnailWidth: [],
          caption: [
            "Hundertwasser Toilets",
            "Bay Adventurer Backpackers",
            "Paihia Beach (1/3)",
            "Paihia Beach (2/3)",
            "Paihia Beach (3/3)",
            "St Pauls Anglican Church",
            "Paihia City (1/2)",
            "Paihia City (2/2)"
          ],
          longitude: -35.2821,
          latitude: 174.091
        },
        {
          order: 4,
          name: "Kaeo",
          dates: ["19/10/2018", "23/10/2018"],
          img: [
            "./img/Kaeo/IMG_0666.JPG",
            "./img/Kaeo/IMG_0667.JPG",
            "./img/Kaeo/IMG_0668.JPG",
            "./img/Kaeo/IMG_0672.JPG",
            "./img/Kaeo/IMG_0675.JPG",
            "./img/Kaeo/IMG_0676.JPG",
            "./img/Kaeo/IMG_0677.JPG",
            "./img/Kaeo/IMG_0678.JPG",
            "./img/Kaeo/IMG_0681.JPG",
            "./img/Kaeo/IMG_0682.JPG",
            "./img/Kaeo/IMG_0683.JPG",
            "./img/Kaeo/IMG_0684.JPG",
            "./img/Kaeo/IMG_0685.JPG",
            "./img/Kaeo/IMG_0687.JPG",
            "./img/Kaeo/IMG_0689.JPG",
            "./img/Kaeo/IMG_0690.JPG",
            "./img/Kaeo/IMG_0692.JPG",
            "./img/Kaeo/IMG_0695.JPG",
            "./img/Kaeo/IMG_0720.JPG"
          ],
          imgHeight: [],
          imgWidth: [],
          thumbnailHeight: [],
          thumbnailWidth: [],
          caption: [
            "Farm - HelpX (1/13)",
            "Farm - HelpX (2/13)",
            "Farm - HelpX (3/13)",
            "Farm - HelpX (4/13)",
            "Farm - HelpX (5/13)",
            "Farm - HelpX (6/13)",
            "Farm - HelpX (7/13)",
            "Farm - HelpX (8/13)",
            "Farm - HelpX (9/13)",
            "Farm - HelpX (10/13)",
            "Farm - HelpX (11/13)",
            "Farm - HelpX (12/13)",
            "Farm - HelpX (13/13)",
            "Whangaroa Harbour (1/5)",
            "Whangaroa Harbour (2/5)",
            "Whangaroa Harbour (3/5)",
            "Whangaroa Harbour (4/5)",
            "Whangaroa Harbour (5/5)",
            "Hitchhiking"
          ],
          longitude: -35.1005,
          latitude: 173.781
        },
        {
          order: 5,
          name: "Ahipara",
          dates: ["24/10/2018", "26/10/2018"],
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
          caption: [
            "Ahipara Beach (1/6)",
            "Ahipara Beach (2/6)",
            "Ahipara Beach (3/6)",
            "Ahipara Beach (4/6)",
            "Ahipara Beach (5/6)",
            "Ahipara Beach (6/6)",
            "Wairoa Stream"
          ],
          longitude: -35.1713,
          latitude: 173.153
        },
        {
          order: 6,
          name: "Cape Reinga",
          dates: ["26/10/2018"],
          img: [
            "./img/Cape Reinga/IMG_0736.JPG",
            "./img/Cape Reinga/IMG_0737.JPG",
            "./img/Cape Reinga/IMG_0738.JPG",
            "./img/Cape Reinga/IMG_0739.JPG",
            "./img/Cape Reinga/IMG_0742.JPG",
            "./img/Cape Reinga/IMG_0749.JPG",
            "./img/Cape Reinga/IMG_0751.JPG"
          ],
          imgHeight: [],
          imgWidth: [],
          thumbnailHeight: [],
          thumbnailWidth: [],
          caption: [
            "Lighthouse (1/3)",
            "Lighthouse (2/3)",
            "Lighthouse (3/3)",
            "Cape Reinga (1/4)",
            "Cape Reinga (2/4)",
            "Cape Reinga (3/4)",
            "Cape Reinga (4/4)"
          ],
          longitude: -34.44176,
          latitude: 172.70085
        },
        {
          order: 7,
          name: "Omapere",
          dates: ["30/10/2018", "01/11/2018"],
          img: [
            "./img/Omapere/IMG_0760.JPG",
            "./img/Omapere/IMG_0763.JPG",
            "./img/Omapere/IMG_0775.JPG",
            "./img/Omapere/IMG_0783.JPG",
            "./img/Omapere/IMG_0785.JPG",
            "./img/Omapere/IMG_0786.JPG",
            "./img/Omapere/IMG_0787.JPG",
            "./img/Omapere/IMG_0791.JPG",
            "./img/Omapere/IMG_0793.JPG",
            "./img/Omapere/IMG_0796.JPG",
            "./img/Omapere/IMG_0797.JPG",
            "./img/Omapere/IMG_0798.JPG",
            "./img/Omapere/IMG_0801.JPG",
            "./img/Omapere/IMG_0802.JPG"
          ],
          imgHeight: [],
          imgWidth: [],
          thumbnailHeight: [],
          thumbnailWidth: [],
          caption: [
            "Hokianga Harbour (1/13)",
            "Hokianga Harbour (2/13)",
            "Globetrekkers Lodge",
            "Hokianga Harbour (3/13)",
            "Hokianga Harbour (4/13)",
            "Hokianga Harbour (5/13)",
            "Hokianga Harbour (6/13)",
            "Hokianga Harbour (7/13)",
            "Hokianga Harbour (8/13)",
            "Hokianga Harbour (9/13)",
            "Hokianga Harbour (10/13)",
            "Hokianga Harbour (11/13)",
            "Hokianga Harbour (12/13)",
            "Hokianga Harbour (13/13)"
          ],
          longitude: -35.5351,
          latitude: 173.388
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
      <List>
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
            <AppBar position="sticky">
              <Toolbar>
                <IconButton
                  aria-label="Menu"
                  onClick={this.toggleDrawer("left", true)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  <MapIcon className="title" />
                  Trip to New Zealand
                </Typography>
              </Toolbar>
            </AppBar>
          </Hidden>
          <Hidden smDown>
            <Grid
              className="timeline"
              style={{ backgroundColor: theme.palette.primary.main }}
              xs={3}
            >
              {this.renderTimeline()}
            </Grid>
          </Hidden>
          <Grid container justify="flex-end">
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
