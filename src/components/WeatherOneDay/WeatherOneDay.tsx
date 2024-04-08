import { fetchWeather } from "@/actions/weather";
import { memo, useContext } from "react";
import { UpdateWeatherButton } from "../UpdateWeatherButton";
import { TempInfo } from "./TempInfo";
import { IconWeather } from "./IconWeather";
import { CityTime } from "./CityTime";

export type WeatherOneDay = {
  city?: string;
};

export const WeatherOneDay = memo(async ({ city = "dubai" }: WeatherOneDay) => {
  const weather = await fetchWeather(city);

  const { name, dt, main } = weather;
  const weatherOne = weather?.weather?.[0] || null;

  if (!weatherOne) {
    throw Error("Please update city name");
  }

  return (
    <div className="grid grid-col justify-center">
      <div className="grid max-w-[600px] grid-cols-1 gap-2 sm:grid-cols-2 justify-items-center justify-center">
        <div className="grid gap-2 w-full">
          <CityTime name={name} dt={dt} />

          <IconWeather {...weatherOne} />
        </div>

        <div className="grid w-full">
          <TempInfo {...main} />
        </div>
      </div>
    </div>
  );
});
