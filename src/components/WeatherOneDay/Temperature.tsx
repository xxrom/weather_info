import { WeatherObjectType } from "@/actions/weatherCurrent";
import { Highlight } from "../ui/Highlight";
import { Card } from "../ui/card";
import { memo } from "react";

export const Temperature = memo(
  async ({
    temp,
    temp_min,
    temp_max,
    pressure,
    humidity,
  }: WeatherObjectType["main"]) => (
    <Card className="p-4">
      <div>
        {`Temperature: `}
        <Highlight fontWeight="font-normal">{temp}</Highlight>
        {` °C`}
      </div>
      <div>
        {`Temperature min: `}
        <Highlight fontWeight="font-normal">{temp_min}</Highlight>
        {` °C`}
      </div>
      <div>
        {`Temperature max: `}
        <Highlight fontWeight="font-normal">{temp_max}</Highlight>
        {` °C`}
      </div>
      <div>
        {`Pressure: `}
        <Highlight fontWeight="font-normal">{pressure}</Highlight>
        {` hPa`}
      </div>
      <div>
        {`Humidity: `}
        <Highlight fontWeight="font-normal">{humidity}</Highlight>
        {` %`}
      </div>
    </Card>
  )
);
