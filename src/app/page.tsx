import {
  SkeletonWeather,
  WeatherOneDay,
  WeatherFiveDays,
  CityInput,
  ThemeToggler,
  ManualUpdate,
} from "@/components";
import { Suspense } from "react";

export type DefaultWeatherPage = {
  city: string;
};

const DefaultWeatherPage = async ({ city = "dubai" }: DefaultWeatherPage) => (
  <div className="flex min-h-screen flex-col items-center pt-14 p-6">
    <Suspense fallback={<SkeletonWeather />}>
      <WeatherOneDay city={city} />
      <WeatherFiveDays city={city} />

      <CityInput placeholder={city} />
      <ManualUpdate />

      <ThemeToggler />
    </Suspense>
  </div>
);

export default DefaultWeatherPage;
