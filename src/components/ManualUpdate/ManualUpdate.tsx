import { memo } from "react";
import { RefetchWeather } from "./RefetchWeather";

export const ManualUpdate = memo(async () => {
  return (
    <div className="grid grid-cols-2 gap-2 items-center grid-span-2">
      <span className="mr-0 border-b text-center">Auto updates every min</span>

      <RefetchWeather />
    </div>
  );
});
