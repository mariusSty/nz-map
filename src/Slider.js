import React from "react";
import Gallery from "react-grid-gallery";
import Button from "@material-ui/core/Button";
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
  const listDate = props.current.dates.map((date, i) => (
    <li key={i} className="dateSlider">
      {date}
    </li>
  ));
  return (
    <div>
      <div className="topSlider">
        <h2>{props.current.name}</h2>
        <ul>{listDate}</ul>
        <Button variant="fab" color="primary" onClick={() => props.onClick()}>
          <MapIcon />
        </Button>
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
