import { memo } from "react";
import { UpdateWeatherButton } from "./UpdateWeatherButton";

export const ManualUpdate = memo(async () => {
  return (
    <div className="grid grid-cols-2 gap-2 items-center grid-span-2">
      <span>Auto update every 10 min</span>

      <UpdateWeatherButton />
    </div>
  );
});
