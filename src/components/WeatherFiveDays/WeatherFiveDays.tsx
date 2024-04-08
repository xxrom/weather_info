"use client";

import { fetchWeatherFiveDays } from "@/actions/weatherFiveDays";
import { Line, ResponsiveLine, LineProps } from "@nivo/line";
import { Card } from "../ui/card";
import { Highlight } from "../ui/Highlight";
import { formatUrl } from "@/utils/url-text";
import { useState, useEffect } from "react";

export type WeatherFiveDays = {
  city: string;
};

export const WeatherFiveDays = ({ city }: WeatherFiveDays) => {
  const [data, setData] = useState([
    {
      id: "test",
      color: "",
      data: [
        {
          x: "",
          y: 1,
        },
      ],
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const { list } = await fetchWeatherFiveDays(city);

      const newData = [
        {
          id: city,
          color: "hsl(285, 70%, 50%)",
          data: list.map(({ dt, main }) => ({
            x: new Date(dt * 1000).toLocaleString("en-UK"),
            y: main?.temp,
          })),
        },
      ];

      setData(newData);
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-[300px] sm:grid-cols-[600px]">
      <Card className="p-4 mt-2 overflow-scroll">
        <div className="mb-4">
          {`Next five days forecast for: `}
          <Highlight className="capitalize">{formatUrl(city)}</Highlight>
        </div>

        <div className="grid overflow-scroll">
          {data[0].data.length > 2 && (
            <Line
              data={data}
              curve="cardinal"
              height={400}
              width={500}
              animate={true}
              margin={{ top: 15, right: 15, bottom: 70, left: 50 }}
              axisTop={null}
              axisRight={null}
              axisLeft={{
                tickSize: 3,
                tickPadding: 5,
                legend: "Temperature °C`",
                legendOffset: -40,
                legendPosition: "middle",
              }}
              axisBottom={{
                tickSize: 3,
                tickPadding: 5,
                tickRotation: 30,
                legend: "Date",
                legendOffset: 60,
                legendPosition: "middle",
                format: (value) => {
                  const date = new Date(value).toString();
                  return `${date.slice(4, 10)} / ${date.slice(15, 21)}`;
                },
              }}
              xScale={{
                type: "time",
                format: "%d/%m/%Y, %H:%M:%S",
                useUTC: false,
                min: "auto",
                max: "auto",
              }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
              }}
              pointSize={6}
              crosshairType="cross"
              areaBlendMode="darken"
              lineWidth={1}
              pointBorderWidth={1}
              enableTouchCrosshair={true}
              enableArea={true}
              colors={["#855ae9"]}
              useMesh={true}
              fill={[]}
              defs={[]}
              role=""
              enableCrosshair={true}
              enableSlices="x"
              legends={[
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
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
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
              ]}
            />
          )}
        </div>
      </Card>
    </div>
  );
};
