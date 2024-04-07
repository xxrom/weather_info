"use client";

import { revalidateWeather } from "@/actions/weather";
import { useEffect } from "react";
import { Button } from "./ui/button";

const REVALIDATE_INTERVAL = 10 * 60 * 1000; // 10 min auto updates

export const UpdateWeatherButton = () => {
  useEffect(() => {
    const interval = setInterval(() => revalidateWeather, REVALIDATE_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const onClickUpdate = () => {
    revalidateWeather();
  };

  return <Button onClick={onClickUpdate}>Manual update</Button>;
};
