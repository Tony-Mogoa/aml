import React, { useState } from "react";
import Pie from "@visx/shape/lib/shapes/Pie";
import { scaleOrdinal } from "@visx/scale";
import { Group } from "@visx/group";
import { animated, useTransition, interpolate } from "react-spring";
import { colors } from "../constants/colors";

// data and types

const data = {
  Legitimate: 124,
  Fradulent: 74,
  Unassigned: 35,
};

const browserNames = Object.keys(data).filter((k) => k);
const browsers = [
  {
    label: "Legitimate",
    usage: 124,
  },
  { label: "Fradulent", usage: 74 },
  { label: "Unassigned", usage: 35 },
];

console.log(browsers);
// accessor functions
const usage = (d) => d.usage; // browser usage;

// color scales
const getBrowserColor = scaleOrdinal({
  domain: browserNames,
  range: [colors.legitimate, colors.fradulent, colors.unassigned],
});

const defaultMargin = { top: 5, right: 20, bottom: 0, left: 20 };

const DonutPlot = ({
  width,
  height,
  margin = defaultMargin,
  animate = true,
}) => {
  const [selectedBrowser, setSelectedBrowser] = useState(null);

  if (width < 10) return null;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;
  const donutThickness = 20;

  return (
    <div className="d-flex flex-column justify-content-center">
      <svg width={width} height={height}>
        <Group top={centerY + margin.top} left={centerX + margin.left}>
          <Pie
            data={
              selectedBrowser
                ? browsers.filter(({ label }) => label === selectedBrowser)
                : browsers
            }
            pieValue={usage}
            outerRadius={radius}
            innerRadius={radius - donutThickness}
            cornerRadius={3}
            padAngle={0.005}
          >
            {(pie) => (
              <AnimatedPie
                {...pie}
                animate={animate}
                getKey={(arc) => arc.data.label}
                onClickDatum={({ data: { label } }) =>
                  animate &&
                  setSelectedBrowser(
                    selectedBrowser && selectedBrowser === label ? null : label
                  )
                }
                getColor={(arc) => getBrowserColor(arc.data.label)}
              />
            )}
          </Pie>
        </Group>
      </svg>
      <div>
        <div className="d-flex flex-row aml-font">
          <div className="d-flex flex-column justify-content-end">
            <span
              className="mr-2 sm-rounded-box"
              style={{ backgroundColor: colors.legitimate }}
            >
              {data.Legitimate}
            </span>
            <span
              className="mr-2 sm-rounded-box"
              style={{ backgroundColor: colors.fradulent }}
            >
              {data.Fradulent}
            </span>
            <span
              className="mr-2 sm-rounded-box"
              style={{ backgroundColor: colors.unassigned }}
            >
              {data.Unassigned}
            </span>
          </div>
          <div className="d-flex flex-column justify-content-start">
            <span className="m-1">Verified as legitimate</span>
            <span className="m-1">Confirmed as fradulent</span>
            <span className="m-1">Unassigned</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// react-spring transition definitions

const fromLeaveTransition = ({ endAngle }) => ({
  // enter from 360° if end angle is > 180°
  startAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  endAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  opacity: 0,
});
const enterUpdateTransition = ({ startAngle, endAngle }) => ({
  startAngle,
  endAngle,
  opacity: 1,
});

function AnimatedPie({ animate, arcs, path, getKey, getColor, onClickDatum }) {
  const transitions = useTransition(
    arcs,
    getKey,
    // @ts-ignore react-spring doesn't like this overload
    {
      from: animate ? fromLeaveTransition : enterUpdateTransition,
      enter: enterUpdateTransition,
      update: enterUpdateTransition,
      leave: animate ? fromLeaveTransition : enterUpdateTransition,
    }
  );
  return (
    <>
      {transitions.map(({ item: arc, props, key }) => {
        const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;

        return (
          <g key={key}>
            <animated.path
              // compute interpolated path d attribute from intermediate angle values
              d={interpolate(
                [props.startAngle, props.endAngle],
                (startAngle, endAngle) =>
                  path({
                    ...arc,
                    startAngle,
                    endAngle,
                  })
              )}
              fill={getColor(arc)}
              onClick={() => onClickDatum(arc)}
              onTouchStart={() => onClickDatum(arc)}
            />
            {hasSpaceForLabel && (
              <animated.g style={{ opacity: props.opacity }}></animated.g>
            )}
          </g>
        );
      })}
    </>
  );
}

export default DonutPlot;
