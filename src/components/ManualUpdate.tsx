import { memo } from "react";
import { UpdateWeatherButton } from "./UpdateWeatherButton";

export const ManualUpdate = memo(async () => {
  return (
    <div className="grid grid-cols-2 gap-2 items-center grid-span-2">
      <span>Auto updates every 10 m</span>

      <UpdateWeatherButton />
    </div>
  );
});
