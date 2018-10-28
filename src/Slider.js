import React from "react";
import Gallery from "react-grid-gallery";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import MapIcon from "@material-ui/icons/Map";

function Slider(props) {
  let IMAGES = [];
  for (let i = 0; i < props.current.img.length; i++) {
    let image = {
      src: props.current.img[i],
      thumbnail: props.current.img[i],
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: props.current.caption[i]
    };
    IMAGES.push(image);
  }
  let listDate;
  if (props.current.dates.length > 1) {
    listDate = (
      <span>
        Du <b>{props.current.dates[0]}</b> au <b>{props.current.dates[1]}</b>
      </span>
    );
  } else {
    listDate = (
      <span>
        <b>{props.current.dates[0]}</b>
      </span>
    );
  }

  return (
    <div className="slider">
      <div className="topSlider">
        <h2>{props.current.name}</h2>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <p className="date">
              <CalendarIcon />
              {listDate}
            </p>
          </Grid>
          <Hidden mdUp>
            <Grid item>
              <Button
                variant="fab"
                color="primary"
                onClick={() => props.onClick()}
              >
                <MapIcon />
              </Button>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => props.onClick()}
              >
                <MapIcon />
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </div>
      <Gallery
        images={IMAGES}
        enableImageSelection={false}
        backdropClosesModal={true}
        imageCountSeparator="/"
      />
    </div>
  );
}
export default Slider;
