import { CityInput } from "@/components/CityInput";
import { ManualUpdate } from "@/components/ManualUpdate";
import { SkeletonWeather } from "@/components/SkeletonWeather";
import { WeatherFiveDays } from "@/components/WeatherFiveDays/WeatherFiveDays";
import { WeatherOneDay } from "@/components/WeatherOneDay/WeatherOneDay";
import { ThemeToggler } from "@/components/themeToggle";
import { Suspense } from "react";

export type WeatherOneDayPage = {
  city: string;
};

const WeatherOneDayPage = async ({ city = "dubai" }: WeatherOneDayPage) => {
  return (
    <div className="flex min-h-screen flex-col items-center pt-8 p-4">
      <Suspense fallback={<SkeletonWeather />}>
        <WeatherOneDay city={city} />
        {1 && <WeatherFiveDays city={city} />}

        <CityInput placeholder={city} />
        <ManualUpdate />
      </Suspense>

      <ThemeToggler />
    </div>
  );
};

export default WeatherOneDayPage;
