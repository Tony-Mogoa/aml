import React from "react";
import { Group } from "@visx/group";
import { BarGroup } from "@visx/shape";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { GridRows, GridColumns } from "@visx/grid";
import { colors } from "../constants/colors";
import { LegendOrdinal } from "@visx/legend";

const data = [
  { legitimate: 40, fradulent: 23, unassigned: 10, time: "8.00" },
  { legitimate: 30, fradulent: 2, unassigned: 10, time: "9.00" },
  { legitimate: 0, fradulent: 23, unassigned: 10, time: "10.00" },
  { legitimate: 40, fradulent: 23, unassigned: 10, time: "11.00" },
  { legitimate: 40, fradulent: 23, unassigned: 45, time: "12.00" },
  { legitimate: 20, fradulent: 8, unassigned: 10, time: "13.00" },
  { legitimate: 89, fradulent: 23, unassigned: 15, time: "14.00" },
  { legitimate: 40, fradulent: 23, unassigned: 10, time: "15.00" },
  { legitimate: 19, fradulent: 23, unassigned: 10, time: "16.00" },
];

const keys = Object.keys(data[0]).filter((d) => d !== "time");
const defaultMargin = { top: 40, right: 70, bottom: 40, left: 70 };

const formatTime = (date) => date;

// accessors
const getTime = (d) => d.time;
// const legitimate = (d) => Number(d.fradulent);
// const fradulent = (d) => Number(d.fradulent);
// const unassigned = (d) => Number(d.unassigned);

// scales
const dateScale = scaleBand({
  domain: data.map(getTime),
  padding: 0.2,
});
const cityScale = scaleBand({
  domain: keys,
  padding: 0.1,
});
const transactionNumScale = scaleLinear({
  domain: [
    Math.min(
      ...data.map((d) => Math.min(...keys.map((key) => Number(d[key]))))
    ),
    Math.max(
      ...data.map((d) => Math.max(...keys.map((key) => Number(d[key]))))
    ),
  ],
  nice: true,
});

const colorScale = scaleOrdinal({
  domain: keys,
  range: [colors.legitimate, colors.fradulent, colors.unassigned],
});

const BarChart = ({
  width,
  height,
  events = false,
  margin = defaultMargin,
}) => {
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // update scale output dimensions
  dateScale.rangeRound([0, xMax]);
  cityScale.rangeRound([0, dateScale.bandwidth()]);
  transactionNumScale.range([yMax, 0]);

  return width < 10 ? null : (
    <div className="d-flex flex-column align-items-start">
      <div className="aml-font ml-2">
        <LegendOrdinal
          scale={colorScale}
          direction="row"
          labelMargin="0 15px 0 0"
        />
      </div>
      <svg width={width} height={height}>
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill={colors.white}
          rx={14}
        />
        <Group top={margin.top} left={margin.left}>
          <GridRows
            scale={transactionNumScale}
            width={xMax}
            height={yMax}
            stroke="#e0e0e0"
          />
          <GridColumns
            scale={dateScale}
            width={xMax}
            height={yMax}
            stroke="#e0e0e0"
          />
          <BarGroup
            data={data}
            keys={keys}
            height={yMax}
            x0={getTime}
            x0Scale={dateScale}
            x1Scale={cityScale}
            yScale={transactionNumScale}
            color={colorScale}
          >
            {(barGroups) =>
              barGroups.map((barGroup) => (
                <Group
                  key={`bar-group-${barGroup.index}-${barGroup.x0}`}
                  left={barGroup.x0}
                >
                  {barGroup.bars.map((bar) => (
                    <rect
                      key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                      x={bar.x}
                      y={bar.y}
                      width={bar.width}
                      height={bar.height}
                      fill={bar.color}
                      rx={4}
                      onClick={() => {
                        if (!events) return;
                        const { key, value } = bar;
                        alert(JSON.stringify({ key, value }));
                      }}
                    />
                  ))}
                </Group>
              ))
            }
          </BarGroup>

          <AxisLeft
            scale={transactionNumScale}
            label="Transactions"
            labelClassName="aml-font"
            hideTicks
            hideAxisLine
            tickLabelProps={() => ({
              fill: colors.chartGrey,
              fontSize: 12,
              fontWeight: "bold",
              textAnchor: "middle",
            })}
          />
        </Group>
        <AxisBottom
          label="Time of Day"
          labelClassName="aml-font"
          top={yMax + margin.top}
          left={70}
          tickFormat={formatTime}
          scale={dateScale}
          stroke={colors.chartGrey}
          tickStroke={colors.chartGrey}
          hideAxisLine
          tickLabelProps={() => ({
            fill: colors.chartGrey,
            fontSize: 12,
            fontWeight: "bold",
            textAnchor: "middle",
          })}
        />
      </svg>
    </div>
  );
};

export default BarChart;
