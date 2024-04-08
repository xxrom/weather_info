import { memo } from "react";
import { RefetchWeather } from "./RefetchWeather";

export const ManualUpdate = memo(async () => {
  return (
    <div className="grid grid-cols-2 gap-2 items-center grid-span-2">
      <span>Auto updates every 10 m</span>

      <RefetchWeather />
    </div>
  );
});
