"use client";

import { revalidateWeather } from "@/actions/weather";
import { revalidateWeatherFiveDays } from "@/actions/weatherFiveDays";
import { useEffect } from "react";
import { Button } from "./ui/button";

const REVALIDATE_INTERVAL = 10 * 60 * 1000; // 10 min auto updates

export const UpdateWeatherButton = () => {
  const revalidateAll = () => {
    revalidateWeather();
    revalidateWeatherFiveDays();
  };

  useEffect(() => {
    const interval = setInterval(revalidateAll, REVALIDATE_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Button onClick={revalidateAll}>Manual update</Button>;
};
