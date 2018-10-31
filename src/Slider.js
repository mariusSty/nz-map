import React from "react";
import Gallery from "react-grid-gallery";
import Grid from "@material-ui/core/Grid";
import { Hidden, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import ClearIcon from "@material-ui/icons/Clear";

function Slider(props) {
  let IMAGES = [];
  for (let i = 0; i < props.current.img.length; i++) {
    let image = {
      src: props.current.img[i],
      thumbnail: props.current.img[i],
      thumbnailHeight: props.current.thumbnailHeight[i],
      thumbnailWidth: props.current.thumbnailWidth[i],
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
      <div className="top-slider">
        <Typography variant="h5" color="primary">
          {props.current.order}) {props.current.name}
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item className="date">
            <Typography variant="body1" color="primary">
              <CalendarIcon />
              {listDate}
            </Typography>
          </Grid>
          <Hidden smDown>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => props.onClick()}
              >
                <ClearIcon />
              </Button>
            </Grid>
          </Hidden>
        </Grid>
        <Hidden mdUp>
          <Button
            className="button-fixed"
            variant="fab"
            color="primary"
            onClick={() => props.onClick()}
          >
            <ClearIcon />
          </Button>
        </Hidden>
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
