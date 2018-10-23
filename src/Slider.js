import React from "react";
import Gallery from "react-grid-gallery";

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
        <span>{props.current.name}</span>
        <ul>{listDate}</ul>
        <button onClick={() => props.onClick()}>Retour map</button>
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
