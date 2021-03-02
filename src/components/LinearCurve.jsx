import React, { useState } from "react";
import { extent, max } from "d3-array";
import * as allCurves from "@visx/curve";
import { Group } from "@visx/group";
import { LinePath } from "@visx/shape";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { scaleTime, scaleLinear } from "@visx/scale";
import { MarkerArrow, MarkerCircle, MarkerLine } from "@visx/marker";
import { colors } from "../constants/colors";
import { GridRows, GridColumns } from "@visx/grid";
import { timeFormat } from "d3-time-format";

const allData = [
    {
        date: new Date(2014, 4, 1),
        value: 37,
    },
    {
        date: new Date(2014, 5, 2),
        value: 741,
    },
    {
        date: new Date(2014, 6, 3),
        value: 1200,
    },
    {
        date: new Date(2014, 7, 4),
        value: 1625,
    },
    {
        date: new Date(2014, 8, 4),
        value: 1574,
    },
    {
        date: new Date(2014, 9, 6),
        value: 1934,
    },
];
//console.log(_allData);

const defaultMargin = { top: 20, right: 10, bottom: 40, left: 70 };
// data accessors
const getX = (d) => d.date;
const getY = (d) => d.value;

const format = timeFormat("%b");
const formatDate = (date) => format(date);

// scales

const xScale = scaleTime({
    domain: extent(allData, getX),
});
const yScale = scaleLinear({
    domain: [0, max(allData, getY)],
});

const LinearCurve = ({ width, height, margin = defaultMargin }) => {
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    const [curveType] = useState("curveNatural");

    // update scale output ranges
    xScale.range([0, xMax]);
    yScale.range([yMax, 0]);

    let markerStart = "url(#marker-line)";

    const markerEnd = "url(#marker-arrow)";

    return (
        <div className="visx-curves-demo">
            <svg width={width} height={height}>
                <MarkerCircle
                    id="marker-circle"
                    fill="#333"
                    size={2}
                    refX={2}
                />
                <MarkerArrow
                    id="marker-arrow-odd"
                    stroke="#333"
                    size={8}
                    strokeWidth={1}
                />
                <MarkerLine
                    id="marker-line"
                    fill="#333"
                    size={16}
                    strokeWidth={1}
                />
                <MarkerArrow id="marker-arrow" fill="#333" refX={2} size={6} />

                <Group
                    top={margin.top}
                    left={margin.left}
                    bottom={margin.bottom}
                    right={margin.right}
                >
                    <GridRows
                        scale={yScale}
                        width={xMax}
                        height={yMax}
                        stroke="#e0e0e0"
                    />
                    <GridColumns
                        scale={xScale}
                        width={xMax}
                        height={yMax}
                        stroke="#e0e0e0"
                    />
                    <LinePath
                        curve={allCurves[curveType]}
                        data={allData}
                        x={(d) => xScale(getX(d)) ?? 0}
                        y={(d) => yScale(getY(d)) ?? 0}
                        stroke="#333"
                        strokeWidth={1}
                        strokeOpacity={1}
                        shapeRendering="geometricPrecision"
                        markerMid="url(#marker-circle)"
                        markerStart={markerStart}
                        markerEnd={markerEnd}
                    />
                    <AxisLeft
                        scale={yScale}
                        label="Value"
                        labelClassName="aml-font aml-font-grey"
                        hideTicks
                        stroke={colors.grey2}
                        tickLabelProps={() => ({
                            fill: colors.chartGrey,
                            fontSize: 10,
                            fontWeight: "bold",
                            textAnchor: "end",
                        })}
                    />
                </Group>

                <AxisBottom
                    label="Month"
                    labelClassName="aml-font"
                    top={yMax + margin.top}
                    left={70}
                    tickFormat={formatDate}
                    scale={xScale}
                    stroke={colors.grey2}
                    tickStroke={colors.grey2}
                    hideAxisLine
                    tickLabelProps={() => ({
                        fill: colors.chartGrey,
                        fontSize: 12,
                        fontWeight: "bold",
                        textAnchor: "middle",
                    })}
                />
            </svg>
            <style jsx="true">{`
                .visx-curves-demo label {
                    font-size: 12px;
                }
            `}</style>
        </div>
    );
};

export default LinearCurve;
