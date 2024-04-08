"use server";

import { revalidateTag } from "next/cache";
import { WeatherObjectType } from "./weather";

export type WeatherFiveDaysType = {
  list: Array<WeatherObjectType>;
};

const weatherTag = "weather-city-5days";
//`${process.env.NEXT_PUBLIC_SERVER_URL}/api/articles/?limit=${limit}&page=${page}`,
export const fetchWeatherFiveDays = async (
  city = "dubai"
): Promise<WeatherFiveDaysType> =>
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.WEATHER_API}&units=metric`,
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

export const revalidateWeatherFiveDays = async () => {
  "use server";

  revalidateTag(weatherTag);
};
