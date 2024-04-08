import Image from "next/image";
import { WeatherObjectInfoType } from "@/actions/weather";
import { Card } from "../ui/card";
import { Highlight } from "../ui/Highlight";

export const IconWeather = ({
  icon,
  main,
  description,
}: WeatherObjectInfoType) => {
  return (
    <Card className="grid grid-span-1 grid-flow-row gap-2 grid-cols-[128px_1fr] p-4 overflow-scroll">
      {icon && (
        <div className="grid bg-slate-200 dark:bg-slate-600 rounded-md">
          <Image
            alt="weather"
            height={128}
            width={128}
            priority={true}
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          />
        </div>
      )}

      <div className="grid items-center ml-2">
        <div>{`Conditions:`}</div>
        <Highlight>{`${main}`}</Highlight>
        <div>{`(${description})`}</div>
      </div>
    </Card>
  );
};
