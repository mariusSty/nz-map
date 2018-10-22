import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps";
import worldData from "./world.json";

const include = ["NZL"];

function Map(props) {
  return (
    <div>
      <ComposableMap
        projectionConfig={{
          scale: 1000,
          rotation: [0, 0, 0],
          precision: 0.1
        }}
      >
        <ZoomableGroup center={props.center} disablePanning>
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
          <Markers>
            {props.steps.map((steps, i) => (
              <Marker
                key={i}
                marker={{ coordinates: [steps.latitude, steps.longitude] }}
                onClick={() => props.onClick(i)}
                style={{
                  default: { fill: "#FF5722" },
                  hover: { fill: "#FFFFFF" },
                  pressed: { fill: "#FF5722" }
                }}
              >
                <circle
                  cx={0}
                  cy={0}
                  r={10}
                  style={{
                    stroke: "#FF5722",
                    strokeWidth: 3,
                    opacity: 0.9
                  }}
                />
                <text
                  textAnchor="middle"
                  y={-15}
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fill: "#000"
                  }}
                >
                  {steps.name}
                </text>
              </Marker>
            ))}
          </Markers>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}

export default Map;
