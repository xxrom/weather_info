"use server";

import { sleep } from "@/utils/sleep";
import { revalidateTag } from "next/cache";

export type WeatherObjectInfoType = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherObjectType = {
  id: number;
  name: string;
  timezone: number;

  coord: {
    lon: number;
    lat: number;
  };

  weather: Array<WeatherObjectInfoType>;

  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };

  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };

  clouds: {
    all: number; // % of clouds
  };

  dt: number; // time of data

  rain?: {
    "1h": number; // mm for last hour
    "3h": number; // mm for last 3 hours
  };
  snow?: {
    "1h": number; // mm for last hour
    "3h": number; // mm for last 3 hours
  };
};

const weatherTag = "weather-city";
//`${process.env.NEXT_PUBLIC_SERVER_URL}/api/articles/?limit=${limit}&page=${page}`,
export const fetchWeather = async (
  city = "dubai"
): Promise<WeatherObjectType> =>
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API}&units=metric`,
    {
      cache: "no-store",
      next: {
        tags: [weatherTag],
      },
    }
  ).then(async (res) => {
    const data = await res.json();
    //await sleep(2000);

    return data;
  });

export const revalidateWeather = async () => {
  "use server";

  revalidateTag(weatherTag);
};
