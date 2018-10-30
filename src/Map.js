import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps";
import worldData from "./world-map.json";

function Map(props) {
  return (
    <div className="map">
      <ComposableMap
        width={400}
        height={400}
        style={{
          width: "99%",
          height: "99%",
          overflow: "hidden"
        }}
        projectionConfig={{
          scale: 7500
        }}
      >
        <ZoomableGroup center={props.center} disablePanning>
          <Geographies geography={worldData}>
            {(geographies, projection) =>
              geographies.map((geography, i) => (
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}
                  tabable={false}
                  style={{
                    default: {
                      fill: "#FFFFFF",
                      stroke: "#999999",
                      strokeWidth: 0.75,
                      outline: "none"
                    },
                    hover: {
                      fill: "#FFFFFF",
                      stroke: "#999999",
                      strokeWidth: 0.75,
                      outline: "none"
                    },
                    pressed: {
                      fill: "#FFFFFF",
                      stroke: "#999999",
                      strokeWidth: 0.75,
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
          <Markers>
            {props.steps.map((steps, i) => (
              <Marker
                key={i}
                marker={{ coordinates: [steps.latitude, steps.longitude] }}
                onClick={() => props.onClick(i)}
                style={{
                  default: { fill: "#ffffff" },
                  hover: { fill: "#000000" },
                  pressed: { fill: "#000000" }
                }}
              >
                <circle
                  cx={0}
                  cy={0}
                  r={5}
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    opacity: 0.9,
                    cursor: "pointer"
                  }}
                />
                <text
                  textAnchor="middle"
                  y={-15}
                  style={{
                    fontSize: "12px",
                    fill: "#000000",
                    cursor: "pointer",
                    textShadow: "0 1px 2px rgba(0,0,0,0.40)"
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
