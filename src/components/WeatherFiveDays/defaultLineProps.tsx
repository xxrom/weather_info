import { Dimensions, linearGradientDef, patternDotsDef } from "@nivo/core";
import { LineSvgProps, PointTooltipProps } from "@nivo/line";

export const getDefaultLineProps = ({
  data,
}: Pick<LineSvgProps, "data">): LineSvgProps & Dimensions => {
  return {
    data,
    curve: "cardinal",
    height: 400,
    width: 550,
    animate: true,
    isInteractive: true,
    margin: { top: 15, right: 15, bottom: 70, left: 50 },
    axisTop: null,
    axisRight: null,
    axisBottom: {
      tickSize: 3,
      tickPadding: 5,
      tickRotation: 30,
      legend: "Date",
      legendOffset: 60,
      legendPosition: "middle",
      format: (value) => {
        const date = new Date(value).toString();
        return `${date.slice(4, 10)} ${date.slice(15, 21)}`;
      },
    },
    axisLeft: {
      tickSize: 3,
      tickPadding: 5,
      legend: "Temperature °C",
      legendOffset: -40,
      legendPosition: "middle",
    },
    xScale: {
      type: "time",
      format: "%d/%m/%Y, %H:%M:%S",
      useUTC: false,
      min: "auto",
      max: "auto",
    },
    yScale: {
      type: "linear",
      min: "auto",
      max: "auto",
    },
    pointSize: 6,
    crosshairType: "cross",
    areaBlendMode: "normal", // 'normal' to see on dark theme
    lineWidth: 1,
    pointBorderWidth: 1,
    pointColor: { from: "color", modifiers: [] },
    pointBorderColor: { from: "serieColor", modifiers: [] },
    areaBaselineValue: 0,
    pointLabel: "y",
    enablePointLabel: false,
    enableTouchCrosshair: true,
    enableArea: true,
    areaOpacity: 0.2,
    colors: ["#855ae9"],
    useMesh: true,
    debugMesh: false,
    debugSlices: false,
    sliceTooltip: ({ slice }) => (
      <div>
        {slice.points.map(({ id, data }) => (
          <span
            key={id}
            className="p-2 bg-purple-100 dark:bg-purple-500 border border-purple-800 rounded-md"
          >
            {`${data.yFormatted} °C`}
          </span>
        ))}
      </div>
    ),
    fill: [{ match: "*", id: "dots" }],
    defs: [
      patternDotsDef("dots", {
        size: 2,
        padding: 6,
        stagger: false,
        background: "#d695f9",
        color: "inherit",
      }),
      linearGradientDef("gradientA", [
        { offset: 0, color: "inherit" },
        { offset: 100, color: "inherit", opacity: 0 },
      ]),
    ],
    layers: [
      "grid",
      "markers",
      "axes",
      "areas",
      "crosshair",
      "lines",
      "points",
      "slices",
      "mesh",
      "legends",
    ],
    enableGridX: true,
    enableGridY: true,
    role: "",
    enableCrosshair: true,
    enablePoints: true,
    enableSlices: "x",
    tooltip: ({ point }: PointTooltipProps) => <strong>{point.id}</strong>,
    legends: [
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .9)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ],
  };
};
