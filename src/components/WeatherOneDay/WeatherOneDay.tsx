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
    <div className="grid grid-cols-1 sm:grid-cols-[600px] w-full sm:w-fit">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 auto-cols-max">
        <div className="grid grid-cols-1 gap-2">
          <CityTime name={name} dt={dt} />

          <IconWeather {...weatherOne} />
        </div>

        <div className="grid grid-cols-1 gap-2">
          <TempInfo {...main} />
        </div>
      </div>
    </div>
  );
});
