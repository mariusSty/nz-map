import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import worldData from "./world.json";

const include = ["NZL"];

class Map extends Component {
  render() {
    return (
      <div>
        <ComposableMap
          projectionConfig={{
            scale: 2000,
            xOffset: -2200,
            yOffset: -650,
            rotation: [0, 0, 0],
            precision: 0.1
          }}
        >
          <ZoomableGroup disablePanning>
            <Geographies geography={worldData}>
              {(geographies, projection) =>
                geographies.map(
                  (geography, i) =>
                    include.indexOf(geography.id) !== -1 && (
                      <Geography
                        key={i}
                        geography={geography}
                        projection={projection}
                        tabable={false}
                        style={{
                          default: {
                            fill: "#ECEFF1",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none"
                          },
                          hover: {
                            fill: "#ECEFF1",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none"
                          },
                          pressed: {
                            fill: "#ECEFF1",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none"
                          }
                        }}
                      />
                    )
                )
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default Map;
