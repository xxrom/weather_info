"use client";

import { revalidateWeatherCurrent } from "@/actions/weatherCurrent";
import { revalidateWeatherFiveDays } from "@/actions/weatherFiveDays";
import { memo, useEffect } from "react";
import { Button } from "../ui/button";

const REVALIDATE_INTERVAL = 1 * 60 * 1000; // 1 min auto updates

export const RefetchWeather = memo(() => {
  const revalidateAll = () => {
    revalidateWeatherCurrent();
    revalidateWeatherFiveDays();
  };

  useEffect(() => {
    const interval = setInterval(revalidateAll, REVALIDATE_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Button onClick={revalidateAll}>Manual update</Button>;
});
