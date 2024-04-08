import { fetchWeatherCurrent } from "@/actions/weatherCurrent";
import { memo } from "react";
import { Temperature } from "./Temperature";
import { Icon } from "./Icon";
import { Name } from "./Name";

export type WeatherOneDay = {
  city?: string;
};

export const WeatherOneDay = memo(async ({ city = "dubai" }: WeatherOneDay) => {
  const weather = await fetchWeatherCurrent(city);

  const { name, dt, main } = weather;
  const weatherOne = weather?.weather?.[0] || null;

  if (!weatherOne) {
    throw Error("Please update city name");
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[600px] w-full sm:w-fit">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 auto-cols-max">
        <div className="grid grid-cols-1 gap-2">
          <Name name={name} dt={dt} />

          <Icon {...weatherOne} />
        </div>

        <div className="grid grid-cols-1 gap-2">
          <Temperature {...main} />
        </div>
      </div>
    </div>
  );
});
