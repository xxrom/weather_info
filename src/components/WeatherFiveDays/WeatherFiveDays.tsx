"use client";

import { fetchWeatherFiveDays } from "@/actions/weatherFiveDays";
import { Line } from "@nivo/line";
import { Card } from "../ui/card";
import { Highlight } from "../ui/Highlight";
import { formatUrl } from "@/utils/url-text";

export type WeatherFiveDays = {
  city: string;
};

export const WeatherFiveDays = async ({ city }: WeatherFiveDays) => {
  const { list } = await fetchWeatherFiveDays(city);

  const data = [
    {
      id: city,
      color: "hsl(285, 70%, 50%)",
      data: list.map(({ dt, main }) => ({
        x: new Date(dt * 1000).toLocaleString("en-UK"),
        y: main?.temp,
      })),
    },
  ];

  return (
    <div className="grid grid-cols-[300px] sm:grid-cols-[600px]">
      <Card className="p-4 mt-2 overflow-scroll">
        <div className="mb-4">
          {`Next five days forecast for: `}
          <Highlight className="capitalize">{formatUrl(city)}</Highlight>
        </div>

        <div className="grid overflow-scroll">
          <Line
            data={data}
            width={550}
            height={400}
            curve="cardinal"
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
            lineWidth={1}
            pointBorderWidth={1}
            enableTouchCrosshair={true}
            enableArea={true}
            colors={["#774dd7"]}
          />
        </div>
      </Card>
    </div>
  );
};
