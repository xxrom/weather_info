import { CityInput } from "@/components/CityInput";
import { ManualUpdate } from "@/components/ManualUpdate";
import { SkeletonWeather } from "@/components/SkeletonWeather";
import { WeatherFiveDays } from "@/components/WeatherFiveDays/WeatherFiveDays";
import { WeatherOneDay } from "@/components/WeatherOneDay/WeatherOneDay";
import { ThemeToggler } from "@/components/themeToggle";
import { Suspense } from "react";

export type DefaultWeatherPage = {
  city: string;
};

const DefaultWeatherPage = async ({ city = "dubai" }: DefaultWeatherPage) => {
  return (
    <div className="flex min-h-screen flex-col items-center pt-14 p-6">
      <Suspense fallback={<SkeletonWeather />}>
        <WeatherOneDay city={city} />
        <WeatherFiveDays city={city} />

        <CityInput placeholder={city} />
        <ManualUpdate />
      </Suspense>

      <ThemeToggler />
    </div>
  );
};

export default DefaultWeatherPage;
