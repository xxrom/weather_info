"use client";

import { fetchWeatherFiveDays } from "@/actions/weatherFiveDays";
import { Line } from "@nivo/line";
import { Card } from "../ui/card";
import { Highlight } from "../ui/Highlight";
import { formatUrl } from "@/utils/url-text";
import { useState, useEffect, memo } from "react";
import { getDefaultLineProps } from "./defaultLineProps";
import { Skeleton } from "../ui/skeleton";

export type WeatherFiveDays = {
  city: string;
};

export const WeatherFiveDays = memo(({ city }: WeatherFiveDays) => {
  const [data, setData] = useState([
    {
      id: "test",
      color: "",
      data: [
        {
          x: "-",
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
    <div className="grid grid-cols-1 sm:grid-cols-[600px] w-full sm:w-fit">
      <Card className="p-4 mt-2 overflow-scroll">
        <div className="mb-4">
          {`Next five days forecast for: `}
          <Highlight className="capitalize">{formatUrl(city)}</Highlight>
        </div>

        <div className="grid overflow-scroll">
          {data[0].data.length > 2 ? (
            <Line {...getDefaultLineProps({ data })} />
          ) : (
            <Skeleton className="h-[400px] w-full sm:max-w-[600px] rounded-md border-2 border-slate-300" />
          )}
        </div>
      </Card>
    </div>
  );
});
