import React from "react";
import Gallery from "react-grid-gallery";

function Slider(props) {
  let IMAGES = [];
  for (let i = 0; i < props.current.img.length; i++) {
    let image = {
      src: props.current.img[i],
      thumbnail: props.current.img[i],
      thumbnailWidth: 320,
      thumbnailHeight: 212
    };
    IMAGES.push(image);
  }

  return (
    <Gallery
      images={IMAGES}
      enableImageSelection={false}
      backdropClosesModal={true}
      imageCountSeparator="/"
    />
  );
}
export default Slider;
